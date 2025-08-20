import { auth } from "@/repositories/better-auth/config";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function App() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/sign-in");
  }

  return (
    <div>
      <h1>Welcome {session.user.name}</h1>
    </div>
  );
}
