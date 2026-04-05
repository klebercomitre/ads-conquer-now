import { WhatsAppButton } from "../WhatsAppButton";
import { useContent } from "@/contexts/ContentContext";
import aceLeraLogo from "@/assets/acelera-logo.svg";

export const HeroSection = () => {
  const { content } = useContent();
  if (!content.sections.hero) return null;

  return (
    <section className="relative bg-gradient-hero min-h-[80vh] md:min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 md:-top-40 md:-right-40 w-[300px] md:w-[500px] h-[300px] md:h-[500px] rounded-full bg-primary-glow/10 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 md:-bottom-40 md:-left-40 w-[200px] md:w-[400px] h-[200px] md:h-[400px] rounded-full bg-primary/10 blur-3xl" />
      </div>
      <div className="container relative z-10 py-12 md:py-20 px-5 md:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-6 md:space-y-8">
          <img src={aceLeraLogo} alt="Acelera Ads" className="h-12 md:h-20 mx-auto mb-4 md:mb-6 brightness-0 invert opacity-90" />
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-[1.15] text-primary-foreground">
            {content.heroHeadline}{" "}
            <span className="text-whatsapp">{content.heroHighlight}</span>
          </h1>
          <p className="text-base md:text-xl text-primary-foreground/70 max-w-2xl mx-auto leading-relaxed">
            {content.heroSubheadline}
          </p>
          <div className="pt-2 md:pt-4">
            <WhatsAppButton size="lg">{content.heroCtaText}</WhatsAppButton>
          </div>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 pt-4 md:pt-8 text-primary-foreground/50 text-xs md:text-sm">
            {content.heroBadges.map((badge, i) => (
              <span key={i}>{badge}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
