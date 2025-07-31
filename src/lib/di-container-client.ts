import { AuthService } from "@/core/services/auth.service";
import { AuthPortIn } from "@/core/ports/in/auth.port";
import { BetterAuthRepositoryImpl } from "@/repositories/betterauth.auth.repository.impl";

export type ClientServiceMap = {
  AuthService: AuthPortIn;
};

class ClientDIContainer {
  private services: Map<keyof ClientServiceMap, ClientServiceMap[keyof ClientServiceMap]> = new Map();

  constructor() {
    this.initializeClientServices();
  }

  private initializeClientServices() {
    // Repositories
    const authRepository = new BetterAuthRepositoryImpl();

    // Services
    const authService = new AuthService(authRepository);

    this.services.set("AuthService", authService);
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
