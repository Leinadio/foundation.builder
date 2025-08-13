import React, { ReactNode } from "react";
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

export type ComponentConfig = {
  component: string;
  props: Record<string, unknown>;
  id?: string;
  wrapperClass?: string;
};

export type SectionConfig = {
  type: "header" | "section" | "section-full-width" | "footer";
  components: ComponentConfig[];
};

// Mapping des composants
// eslint-disable-next-line @typescript-eslint/no-explicit-any
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

export function DynamicRenderer({ sections }: { sections: SectionConfig[] }): ReactNode {
  return (
    <>
      {sections.map((section, sectionIndex) => {
        if (section.type === "header") {
          return (
            <React.Fragment key={`header-${sectionIndex}`}>
              {section.components.map((config, index) => {
                const Component = componentsMap[config.component];
                if (!Component) return null;
                return <Component key={`header-${sectionIndex}-component-${index}`} {...config.props} />;
              })}
            </React.Fragment>
          );
        }

        if (section.type === "section") {
          return (
            <div key={`section-${sectionIndex}`} className="px-5 lg:px-0 mx-auto max-w-6xl flex flex-col mt-32 gap-32">
              {section.components.map((config, index) => {
                const Component = componentsMap[config.component];
                if (!Component) return null;
                return (
                  <section key={`section-${sectionIndex}-component-${index}`} id={config.id}>
                    <Component {...config.props} />
                  </section>
                );
              })}
            </div>
          );
        }

        if (section.type === "section-full-width") {
          return (
            <div key={`full-width-${sectionIndex}`} className="w-full flex flex-col mt-32 gap-32">
              {section.components.map((config, index) => {
                const Component = componentsMap[config.component];
                if (!Component) return null;
                return (
                  <section key={`full-width-${sectionIndex}-component-${index}`} id={config.id}>
                    <Component {...config.props} />
                  </section>
                );
              })}
            </div>
          );
        }

        if (section.type === "footer") {
          return (
            <div key={`footer-${sectionIndex}`} className="mt-32">
              {section.components.map((config, index) => {
                const Component = componentsMap[config.component];
                if (!Component) return null;
                return <Component key={`footer-${sectionIndex}-component-${index}`} {...config.props} />;
              })}
            </div>
          );
        }

        return null;
      })}
    </>
  );
}
