import { AlertTriangle } from "lucide-react";
import { useContent } from "@/contexts/ContentContext";

export const PainSection = () => {
  const { content } = useContent();
  if (!content.sections.pain) return null;

  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">{content.painTitle}</h2>
          <p className="text-muted-foreground text-lg">{content.painSubtitle}</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {content.painItems.map((pain) => (
            <div key={pain.id} className="p-6 rounded-xl border border-destructive/20 bg-destructive/5 space-y-3 transition-all hover:shadow-card">
              <div className="flex items-center gap-3">
                <AlertTriangle className="w-5 h-5 text-destructive flex-shrink-0" />
                <h3 className="font-bold text-foreground text-lg">{pain.title}</h3>
              </div>
              <p className="text-muted-foreground">{pain.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
