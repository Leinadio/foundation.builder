import { loadPageConfig } from "@/lib/load-page-config";
import { DynamicRenderer } from "@/components/common/DynamicRenderer";

export default async function Home() {
  // Chargement de la configuration de page
  const pageConfig = await loadPageConfig();

  // Logique de rendu centralisée dans lib/load-page-config

  return (
    <div>
      {/* Rendu de toutes les sections dans l'ordre défini dans la configuration */}
      <DynamicRenderer sections={pageConfig} />
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
// TODO: Gérer les div et container différentes dans page.tsx notamment ligne 14
