import { AuthService } from "@/core/services/auth.service";
import { UserService } from "@/core/services/user.service";

import { BetterAuthRepositoryImpl } from "@/repositories-client/better-auth/betterauth.auth.repository.impl";
import { FirestoreUserRepositoryImpl } from "@/repositories-client/firestore/firestore.user.repository.impl";

import { AuthPortIn } from "@/core/ports/in/auth.port";
import { UserPortIn } from "@/core/ports/in/user.port";

export type ClientServiceMap = {
  AuthService: AuthPortIn;
  UserService: UserPortIn;
};

class ClientDIContainer {
  private services: Map<keyof ClientServiceMap, ClientServiceMap[keyof ClientServiceMap]> = new Map();

  constructor() {
    this.initializeClientServices();
  }

  private initializeClientServices() {
    // Repositories
    const authRepository = new BetterAuthRepositoryImpl();
    const userRepository = new FirestoreUserRepositoryImpl();

    // Services
    const authService = new AuthService(authRepository);
    const userService = new UserService(userRepository);

    this.services.set("AuthService", authService);
    this.services.set("UserService", userService);
  }

  public get<K extends keyof ClientServiceMap>(serviceName: K): ClientServiceMap[K] {
    const service = this.services.get(serviceName);
    if (!service) {
      throw new Error(`Client service ${serviceName} not found`);
    }
    return service as ClientServiceMap[K];
  }
}

const diContainerClient = new ClientDIContainer();

// Export des instances pour les composants client
export const clientAuthServiceInstance: AuthPortIn = diContainerClient.get("AuthService");
