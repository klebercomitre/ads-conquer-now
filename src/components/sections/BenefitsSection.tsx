import { CheckCircle } from "lucide-react";
import { WhatsAppButton } from "../WhatsAppButton";
import { useContent } from "@/contexts/ContentContext";

export const BenefitsSection = () => {
  const { content } = useContent();
  if (!content.sections.benefits) return null;

  return (
    <section className="py-14 md:py-20 bg-secondary">
      <div className="container px-5 md:px-8">
        <div className="max-w-4xl mx-auto flex flex-col lg:flex-row items-center gap-8 md:gap-12">
          <div className="flex-1 space-y-5 md:space-y-6 w-full">
            <h2 className="text-2xl md:text-4xl font-extrabold text-foreground">{content.benefitsTitle}</h2>
            <div className="space-y-3 md:space-y-4">
              {content.benefitItems.map((b) => (
                <div key={b.id} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-whatsapp flex-shrink-0 mt-0.5" />
                  <span className="text-foreground font-medium text-sm md:text-base">{b.text}</span>
                </div>
              ))}
            </div>
            <div className="pt-2 md:pt-4">
              <WhatsAppButton>{content.benefitsCtaText}</WhatsAppButton>
            </div>
          </div>
          <div className="flex-1 flex justify-center w-full">
            <div className="w-full max-w-[280px] aspect-square rounded-2xl bg-gradient-hero flex items-center justify-center shadow-elevated">
              <div className="text-center text-primary-foreground space-y-2">
                <div className="text-5xl md:text-6xl font-extrabold">{content.benefitsHighlightValue}</div>
                <div className="text-xs md:text-sm text-primary-foreground/70 whitespace-pre-line">{content.benefitsHighlightLabel}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
