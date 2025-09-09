"use client";

import { ReactNode, useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Headline } from "@/components/shared/headline";
import { Button } from "@/components/ui/button";

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company?: string;
  content: string;
  avatar?: string;
  rating?: number;
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
    role: "CEO",
    company: "TechStart",
    content:
      "Foundation Builder a révolutionné notre façon de développer nos produits. L'approche structurée nous a fait gagner des mois de développement.",
    rating: 5,
  },
  {
    id: "2",
    name: "Jean Martin",
    role: "CTO",
    company: "InnovateLab",
    content:
      "Un outil exceptionnel qui nous permet de valider nos idées rapidement et efficacement. L'interface est intuitive et les résultats sont précis.",
    rating: 5,
  },
  {
    id: "3",
    name: "Sophie Laurent",
    role: "Product Manager",
    company: "DigitalFlow",
    content:
      "Grâce à Foundation Builder, nous avons pu lancer notre produit 3 mois plus tôt que prévu. La qualité du code généré est impressionnante.",
    rating: 5,
  },
  {
    id: "4",
    name: "Pierre Moreau",
    role: "Développeur Senior",
    company: "CodeCraft",
    content:
      "L'architecture hexagonale implémentée par Foundation Builder est parfaite. Le code est maintenable et évolutif.",
    rating: 5,
  },
  {
    id: "5",
    name: "Emma Rousseau",
    role: "Designer UX",
    company: "CreativeStudio",
    content:
      "Les composants UI sont magnifiques et parfaitement intégrés. Foundation Builder respecte les meilleures pratiques de design.",
    rating: 5,
  },
  {
    id: "6",
    name: "Thomas Bernard",
    role: "Fondateur",
    company: "StartupX",
    content:
      "Un boilerplate complet qui nous a fait économiser des semaines de configuration. Tout est prêt pour la production.",
    rating: 5,
  },
  {
    id: "7",
    name: "Léa Petit",
    role: "Lead Developer",
    company: "WebAgency",
    content:
      "Foundation Builder nous a permis de livrer des projets de qualité professionnelle en un temps record. Je le recommande vivement.",
    rating: 5,
  },
  {
    id: "8",
    name: "Alexandre Durand",
    role: "Directeur Technique",
    company: "TechCorp",
    content:
      "L'approche Clean Architecture est parfaitement implémentée. Nos développeurs sont plus productifs et le code est plus robuste.",
    rating: 5,
  },
];

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <Card className="w-80 flex-shrink-0 bg-background/80 backdrop-blur-sm border-border/50 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardContent className="p-6">
        <div className="space-y-4">
          {/* Rating */}
          {testimonial.rating && (
            <div className="flex items-center gap-1">
              {Array.from({ length: testimonial.rating }).map((_, index) => (
                <svg key={index} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          )}

          {/* Content */}
          <blockquote className="text-sm leading-relaxed text-muted-foreground">{testimonial.content}</blockquote>

          {/* Author */}
        </div>
      </CardContent>
      <CardFooter>
        <div className="flex items-center gap-3">
          <Avatar className="w-10 h-10">
            <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
            <AvatarFallback className="bg-primary/10 text-primary font-semibold">
              {testimonial.name
                .split(" ")
                .map((n) => n[0])
                .join("")
                .toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div>
            <div className="font-semibold text-sm">{testimonial.name}</div>
            <div className="text-xs text-muted-foreground">
              {testimonial.role}
              {testimonial.company && ` chez ${testimonial.company}`}
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}

function InfiniteScrollContainer({ children }: { children: ReactNode }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`flex gap-6 ${isHovered ? "animate-scroll-paused" : "animate-scroll"}`}>{children}</div>
    </div>
  );
}

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
      <div className="relative">
        <InfiniteScrollContainer>
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </InfiniteScrollContainer>
      </div>
    </section>
  );
}
