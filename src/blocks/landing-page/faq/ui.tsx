import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface FaqProps {
  heading?: string;
  description?: string;
  items?: FaqItem[];
  badge?: string;
  headingHighlight?: string;
}

const defaultItems: FaqItem[] = [
  {
    id: "faq-1",
    question: "Qu'est-ce qu'une FAQ ?",
    answer: "Une FAQ est une liste de questions fréquemment posées et de leurs réponses sur un sujet particulier.",
  },
  {
    id: "faq-2",
    question: "Quel est le but d'une FAQ ?",
    answer:
      "Le but d'une FAQ est de fournir des réponses aux questions courantes et d'aider les utilisateurs à trouver rapidement et facilement les informations dont ils ont besoin.",
  },
  {
    id: "faq-3",
    question: "Comment créer une FAQ ?",
    answer:
      "Pour créer une FAQ, vous devez compiler une liste de questions et réponses courantes sur un sujet particulier et les organiser dans un format clair et facile à naviguer.",
  },
  {
    id: "faq-4",
    question: "Quels sont les avantages d'une FAQ ?",
    answer:
      "Les avantages d'une FAQ incluent un accès rapide et facile à l'information, la réduction du nombre de demandes de support, et l'amélioration de l'expérience utilisateur globale.",
  },
];

export function Faq({
  items = defaultItems,
  heading = "Besoin d'aide ?",
  description = "Vous avez encore des questions ? N'hésitez pas à me contacter sur mon email : contact@foundation.builder",
  badge = "FAQ",
  headingHighlight = "Nous avons les réponses.",
}: FaqProps) {
  return (
    <section className="container flex flex-col md:flex-row gap-8 md:gap-16">
      <div className="mx-auto flex max-w-3xl flex-col text-left">
        <Badge variant="default" className="mb-4 w-fit">
          {badge}
        </Badge>
        <h2 className="mb-3 text-3xl font-semibold md:mb-4 lg:mb-6 lg:text-4xl">
          {heading}
          <br />
          <span className="text-primary">{headingHighlight}</span>
        </h2>
        <p className="text-muted-foreground lg:text-lg">{description}</p>
      </div>
      <Accordion type="single" collapsible className="mx-asuto w-full lg:max-w-3xl">
        {items.map((item) => (
          <AccordionItem key={item.id} value={item.id}>
            <AccordionTrigger>
              <div className="font-medium lg:text-lg">{item.question}</div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="text-muted-foreground lg:text-lg">{item.answer}</div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
