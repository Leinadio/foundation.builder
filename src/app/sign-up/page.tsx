import { SignUpBlock } from "@/components/auth";
import { auth } from "@/repositories/better-auth/config";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function SignUpPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (session) {
    redirect("/app");
  }
  return <SignUpBlock />;
}
