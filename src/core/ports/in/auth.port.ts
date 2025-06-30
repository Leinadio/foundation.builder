import { User } from "@/core/models/user";

export interface AuthPortIn {
  loginWithEmail(email: string, password: string): Promise<User | null>;
  registerWithEmail(email: string, password: string): Promise<User | null>;
  loginWithGoogle(): Promise<User | null>;
  logout(): Promise<void>;
  onAuthStateChanged(callback: (user: User | null) => void): void;
}
