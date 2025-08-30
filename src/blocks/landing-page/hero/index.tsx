"use client";

import { Hero, HeroProps } from "@/blocks/landing-page/hero/ui";
import { Button } from "@/components/ui/button";
import { usePlausible } from "next-plausible";
import Link from "next/link";

export type HeroContainerProps = HeroProps;

export function HeroContainer(props: HeroProps) {
  const plausible = usePlausible();
  return (
    <Hero {...props}>
      <Hero.CtaSection>
        <Button
          className="plausible-event-name=Best+Test"
          onClick={() => {
            plausible("Best Test");
          }}
        >
          <Link href="/app">Okk</Link>
        </Button>
      </Hero.CtaSection>
    </Hero>
  );
}
