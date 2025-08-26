import { Hero, HeroProps } from "@/blocks/landing-page/hero/ui";

export type HeroContainerProps = HeroProps;

export async function HeroContainer(props: HeroProps) {
  return <Hero {...props} />;
}
