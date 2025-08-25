import { ResetPasswordSection } from "@/blocks/auth";
import { authServiceInstance } from "@/core/server/di-container-server";
import { redirect } from "next/navigation";

export default async function ResetPasswordPage() {
  const session = await authServiceInstance.getSession();

  if (session) {
    redirect("/app");
  }

  return <ResetPasswordSection />;
}
