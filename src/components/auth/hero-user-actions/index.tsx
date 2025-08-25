"use client";

import { Button } from "@/components/ui/button";
import { authClient } from "@/core/client/repositories/better-auth/config";
import Link from "next/link";

interface HeroUserActionsProps {
  url: string;
}

export function HeroUserActionsContainer({ url }: HeroUserActionsProps) {
  const { data: session } = authClient.useSession();

  if (session) {
    return (
      <Button size="lg" asChild>
        <Link href={url}>Commencer</Link>
      </Button>
    );
  }
  return (
    <Button size="lg" asChild>
      <Link href="/sign-in">Commencer</Link>
    </Button>
  );
}
