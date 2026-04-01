import { ShieldCheck } from "lucide-react";
import { useContent } from "@/contexts/ContentContext";

export const ObjectionsSection = () => {
  const { content } = useContent();
  if (!content.sections.objections) return null;

  return (
    <section className="py-20 bg-secondary">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">{content.objectionsTitle}</h2>
        </div>
        <div className="max-w-3xl mx-auto space-y-4">
          {content.objectionItems.map((obj) => (
            <div key={obj.id} className="p-6 rounded-xl bg-card border shadow-card space-y-3">
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-foreground text-lg">{obj.question}</h3>
                  <p className="text-muted-foreground mt-2">{obj.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
