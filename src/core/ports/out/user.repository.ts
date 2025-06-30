import { User } from "@/core/models/user";

export interface UserRepository {
  getUser(id: string): Promise<User | null>;
  getAllUsers(): Promise<User[]>;
  createUser(user: User): Promise<void>;
  updateUser(user: User): Promise<void>;
  deleteUser(id: string): Promise<void>;
}
