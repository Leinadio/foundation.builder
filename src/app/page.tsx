import { pageConfig } from "@/utils/page-renderer-config";
import { DynamicRenderer } from "@/components/common/DynamicRenderer";

export default async function Home() {
  return <DynamicRenderer sections={pageConfig} />;
}

// Terminé
// TODO: Vérifier le schéma sur excalidraw
// TODO: Créer la double structure server et client

// En cours
// TODO: Ajouter les sections de la sidebar dans foundation.ui
// TODO: Se renseigner sur Claude Code
// TODO: Créer la CI/CD pour foundation.ui
// TODO: Créer la CI/CD pour foundation.builder
// TODO: Créer les composants du dashboard
// TODO: Vérifier que le typage dans page-renderer-config.tsx et les composants de la landing page sont cohérents
// TODO: Même paramètre nommé sur les fonction que dans les interfaces
// TODO: Ajouter les blocks UI de sign-in et sign-up dans foundation.ui
// TODO: Mettre zod dans les formulaires de sign-in et sign-up
