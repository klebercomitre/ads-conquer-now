import { CheckCircle } from "lucide-react";
import { WhatsAppButton } from "../WhatsAppButton";
import { useContent } from "@/contexts/ContentContext";

export const BenefitsSection = () => {
  const { content } = useContent();
  if (!content.sections.benefits) return null;

  return (
    <section className="py-20 bg-secondary">
      <div className="container">
        <div className="max-w-4xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">{content.benefitsTitle}</h2>
            <div className="space-y-4">
              {content.benefitItems.map((b) => (
                <div key={b.id} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-whatsapp flex-shrink-0" />
                  <span className="text-foreground font-medium">{b.text}</span>
                </div>
              ))}
            </div>
            <div className="pt-4">
              <WhatsAppButton>{content.benefitsCtaText}</WhatsAppButton>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="w-72 h-72 rounded-2xl bg-gradient-hero flex items-center justify-center shadow-elevated">
              <div className="text-center text-primary-foreground space-y-2">
                <div className="text-6xl font-extrabold">{content.benefitsHighlightValue}</div>
                <div className="text-sm text-primary-foreground/70 whitespace-pre-line">{content.benefitsHighlightLabel}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
