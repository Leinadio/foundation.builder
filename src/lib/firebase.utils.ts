import { User as FirebaseUser } from "firebase/auth";
import { User } from "@/core/models/user";

export function firebaseUserToUser(firebaseUser: FirebaseUser | null): User | null {
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
