import React, { ReactNode } from "react";
import {
  HeaderContainer,
  HeroContainer,
  HeroRowAdvancedContainer,
  HowItWorkContainer,
  HeroRowContainer,
  ProblemContainer,
  StartupStrugglesContainer,
  SuccessPathContainer,
  BentoGridContainer,
  ForWhoContainer,
  PricingContainer,
  FaqContainer,
  ShowcaseBlogContainer,
  FooterContainer,
  ImageComparisonContainer,
  WithWithoutContainer,
  HeroVideoContainer,
} from "@/blocks/landing-page";
import { ComponentBlock } from "@/components/config/dynamic-renderer/type";

export type SectionConfig = {
  type: "header" | "section" | "section-full-width" | "section-full-width-with-background" | "footer";
  components: ComponentBlock[];
};

// Mapping des composants
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const componentsMap: Record<string, React.ComponentType<any>> = {
  HeaderContainer,
  HeroContainer,
  HeroRowAdvancedContainer,
  HeroRowContainer,
  HowItWorkContainer,
  ForWhoContainer,
  PricingContainer,
  ShowcaseBlogContainer,
  SuccessPathContainer,
  BentoGridContainer,
  StartupStrugglesContainer,
  ProblemContainer,
  FooterContainer,
  FaqContainer,
  HeroVideoContainer,
  ImageComparisonContainer,
  WithWithoutContainer,
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

        if (section.type === "section-full-width-with-background") {
          return (
            <div
              key={`full-width-with-background-${sectionIndex}`}
              className="w-full flex flex-col mt-32 gap-32 bg-muted py-20"
            >
              {section.components.map((config, index) => {
                const Component = componentsMap[config.component];
                if (!Component) return null;

                return (
                  <section
                    key={`full-width-with-background-${sectionIndex}-component-${index}`}
                    id={config.id}
                    className="max-w-6xl mx-auto"
                  >
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
