import { authServiceInstance } from "@/core/server/di-container-server";
import { redirect } from "next/navigation";

export default async function App() {
  const session = await authServiceInstance.getSession();

  if (!session) {
    redirect("/sign-in");
  }

  return (
    <div>
      <h1>Welcome </h1>
    </div>
  );
}
