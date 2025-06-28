import { User } from "@/core/domain/user";

export interface UserServiceInterface {
  createUser(user: User): Promise<void>;
  getUser(id: string): Promise<User | null>;
}
