import { useContent } from "@/contexts/ContentContext";

export const ObjectionsSection = () => {
  const { content } = useContent();
  if (!content.sections.objections) return null;

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container px-5 md:px-8">
        <div className="max-w-2xl mb-14 md:mb-20">
          <h2 className="text-2xl md:text-5xl font-extrabold text-foreground tracking-tight leading-[1.1]">{content.objectionsTitle}</h2>
        </div>
        <div className="max-w-3xl mx-auto divide-y divide-border border-y border-border">
          {content.objectionItems.map((obj) => (
            <div key={obj.id} className="py-7 md:py-8 space-y-2">
              <h3 className="font-bold text-foreground text-lg md:text-xl tracking-tight">{obj.question}</h3>
              <p className="text-muted-foreground text-base leading-relaxed">{obj.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
