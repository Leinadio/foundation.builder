import { User } from "@/core/models/user";
import { UserRepository } from "@/core/ports/out/user.repository";
import { db } from "@/lib/firebase-client";
import { doc, getDoc, setDoc, collection, getDocs, updateDoc, deleteDoc, onSnapshot } from "firebase/firestore";

export class FirestoreUserRepositoryImpl implements UserRepository {
  async getUser(id: string): Promise<User | null> {
    const ref = doc(db, "users", id);
    const snapshot = await getDoc(ref);
    const user = snapshot.data() as User;
    user.id = snapshot.id;
    return user;
  }

  async getAllUsers(): Promise<User[]> {
    const usersCol = collection(db, "users");
    const userSnapshot = await getDocs(usersCol);
    return userSnapshot.docs.map((doc) => {
      const user = doc.data() as User;
      user.id = doc.id;
      return user;
    });
  }

  async createUser(user: User): Promise<void> {
    const ref = doc(db, "users", user.id);
    await setDoc(ref, user);
  }

  async updateUser(user: User): Promise<void> {
    const ref = doc(db, "users", user.id);
    await updateDoc(ref, { ...user });
  }

  async deleteUser(id: string): Promise<void> {
    const ref = doc(db, "users", id);
    await deleteDoc(ref);
  }

  subscribeToUser(id: string, onData: (user: User | null) => void, onError: (error: Error) => void): () => void {
    console.log("subscribeToUser impl", id);
    const ref = doc(db, "users", id);
    const unsubscribe = onSnapshot(
      ref,
      (snapshot) => {
        console.log("snapshot", snapshot.data());
        onData(snapshot.exists() ? (snapshot.data() as User) : null);
      },
      (error) => {
        console.log("error", error);
        onError(error);
      }
    );
    return unsubscribe;
  }
}
