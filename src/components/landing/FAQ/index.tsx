import { Component, FaqItem } from "./component";
import { getComponentContent } from "@/lib/content";

export function FAQ() {
  const badge = getComponentContent("FAQ", "badge", "FAQ") as string;
  const heading = getComponentContent("FAQ", "heading", "Besoin d'aide ?") as string;
  const headingHighlight = getComponentContent("FAQ", "headingHighlight", "Nous avons les réponses.") as string;
  const description = getComponentContent(
    "FAQ",
    "description",
    "Vous avez encore des questions ? N'hésitez pas à me contacter sur mon email : contact@foundation.builder"
  ) as string;
  const items = getComponentContent("FAQ", "items") as unknown as FaqItem[];

  return (
    <Component
      badge={badge}
      heading={heading}
      headingHighlight={headingHighlight}
      description={description}
      items={items}
    />
  );
}
