import { EmailService } from "@/core/server/services/email.service";
import { PaymentService } from "@/core/server/services/payment.service";
import { AuthService } from "@/core/server/services/auth.service";
import { StripePaymentRepositoryImpl } from "@/core/server/repositories/stripe/stripe.payment.repository";
import { ResendEmailRepositoryImpl } from "@/core/server/repositories/resend/resend.email.repository";
import { BetterAuthRepositoryImpl } from "@/core/server/repositories/better-auth/betterauth.auth.repository.impl";
import { PaymentPortIn } from "@/core/server/ports/in/payment.port";
import { EmailPortIn } from "@/core/server/ports/in/email.port";
import { AuthPortIn } from "@/core/server/ports/in/auth.port";

export type ServiceMap = {
  AuthService: AuthPortIn;
  PaymentService: PaymentPortIn;
  EmailService: EmailPortIn;
};

class DIContainer {
  private services: Map<keyof ServiceMap, ServiceMap[keyof ServiceMap]> = new Map();

  constructor() {
    this.initializeServices();
  }

  private initializeServices() {
    // Repositories
    const paymentRepository = new StripePaymentRepositoryImpl();
    const emailRepository = new ResendEmailRepositoryImpl();
    const authRepository = new BetterAuthRepositoryImpl();

    // Services
    const paymentService = new PaymentService(paymentRepository);
    const emailService = new EmailService(emailRepository);
    const authService = new AuthService(authRepository);

    this.services.set("PaymentService", paymentService);
    this.services.set("EmailService", emailService);
    this.services.set("AuthService", authService);
  }

  public get<K extends keyof ServiceMap>(serviceName: K): ServiceMap[K] {
    const service = this.services.get(serviceName);
    if (!service) {
      throw new Error(`Service ${serviceName} not found`);
    }
    return service as ServiceMap[K];
  }
}

const diContainerServer = new DIContainer();

export const paymentServiceInstance: PaymentPortIn = diContainerServer.get("PaymentService");
export const emailServiceInstance: EmailPortIn = diContainerServer.get("EmailService");
export const authServiceInstance: AuthPortIn = diContainerServer.get("AuthService");
