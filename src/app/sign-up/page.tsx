import { SignUpBlock } from "@/components/auth";
import { auth } from "@/lib/better-auth";
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
