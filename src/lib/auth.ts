import { betterAuth } from "better-auth";
import { Pool } from "pg";

export const auth = betterAuth({
  database: new Pool({
    connectionString:
      // "postgresql://postgres:YKep7E$&e8K4zD8eA&5Q@MtobJ!sNb3gizY5?PjT@db.dfnyztxuuddsbvbqmulh.supabase.co:5432/postgres",
      "postgresql://postgres:CfppaEYzijFxgmG@db.dfnyztxuuddsbvbqmulh.supabase.co:5432/postgres",
  }),
  emailAndPassword: {
    enabled: true,
  },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    },
  },
});
