import { User } from "@/core/models/user";
import { isValidUser } from "@/core/models/user";
import { UserRepository } from "../ports/out/user.repository";
import { UserPortIn } from "@/core/ports/in/user.port";

interface UserServiceDependencies {
  userRepo: UserRepository;
}

export function userService(deps: UserServiceDependencies): UserPortIn {
  const getUser: UserPortIn["getUser"] = async (id: string): Promise<User | null> => {
    return await deps.userRepo.getUser(id);
  };

  const getAllUsers: UserPortIn["getAllUsers"] = async (): Promise<User[]> => {
    return await deps.userRepo.getAllUsers();
  };

  const createUser: UserPortIn["createUser"] = async (user: User): Promise<void> => {
    if (!isValidUser(user)) {
      throw new Error("Email invalide");
    }

    const existing: User | null = await deps.userRepo.getUser(user.id);
    if (existing) throw new Error("User already exists");

    await deps.userRepo.createUser(user);
  };

  const updateUser: UserPortIn["updateUser"] = async (user: User): Promise<void> => {
    if (!isValidUser(user)) {
      throw new Error("Email invalide");
    }
    await deps.userRepo.updateUser(user);
  };

  const deleteUser: UserPortIn["deleteUser"] = async (id: string): Promise<void> => {
    await deps.userRepo.deleteUser(id);
  };

  return { createUser, getUser, getAllUsers, updateUser, deleteUser };
}
