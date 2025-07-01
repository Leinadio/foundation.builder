import {
  PaymentIntent,
  PaymentRequest,
  PaymentSession,
  CreateSessionRequest,
  isValidPaymentRequest,
} from "@/core/models/payment";
import { PaymentPortIn } from "@/core/ports/in/payment.port";
import { PaymentRepository } from "@/core/ports/out/payment.repository";

export class PaymentService implements PaymentPortIn {
  private readonly paymentRepo: PaymentRepository;

  constructor(paymentRepo: PaymentRepository) {
    this.paymentRepo = paymentRepo;
  }

  async createPaymentIntent(request: PaymentRequest): Promise<PaymentIntent> {
    if (!isValidPaymentRequest(request)) {
      throw new Error("Requête de paiement invalide");
    }

    return await this.paymentRepo.createPaymentIntent(request);
  }

  async confirmPayment(paymentIntentId: string): Promise<PaymentIntent> {
    if (!paymentIntentId) {
      throw new Error("ID du PaymentIntent requis");
    }

    return await this.paymentRepo.confirmPayment(paymentIntentId);
  }

  async createCheckoutSession(request: CreateSessionRequest): Promise<PaymentSession> {
    if (!request.successUrl || !request.cancelUrl) {
      throw new Error("URLs de succès et d'annulation requises");
    }

    return await this.paymentRepo.createCheckoutSession(request);
  }

  async retrievePaymentIntent(paymentIntentId: string): Promise<PaymentIntent | null> {
    if (!paymentIntentId) {
      throw new Error("ID du PaymentIntent requis");
    }

    return await this.paymentRepo.retrievePaymentIntent(paymentIntentId);
  }

  async retrieveSession(sessionId: string): Promise<PaymentSession | null> {
    if (!sessionId) {
      throw new Error("ID de session requis");
    }

    return await this.paymentRepo.retrieveSession(sessionId);
  }
}
