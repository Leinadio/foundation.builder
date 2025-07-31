"use client";

import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const pricingPlans = [
  {
    name: "Gratuit",
    monthlyPrice: "0",
    yearlyPrice: "0",
    description: "Parfait pour commencer",
    features: ["Jusqu'à 3 projets", "5 GB de stockage", "Support communautaire", "Fonctionnalités de base"],
    limitations: ["Pas de support prioritaire", "Fonctionnalités avancées limitées"],
    buttonText: "Commencer gratuitement",
    popular: false,
  },
  {
    name: "Pro",
    monthlyPrice: "29",
    yearlyPrice: "290",
    description: "Pour les professionnels",
    features: [
      "Projets illimités",
      "100 GB de stockage",
      "Support prioritaire",
      "Toutes les fonctionnalités",
      "Analytics avancées",
      "Intégrations API",
    ],
    limitations: [],
    buttonText: "Choisir Pro",
    popular: true,
  },
  {
    name: "Enterprise",
    monthlyPrice: "99",
    yearlyPrice: "990",
    description: "Pour les grandes équipes",
    features: [
      "Tout du plan Pro",
      "Stockage illimité",
      "Support dédié 24/7",
      "Sécurité avancée",
      "SSO et SAML",
      "Audit et conformité",
      "Formation personnalisée",
    ],
    limitations: [],
    buttonText: "Contacter les ventes",
    popular: false,
  },
];

function PricingCards({ isYearly }: { isYearly: boolean }) {
  return (
    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
      {pricingPlans.map((plan, index) => {
        const price = isYearly ? plan.yearlyPrice : plan.monthlyPrice;
        const period = isYearly ? "an" : "mois";
        const monthlyEquivalent =
          isYearly && plan.name !== "Gratuit" ? Math.round(parseInt(plan.yearlyPrice) / 12) : null;

        return (
          <Card
            key={plan.name}
            className={`relative ${plan.popular ? "border-primary shadow-lg scale-105" : "border-border"}`}
          >
            {plan.popular && (
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2" variant="default">
                Le plus populaire
              </Badge>
            )}

            <CardHeader className="text-center pb-8">
              <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
              <CardDescription className="text-base">{plan.description}</CardDescription>
              <div className="mt-4">
                <span className="text-5xl font-bold">{price}€</span>
                <span className="text-muted-foreground ml-1">/{period}</span>
                {monthlyEquivalent && (
                  <div className="text-sm text-muted-foreground mt-1">
                    {monthlyEquivalent}€/mois facturé annuellement
                  </div>
                )}
              </div>
            </CardHeader>

            <CardContent className="space-y-4 flex-grow">
              <div className="space-y-3">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}

                {plan.limitations.map((limitation, limitationIndex) => (
                  <div key={limitationIndex} className="flex items-center gap-3">
                    <X className="h-5 w-5 text-red-500 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{limitation}</span>
                  </div>
                ))}
              </div>
            </CardContent>

            <CardFooter className={`mt-auto pt-6 ${index === 1 ? "pb-2" : "pb-0"}`}>
              <Button className="w-full" variant={plan.popular ? "default" : "outline"} size="lg">
                {plan.buttonText}
              </Button>
            </CardFooter>
          </Card>
        );
      })}
    </div>
  );
}

export function Component() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Choisissez votre plan</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Des tarifs simples et transparents qui s&apos;adaptent à vos besoins. Commencez gratuitement et évoluez
            selon votre croissance.
          </p>
        </div>

        {/* Pricing Toggle with Tabs */}
        <Tabs defaultValue="monthly" className="w-full">
          <div className="flex justify-center mb-12">
            <TabsList className="">
              <TabsTrigger value="monthly" className="px-8 py-2">
                Mensuel
              </TabsTrigger>
              <TabsTrigger value="yearly" className="px-8 py-2 relative">
                Annuel -17%
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="monthly" className="mt-0">
            <PricingCards isYearly={false} />
          </TabsContent>

          <TabsContent value="yearly" className="mt-0">
            <PricingCards isYearly={true} />
          </TabsContent>
        </Tabs>

        {/* FAQ Section */}
        {/* <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold mb-8">{"Questions fréquentes"}</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
            <div>
              <h4 className="font-semibold mb-2">{"Puis-je changer de plan à tout moment ?"}</h4>
              <p className="text-muted-foreground text-sm">
                {`Oui, vous pouvez upgrader ou downgrader votre plan à tout moment. Les changements prennent effet immédiatement.`}
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">{"Y a-t-il une période d'essai gratuite ?"}</h4>
              <p className="text-muted-foreground text-sm">
                {`Tous les plans payants incluent une période d'essai gratuite de 14 jours. Aucune carte de crédit requise.`}
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">{"Que se passe-t-il si j'annule ?"}</h4>
              <p className="text-muted-foreground text-sm">
                {`Vous pouvez annuler à tout moment. Vos données restent accessibles jusqu'à la fin de votre période de facturation.`}
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">{"Proposez-vous des remises pour les équipes ?"}</h4>
              <p className="text-muted-foreground text-sm">
                {`Oui, nous offrons des remises pour les équipes de plus de 10 utilisateurs. Contactez-nous pour un devis personnalisé.`}
              </p>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}
