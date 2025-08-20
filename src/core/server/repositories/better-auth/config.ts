import { betterAuth } from "better-auth";
import { Pool } from "pg";
import { emailServiceInstance } from "@/core/server/di-container-server";

interface BetterAuthEmailVerification {
  user: {
    email: string;
    emailVerified: boolean;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    image?: string | null | undefined;
  };
  url: string;
  token: string;
}

export const auth = betterAuth({
  database: new Pool({
    connectionString: process.env.DATABASE_URL,
  }),
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: true,
    sendResetPassword: async ({ user, url }) => {
      await emailServiceInstance.sendPasswordResetEmail({
        email: user.email,
        name: user.name || "Utilisateur",
        url,
      });
    },
  },
  emailVerification: {
    sendOnSignUp: true,
    sendVerificationEmail: async ({ user, url }: BetterAuthEmailVerification) => {
      await emailServiceInstance.sendVerificationEmail({
        email: user.email,
        name: user.name || "Utilisateur",
        url,
      });
    },
  },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    },
    github: {
      clientId: process.env.GITHUB_CLIENT_ID || "",
      clientSecret: process.env.GITHUB_CLIENT_SECRET || "",
    },
  },
});
