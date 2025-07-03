import { UserService } from "../core/services/user.service";
import { UserPortIn } from "../core/ports/in/user.port";
import { FirestoreUserRepositoryImpl } from "@/repositories/firestore.user.repository.impl";
import { AuthService } from "@/core/services/auth.service";
import { AuthPortIn } from "@/core/ports/in/auth.port";
import { BetterAuthRepositoryImpl } from "@/repositories/betterauth.auth.repository.impl";

export type ServiceMap = {
  AuthService: AuthPortIn;
  UserService: UserPortIn;
};

class DIContainer {
  private services: Map<keyof ServiceMap, ServiceMap[keyof ServiceMap]> = new Map();

  constructor() {
    this.initializeServices();
  }

  private initializeServices() {
    // Repositories
    const authRepository = new BetterAuthRepositoryImpl();
    const userRepository = new FirestoreUserRepositoryImpl();

    // Services
    const authService = new AuthService(authRepository);
    const userService = new UserService(userRepository);

    // Register services
    this.services.set("AuthService", authService);
    this.services.set("UserService", userService);
  }

  public get<K extends keyof ServiceMap>(serviceName: K): ServiceMap[K] {
    const service = this.services.get(serviceName);
    if (!service) {
      throw new Error(`Service ${serviceName} not found`);
    }
    return service as ServiceMap[K];
  }
}

export const diContainer = new DIContainer();

// Export des instances pour la compatibilité
export const userServiceInstance: UserPortIn = diContainer.get("UserService");
export const authServiceInstance: AuthPortIn = diContainer.get("AuthService");
