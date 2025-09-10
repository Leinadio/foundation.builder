"use client";

import { ReactNode } from "react";
import { Headline } from "@/components/shared/headline";
import { Button } from "@/components/ui/button";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  title: string;
}

export interface TestimonialsProps {
  title?: string | ReactNode;
  description?: string;
  badgeText?: string;
  testimonials?: Testimonial[];
  ctaText?: string;
  ctaHref?: string;
}

const defaultTestimonials: Testimonial[] = [
  {
    id: "1",
    name: "Marie Dubois",
    title: "CEO",
    quote:
      "Foundation Builder a révolutionné notre façon de développer nos produits. L'approche structurée nous a fait gagner des mois de développement.",
  },
  {
    id: "2",
    name: "Jean Martin",
    title: "CTO",
    quote:
      "Un outil exceptionnel qui nous permet de valider nos idées rapidement et efficacement. L'interface est intuitive et les résultats sont précis.",
  },
  {
    id: "3",
    name: "Sophie Laurent",
    title: "Product Manager",
    quote:
      "Grâce à Foundation Builder, nous avons pu lancer notre produit 3 mois plus tôt que prévu. La qualité du code généré est impressionnante.",
  },
  {
    id: "4",
    name: "Pierre Moreau",
    title: "Développeur Senior",
    quote:
      "L'architecture hexagonale implémentée par Foundation Builder est parfaite. Le code est maintenable et évolutif.",
  },
  {
    id: "5",
    name: "Emma Rousseau",
    title: "Designer UX",
    quote:
      "Les composants UI sont magnifiques et parfaitement intégrés. Foundation Builder respecte les meilleures pratiques de design.",
  },
  {
    id: "6",
    name: "Thomas Bernard",
    title: "Fondateur",
    quote:
      "Un boilerplate complet qui nous a fait économiser des semaines de configuration. Tout est prêt pour la production.",
  },
  {
    id: "7",
    name: "Léa Petit",
    title: "Lead Developer",
    quote:
      "Foundation Builder nous a permis de livrer des projets de qualité professionnelle en un temps record. Je le recommande vivement.",
  },
  {
    id: "8",
    name: "Alexandre Durand",
    title: "Directeur Technique",
    quote:
      "L'approche Clean Architecture est parfaitement implémentée. Nos développeurs sont plus productifs et le code est plus robuste.",
  },
];

export function Testimonials({
  title = "Rencontrez nos clients satisfaits",
  description = "Tous nos 1000+ clients sont satisfaits de nos services",
  badgeText = "TÉMOIGNAGES",
  testimonials = defaultTestimonials,
  ctaText = "Commencer gratuitement",
  ctaHref = "#",
}: TestimonialsProps) {
  return (
    <section className="w-full flex flex-col gap-8 md:gap-16">
      <Headline title={title} description={description} badge={{ text: badgeText, isBadge: false }} />

      {/* CTA Button */}
      <div className="flex justify-center">
        <Button size="lg" className="px-8" asChild>
          <a href={ctaHref}>{ctaText}</a>
        </Button>
      </div>

      {/* Testimonials Scroll */}
      <div className="h-[40rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards items={testimonials} speed="slow" direction="right" />
        <InfiniteMovingCards speed="slow" items={testimonials} direction="left" />
      </div>
    </section>
  );
}
