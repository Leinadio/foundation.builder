import { AuthRepository } from "@/core/server/ports/out/auth.repository";
import { auth } from "@/core/server/repositories/better-auth/config";
import { headers } from "next/headers";
import { Session } from "@/core/models/session";
import { Session as BetterAuthSession } from "better-auth";

export class BetterAuthRepositoryImpl implements AuthRepository {
  public async getSession(): Promise<Session | null> {
    const betterAuthResponse = await auth.api.getSession({
      headers: await headers(),
    });

    if (!betterAuthResponse?.session) {
      return null;
    }

    return this.mapToDomainSession(betterAuthResponse.session);
  }

  private mapToDomainSession(betterAuthSession: BetterAuthSession): Session {
    return {
      id: betterAuthSession.id,
      userId: betterAuthSession.userId,
      expiresAt: betterAuthSession.expiresAt,
      createdAt: betterAuthSession.createdAt,
      updatedAt: betterAuthSession.updatedAt,
      token: betterAuthSession.token,
      ipAddress: betterAuthSession.ipAddress,
      userAgent: betterAuthSession.userAgent,
    };
  }
}
