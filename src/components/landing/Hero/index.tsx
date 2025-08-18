import { HeroWithAuth } from "@/components/common/HeroWithAuth";
import { HeroProps } from "@/components/ui/hero";

export function Hero(props: HeroProps) {
  return <HeroWithAuth {...props} />;
}
