import { SignInForm } from "@/components/auth";
import { auth } from "@/repositories/better-auth/config";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function SignInPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (session) {
    redirect("/app");
  }

  return <SignInForm />;
}
