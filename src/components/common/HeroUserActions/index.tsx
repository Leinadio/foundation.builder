"use client";

import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/better-auth-client";
import Link from "next/link";

interface HeroUserActionsProps {
  url: string;
}

export function HeroUserActions({ url }: HeroUserActionsProps) {
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
