import { Session } from "@/core/models/session";

export interface AuthRepository {
  getSession(): Promise<Session | null>;
}
