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
        className="absolute inset-0 bg-cover bg-center opacity-50 scale-110"
        style={{ backgroundImage: `url(${heroBg})`, filter: "blur(3px) saturate(1.1)" }}
      />
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-[hsl(228,60%,8%)]/80 via-[hsl(228,55%,10%)]/70 to-[hsl(228,60%,6%)]/95" />
      <div aria-hidden="true" className="absolute -top-32 -left-32 w-[480px] h-[480px] rounded-full bg-[hsl(228,85%,55%)]/25 blur-[120px]" />
      <div aria-hidden="true" className="absolute -bottom-40 -right-20 w-[520px] h-[520px] rounded-full bg-[hsl(142,71%,38%)]/15 blur-[140px]" />
      <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,hsl(228,60%,5%)_100%)]" />
      <div className="container relative z-10 py-20 md:py-28 px-5 md:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8 md:space-y-10">
          <img src={aceLeraLogo} alt="Acelera Ads" className="h-16 md:h-20 mx-auto brightness-0 invert opacity-95 drop-shadow-[0_4px_24px_hsl(228_85%_55%/0.4)]" />
          <h1 className="text-[28px] md:text-5xl lg:text-6xl font-extrabold leading-[1.08] tracking-[-0.02em] bg-gradient-to-b from-white via-white to-white/75 bg-clip-text text-transparent">
            {content.heroHeadline}{" "}
            <span className="bg-gradient-to-r from-[hsl(142,71%,55%)] to-[hsl(142,71%,42%)] bg-clip-text text-transparent">{content.heroHighlight}</span>
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/75 max-w-2xl mx-auto leading-relaxed font-normal">
            {content.heroSubheadline}
          </p>
          <div className="pt-2">
            <WhatsAppButton size="lg">{content.heroCtaText}</WhatsAppButton>
          </div>
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 pt-8 md:pt-12">
            {content.heroBadges.map((badge, i) => (
              <span
                key={i}
                className="px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-primary-foreground/70 text-[10px] md:text-xs uppercase tracking-[0.15em]"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
