import { Check } from "lucide-react";
import { WhatsAppButton } from "../WhatsAppButton";
import { useContent } from "@/contexts/ContentContext";

export const BenefitsSection = () => {
  const { content } = useContent();
  if (!content.sections.benefits) return null;

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container px-5 md:px-8">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-6 md:space-y-8">
            <h2 className="text-3xl md:text-5xl font-extrabold text-foreground tracking-tight leading-[1.1]">{content.benefitsTitle}</h2>
            <div className="space-y-4 border-t border-border pt-6">
              {content.benefitItems.map((b) => (
                <div key={b.id} className="flex items-start gap-3 pb-4 border-b border-border last:border-b-0">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                  <span className="text-foreground text-base">{b.text}</span>
                </div>
              ))}
            </div>
            <div className="pt-2">
              <WhatsAppButton>{content.benefitsCtaText}</WhatsAppButton>
            </div>
          </div>
          <div className="flex justify-center w-full">
            <div className="w-full max-w-[340px] aspect-square bg-foreground flex flex-col items-center justify-center text-center p-8">
              <div className="text-6xl md:text-7xl font-extrabold text-background tracking-tight">{content.benefitsHighlightValue}</div>
              <div className="text-sm text-background/60 mt-3 whitespace-pre-line uppercase tracking-wider">{content.benefitsHighlightLabel}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
