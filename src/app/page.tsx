import { DynamicRenderer } from "@/components/common/DynamicRenderer";
import { loadPageConfig, SectionConfig } from "@/lib/load-page-config";

export default async function Home() {
  // Chargement de la configuration de page
  const pageConfig = await loadPageConfig();

  // Fonction pour rendre une section en fonction de son type
  const renderSection = (section: SectionConfig, index: number) => {
    if (section.type === "header") {
      return <DynamicRenderer key={`header-${index}`} config={section.components} />;
    }

    if (section.type === "section") {
      return (
        <div key={`section-${index}`} className={`px-5 lg:px-0 mx-auto max-w-6xl flex flex-col mt-32 gap-32`}>
          <DynamicRenderer config={section.components} />
        </div>
      );
    }

    if (section.type === "section-full-width") {
      return (
        <div key={`full-width-${index}`} className={`w-full flex flex-col mt-32 gap-32`}>
          <DynamicRenderer config={section.components} />
        </div>
      );
    }

    if (section.type === "footer") {
      return <DynamicRenderer key={`footer-${index}`} config={section.components} />;
    }

    return null;
  };

  return (
    <div>
      {/* Rendu de toutes les sections dans l'ordre défini dans la configuration */}
      {pageConfig.map((section, index) => renderSection(section, index))}
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
