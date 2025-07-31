import { UserService } from "../core/services/user.service";
import { UserPortIn } from "../core/ports/in/user.port";
import { FirestoreUserRepositoryImpl } from "@/repositories/firestore.user.repository.impl";
import { AuthPortIn } from "@/core/ports/in/auth.port";
import { PaymentPortIn } from "@/core/ports/in/payment.port";
import { StripePaymentRepositoryImpl } from "@/repositories/stripe.payment.repository";
import { PaymentService } from "@/core/services/payment.service";

export type ServiceMap = {
  AuthService: AuthPortIn;
  UserService: UserPortIn;
  PaymentService: PaymentPortIn;
};

class DIContainer {
  private services: Map<keyof ServiceMap, ServiceMap[keyof ServiceMap]> = new Map();

  constructor() {
    this.initializeServices();
  }

  private initializeServices() {
    // Repositories
    const userRepository = new FirestoreUserRepositoryImpl();
    const paymentRepository = new StripePaymentRepositoryImpl();

    // Services
    const userService = new UserService(userRepository);
    const paymentService = new PaymentService(paymentRepository);

    this.services.set("UserService", userService);
    this.services.set("PaymentService", paymentService);
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

// Export des instances pour la compatibilité
export const userServiceInstance: UserPortIn = diContainerServer.get("UserService");
export const paymentServiceInstance: PaymentPortIn = diContainerServer.get("PaymentService");
