import { Pricing, PricingProps } from "@/blocks/landing-page/pricing/ui";
import { CheckoutButtonContainer } from "@/components/payment/checkout-button";

export type PricingContainerProps = PricingProps;

export function PricingContainer(props: PricingProps) {
  return (
    <>
      <Pricing {...props} />
      <CheckoutButtonContainer
        priceId="price_1RBkNPGqH2dPvOOjPLZAStnB"
        successUrl="http://localhost:3000/"
        cancelUrl="http://localhost:3000/"
      />
    </>
  );
}
