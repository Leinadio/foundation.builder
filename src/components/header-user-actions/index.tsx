"use client";

import { Button } from "@/components/ui/button";
import { authClient } from "@/core/client/repositories/better-auth/config";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";

export function HeaderUserActionsContainer() {
  const { data: session, isPending } = authClient.useSession();

  const handleLogout = async () => {
    await authClient.signOut();
  };

  if (isPending) {
    return <Skeleton className="h-7 w-[110px]" />;
  }

  if (session) {
    return (
      <Button variant="outline" size="sm" onClick={handleLogout}>
        {"Déconnexion"}
      </Button>
    );
  }
  return (
    <Button variant="outline" size="sm" asChild>
      <Link href="/sign-in">Commencer</Link>
    </Button>
  );
}
