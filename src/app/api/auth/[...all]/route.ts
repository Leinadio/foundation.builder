import { auth } from "@/core/server/repositories/better-auth/config";

const handler = auth.handler;

export { handler as GET, handler as POST };
