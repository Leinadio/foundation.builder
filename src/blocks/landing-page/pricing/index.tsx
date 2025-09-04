"use client";

import { Pricing, PricingProps } from "@/blocks/landing-page/pricing/ui";

export type PricingContainerProps = PricingProps;

export function PricingContainer(props: PricingProps) {
  async function handleSubscription(planName: string, isYearly: boolean) {
    try {
      // Trouver le plan dans la configuration
      const plan = props.pricingPlans?.find((p) => p.name === planName);

      if (!plan) {
        console.error("Plan non trouvé:", planName);
        return;
      }

      // Pour le plan gratuit, pas de paiement
      if (planName === "Gratuit") {
        window.location.href = "/success?plan=free";
        return;
      }

      // Vérifier que le plan a un priceId
      if (!plan.priceId) {
        console.error("PriceId non configuré pour le plan:", planName);
        return;
      }

      const priceId = isYearly ? plan.priceId.yearly : plan.priceId.monthly;

      if (!priceId) {
        console.error("PriceId non trouvé pour le plan:", planName, "période:", isYearly ? "annuelle" : "mensuelle");
        return;
      }

      const response = await fetch("/api/payments/create-subscription-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          priceId,
          successUrl: `${window.location.origin}/success?plan=${planName.toLowerCase()}&period=${
            isYearly ? "yearly" : "monthly"
          }`,
          cancelUrl: `${window.location.origin}`,
          metadata: {
            planName,
            period: isYearly ? "yearly" : "monthly",
            userId: "anonymous", // À remplacer par l'ID utilisateur connecté
          },
        }),
      });
      console.log("response : ", response);
      if (!response.ok) {
        throw new Error("Erreur lors de la création de la session");
      }

      const session = await response.json();

      // Rediriger vers Stripe Checkout
      window.location.href = session.url;
    } catch (error) {
      console.error("Erreur lors de la création de la session de paiement:", error);
      // Ici vous pourriez afficher une notification d'erreur à l'utilisateur
    }
  }

  return <Pricing {...props} onSubscribe={handleSubscription} />;
}
