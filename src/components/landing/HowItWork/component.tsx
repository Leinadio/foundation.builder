import Image from "next/image";
import { Icons, Variant } from "@/components/common/Icons";
import { Badge } from "@/components/ui/badge";
import { Headline } from "@/components/common/Headline";

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

export function HowItWork() {
  return (
    <section className="flex flex-col gap-8 md:gap-12">
      <Headline
        title="Transformez le chaos en efficacité"
        description="L'efficacité retrouvée avec notre plateforme"
        badge="COMMENT ÇA MARCHE ?"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
        <TextSection
          step="Étape 1"
          title="Créer un projet"
          description="Pas besoin d'avoir un business plan en tête, ni même un concept parfaitement clair. Vous pouvez entrer une simple idée, une intuition, une envie — comme 'une app pour échanger des vêtements entre voisins' ou 'une solution pour aider les freelances à mieux gérer leurs revenus'."
          objective="🎯 Objectif : Démarrer sans pression, que vous soyez débutant ou expérimenté."
        />
        <ImageSection src="/images/step1_fr.png" alt="Étape 1 - Description de votre projet" />
      </div>
      <Icons variant={Variant.ArrowDown7} className="w-36 h-36 flex justify-center mx-auto" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
        <ImageSection src="/images/step2_fr.png" alt="Étape 2 - Analyse de votre projet" />
        <TextSection
          step="Étape 2"
          title="Analyser votre projet"
          description="Dès que votre idée est saisie, l'IA se met au travail. Elle réfléchit comme un analyste business, un expert produit, un marketer et un investisseur réunis. Elle identifie votre segment de marché, le profil des clients potentiels, la problématique que vous résolvez et la pertinence de votre solution."
          objective="💡 En quelques secondes, vous avez une vision complète de votre projet, bien au-delà d'un simple brainstorming."
        />
      </div>
      <Icons variant={Variant.ArrowDown6} className="w-36 h-36 flex justify-center mx-auto" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
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
