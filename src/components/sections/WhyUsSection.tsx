import { Handshake, Sparkles, Zap, FileText, Target, Database } from "lucide-react";
import { useContent } from "@/contexts/ContentContext";

const icons = [Handshake, Sparkles, Zap, FileText, Target, Database];

export const WhyUsSection = () => {
  const { content } = useContent();
  if (!content.sections.whyUs) return null;

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container px-5 md:px-8">
        <div className="max-w-2xl mb-14 md:mb-20">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">Diferenciais</p>
          <h2 className="text-2xl md:text-5xl font-extrabold text-foreground mb-4 tracking-tight leading-[1.1]">
            {content.whyUsTitle}
          </h2>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed">{content.whyUsSubtitle}</p>
        </div>
        <div className="grid gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {content.whyUsItems.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={item.id} className="space-y-4 border-t border-border pt-6">
                <Icon className="w-6 h-6 text-primary" strokeWidth={1.75} />
                <h3 className="font-bold text-foreground text-lg md:text-xl tracking-tight">{item.title}</h3>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};