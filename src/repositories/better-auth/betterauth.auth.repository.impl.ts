import { AuthRepository } from "@/core/ports/out/auth.repository";
import { User } from "@/core/models/user";
import { authClient } from "@/repositories-client/better-auth/config";

export class BetterAuthRepositoryImpl implements AuthRepository {
  registerWithEmail(
    email: string,
    password: string,
    name: string
  ): Promise<{ user: User | null; requiresVerification: boolean }> {
    throw new Error("Method not implemented.");
  }
  loginWithGoogle(): Promise<null> {
    throw new Error("Method not implemented.");
  }
  loginWithGithub(): Promise<null> {
    throw new Error("Method not implemented.");
  }
  forgotPassword(email: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
  resetPassword(token: string, password: string): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
  verifyEmail(token: string): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
  resendVerificationEmail(email: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
  getCurrentUser(): Promise<User | null> {
    throw new Error("Method not implemented.");
  }
  logout(): Promise<void> {
    throw new Error("Method not implemented.");
  }
  onAuthStateChanged(callback: (user: User | null) => void): void {
    throw new Error("Method not implemented.");
  }
  public async loginWithEmail(email: string, password: string): Promise<User | null> {
    try {
      const result = await authClient.signIn.email({
        email,
        password,
      });

      if (!result.data?.user) {
        return null;
      }

      return this.betterAuthUserToUser(result.data.user);
    } catch (error) {
      console.error("Erreur lors de la connexion:", error);
      return null;
    }
  }
}
