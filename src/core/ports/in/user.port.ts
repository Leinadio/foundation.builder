import { User } from "@/core/models/user";

export interface UserPortIn {
  getUser(id: string): Promise<User | null>;
  getAllUsers(): Promise<User[]>;
  createUser(user: User): Promise<void>;
  updateUser(user: User): Promise<void>;
  deleteUser(id: string): Promise<void>;
  subscribeToUser(id: string, onData: (user: User | null) => void, onError: (error: Error) => void): () => void;
}
