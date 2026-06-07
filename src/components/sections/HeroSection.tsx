import { WhatsAppButton } from "../WhatsAppButton";
import { useContent } from "@/contexts/ContentContext";
import aceLeraLogo from "@/assets/acelera-logo.svg";
import heroBg from "@/assets/hero-bg.jpg";

export const HeroSection = () => {
  const { content } = useContent();
  if (!content.sections.hero) return null;

  return (
    <section className="relative bg-gradient-hero min-h-[88vh] flex items-center overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-cover bg-center opacity-30 scale-105"
        style={{ backgroundImage: `url(${heroBg})`, filter: "blur(2px)" }}
      />
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-[hsl(228,60%,10%)]/85 via-[hsl(228,55%,12%)]/80 to-[hsl(228,60%,8%)]/95" />
      <div className="container relative z-10 py-20 md:py-28 px-5 md:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8 md:space-y-10">
          <img src={aceLeraLogo} alt="Acelera Ads" className="h-16 md:h-20 mx-auto brightness-0 invert opacity-90" />
          <h1 className="text-[28px] md:text-5xl lg:text-6xl font-extrabold leading-[1.08] tracking-[-0.02em] text-primary-foreground">
            {content.heroHeadline}{" "}
            <span className="text-whatsapp">{content.heroHighlight}</span>
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/65 max-w-2xl mx-auto leading-relaxed font-normal">
            {content.heroSubheadline}
          </p>
          <div className="pt-2">
            <WhatsAppButton size="lg">{content.heroCtaText}</WhatsAppButton>
          </div>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 pt-8 md:pt-12 text-primary-foreground/45 text-xs uppercase tracking-[0.15em]">
            {content.heroBadges.map((badge, i) => (
              <span key={i}>{badge}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
