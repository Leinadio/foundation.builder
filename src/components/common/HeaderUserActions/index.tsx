"use client";

import { Button } from "@/components/ui/button";
import { AuthDialog } from "@/components/common/AuthDialog";
import { authClient } from "@/core/client/repositories/better-auth/config";
import { Skeleton } from "@/components/ui/skeleton";

export function HeaderUserActions() {
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
    <AuthDialog>
      <Button variant="outline" size="sm">
        Commencer
      </Button>
    </AuthDialog>
  );
}
