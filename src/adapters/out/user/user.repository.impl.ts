import { User } from "@/core/domain/user";
import { UserRepository } from "@/core/ports/out/user.repository";
import { db } from "@/lib/firebase-client";
import { doc, getDoc, setDoc } from "firebase/firestore";

// TODO: Changer la structure des dossiers avoir une meilleure compréhension des dossiers adapters et ports

export const UserRepositoryImpl: UserRepository = {
  async save(user: User): Promise<void> {
    console.log("save", user);
    const ref = doc(db, "users", user.id);
    await setDoc(ref, user);
  },

  async findById(id: string): Promise<User | null> {
    console.log("findById", id);
    const ref = doc(db, "users", id);
    const snapshot = await getDoc(ref);
    return snapshot.exists() ? (snapshot.data() as User) : null;
  },
};
