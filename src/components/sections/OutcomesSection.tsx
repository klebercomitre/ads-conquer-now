import { TrendingUp, MessageSquare, ShoppingBag, Award, Search, LineChart } from "lucide-react";
import { useContent } from "@/contexts/ContentContext";

const icons = [MessageSquare, ShoppingBag, TrendingUp, Award, Search, LineChart];

export const OutcomesSection = () => {
  const { content } = useContent();
  if (!content.sections.outcomes) return null;

  return (
    <section className="py-20 md:py-28 bg-secondary">
      <div className="container px-5 md:px-8">
        <div className="max-w-2xl mb-14 md:mb-20">
          <h2 className="text-2xl md:text-5xl font-extrabold text-foreground mb-4 tracking-tight leading-[1.1]">
            {content.outcomesTitle}
          </h2>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
            {content.outcomesSubtitle}
          </p>
        </div>
        <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {content.outcomesItems.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div
                key={item.id}
                className="group bg-background border border-border p-7 md:p-8 space-y-4 transition-all duration-300 hover:border-primary/40 hover:shadow-elevated"
              >
                <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                  <Icon className="w-5 h-5 text-primary" strokeWidth={2} />
                </div>
                <h3 className="font-bold text-foreground text-lg md:text-xl tracking-tight">{item.title}</h3>
                {item.desc && <p className="text-muted-foreground text-sm md:text-base leading-relaxed">{item.desc}</p>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};