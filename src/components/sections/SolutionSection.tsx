import { Crosshair, Settings, LineChart, Lightbulb } from "lucide-react";
import { WhatsAppButton } from "../WhatsAppButton";
import { useContent } from "@/contexts/ContentContext";

const icons = [Lightbulb, Settings, LineChart, Crosshair];

export const SolutionSection = () => {
  const { content } = useContent();
  if (!content.sections.solution) return null;

  return (
    <section className="py-20 bg-gradient-hero text-primary-foreground">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">{content.solutionTitle}</h2>
          <p className="text-primary-foreground/70 text-lg">{content.solutionSubtitle}</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {content.solutionItems.map((s, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={s.id} className="p-6 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10 space-y-4 backdrop-blur-sm">
                <Icon className="w-10 h-10 text-whatsapp" />
                <h3 className="font-bold text-lg">{s.title}</h3>
                <p className="text-primary-foreground/60 text-sm">{s.desc}</p>
              </div>
            );
          })}
        </div>
        <div className="text-center pt-12">
          <WhatsAppButton size="lg">{content.solutionCtaText}</WhatsAppButton>
        </div>
      </div>
    </section>
  );
};
