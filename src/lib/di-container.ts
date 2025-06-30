import { UserService } from "../core/services/user.service";
import { UserPortIn } from "../core/ports/in/user.port";
import { FirestoreUserRepositoryImpl } from "@/repositories/firestore.user.repository.impl";

export const userServiceInstance: UserPortIn = new UserService(new FirestoreUserRepositoryImpl());
