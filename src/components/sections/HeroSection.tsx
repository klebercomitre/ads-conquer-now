import { WhatsAppButton } from "../WhatsAppButton";
import { useContent } from "@/contexts/ContentContext";
import aceLeraLogo from "@/assets/acelera-logo.svg";

export const HeroSection = () => {
  const { content } = useContent();
  if (!content.sections.hero) return null;

  return (
    <section className="relative bg-gradient-hero min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-primary-glow/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full bg-primary/10 blur-3xl" />
      </div>
      <div className="container relative z-10 py-20">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <img src={aceLeraLogo} alt="Acelera Ads" className="h-16 md:h-20 mx-auto mb-6 brightness-0 invert opacity-90" />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-primary-foreground">
            {content.heroHeadline}{" "}
            <span className="text-whatsapp">{content.heroHighlight}</span>
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/70 max-w-2xl mx-auto leading-relaxed">
            {content.heroSubheadline}
          </p>
          <div className="pt-4">
            <WhatsAppButton size="lg">{content.heroCtaText}</WhatsAppButton>
          </div>
          <div className="flex flex-wrap justify-center gap-8 pt-8 text-primary-foreground/50 text-sm">
            {content.heroBadges.map((badge, i) => (
              <span key={i}>{badge}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
