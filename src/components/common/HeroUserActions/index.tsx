"use client";

import { Button } from "@/components/ui/button";
import { AuthDialog } from "../AuthDialog";
import { authClient } from "@/lib/better-auth-client";

interface HeroUserActionsProps {
  url: string;
}

export function HeroUserActions({ url }: HeroUserActionsProps) {
  const { data: session } = authClient.useSession();

  if (session) {
    return (
      <Button size="lg" asChild>
        <a href={url}>Commencer</a>
      </Button>
    );
  }
  return (
    <AuthDialog>
      <Button size="lg">Commencer</Button>
    </AuthDialog>
  );
}
