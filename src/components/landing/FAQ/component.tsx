import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

interface Faq3Props {
  heading: string;
  description: string;
  items?: FaqItem[];
  supportHeading: string;
  supportDescription: string;
  supportButtonText: string;
  supportButtonUrl: string;
}

const faqItems = [
  {
    id: "faq-1",
    question: "What is a FAQ?",
    answer: "A FAQ is a list of frequently asked questions and answers on a particular topic.",
  },
  {
    id: "faq-2",
    question: "What is the purpose of a FAQ?",
    answer:
      "The purpose of a FAQ is to provide answers to common questions and help users find the information they need quickly and easily.",
  },
  {
    id: "faq-3",
    question: "How do I create a FAQ?",
    answer:
      "To create a FAQ, you need to compile a list of common questions and answers on a particular topic and organize them in a clear and easy-to-navigate format.",
  },
  {
    id: "faq-4",
    question: "What are the benefits of a FAQ?",
    answer:
      "The benefits of a FAQ include providing quick and easy access to information, reducing the number of support requests, and improving the overall user experience.",
  },
  {
    id: "faq-5",
    question: "How should I organize my FAQ?",
    answer:
      "You should organize your FAQ in a logical manner, grouping related questions together and ordering them from most basic to more advanced topics.",
  },
  {
    id: "faq-6",
    question: "How long should FAQ answers be?",
    answer:
      "FAQ answers should be concise and to the point, typically a few sentences or a short paragraph is sufficient for most questions.",
  },
  {
    id: "faq-7",
    question: "Should I include links in my FAQ?",
    answer:
      "Yes, including links to more detailed information or related resources can be very helpful for users who want to learn more about a particular topic.",
  },
];

export function Component({ items = faqItems }: Faq3Props) {
  return (
    <section className="container space-y-16 flex gap-16">
      <div className="mx-auto flex max-w-3xl flex-col text-left">
        <Badge variant="default" className="mb-4 w-fit">
          {"FAQ"}
        </Badge>
        <h2 className="mb-3 text-3xl font-semibold md:mb-4 lg:mb-6 lg:text-4xl">
          {"Besoin d'aide ? "}
          <br />
          <span className="text-primary">{"Nous avons les réponses."}</span>
        </h2>
        <p className="text-muted-foreground lg:text-lg">
          {"Vous avez encore des questions ? N'hésitez pas à me contacter sur mon email : "}
          <a href="mailto:contact@foundation.builder" className="text-primary">
            {"contact@foundation.builder"}
          </a>
        </p>
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
