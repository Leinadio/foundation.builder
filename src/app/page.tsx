import { Hero } from "@/components/landing/Hero";
import { HowItWork } from "@/components/landing/HowItWork";
import { Feature } from "@/components/ui/feature-with-image-comparison";
import { ForWho } from "@/components/landing/ForWho";
import { Pricing } from "@/components/landing/Pricing";
import { ShowcaseBlog } from "@/components/landing/ShowcaseBlog";
import { FeatureSectionWithBento } from "@/components/landing/FeatureSectionWithBento";
import { FeatureSectionWithHoverEffects } from "@/components/landing/FeatureSectionWithHoverEffects";
import { WithWithout } from "@/components/landing/WithWithout";

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="px-4 md:px-0 mx-auto max-w-5xl flex flex-col mt-12 gap-12">
        <HowItWork />
        <FeatureSectionWithHoverEffects />
        <FeatureSectionWithBento />
        <WithWithout />
        <Feature />
        <ForWho />
        <Pricing />
      </div>
      <ShowcaseBlog />
    </div>
  );
}

// Terminé
// TODO: Chercher des composants Landing Page sur V0x
// TODO: Schématiser sur excalidraw le DI-Container-Client et DI-Container-Server

// En cours
// TODO: Plutôt que de mettre la sidebar entière dans storybook,
// mieux vaut mettre seulement les comoposants du sidebar car la sidebar est une section de la page
// au même titre que le header
// TODO: Gérer la taille de l'image en essayant d'enlever la width et height qui sont dynamiques
