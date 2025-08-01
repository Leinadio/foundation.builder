import Image from "next/image";
import { Icons, Variant } from "@/components/common/Icons";
import { Badge } from "@/components/ui/badge";

function TextSection({
  step,
  title,
  description,
  objective,
}: {
  step: string;
  title: string;
  description: string;
  objective: string;
}) {
  return (
    <div className="flex flex-col flex-1 gap-6">
      <div className="flex flex-col gap-2">
        <Badge variant="default" className="w-fit">
          {step}
        </Badge>
        <h2 className="text-4xl font-bold">{title}</h2>
      </div>
      <p className="text-gray-600 text-lg">{description}</p>
      <p className="text-lg font-medium">{objective}</p>
    </div>
  );
}

function ImageSection({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="hidden md:block flex-1 mt-8 md:mt-0">
      <div className="relative">
        <div className="absolute inset-0 bg-secondary transform translate-x-4 translate-y-4"></div>
        <div className="relative">
          <Image
            src={src}
            alt={alt}
            width={900}
            height={400}
            className="border-2 border-primary-foreground shadow-md"
          />
        </div>
      </div>
    </div>
  );
}

export function HowItWork() {
  return (
    <section className="mx-auto flex flex-col gap-8 md:gap-12" id="howItWorks">
      <h2 className="text-3xl font-bold text-center">{"Comment ça marche ?"}</h2>
      <div className="flex flex-col items-center md:flex-row gap-10 md:gap-24">
        <TextSection
          step="Étape 1"
          title="Créer un projet"
          description="Pas besoin d'avoir un business plan en tête, ni même un concept parfaitement clair. Vous pouvez entrer une simple idée, une intuition, une envie — comme 'une app pour échanger des vêtements entre voisins' ou 'une solution pour aider les freelances à mieux gérer leurs revenus'."
          objective="🎯 Objectif : Démarrer sans pression, que vous soyez débutant ou expérimenté."
        />
        <ImageSection src="/images/step1_fr.png" alt="Étape 1 - Description de votre projet" />
      </div>
      <Icons variant={Variant.ArrowDown7} className="w-36 h-36 flex justify-center mx-auto" />
      <div className="flex flex-col items-center md:flex-row-reverse gap-10 md:gap-24">
        <TextSection
          step="Étape 2"
          title="Analyser votre projet"
          description="Dès que votre idée est saisie, l'IA se met au travail. Elle réfléchit comme un analyste business, un expert produit, un marketer et un investisseur réunis. Elle identifie votre segment de marché, le profil des clients potentiels, la problématique que vous résolvez et la pertinence de votre solution."
          objective="💡 En quelques secondes, vous avez une vision complète de votre projet, bien au-delà d'un simple brainstorming."
        />
        <ImageSection src="/images/step2_fr.png" alt="Étape 2 - Analyse de votre projet" />
      </div>
      <Icons variant={Variant.ArrowDown6} className="w-36 h-36 flex justify-center mx-auto" />
      <div className="flex flex-col items-center md:flex-row gap-10 md:gap-24">
        <TextSection
          step="Étape 3"
          title="Développer votre projet"
          description="Chaque section du rapport est claire, structurée et conçue pour être actionnable. Vous pouvez relire, comparer, ajuster mentalement ou à l'écrit. Besoin d'une nouvelle perspective ? Générez une autre version à partir d'un angle différent, d'une autre niche ou d'un problème connexe."
          objective="🧠 C'est comme un outil de réflexion rapide, pensé pour vous aider à clarifier, itérer et avancer."
        />
        <ImageSection src="/images/step3_fr.png" alt="Étape 3 - Développer votre projet" />
      </div>
      <Icons variant={Variant.ArrowDown7} className="w-36 h-36 flex justify-center mx-auto" />
    </section>
  );
}
