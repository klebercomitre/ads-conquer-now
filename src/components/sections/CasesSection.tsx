import { useContent } from "@/contexts/ContentContext";
import solutionCell from "@/assets/clients/solution-cell.png";
import arenaCastelo from "@/assets/clients/arena-castelo.jpg";
import senhorPizza from "@/assets/clients/senhor-pizza.jpg";
import smartAssistencia from "@/assets/clients/smart-assistencia.jpg";
import ishopToledo from "@/assets/clients/ishop-toledo.jpg";
import favoritta from "@/assets/clients/favoritta.jpg";
import fretesja from "@/assets/clients/fretesja.jpg";
import nerdLogo from "@/assets/clients/nerd-logo.jpg";

const logoMap: Record<string, string> = {
  "solution-cell": solutionCell,
  "arena-castelo": arenaCastelo,
  "senhor-pizza": senhorPizza,
  "smart-assistencia": smartAssistencia,
  "ishop-toledo": ishopToledo,
  "favoritta": favoritta,
  "fretesja": fretesja,
  "nerd": nerdLogo,
};

export const CasesSection = () => {
  const { content } = useContent();
  if (!content.sections.cases) return null;

  return (
    <section className="py-20 md:py-28 bg-secondary">
      <div className="container px-5 md:px-8">
        <div className="max-w-2xl mb-14 md:mb-20">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">Cases</p>
          <h2 className="text-2xl md:text-5xl font-extrabold text-foreground mb-4 tracking-tight leading-[1.1]">
            {content.casesTitle}
          </h2>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed">{content.casesSubtitle}</p>
        </div>

        <div className="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {content.cases.map((c) => {
            const logo = logoMap[c.logoKey];
            return (
              <article
                key={c.id}
                className="group bg-background border border-border p-6 md:p-7 flex flex-col transition-all duration-300 hover:border-primary/40 hover:shadow-elevated"
              >
                <div className="flex items-center gap-4 pb-5 mb-5 border-b border-border">
                  {logo && (
                    <img
                      src={logo}
                      alt={c.name}
                      loading="lazy"
                      decoding="async"
                      className="w-14 h-14 object-contain rounded-md bg-white p-1.5"
                    />
                  )}
                  <div>
                    <h3 className="font-bold text-foreground text-base md:text-lg tracking-tight leading-tight">{c.name}</h3>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mt-1">{c.segment}</p>
                  </div>
                </div>
                <dl className="space-y-4 text-sm">
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wider text-primary">Objetivo</dt>
                    <dd className="text-foreground/85 mt-1 leading-relaxed">{c.objective}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wider text-primary">Estratégia</dt>
                    <dd className="text-foreground/85 mt-1 leading-relaxed">{c.strategy}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wider text-primary">Resultado</dt>
                    <dd className="text-muted-foreground italic mt-1 leading-relaxed">
                      {c.result || "Em breve — resultado a ser publicado."}
                    </dd>
                  </div>
                </dl>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};