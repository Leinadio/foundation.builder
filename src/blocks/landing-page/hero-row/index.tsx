import { HeroRow, HeroRowProps } from "@/blocks/landing-page/hero-row/ui";
import { HeroUserActionsContainer } from "@/components/auth/hero-user-actions";

export type HeroRowContainerProps = HeroRowProps;

export function HeroRowContainer(props: HeroRowContainerProps) {
  return (
    <HeroRow {...props}>
      <HeroRow.CtaSection>
        <HeroUserActionsContainer url="/app" />
      </HeroRow.CtaSection>
    </HeroRow>
  );
}
