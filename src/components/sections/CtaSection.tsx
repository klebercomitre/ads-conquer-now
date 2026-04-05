import { WhatsAppButton } from "../WhatsAppButton";
import { useContent } from "@/contexts/ContentContext";

export const CtaSection = () => {
  const { content } = useContent();
  if (!content.sections.cta) return null;

  return (
    <section className="py-14 md:py-20 bg-gradient-hero">
      <div className="container px-5 md:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-5 md:space-y-8">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-primary-foreground leading-tight">
            {content.ctaTitle}
          </h2>
          <p className="text-base md:text-lg text-primary-foreground/70 max-w-xl mx-auto">{content.ctaSubtitle}</p>
          <WhatsAppButton size="lg">{content.ctaButtonText}</WhatsAppButton>
        </div>
      </div>
    </section>
  );
};
