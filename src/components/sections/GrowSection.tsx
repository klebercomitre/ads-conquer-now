import { useContent } from "@/contexts/ContentContext";

export const GrowSection = () => {
  const { content } = useContent();
  if (!content.sections.grow) return null;

  return (
    <section className="py-20 md:py-32 bg-background relative overflow-hidden">
      <div aria-hidden="true" className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px]" />
      <div className="container relative px-5 md:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-foreground tracking-tight leading-[1.05]">
            {content.growTitle}
          </h2>
          <div className="space-y-5 md:space-y-6 text-muted-foreground text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            {content.growParagraphs.map((p, i) => (
              <p key={i} className={i === 1 ? "text-foreground font-semibold text-xl md:text-2xl" : ""}>
                {p}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};