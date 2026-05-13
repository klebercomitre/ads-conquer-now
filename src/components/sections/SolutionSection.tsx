import { Crosshair, Settings, LineChart, Lightbulb } from "lucide-react";
import { WhatsAppButton } from "../WhatsAppButton";
import { useContent } from "@/contexts/ContentContext";

const icons = [Lightbulb, Settings, LineChart, Crosshair];

export const SolutionSection = () => {
  const { content } = useContent();
  if (!content.sections.solution) return null;

  return (
    <section className="py-20 md:py-28 bg-gradient-hero text-primary-foreground">
      <div className="container px-5 md:px-8">
        <div className="max-w-3xl mx-auto mb-14 md:mb-20 text-center">
          <h2 className="text-2xl md:text-5xl font-extrabold mb-5 tracking-tight leading-[1.1]">{content.solutionTitle}</h2>
          <p className="text-primary-foreground/65 text-base md:text-lg leading-relaxed">{content.solutionSubtitle}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-primary-foreground/10 border border-primary-foreground/10 max-w-5xl mx-auto">
          {content.solutionItems.map((s, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={s.id} className="p-7 md:p-8 bg-[hsl(228,55%,14%)] space-y-4">
                <Icon className="w-6 h-6 text-whatsapp" strokeWidth={1.75} />
                <h3 className="font-semibold text-base md:text-lg">{s.title}</h3>
                <p className="text-primary-foreground/55 text-sm leading-relaxed">{s.desc}</p>
              </div>
            );
          })}
        </div>
        <div className="text-center pt-12 md:pt-16">
          <WhatsAppButton size="lg">{content.solutionCtaText}</WhatsAppButton>
        </div>
      </div>
    </section>
  );
};
