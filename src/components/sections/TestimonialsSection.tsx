import { Star } from "lucide-react";
import { useContent } from "@/contexts/ContentContext";

export const TestimonialsSection = () => {
  const { content } = useContent();
  if (!content.sections.testimonials) return null;

  return (
    <section className="py-14 md:py-20 bg-background">
      <div className="container px-5 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
          <h2 className="text-2xl md:text-4xl font-extrabold text-foreground mb-3 md:mb-4">{content.testimonialsTitle}</h2>
          <p className="text-muted-foreground text-base md:text-lg">{content.testimonialsSubtitle}</p>
        </div>
        <div className="grid gap-4 md:grid-cols-3 md:gap-6 max-w-5xl mx-auto">
          {content.testimonials.map((t) => (
            <div key={t.id} className="p-5 md:p-6 rounded-xl border bg-card shadow-card space-y-3 md:space-y-4">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-foreground italic text-sm md:text-base">"{t.text}"</p>
              <div>
                <div className="font-bold text-foreground text-sm md:text-base">{t.name}</div>
                <div className="text-xs md:text-sm text-muted-foreground">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
