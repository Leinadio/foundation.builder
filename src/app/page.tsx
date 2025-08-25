import { pageRenderConfig } from "../../page-render-config";
import { DynamicRenderer } from "@/components/config/dynamic-renderer";

export default async function Home() {
  return <DynamicRenderer sections={pageRenderConfig} />;
}

// Terminé
// TODO: Vérifier le schéma sur excalidraw
// TODO: Créer la double structure server et client

// En cours
// TODO: Même paramètre nommé sur les fonction que dans les interfaces
// TODO: Réfléchir à la structure des composants pour le dashboard avec excalidraw
// TODO: Ajouter les sections de la sidebar dans foundation.ui
// TODO: Se renseigner sur Claude Code
// TODO: Créer la CI/CD pour foundation.ui
// TODO: Créer la CI/CD pour foundation.builder
// TODO: Vérifier que le typage dans page-renderer-config.tsx et les composants de la landing page sont cohérents
// TODO: Ajouter les blocks UI de sign-in et sign-up dans foundation.ui
// TODO: Mettre zod dans les formulaires de sign-in et sign-up
// TODO: Ajouter l'analytics Plausible dans foundation.builder
