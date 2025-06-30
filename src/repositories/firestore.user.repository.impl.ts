import { User } from "@/core/models/user";
import { UserRepository } from "@/core/ports/out/user.repository";
import { db } from "@/lib/firebase-client";
import { doc, getDoc, setDoc, collection, getDocs, updateDoc, deleteDoc } from "firebase/firestore";

export const FirestoreUserRepositoryImpl: UserRepository = {
  async getUser(id: string): Promise<User | null> {
    console.log("findById", id);
    const ref = doc(db, "users", id);
    const snapshot = await getDoc(ref);
    return snapshot.exists() ? (snapshot.data() as User) : null;
  },

  async getAllUsers(): Promise<User[]> {
    const usersCol = collection(db, "users");
    const userSnapshot = await getDocs(usersCol);
    return userSnapshot.docs.map((doc) => doc.data() as User);
  },

  async createUser(user: User): Promise<void> {
    console.log("save", user);
    const ref = doc(db, "users", user.id);
    await setDoc(ref, user);
  },

  async updateUser(user: User): Promise<void> {
    const ref = doc(db, "users", user.id);
    await updateDoc(ref, { ...user });
  },

  async deleteUser(id: string): Promise<void> {
    const ref = doc(db, "users", id);
    await deleteDoc(ref);
  },
};
