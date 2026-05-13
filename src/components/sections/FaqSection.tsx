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
    <section className="py-20 md:py-28 bg-background">
      <div className="container px-5 md:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-12 md:mb-16 tracking-tight leading-[1.1]">{content.faqTitle}</h2>
          <Accordion type="single" collapsible className="border-t border-border">
            {content.faqItems.map((faq, i) => (
              <AccordionItem key={faq.id} value={`faq-${i}`} className="border-b border-border">
                <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline text-base md:text-lg py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
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
