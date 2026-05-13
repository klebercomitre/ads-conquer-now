import { useContent } from "@/contexts/ContentContext";

export const HowItWorksSection = () => {
  const { content } = useContent();
  if (!content.sections.howItWorks) return null;

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container px-5 md:px-8">
        <div className="max-w-2xl mb-14 md:mb-20">
          <h2 className="text-2xl md:text-5xl font-extrabold text-foreground mb-4 tracking-tight leading-[1.1]">{content.howTitle}</h2>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed">{content.howSubtitle}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-12 max-w-6xl mx-auto">
          {content.howSteps.map((s) => (
            <div key={s.id} className="space-y-3 border-t border-foreground pt-5">
              <div className="text-xs font-semibold text-muted-foreground tracking-[0.2em] uppercase">{s.step}</div>
              <h3 className="font-bold text-foreground text-xl tracking-tight">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
