import {
  PaymentIntent,
  PaymentRequest,
  PaymentSession,
  CreateSessionRequest,
  Subscription,
  CreateSubscriptionRequest,
  CreateSubscriptionSessionRequest,
} from "@/core/models/payment";

export interface PaymentRepository {
  createPaymentIntent(request: PaymentRequest): Promise<PaymentIntent>;
  confirmPayment(paymentIntentId: string): Promise<PaymentIntent>;
  createCheckoutSession(request: CreateSessionRequest): Promise<PaymentSession>;
  retrievePaymentIntent(paymentIntentId: string): Promise<PaymentIntent | null>;
  retrieveSession(sessionId: string): Promise<PaymentSession | null>;
  createSubscription(request: CreateSubscriptionRequest): Promise<Subscription>;
  createSubscriptionSession(request: CreateSubscriptionSessionRequest): Promise<PaymentSession>;
  retrieveSubscription(subscriptionId: string): Promise<Subscription | null>;
  cancelSubscription(subscriptionId: string): Promise<Subscription>;
}
