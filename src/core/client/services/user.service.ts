import { User } from "@/core/models/user";
import { isValidUser } from "@/core/models/user";
import { UserRepository } from "@/core/client/ports/out/user.repository";
import { UserPortIn } from "@/core/client/ports/in/user.port";

export class UserService implements UserPortIn {
  private readonly userRepo: UserRepository;

  public constructor(userRepo: UserRepository) {
    this.userRepo = userRepo;
  }

  public async getUser(id: string): Promise<User | null> {
    return this.userRepo.getUser(id);
  }

  public async getAllUsers(): Promise<User[]> {
    return this.userRepo.getAllUsers();
  }

  public async createUser(user: User): Promise<void> {
    if (!isValidUser(user)) {
      throw new Error("Email invalide");
    }
    const existing: User | null = await this.userRepo.getUser(user.id);
    if (existing) {
      throw new Error("User already exists");
    }
    await this.userRepo.createUser(user);
  }

  public async updateUser(user: User): Promise<void> {
    if (!isValidUser(user)) {
      throw new Error("Email invalide");
    }
    await this.userRepo.updateUser(user);
  }

  public async deleteUser(id: string): Promise<void> {
    await this.userRepo.deleteUser(id);
  }

  public subscribeToUser(id: string, onData: (user: User | null) => void, onError: (error: Error) => void): () => void {
    return this.userRepo.subscribeToUser(id, onData, onError);
  }
}
