import { Search, Map, Rocket, TrendingUp } from "lucide-react";
import { useContent } from "@/contexts/ContentContext";

const icons = [Search, Map, Rocket, TrendingUp];

export const HowItWorksSection = () => {
  const { content } = useContent();
  if (!content.sections.howItWorks) return null;

  return (
    <section className="py-14 md:py-20 bg-background">
      <div className="container px-5 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
          <h2 className="text-2xl md:text-4xl font-extrabold text-foreground mb-3 md:mb-4">{content.howTitle}</h2>
          <p className="text-muted-foreground text-base md:text-lg">{content.howSubtitle}</p>
        </div>
        {/* Mobile: vertical timeline */}
        <div className="md:hidden space-y-6 max-w-sm mx-auto">
          {content.howSteps.map((s, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={s.id} className="flex gap-4 items-start">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  {i < content.howSteps.length - 1 && (
                    <div className="w-0.5 h-8 bg-border mt-2" />
                  )}
                </div>
                <div className="pt-1">
                  <span className="text-xs font-bold text-primary tracking-widest">{s.step}</span>
                  <h3 className="font-bold text-foreground text-base mt-1">{s.title}</h3>
                  <p className="text-muted-foreground text-sm mt-1">{s.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
        {/* Desktop: horizontal */}
        <div className="hidden md:grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {content.howSteps.map((s, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={s.id} className="text-center space-y-4 relative">
                {i < content.howSteps.length - 1 && (
                  <div className="absolute top-8 left-[60%] w-[80%] h-[2px] bg-border" />
                )}
                <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mx-auto relative z-10">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <div className="text-xs font-bold text-primary tracking-widest">{s.step}</div>
                <h3 className="font-bold text-foreground text-lg">{s.title}</h3>
                <p className="text-muted-foreground text-sm">{s.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
