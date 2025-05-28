import { User } from "@/core/domain/user";
import { UserRepository } from "@/core/ports/out/user.repository";
import { db } from "@/lib/firebase-client";
import { doc, getDoc, setDoc } from "firebase/firestore";

export const UserRepositoryImpl: UserRepository = {
  async save(user: User): Promise<void> {
    const ref = doc(db, "users", user.id);
    await setDoc(ref, user);
  },

  async findById(id: string): Promise<User | null> {
    const ref = doc(db, "users", id);
    const snapshot = await getDoc(ref);
    return snapshot.exists() ? (snapshot.data() as User) : null;
  },
};
