import { EmailService } from "@/core/services/email.service";
import { PaymentService } from "@/core/services/payment.service";

import { StripePaymentRepositoryImpl } from "@/repositories/stripe/stripe.payment.repository";
import { ResendEmailRepositoryImpl } from "@/repositories/resend/resend.email.repository";

import { PaymentPortIn } from "@/core/ports/in/payment.port";
import { AuthPortIn } from "@/core/ports/in/auth.port";
import { UserPortIn } from "@/core/ports/in/user.port";
import { EmailPortIn } from "@/core/ports/in/email.port";

export type ServiceMap = {
  AuthService: AuthPortIn;
  UserService: UserPortIn;
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

    // Services
    const paymentService = new PaymentService(paymentRepository);
    const emailService = new EmailService(emailRepository);

    this.services.set("PaymentService", paymentService);
    this.services.set("EmailService", emailService);
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

export const userServiceInstance: UserPortIn = diContainerServer.get("UserService");
export const paymentServiceInstance: PaymentPortIn = diContainerServer.get("PaymentService");
export const emailServiceInstance: EmailPortIn = diContainerServer.get("EmailService");
