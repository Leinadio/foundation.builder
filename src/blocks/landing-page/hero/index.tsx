"use client";

import { Hero, HeroProps } from "@/blocks/landing-page/hero/ui";
import { Button } from "@/components/ui/button";
import { usePlausible } from "next-plausible";
import Link from "next/link";
import { Sailboat } from "lucide-react";

export type HeroContainerProps = HeroProps;

export function HeroContainer(props: HeroProps) {
  const plausible = usePlausible();
  return (
    <Hero {...props}>
      <Hero.CtaSection>
        <Button
          className="plausible-event-name=Best+Test h-12 min-w-72 text-lg"
          onClick={() => {
            plausible("Best Test");
          }}
          asChild
        >
          <Link href="/app" className="flex items-center justify-center gap-2">
            <Sailboat className="w-40 h-40" />
            Commencer gratuitement
          </Link>
        </Button>
      </Hero.CtaSection>
    </Hero>
  );
}
