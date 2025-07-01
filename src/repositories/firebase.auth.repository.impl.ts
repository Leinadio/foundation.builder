import { AuthRepository } from "@/core/ports/out/auth.repository";
import { User } from "@/core/models/user";
import { auth, googleProvider } from "@/lib/firebase-client";
import { User as FirebaseUser } from "firebase/auth";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
  onAuthStateChanged as firebaseOnAuthStateChanged,
} from "firebase/auth";

export class FirebaseAuthRepositoryImpl implements AuthRepository {
  public async loginWithEmail(email: string, password: string): Promise<User | null> {
    const result = await signInWithEmailAndPassword(auth, email, password);

    if (!result.user) {
      return null;
    }

    return this.firebaseUserToUser(result.user);
  }

  public async registerWithEmail(email: string, password: string): Promise<User | null> {
    const result = await createUserWithEmailAndPassword(auth, email, password);
    return this.firebaseUserToUser(result.user);
  }

  public async loginWithGoogle(): Promise<User | null> {
    const result = await signInWithPopup(auth, googleProvider);
    return this.firebaseUserToUser(result.user);
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
