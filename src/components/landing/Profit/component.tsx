"use client";
import { CheckCircle, Target, Activity, MessageSquare, Users2, Zap } from "lucide-react";
import { Headline } from "@/components/common/Headline";
import { FeaturesSectionWithHoverEffects } from "@/components/ui/feature-section-with-hover-effects";

export default function Component() {
  return (
    <section className="flex flex-col gap-8 md:gap-10">
      <Headline
        title="Transformez le chaos en efficacité"
        description="L'efficacité retrouvée avec notre plateforme"
        badge={{ text: "Bénéfices", isBadge: false }}
      />

      <div className="flex flex-col gap-5">
        <FeaturesSectionWithHoverEffects />
      </div>
    </section>
  );
}
