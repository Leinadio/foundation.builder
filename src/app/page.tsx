import { Hero } from "@/components/landing/Hero";
import { HowItWork } from "@/components/landing/HowItWork";
import { Feature } from "@/components/ui/feature-with-image-comparison";
import { ForWho } from "@/components/landing/ForWho";
import { Pricing } from "@/components/landing/Pricing";
import { ShowcaseBlog } from "@/components/landing/ShowcaseBlog";
import { FeatureSectionWithBento } from "@/components/landing/FeatureSectionWithBento";
import { FeatureSectionWithHoverEffects } from "@/components/landing/FeatureSectionWithHoverEffects";
import { WithWithout } from "@/components/landing/WithWithout";
import { SuccessPath } from "@/components/landing/SuccessPath";
import { Solution } from "@/components/landing/Profit";
import { FeatureBentoGrid } from "@/components/landing/FeatureBentoGrid";
import { StartupStruggles } from "@/components/landing/StartupStruggles";

export default function Home() {
  return (
    <div>
      <Hero />
      <div className={`px-5 lg:px-0 mx-auto max-w-6xl flex flex-col mt-32 gap-32`}>
        <FeatureBentoGrid />
        <StartupStruggles />
        <SuccessPath />
        <Solution />
        <HowItWork />
        <ForWho />
        <FeatureSectionWithHoverEffects />
        <FeatureSectionWithBento />
        <WithWithout />
        <Feature />
        <Pricing />
      </div>
      <div className={`mt-32`}>
        <ShowcaseBlog />
      </div>
    </div>
  );
}

// Terminé
// TODO: Chercher des composants Landing Page sur V0x
// TODO: Schématiser sur excalidraw le DI-Container-Client et DI-Container-Server
// TODO: Gérer la taille de l'image en essayant d'enlever la width et height qui sont dynamiques pour le composant HowItWorks
// TODO: Créer un composant problème
// TODO: Créer un composant solution

// En cours
// TODO: Plutôt que de mettre la sidebar entière dans storybook,
// mieux vaut mettre seulement les comoposants du sidebar car la sidebar est une section de la page
// au même titre que le header
// TODO: Gérer l'espacement entre les sections
// TODO: Pour le composant ForWho, regarder un caroussel
// TODO: Transformer Profit en problem solution en un seul bloc

// TODO: StartupStruggles doit ressembler a SuccessPath
