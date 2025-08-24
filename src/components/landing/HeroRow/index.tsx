import { HeroRow as HeroRowComponent, HeroRowProps } from "@/components/ui/hero-row";
import { HeroUserActions } from "@/components/common/HeroUserActions";

export function HeroRow(props: HeroRowProps) {
  return (
    <HeroRowComponent {...props}>
      <HeroRowComponent.CtaSection>
        <HeroUserActions url="/app" />
      </HeroRowComponent.CtaSection>
    </HeroRowComponent>
  );
}
