import { WhatsAppButton } from "../WhatsAppButton";
import { useContent } from "@/contexts/ContentContext";

export const CtaSection = () => {
  const { content } = useContent();
  if (!content.sections.cta) return null;

  return (
    <section className="py-24 md:py-36 bg-gradient-hero">
      <div className="container px-5 md:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-8 md:space-y-10">
          <h2 className="text-3xl md:text-6xl font-extrabold text-primary-foreground leading-[1.05] tracking-tight">
            {content.ctaTitle}
          </h2>
          <p className="text-lg text-primary-foreground/65 max-w-xl mx-auto leading-relaxed">{content.ctaSubtitle}</p>
          <div className="pt-2">
            <WhatsAppButton size="lg">{content.ctaButtonText}</WhatsAppButton>
          </div>
        </div>
      </div>
    </section>
  );
};
