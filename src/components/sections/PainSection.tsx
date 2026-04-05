import { AlertTriangle } from "lucide-react";
import { useContent } from "@/contexts/ContentContext";

export const PainSection = () => {
  const { content } = useContent();
  if (!content.sections.pain) return null;

  return (
    <section className="py-14 md:py-20 bg-background">
      <div className="container px-5 md:px-8">
        <div className="max-w-2xl mx-auto mb-10 md:mb-14">
          <h2 className="text-2xl md:text-4xl font-extrabold text-foreground mb-3 md:mb-4">{content.painTitle}</h2>
          <p className="text-muted-foreground text-base md:text-lg">{content.painSubtitle}</p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 md:gap-6 max-w-4xl mx-auto">
          {content.painItems.map((pain) => (
            <div key={pain.id} className="p-5 md:p-6 rounded-xl border border-destructive/20 bg-destructive/5 space-y-2 md:space-y-3">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-foreground text-base md:text-lg">{pain.title}</h3>
                  <p className="text-muted-foreground text-sm md:text-base mt-1">{pain.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
