"use server";

import { paymentServiceInstance } from "@/lib/di-container-server";

type CheckoutSessionParams = {
  priceId?: string;
  amount?: number;
  currency?: string;
  successUrl: string;
  cancelUrl: string;
  metadata?: Record<string, string>;
};

type CheckoutSessionResult = { success: true; url: string } | { success: false; error: string };

export async function createCheckoutSessionAction(params: CheckoutSessionParams): Promise<CheckoutSessionResult> {
  try {
    const session = await paymentServiceInstance.createCheckoutSession({
      priceId: params.priceId,
      amount: params.amount ? params.amount * 100 : undefined, // Conversion en centimes
      currency: params.currency,
      successUrl: params.successUrl,
      cancelUrl: params.cancelUrl,
      metadata: params.metadata,
    });
    console.log("session", session);

    return { success: true, url: session.url };
  } catch (error) {
    console.error("Erreur lors de la création de la session de checkout:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Une erreur est survenue",
    };
  }
}
