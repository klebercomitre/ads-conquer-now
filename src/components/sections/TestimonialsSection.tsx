import { useContent } from "@/contexts/ContentContext";

export const TestimonialsSection = () => {
  const { content } = useContent();
  if (!content.sections.testimonials) return null;

  return (
    <section className="py-20 md:py-28 bg-secondary">
      <div className="container px-5 md:px-8">
        <div className="max-w-2xl mb-14 md:mb-20">
          <h2 className="text-2xl md:text-5xl font-extrabold text-foreground mb-4 tracking-tight leading-[1.1]">{content.testimonialsTitle}</h2>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed">{content.testimonialsSubtitle}</p>
        </div>
        <div className="grid gap-10 md:gap-12 md:grid-cols-3 max-w-6xl mx-auto">
          {content.testimonials.map((t) => (
            <figure key={t.id} className="space-y-6 border-t border-foreground pt-6">
              <blockquote className="text-foreground text-lg md:text-xl leading-snug font-medium tracking-tight">
                "{t.text}"
              </blockquote>
              <figcaption>
                <div className="font-semibold text-foreground text-sm">{t.name}</div>
                <div className="text-sm text-muted-foreground">{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};
