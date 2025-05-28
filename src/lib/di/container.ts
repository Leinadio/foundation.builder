import { createUserService } from "@/core/services/user.service";
import { UserRepositoryImpl } from "@/adapters/out/user/user.repository.impl";
import { UserServiceInterface } from "@/core/ports/in/user.port";

export const userService: UserServiceInterface = createUserService({
  userRepo: UserRepositoryImpl,
});
