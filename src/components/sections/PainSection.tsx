import { useContent } from "@/contexts/ContentContext";

export const PainSection = () => {
  const { content } = useContent();
  if (!content.sections.pain) return null;

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container px-5 md:px-8">
        <div className="max-w-2xl mb-14 md:mb-20">
          <h2 className="text-2xl md:text-5xl font-extrabold text-foreground mb-4 tracking-tight leading-[1.1]">{content.painTitle}</h2>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed">{content.painSubtitle}</p>
        </div>
        <div className="grid gap-x-10 gap-y-10 md:grid-cols-2 max-w-5xl mx-auto">
          {content.painItems.map((pain) => (
            <div key={pain.id} className="border-t border-border pt-5 space-y-2">
              <h3 className="font-bold text-foreground text-lg md:text-xl tracking-tight">{pain.title}</h3>
              <p className="text-muted-foreground text-base leading-relaxed">{pain.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
