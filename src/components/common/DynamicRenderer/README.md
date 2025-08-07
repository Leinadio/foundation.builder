# DynamicRenderer

Ce composant permet de rendre dynamiquement des sections de page à partir d'une configuration JSON.

## Utilisation

```tsx
import { DynamicRenderer } from "@/components/common/DynamicRenderer";
import { loadPageConfig, SectionConfig } from "@/lib/load-page-config";

export default async function MaPage() {
  const pageConfig = await loadPageConfig();

  // Fonction pour rendre une section en fonction de son type
  const renderSection = (section: SectionConfig, index: number) => {
    if (section.type === "header") {
      return <DynamicRenderer key={`header-${index}`} config={section.components} />;
    }

    if (section.type === "section") {
      return (
        <div key={`section-${index}`} className="container mx-auto px-4 my-8">
          <DynamicRenderer config={section.components} />
        </div>
      );
    }

    if (section.type === "section-full-width") {
      return (
        <div key={`full-width-${index}`} className="w-full my-8">
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
```

## Structure de la configuration

La configuration est un tableau d'objets, chacun représentant une section avec un type et un tableau de composants :

```typescript
type ComponentConfig = {
  component: string; // Nom du composant à rendre
  props: Record<string, any>; // Props à passer au composant
  section?: string; // ID de section optionnel (pour les ancres de navigation)
  wrapperClass?: string; // Classes CSS optionnelles pour un div wrapper
};

type SectionConfig = {
  type: string; // Type de la section (header, section, section-full-width, footer, etc.)
  components: ComponentConfig[]; // Composants de la section
};

type PageConfig = SectionConfig[]; // Tableau de sections
```

## Exemple de configuration

```json
[
  {
    "type": "header",
    "components": [
      {
        "component": "Header",
        "props": {}
      },
      {
        "component": "Hero",
        "props": {
          "title": "Mon titre personnalisé",
          "subtitle": "Sous-titre"
        }
      }
    ]
  },
  {
    "type": "section",
    "components": [
      {
        "section": "probleme",
        "component": "StartupStruggles",
        "props": {}
      }
    ]
  },
  {
    "type": "section-full-width",
    "components": [
      {
        "component": "ForWho",
        "props": {}
      }
    ]
  },
  {
    "type": "section",
    "components": [
      {
        "section": "solution",
        "component": "SuccessPath",
        "props": {}
      }
    ]
  },
  {
    "type": "footer",
    "components": [
      {
        "component": "Footer",
        "props": {},
        "wrapperClass": "mt-32"
      }
    ]
  }
]
```

## Ajouter un nouveau composant

1. Créez votre composant dans le dossier approprié
2. Importez-le dans `DynamicRenderer/index.tsx`
3. Ajoutez-le au `componentsMap`
4. Ajoutez une entrée correspondante dans votre fichier de configuration JSON

## Types de sections disponibles

- **header** : Section d'en-tête, généralement en haut de la page
- **section** : Section standard avec une largeur limitée et des marges
- **section-full-width** : Section pleine largeur sans contrainte de taille
- **footer** : Section de pied de page, généralement en bas de la page

## Avantages

- L'ordre des éléments dans le tableau définit leur placement sur la page
- Possibilité d'alterner librement entre sections standard et sections pleine largeur
- L'ordre des composants dans chaque section définit leur placement dans la section
- Organisation structurée par types de sections (header, section, section-full-width, footer)
- Séparation claire entre la structure de la page et les composants
- Possibilité de modifier l'ordre des sections sans toucher au code
- Configuration facilement modifiable sans compétences en développement
- Structure adaptée pour une future intégration avec un CMS
- Flexibilité pour ajouter de nouvelles sections personnalisées
