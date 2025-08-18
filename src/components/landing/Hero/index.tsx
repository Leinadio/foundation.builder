import { Hero as HeroComponent, HeroProps } from "@/components/ui/hero";
import { HeroUserActions } from "@/components/common/HeroUserActions";

export function Hero(props: HeroProps) {
  return (
    <HeroComponent {...props}>
      <HeroComponent.CtaSection>
        <HeroUserActions url="/app" />
      </HeroComponent.CtaSection>
    </HeroComponent>
  );
}
