import { User } from "@/core/models/user";
import { AuthPortIn } from "@/core/ports/in/auth.port";
import { AuthRepository } from "@/core/ports/out/auth.repository";

export class AuthService implements AuthPortIn {
  private readonly authRepo: AuthRepository;

  constructor(authRepo: AuthRepository) {
    this.authRepo = authRepo;
  }

  async loginWithEmail(email: string, password: string): Promise<User | null> {
    return this.authRepo.loginWithEmail(email, password);
  }

  async registerWithEmail(email: string, password: string): Promise<User | null> {
    return this.authRepo.registerWithEmail(email, password);
  }

  async loginWithGoogle(): Promise<User | null> {
    return this.authRepo.loginWithGoogle();
  }

  async logout(): Promise<void> {
    return this.authRepo.logout();
  }

  onAuthStateChanged(callback: (user: User | null) => void): void {
    this.authRepo.onAuthStateChanged(callback);
  }
}
