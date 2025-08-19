import { pageConfig } from "@/lib/page-renderer-config";
import { DynamicRenderer } from "@/components/common/DynamicRenderer";

export default async function Home() {
  return <DynamicRenderer sections={pageConfig} />;
}

// Terminé
// TODO: Chercher des composants Landing Page sur V0x
// TODO: Schématiser sur excalidraw le DI-Container-Client et DI-Container-Server
// TODO: Gérer la taille de l'image en essayant d'enlever la width et height qui sont dynamiques pour le composant HowItWorks
// TODO: Créer un composant problème
// TODO: Créer un composant solution

// En cours
// TODO: Plutôt que de mettre la sidebar entière dans storybook, mieux vaut mettre seulement les comoposants du sidebar car la sidebar est une section de la page au même titre que le header
// TODO: Comprendre TS pour builder foundation.ui

// TODO: Mettre tout les composants dans registry shadcn
// TODO: Regarder la vidéo Cursor
// TODO: Ajouter les composants de foundation.builder dans foundation.ui
// TODO: Créer la CI/CD pour foundation.ui
// TODO: Créer la CI/CD pour foundation.builder

// TODO: Brancher l'authentification dans foundation.builder avec AuthDialog
// TODO: Créer les composants du dashboard
// TODO: Les types doivent correspondre dans page-renderer-config.tsx et les composants de la landing page
// TODO: Même paramètre nommé sur les fonction que dans les interfaces
