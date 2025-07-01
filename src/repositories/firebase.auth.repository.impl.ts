import { AuthRepository } from "@/core/ports/out/auth.repository";
import { User } from "@/core/models/user";
import { auth, googleProvider } from "@/lib/firebase-client";
import { firebaseUserToUser } from "@/lib/firebase.utils";
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

    return firebaseUserToUser(result.user);
  }

  public async registerWithEmail(email: string, password: string): Promise<User | null> {
    const result = await createUserWithEmailAndPassword(auth, email, password);
    return firebaseUserToUser(result.user);
  }

  public async loginWithGoogle(): Promise<User | null> {
    const result = await signInWithPopup(auth, googleProvider);
    return firebaseUserToUser(result.user);
  }

  public async logout(): Promise<void> {
    await signOut(auth);
  }

  public onAuthStateChanged(callback: (user: User | null) => void): void {
    firebaseOnAuthStateChanged(auth, (firebaseUser) => {
      const user = firebaseUserToUser(firebaseUser);
      callback(user);
    });
  }
}
