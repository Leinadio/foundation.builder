import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

interface Faq3Props {
  heading: string;
  description: string;
  items?: FaqItem[];
  badge: string;
  headingHighlight: string;
}

export function Component({ items = [], heading, description, badge, headingHighlight }: Faq3Props) {
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
      <Accordion type="single" collapsible className="mx-auto w-full lg:max-w-3xl">
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
