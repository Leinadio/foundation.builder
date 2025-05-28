import { Dictionary } from "@/app/[lang]/dictionaries";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export default function FAQ({
  dict,
}: {
  dict: Dictionary;
}) {
  return (
    <section className="py-16" id="faq">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl font-bold text-center mb-12">
          {dict.faq.title}
        </h2>
        <Accordion type="single" collapsible>
          {[
            {
              question: dict.faq.questions.q1.question,
              answer: dict.faq.questions.q1.answer,
            },
            {
              question: dict.faq.questions.q2.question,
              answer: dict.faq.questions.q2.answer,
            },
            {
              question: dict.faq.questions.q3.question,
              answer: dict.faq.questions.q3.answer,
            },
            {
              question: dict.faq.questions.q4.question,
              answer: dict.faq.questions.q4.answer,
            },
            {
              question: dict.faq.questions.q5.question,
              answer: dict.faq.questions.q5.answer,
            },
          ].map((faq, index) => (
            <AccordionItem
              value={`item-${index}`}
              key={index}
            >
              <AccordionTrigger className="text-xl font-medium">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="whitespace-pre-line text-lg">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
