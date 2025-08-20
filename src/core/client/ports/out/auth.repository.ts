import { User } from "@/core/models/user";

export interface AuthRepository {
  loginWithEmail(email: string, password: string): Promise<User | null>;
  registerWithEmail(
    email: string,
    password: string,
    name: string
  ): Promise<{ user: User | null; requiresVerification: boolean }>;
  loginWithGoogle(): Promise<null>;
  loginWithGithub(): Promise<null>;
  forgotPassword(email: string): Promise<void>;
  resetPassword(token: string, password: string): Promise<boolean>;
  verifyEmail(token: string): Promise<boolean>;
  resendVerificationEmail(email: string): Promise<void>;
  getCurrentUser(): Promise<User | null>;
  logout(): Promise<void>;
  onAuthStateChanged(callback: (user: User | null) => void): void;
}
