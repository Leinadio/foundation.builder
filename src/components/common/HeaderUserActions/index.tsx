"use client";

import { Button } from "@/components/ui/button";
import { AuthDialog } from "../AuthDialog";
import { authClient } from "@/lib/better-auth-client";

export function HeaderUserActions() {
  const { data: session } = authClient.useSession();

  const handleLogout = async () => {
    await authClient.signOut();
  };

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
