import { HeroRow as HeroRowComponent, HeroRowProps } from "@/blocks/landing-page/hero-row/ui";
import { HeroUserActionsContainer } from "@/components/hero-user-actions";

export function HeroRow(props: HeroRowProps) {
  return (
    <HeroRowComponent {...props}>
      <HeroRowComponent.CtaSection>
        <HeroUserActionsContainer url="/app" />
      </HeroRowComponent.CtaSection>
    </HeroRowComponent>
  );
}
