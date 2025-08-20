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
// TODO: Vérifier le schéma sur excalidraw
// TODO: Ajouter les sections de la sidebar dans foundation.ui
// TODO: Se renseigner sur Claude Code
// TODO: Créer la CI/CD pour foundation.ui
// TODO: Créer la CI/CD pour foundation.builder
// TODO: Créer les composants du dashboard
// TODO: Vérifier que le typage dans page-renderer-config.tsx et les composants de la landing page sont cohérents
// TODO: Même paramètre nommé sur les fonction que dans les interfaces
// TODO: Ajouter les blocks UI de sign-in et sign-up dans foundation.ui
// TODO: Mettre zod dans les formulaires de sign-in et sign-up
