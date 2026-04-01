import { Search, Map, Rocket, TrendingUp } from "lucide-react";
import { useContent } from "@/contexts/ContentContext";

const icons = [Search, Map, Rocket, TrendingUp];

export const HowItWorksSection = () => {
  const { content } = useContent();
  if (!content.sections.howItWorks) return null;

  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">{content.howTitle}</h2>
          <p className="text-muted-foreground text-lg">{content.howSubtitle}</p>
        </div>
        <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {content.howSteps.map((s, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={s.id} className="text-center space-y-4 relative">
                {i < content.howSteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-[2px] bg-border" />
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
