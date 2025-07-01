import { User } from "@/core/models/user";
import { AuthPortIn } from "@/core/ports/in/auth.port";
import { AuthRepository } from "@/core/ports/out/auth.repository";

export class AuthService implements AuthPortIn {
  private readonly authRepo: AuthRepository;

  public constructor(authRepo: AuthRepository) {
    this.authRepo = authRepo;
  }

  public async loginWithEmail(email: string, password: string): Promise<User | null> {
    return this.authRepo.loginWithEmail(email, password);
  }

  public async registerWithEmail(email: string, password: string): Promise<User | null> {
    return this.authRepo.registerWithEmail(email, password);
  }

  public async loginWithGoogle(): Promise<User | null> {
    return this.authRepo.loginWithGoogle();
  }

  public async logout(): Promise<void> {
    return this.authRepo.logout();
  }

  public onAuthStateChanged(callback: (user: User | null) => void): void {
    this.authRepo.onAuthStateChanged(callback);
  }
}
