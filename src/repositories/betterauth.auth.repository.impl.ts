import { AuthRepository } from "@/core/ports/out/auth.repository";
import { User } from "@/core/models/user";
import { authClient } from "@/lib/better-auth-client";

interface BetterAuthUser {
  id: string;
  email: string;
  name: string;
  image?: string | null;
  emailVerified: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export class BetterAuthRepositoryImpl implements AuthRepository {
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

  public async registerWithEmail(
    email: string,
    password: string,
    name: string
  ): Promise<{ user: User | null; requiresVerification: boolean }> {
    try {
      const result = await authClient.signUp.email({
        email,
        password,
        name,
      });

      if (!result.data?.user) {
        return { user: null, requiresVerification: false };
      }

      const user = this.betterAuthUserToUser(result.data.user);
      return { user, requiresVerification: !result.data.user.emailVerified };
    } catch (error) {
      console.error("Erreur lors de l'inscription:", error);
      return { user: null, requiresVerification: false };
    }
  }

  public async loginWithGoogle(): Promise<User | null> {
    try {
      const result = await authClient.signIn.social({
        provider: "google",
      });

      if (!result.data?.user) {
        return null;
      }

      return this.betterAuthUserToUser(result.data.user);
    } catch (error) {
      console.error("Erreur lors de la connexion Google:", error);
      return null;
    }
  }

  public async loginWithGithub(): Promise<User | null> {
    try {
      const result = await authClient.signIn.social({
        provider: "github",
      });

      if (!result.data?.user) {
        return null;
      }

      return this.betterAuthUserToUser(result.data.user);
    } catch (error) {
      console.error("Erreur lors de la connexion GitHub:", error);
      return null;
    }
  }

  public async forgotPassword(email: string): Promise<void> {
    try {
      await authClient.forgetPassword({
        email,
        redirectTo: "/reset-password",
      });
    } catch (error) {
      console.error("Erreur lors de la demande de réinitialisation:", error);
      throw new Error("Erreur lors de l'envoi de l'email de réinitialisation");
    }
  }

  public async resetPassword(_token: string, password: string): Promise<boolean> {
    try {
      const result = await authClient.resetPassword({
        newPassword: password,
      });

      return !!result.data;
    } catch (error) {
      console.error("Erreur lors de la réinitialisation:", error);
      return false;
    }
  }

  public async verifyEmail(token: string): Promise<boolean> {
    try {
      const result = await authClient.verifyEmail({
        query: { token },
      });

      return !!result.data;
    } catch (error) {
      console.error("Erreur lors de la vérification:", error);
      return false;
    }
  }

  public async resendVerificationEmail(email: string): Promise<void> {
    try {
      await authClient.sendVerificationEmail({
        email,
      });
    } catch (error) {
      console.error("Erreur lors du renvoi de l'email:", error);
      throw new Error("Erreur lors du renvoi de l'email de vérification");
    }
  }

  public async getCurrentUser(): Promise<User | null> {
    try {
      const session = await authClient.getSession();

      if (!session.data?.user) {
        return null;
      }

      return this.betterAuthUserToUser(session.data.user);
    } catch (error) {
      console.error("Erreur lors de la récupération de l'utilisateur:", error);
      return null;
    }
  }

  public async logout(): Promise<void> {
    try {
      await authClient.signOut();
    } catch (error) {
      console.error("Erreur lors de la déconnexion:", error);
      throw new Error("Erreur lors de la déconnexion");
    }
  }

  public onAuthStateChanged(callback: (user: User | null) => void): void {
    const checkSession = async () => {
      const user = await this.getCurrentUser();
      callback(user);
    };

    checkSession();

    if (typeof window !== "undefined") {
      window.addEventListener("storage", checkSession);
    }
  }

  private betterAuthUserToUser(betterAuthUser: BetterAuthUser): User {
    return {
      id: betterAuthUser.id,
      email: betterAuthUser.email || "",
      displayName: betterAuthUser.name || "",
      photoURL: betterAuthUser.image || "",
      purchasedReports: 0,
      updatedAt: betterAuthUser.updatedAt ? betterAuthUser.updatedAt.toISOString() : new Date().toISOString(),
      usedReports: 0,
    };
  }
}
