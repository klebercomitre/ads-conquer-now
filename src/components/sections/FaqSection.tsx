import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useContent } from "@/contexts/ContentContext";

export const FaqSection = () => {
  const { content } = useContent();
  if (!content.sections.faq) return null;

  return (
    <section className="py-14 md:py-20 bg-background">
      <div className="container px-5 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
          <h2 className="text-2xl md:text-4xl font-extrabold text-foreground mb-3 md:mb-4">{content.faqTitle}</h2>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {content.faqItems.map((faq, i) => (
              <AccordionItem key={faq.id} value={`faq-${i}`} className="border rounded-xl px-4 md:px-6 bg-card shadow-card">
                <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline text-sm md:text-base">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm md:text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
