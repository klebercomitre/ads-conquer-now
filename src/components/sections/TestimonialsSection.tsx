import { Star } from "lucide-react";
import { useContent } from "@/contexts/ContentContext";

export const TestimonialsSection = () => {
  const { content } = useContent();
  if (!content.sections.testimonials) return null;

  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">{content.testimonialsTitle}</h2>
          <p className="text-muted-foreground text-lg">{content.testimonialsSubtitle}</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {content.testimonials.map((t) => (
            <div key={t.id} className="p-6 rounded-xl border bg-card shadow-card space-y-4">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-foreground italic">"{t.text}"</p>
              <div>
                <div className="font-bold text-foreground">{t.name}</div>
                <div className="text-sm text-muted-foreground">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
