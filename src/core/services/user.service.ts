import { User } from "@/core/domain/user";
import { isValidUser } from "@/core/domain/user";
import { UserRepository } from "@/core/ports/out/user.repository";
import { UserServiceInterface } from "@/core/ports/in/user.port";

interface UserServiceDependencies {
  userRepo: UserRepository;
}

export function userService(deps: UserServiceDependencies): UserServiceInterface {
  const createUser: UserServiceInterface["createUser"] = async (user: User): Promise<void> => {
    if (!isValidUser(user)) {
      throw new Error("Email invalide");
    }

    const existing: User | null = await deps.userRepo.findById(user.id);
    if (existing) throw new Error("User already exists");

    await deps.userRepo.save(user);
  };

  const getUser: UserServiceInterface["getUser"] = async (id: string): Promise<User | null> => {
    return await deps.userRepo.findById(id);
  };

  return { createUser, getUser };
}
