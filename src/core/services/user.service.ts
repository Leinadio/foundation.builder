import { User } from "@/core/models/user";
import { isValidUser } from "@/core/models/user";
import { UserRepository } from "../ports/out/user.repository";
import { UserPortIn } from "@/core/ports/in/user.port";

export class UserService implements UserPortIn {
  private readonly userRepo: UserRepository;

  constructor(userRepo: UserRepository) {
    this.userRepo = userRepo;
  }

  async getUser(id: string): Promise<User | null> {
    return await this.userRepo.getUser(id);
  }

  async getAllUsers(): Promise<User[]> {
    return await this.userRepo.getAllUsers();
  }

  async createUser(user: User): Promise<void> {
    if (!isValidUser(user)) {
      throw new Error("Email invalide");
    }
    const existing: User | null = await this.userRepo.getUser(user.id);
    if (existing) throw new Error("User already exists");
    await this.userRepo.createUser(user);
  }

  async updateUser(user: User): Promise<void> {
    if (!isValidUser(user)) {
      throw new Error("Email invalide");
    }
    await this.userRepo.updateUser(user);
  }

  async deleteUser(id: string): Promise<void> {
    await this.userRepo.deleteUser(id);
  }

  subscribeToUser(id: string, onData: (user: User | null) => void, onError: (error: Error) => void): () => void {
    return this.userRepo.subscribeToUser(id, onData, onError);
  }
}
