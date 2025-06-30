import { userService } from "../core/services/user.service";
import { UserPortIn } from "../core/ports/in/user.port";
import { FirestoreUserRepositoryImpl } from "@/repositories/firestore.user.repository.impl";

export const userServiceInstance: UserPortIn = userService({
  userRepo: FirestoreUserRepositoryImpl,
});
