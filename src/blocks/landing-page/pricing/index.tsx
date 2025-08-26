import { Pricing, PricingProps } from "@/blocks/landing-page/pricing/ui";

export type PricingContainerProps = PricingProps;

export function PricingContainer(props: PricingProps) {
  return <Pricing {...props} />;
}
