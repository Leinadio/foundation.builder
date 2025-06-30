import { UserService } from "../core/services/user.service";
import { UserPortIn } from "../core/ports/in/user.port";
import { FirestoreUserRepositoryImpl } from "@/repositories/firestore.user.repository.impl";
import { AuthService } from "@/core/services/auth.service";
import { AuthPortIn } from "@/core/ports/in/auth.port";
import { FirebaseAuthRepositoryImpl } from "@/repositories/firebase.auth.repository.impl";

export const userServiceInstance: UserPortIn = new UserService(new FirestoreUserRepositoryImpl());
export const authServiceInstance: AuthPortIn = new AuthService(new FirebaseAuthRepositoryImpl());
