import { Hero as HeroComponent, HeroProps } from "@/blocks/landing-page/hero/ui";

export async function Hero(props: HeroProps) {
  return <HeroComponent {...props} />;
}
