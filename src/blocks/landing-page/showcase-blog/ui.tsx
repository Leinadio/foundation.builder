import { Gallery4 } from "@/components/ui/gallery4";

export interface ShowcaseBlogItem {
  id: string;
  title: string;
  description: string;
  href: string;
  image: string;
}

export interface ShowcaseBlogProps {
  title?: string;
  description?: string;
  items: ShowcaseBlogItem[];
}

const defaultData: ShowcaseBlogProps = {
  title: "Projets",
  description:
    "Découvrez comment les entreprises et développeurs leaders utilisent les technologies web modernes pour créer des expériences numériques exceptionnelles. Ces études de cas présentent des applications réelles et des histoires de succès.",
  items: [
    {
      id: "shadcn-ui",
      title: "shadcn/ui : Construire une bibliothèque de composants moderne",
      description:
        "Explorez comment shadcn/ui a révolutionné les bibliothèques de composants React en offrant une approche unique de distribution et de personnalisation des composants, facilitant la création d'applications belles et accessibles.",
      href: "https://ui.shadcn.com",
      image:
        "https://images.unsplash.com/photo-1551250928-243dc937c49d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxMjN8fHx8fHwyfHwxNzIzODA2OTM5fA&ixlib=rb-4.0.3&q=80&w=1080",
    },
    {
      id: "tailwind",
      title: "Tailwind CSS : La révolution utility-first",
      description:
        "Découvrez comment Tailwind CSS a transformé la façon dont les développeurs stylisent leurs applications, offrant une approche utility-first qui accélère le développement tout en maintenant une flexibilité de design complète.",
      href: "https://tailwindcss.com",
      image:
        "https://images.unsplash.com/photo-1551250928-e4a05afaed1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxMjR8fHx8fHwyfHwxNzIzODA2OTM5fA&ixlib=rb-4.0.3&q=80&w=1080",
    },
    {
      id: "astro",
      title: "Astro : Le framework web tout-en-un",
      description:
        "Apprenez comment l'architecture 'Islands Architecture' innovante d'Astro et son approche zéro-JS par défaut aident les développeurs à construire des sites web plus rapides tout en maintenant une interactivité riche là où c'est nécessaire.",
      href: "https://astro.build",
      image: "https://images.unsplash.com/10",
    },
    {
      id: "react",
      title: "React : Pionnier de l'interface utilisateur basée sur les composants",
      description:
        "Voyez comment React continue de façonner le développement web moderne avec son architecture basée sur les composants, permettant aux développeurs de construire des interfaces utilisateur complexes avec du code réutilisable et maintenable.",
      href: "https://react.dev",
      image:
        "https://images.unsplash.com/photo-1548324215-9133768e4094?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxMzF8fHx8fHwyfHwxNzIzNDM1MzA1fA&ixlib=rb-4.0.3&q=80&w=1080",
    },
    {
      id: "nextjs",
      title: "Next.js : Le framework React pour la production",
      description:
        "Explorez comment Next.js est devenu le framework incontournable pour construire des applications React full-stack, offrant des fonctionnalités comme les composants serveur, le routage basé sur les fichiers et l'optimisation automatique.",
      href: "https://nextjs.org",
      image:
        "https://images.unsplash.com/photo-1550070881-a5d71eda5800?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxMjV8fHx8fHwyfHwxNzIzNDM1Mjk4fA&ixlib=rb-4.0.3&q=80&w=1080",
    },
  ],
};

export function ShowcaseBlog(props: ShowcaseBlogProps = defaultData) {
  return <Gallery4 {...props} />;
}
