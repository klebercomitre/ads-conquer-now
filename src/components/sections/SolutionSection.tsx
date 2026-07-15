import { Search, Instagram, LayoutTemplate, Sparkles } from "lucide-react";
import { WhatsAppButton } from "../WhatsAppButton";
import { useContent } from "@/contexts/ContentContext";

const icons = [Search, Instagram, LayoutTemplate, Sparkles];

export const SolutionSection = () => {
  const { content } = useContent();
  if (!content.sections.solution) return null;

  return (
    <section className="py-20 md:py-28 bg-gradient-hero text-primary-foreground">
      <div className="container px-5 md:px-8">
        <div className="max-w-3xl mx-auto mb-14 md:mb-20 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-whatsapp mb-4">Nossos serviços</p>
          <h2 className="text-2xl md:text-5xl font-extrabold mb-5 tracking-tight leading-[1.1]">{content.solutionTitle}</h2>
          <p className="text-primary-foreground/65 text-base md:text-lg leading-relaxed">{content.solutionSubtitle}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-primary-foreground/10 border border-primary-foreground/10 max-w-5xl mx-auto">
          {content.solutionItems.map((s, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={s.id} className="p-8 md:p-10 bg-[hsl(228,55%,14%)] space-y-5 transition-colors hover:bg-[hsl(228,55%,16%)]">
                <div className="w-12 h-12 rounded-lg bg-whatsapp/15 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-whatsapp" strokeWidth={2} />
                </div>
                <h3 className="font-bold text-lg md:text-xl tracking-tight">{s.title}</h3>
                <p className="text-primary-foreground/60 text-sm md:text-base leading-relaxed">{s.desc}</p>
              </div>
            );
          })}
        </div>

        {content.otherServicesItems && content.otherServicesItems.length > 0 && (
          <div className="max-w-5xl mx-auto pt-16 md:pt-20">
            <div className="flex items-center gap-4 mb-8">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/50">
                {content.otherServicesTitle}
              </span>
              <span className="flex-1 h-px bg-primary-foreground/10" />
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {content.otherServicesItems.map((o) => (
                <div key={o.id} className="border border-primary-foreground/10 p-6 space-y-2 bg-primary-foreground/[0.03]">
                  <h4 className="font-semibold text-primary-foreground text-base">{o.title}</h4>
                  <p className="text-primary-foreground/55 text-sm leading-relaxed">{o.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="text-center pt-14 md:pt-20">
          <WhatsAppButton size="lg">{content.solutionCtaText}</WhatsAppButton>
        </div>
      </div>
    </section>
  );
};
