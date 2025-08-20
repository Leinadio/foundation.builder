import { AuthRepository } from "@/core/client/ports/out/auth.repository";
import { User } from "@/core/models/user";
import { auth, googleProvider } from "@/core/client/repositories/firebase/config";
import { User as FirebaseUser } from "firebase/auth";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
  onAuthStateChanged as firebaseOnAuthStateChanged,
} from "firebase/auth";

export class FirebaseAuthRepositoryImpl implements AuthRepository {
  public async forgotPassword(email: string): Promise<void> {
    console.log("forgotPassword", email);
  }

  public async resetPassword(token: string, password: string): Promise<boolean> {
    console.log("resetPassword", token, password);
    return true;
  }

  public async verifyEmail(token: string): Promise<boolean> {
    console.log("verifyEmail", token);
    return true;
  }

  public async resendVerificationEmail(email: string): Promise<void> {
    console.log("resendVerificationEmail", email);
  }

  getCurrentUser(): Promise<User | null> {
    throw new Error("Method not implemented.");
  }

  public async loginWithEmail(email: string, password: string): Promise<User | null> {
    const result = await signInWithEmailAndPassword(auth, email, password);

    if (!result.user) {
      return null;
    }

    return this.firebaseUserToUser(result.user);
  }

  public async registerWithEmail(
    email: string,
    password: string,
    name: string
  ): Promise<{ user: User | null; requiresVerification: boolean }> {
    console.log("registerWithEmail", email, password, name);
    const result = await createUserWithEmailAndPassword(auth, email, password);
    return { user: this.firebaseUserToUser(result.user), requiresVerification: false };
  }

  public async loginWithGoogle(): Promise<null> {
    await signInWithPopup(auth, googleProvider);
    return null;
  }

  public async loginWithGithub(): Promise<null> {
    return null;
  }

  public async logout(): Promise<void> {
    await signOut(auth);
  }

  public onAuthStateChanged(callback: (user: User | null) => void): void {
    firebaseOnAuthStateChanged(auth, (firebaseUser) => {
      const user = this.firebaseUserToUser(firebaseUser);
      callback(user);
    });
  }

  private firebaseUserToUser(firebaseUser: FirebaseUser | null): User | null {
    if (!firebaseUser) return null;
    return {
      id: firebaseUser.uid,
      email: firebaseUser.email || "",
      displayName: firebaseUser.displayName || "",
      photoURL: firebaseUser.photoURL || "",
      purchasedReports: 0,
      updatedAt: new Date().toISOString(),
      usedReports: 0,
    };
  }
}
