"use client";

import { createCheckoutSessionAction } from "@/app/actions/checkout";
import { CheckoutButton as CheckoutButtonComponent } from "@leinad.io/foundation.ui";

type CheckoutButtonClientProps = {
  priceId?: string;
  amount?: number;
  currency?: string;
  successUrl: string;
  cancelUrl: string;
  metadata?: Record<string, string>;
};

export function CheckoutButton({
  priceId,
  amount,
  currency = "eur",
  successUrl,
  cancelUrl,
  metadata,
}: CheckoutButtonClientProps) {
  async function handleCheckout() {
    try {
      const result = await createCheckoutSessionAction({
        priceId,
        amount,
        currency,
        successUrl,
        cancelUrl,
        metadata,
      });
      console.log("result", result);

      if (result.success) {
        // Redirection vers la page de checkout Stripe
        window.location.href = result.url;
      } else {
        throw new Error(result.error);
      }
    } catch (error) {
      console.error("Erreur lors du checkout:", error);
      throw error;
    }
  }

  return <CheckoutButtonComponent amount={amount} currency={currency} onCheckout={handleCheckout} />;
}
