"use client";

import { ReactNode } from "react";
import dynamic from "next/dynamic";

// Importation des composants
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { HowItWork } from "@/components/landing/HowItWork";
import { ForWho } from "@/components/landing/ForWho";
import { Pricing } from "@/components/landing/Pricing";
import { ShowcaseBlog } from "@/components/landing/ShowcaseBlog";
import { SuccessPath } from "@/components/landing/SuccessPath";
import { FeatureBentoGrid } from "@/components/landing/FeatureBentoGrid";
import { StartupStruggles } from "@/components/landing/StartupStruggles";
import { Footer } from "@/components/common/Footer";
import { FAQ } from "@/components/landing/FAQ";

// Définition du type pour la configuration
export type ComponentConfig = {
  component: string;
  props: Record<string, any>;
  section?: string;
  wrapperClass?: string;
};

// Mapping des composants
const componentsMap: Record<string, React.ComponentType<any>> = {
  Header,
  Hero,
  HowItWork,
  ForWho,
  Pricing,
  ShowcaseBlog,
  SuccessPath,
  FeatureBentoGrid,
  StartupStruggles,
  Footer,
  FAQ,
};

export function DynamicRenderer({ config }: { config: ComponentConfig[] }): ReactNode {
  return (
    <>
      {config.map((block, index) => {
        const Component = componentsMap[block.component];

        if (!Component) {
          console.warn(`Composant "${block.component}" non trouvé dans le mapping`);
          return null;
        }

        // Rendu du composant
        const renderedComponent = <Component key={`component-${index}`} {...block.props} />;

        // Si le composant doit être dans une section
        if (block.section) {
          return (
            <section key={`section-${index}`} id={block.section}>
              {renderedComponent}
            </section>
          );
        }

        // Si le composant a une classe wrapper
        if (block.wrapperClass) {
          return (
            <div key={`wrapper-${index}`} className={block.wrapperClass}>
              {renderedComponent}
            </div>
          );
        }

        // Sinon, rendu simple du composant
        return renderedComponent;
      })}
    </>
  );
}
