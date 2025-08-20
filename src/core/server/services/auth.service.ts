import { AuthPortIn } from "@/core/server/ports/in/auth.port";
import { AuthRepository } from "@/core/server/ports/out/auth.repository";
import { Session } from "@/core/models/session";

export class AuthService implements AuthPortIn {
  private readonly authRepository: AuthRepository;

  constructor(authRepository: AuthRepository) {
    this.authRepository = authRepository;
  }

  public async getSession(): Promise<Session | null> {
    return this.authRepository.getSession();
  }
}
