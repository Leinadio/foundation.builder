import { HeroRow, HeroRowProps } from "@/blocks/landing-page/hero-row/ui";
import { HeroUserActionsContainer } from "@/components/auth/hero-user-actions";

export function HeroRowContainer(props: HeroRowProps) {
  return (
    <HeroRow {...props}>
      <HeroRow.CtaSection>
        <HeroUserActionsContainer url="/app" />
      </HeroRow.CtaSection>
    </HeroRow>
  );
}
