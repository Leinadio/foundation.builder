import { Session } from "@/core/models/session";

export interface AuthPortIn {
  getSession(): Promise<Session | null>;
}
