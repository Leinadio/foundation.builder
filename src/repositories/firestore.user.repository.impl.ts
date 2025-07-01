import { User } from "@/core/models/user";
import { UserRepository } from "@/core/ports/out/user.repository";
import { db } from "@/lib/firebase-client";
import {
  doc,
  getDoc,
  setDoc,
  collection,
  getDocs,
  updateDoc,
  deleteDoc,
  onSnapshot,
  DocumentSnapshot,
} from "firebase/firestore";

export class FirestoreUserRepositoryImpl implements UserRepository {
  public async getUser(id: string): Promise<User | null> {
    const ref = doc(db, "users", id);
    const snapshot = await getDoc(ref);

    if (!snapshot.exists()) {
      return null;
    }

    const user = snapshot.data() as User;
    user.id = snapshot.id;
    return user;
  }

  public async getAllUsers(): Promise<User[]> {
    const usersCol = collection(db, "users");
    const userSnapshot = await getDocs(usersCol);

    return userSnapshot.docs.map((doc) => {
      const user = doc.data() as User;
      user.id = doc.id;
      return user;
    });
  }

  public async createUser(user: User): Promise<void> {
    const ref = doc(db, "users", user.id);
    await setDoc(ref, user);
  }

  public async updateUser(user: User): Promise<void> {
    const ref = doc(db, "users", user.id);
    await updateDoc(ref, { ...user });
  }

  public async deleteUser(id: string): Promise<void> {
    const ref = doc(db, "users", id);
    await deleteDoc(ref);
  }

  public subscribeToUser(id: string, onData: (user: User | null) => void, onError: (error: Error) => void): () => void {
    const ref = doc(db, "users", id);

    const handleSnapshot = (snapshot: DocumentSnapshot) => {
      if (!snapshot.exists()) {
        onData(null);
        return;
      }

      const user = snapshot.data() as User;
      user.id = snapshot.id;
      onData(user);
    };

    const handleError = (error: Error) => {
      onError(error);
    };

    const unsubscribe = onSnapshot(ref, handleSnapshot, handleError);
    return unsubscribe;
  }
}
