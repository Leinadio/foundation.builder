import Stripe from "stripe";
import { PaymentRepository } from "@/core/server/ports/out/payment.repository";
import {
  PaymentIntent,
  PaymentRequest,
  PaymentSession,
  CreateSessionRequest,
  Subscription,
  CreateSubscriptionRequest,
  CreateSubscriptionSessionRequest,
} from "@/core/models/payment";

export class StripePaymentRepositoryImpl implements PaymentRepository {
  private readonly stripe: Stripe | null = null;

  public constructor() {
    if (process.env.STRIPE_SECRET_KEY) {
      this.stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
        apiVersion: "2025-07-30.basil",
      });
    }
  }

  private ensureStripeAvailable(): void {
    if (!this.stripe) {
      throw new Error("Stripe n'est pas configuré. Vérifiez que STRIPE_SECRET_KEY est définie.");
    }
  }

  public async createPaymentIntent(request: PaymentRequest): Promise<PaymentIntent> {
    this.ensureStripeAvailable();

    const paymentIntent = await this.stripe!.paymentIntents.create({
      amount: request.amount,
      currency: request.currency,
      description: request.description,
      metadata: request.metadata,
      automatic_payment_methods: { enabled: true },
    });

    return this.mapStripePaymentIntent(paymentIntent);
  }

  public async confirmPayment(paymentIntentId: string): Promise<PaymentIntent> {
    this.ensureStripeAvailable();

    const paymentIntent = await this.stripe!.paymentIntents.confirm(paymentIntentId);
    return this.mapStripePaymentIntent(paymentIntent);
  }

  public async createCheckoutSession(request: CreateSessionRequest): Promise<PaymentSession> {
    this.ensureStripeAvailable();

    const sessionData = this.buildSessionData(request);
    const session = await this.stripe!.checkout.sessions.create(sessionData);
    return this.mapStripeSession(session, request.amount, request.currency);
  }

  public async retrievePaymentIntent(paymentIntentId: string): Promise<PaymentIntent | null> {
    this.ensureStripeAvailable();

    try {
      const paymentIntent = await this.stripe!.paymentIntents.retrieve(paymentIntentId);
      return this.mapStripePaymentIntent(paymentIntent);
    } catch (error) {
      this.logStripeError("récupération du PaymentIntent", error);
      return null;
    }
  }

  public async retrieveSession(sessionId: string): Promise<PaymentSession | null> {
    this.ensureStripeAvailable();

    try {
      const session = await this.stripe!.checkout.sessions.retrieve(sessionId);
      return this.mapStripeSession(session, session.amount_total, session.currency);
    } catch (error) {
      this.logStripeError("récupération de la session", error);
      return null;
    }
  }

  public async createSubscription(request: CreateSubscriptionRequest): Promise<Subscription> {
    this.ensureStripeAvailable();

    if (!request.customerId) {
      throw new Error("customerId est requis pour créer un abonnement");
    }

    const subscription = await this.stripe!.subscriptions.create({
      customer: request.customerId,
      items: [{ price: request.priceId }],
      metadata: request.metadata,
    });

    return this.mapStripeSubscription(subscription);
  }

  public async createSubscriptionSession(request: CreateSubscriptionSessionRequest): Promise<PaymentSession> {
    console.log("request : ", request);
    this.ensureStripeAvailable();

    const session = await this.stripe!.checkout.sessions.create({
      mode: "subscription",
      success_url: request.successUrl,
      cancel_url: request.cancelUrl,
      metadata: request.metadata,
      line_items: [
        {
          price: request.priceId,
          quantity: 1,
        },
      ],
    });
    console.log("session : ", session);

    return this.mapStripeSession(session);
  }

  public async retrieveSubscription(subscriptionId: string): Promise<Subscription | null> {
    this.ensureStripeAvailable();

    try {
      const subscription = await this.stripe!.subscriptions.retrieve(subscriptionId);
      return this.mapStripeSubscription(subscription);
    } catch (error) {
      this.logStripeError("récupération de l'abonnement", error);
      return null;
    }
  }

  public async cancelSubscription(subscriptionId: string): Promise<Subscription> {
    this.ensureStripeAvailable();

    const subscription = await this.stripe!.subscriptions.update(subscriptionId, {
      cancel_at_period_end: true,
    });

    return this.mapStripeSubscription(subscription);
  }

  private buildSessionData(request: CreateSessionRequest): Stripe.Checkout.SessionCreateParams {
    if (request.priceId) {
      return {
        success_url: request.successUrl,
        cancel_url: request.cancelUrl,
        metadata: request.metadata,
        mode: "payment",
        line_items: [
          {
            price: request.priceId,
            quantity: 1,
          },
        ],
      };
    }
    if (request.amount && request.currency) {
      return {
        success_url: request.successUrl,
        cancel_url: request.cancelUrl,
        metadata: request.metadata,
        mode: "payment",
        line_items: [
          {
            price_data: {
              currency: request.currency,
              unit_amount: request.amount,
              product_data: {
                name: "Paiement",
              },
            },
            quantity: 1,
          },
        ],
      };
    }
    throw new Error("Soit priceId soit amount/currency doit être fourni");
  }

  private mapStripePaymentIntent(paymentIntent: Stripe.PaymentIntent): PaymentIntent {
    if (!paymentIntent.client_secret) {
      throw new Error("Le client_secret du PaymentIntent est manquant");
    }
    return {
      id: paymentIntent.id,
      clientSecret: paymentIntent.client_secret,
      amount: paymentIntent.amount,
      currency: paymentIntent.currency,
      status: paymentIntent.status,
      metadata: paymentIntent.metadata ?? undefined,
    };
  }

  private mapStripeSession(
    session: Stripe.Checkout.Session,
    amount?: number | null,
    currency?: string | null
  ): PaymentSession {
    if (!session.url) {
      throw new Error("L'URL de la session Stripe est manquante");
    }
    return {
      id: session.id,
      url: session.url,
      amount: typeof amount === "number" ? amount : 0,
      currency: typeof currency === "string" ? currency : "eur",
      status: session.status ?? "open",
      metadata: (session.metadata as Record<string, string>) ?? undefined,
    };
  }

  private mapStripeSubscription(subscription: Stripe.Subscription): Subscription {
    const stripeSubscription = subscription as Stripe.Subscription & {
      current_period_start: number;
      current_period_end: number;
    };

    return {
      id: subscription.id,
      status: subscription.status,
      currentPeriodStart: stripeSubscription.current_period_start,
      currentPeriodEnd: stripeSubscription.current_period_end,
      cancelAtPeriodEnd: subscription.cancel_at_period_end,
      metadata: subscription.metadata ?? undefined,
    };
  }

  private logStripeError(context: string, error: unknown): void {
    if (error instanceof Error) {
      console.error(`Erreur lors de la ${context}:`, error.message);
      return;
    }
    console.error(`Erreur inconnue lors de la ${context}:`, error);
  }
}
