import Image from "next/image";
import { Icons, Variant } from "@/components/ui/icons";
import { Badge } from "@/components/ui/badge";
import { Headline } from "@/components/ui/headline";
import { ReactNode } from "react";

interface TextSectionProps {
  step: string;
  title: string;
  description: string;
  objective: string;
}

function TextSection({ step, title, description, objective }: TextSectionProps) {
  return (
    <div className="flex flex-col flex-1 gap-4">
      <div className="flex flex-col gap-2">
        <Badge variant="default" className="w-fit">
          {step}
        </Badge>
        <h2 className="text-4xl text-foreground font-semibold">{title}</h2>
      </div>
      <p className="text-lg text-foreground">{description}</p>
      <p className="text-md font-medium text-muted-foreground italic">{objective}</p>
    </div>
  );
}

function ImageSection({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="hidden relative md:block mt-8 md:mt-0">
      <div className="absolute inset-0 bg-secondary transform translate-x-4 translate-y-4"></div>
      <Image src={src} alt={alt} fill className="border-2 border-primary-foreground shadow-md" />
    </div>
  );
}

export type HowItWorkLayout = "text-image" | "image-text";

export interface HowItWorkStepImage {
  src: string;
  alt: string;
}

export interface HowItWorkStep {
  step: string;
  title: string;
  description: string;
  objective: string;
  image: HowItWorkStepImage;
  layout: HowItWorkLayout;
}

export interface HowItWorkProps {
  title?: string | ReactNode;
  description?: string;
  badge?: { text: string; isBadge: boolean };
  steps?: HowItWorkStep[];
}

const defaultSteps: HowItWorkStep[] = [
  {
    step: "Étape 1",
    title: "Créer un projet",
    description:
      "Pas besoin d'avoir un business plan en tête, ni même un concept parfaitement clair. Vous pouvez entrer une simple idée, une intuition, une envie — comme 'une app pour échanger des vêtements entre voisins' ou 'une solution pour aider les freelances à mieux gérer leurs revenus'.",
    objective: "🎯 Objectif : Démarrer sans pression, que vous soyez débutant ou expérimenté.",
    image: { src: "/images/step1_fr.png", alt: "Étape 1 - Description de votre projet" },
    layout: "text-image",
  },
  {
    step: "Étape 2",
    title: "Analyser votre projet",
    description:
      "Dès que votre idée est saisie, l'IA se met au travail. Elle réfléchit comme un analyste business, un expert produit, un marketer et un investisseur réunis. Elle identifie votre segment de marché, le profil des clients potentiels, la problématique que vous résolvez et la pertinence de votre solution.",
    objective:
      "💡 En quelques secondes, vous avez une vision complète de votre projet, bien au-delà d'un simple brainstorming.",
    image: { src: "/images/step2_fr.png", alt: "Étape 2 - Analyse de votre projet" },
    layout: "image-text",
  },
  {
    step: "Étape 3",
    title: "Développer votre projet",
    description:
      "Chaque section du rapport est claire, structurée et conçue pour être actionnable. Vous pouvez relire, comparer, ajuster mentalement ou à l'écrit. Besoin d'une nouvelle perspective ? Générez une autre version à partir d'un angle différent, d'une autre niche ou d'un problème connexe.",
    objective: "🧠 C'est comme un outil de réflexion rapide, pensé pour vous aider à clarifier, itérer et avancer.",
    image: { src: "/images/step3_fr.png", alt: "Étape 3 - Développer votre projet" },
    layout: "text-image",
  },
];

function makeRowTextImage(step: HowItWorkStep, index: number): ReactNode {
  return (
    <div key={`row-${index}`} className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
      <TextSection step={step.step} title={step.title} description={step.description} objective={step.objective} />
      <ImageSection src={step.image.src} alt={step.image.alt} />
    </div>
  );
}

function makeRowImageText(step: HowItWorkStep, index: number): ReactNode {
  return (
    <div key={`row-${index}`} className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
      <ImageSection src={step.image.src} alt={step.image.alt} />
      <TextSection step={step.step} title={step.title} description={step.description} objective={step.objective} />
    </div>
  );
}

function iconForIndex(index: number, total: number): ReactNode | null {
  if (index === 0) {
    return (
      <Icons key={`icon-${index}`} variant={Variant.ArrowDown7} className="w-36 h-36 flex justify-center mx-auto" />
    );
  }
  if (index === 1) {
    return (
      <Icons key={`icon-${index}`} variant={Variant.ArrowDown6} className="w-36 h-36 flex justify-center mx-auto" />
    );
  }
  if (index === total - 1) {
    return (
      <Icons
        key={`icon-last-${index}`}
        variant={Variant.ArrowDown7}
        className="w-36 h-36 flex justify-center mx-auto"
      />
    );
  }
  return null;
}

function renderStepRows(step: HowItWorkStep, index: number, total: number): ReactNode[] {
  if (step.layout === "text-image") {
    const main = makeRowTextImage(step, index);
    const icon = iconForIndex(index, total);
    if (icon === null) {
      return [main];
    }
    return [main, icon];
  }
  const main = makeRowImageText(step, index);
  const icon = iconForIndex(index, total);
  if (icon === null) {
    return [main];
  }
  return [main, icon];
}

function buildRows(steps: HowItWorkStep[]): ReactNode[] {
  const total = steps.length;
  return steps.flatMap((step, index) => renderStepRows(step, index, total));
}

export function HowItWork({
  title = "Transformez le chaos en efficacité",
  description = "L'efficacité retrouvée avec notre plateforme",
  badge = { text: "COMMENT ÇA MARCHE ?", isBadge: false },
  steps = defaultSteps,
}: HowItWorkProps) {
  const rows = buildRows(steps);
  return (
    <section className="flex flex-col gap-8 md:gap-10">
      <Headline title={title} description={description} badge={badge} />
      {rows}
    </section>
  );
}
