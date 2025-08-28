import { Hero, HeroProps } from "@/blocks/landing-page/hero/ui";
import { Button } from "@/components/ui/button";

import Link from "next/link";

export type HeroContainerProps = HeroProps;

export async function HeroContainer(props: HeroProps) {
  return (
    <Hero {...props}>
      <Hero.CtaSection>
        <Button className="plausible-event-name=Best+Test">
          <Link href="/app">Okk</Link>
        </Button>
      </Hero.CtaSection>
    </Hero>
  );
}
