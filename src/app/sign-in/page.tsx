import { SignInForm } from "@/components/auth";
import { auth } from "@/lib/better-auth";
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
