import solutionCell from "@/assets/clients/solution-cell.png";
import arenaCastelo from "@/assets/clients/arena-castelo.jpg";
import senhorPizza from "@/assets/clients/senhor-pizza.jpg";
import smartAssistencia from "@/assets/clients/smart-assistencia.jpg";
import ishopToledo from "@/assets/clients/ishop-toledo.jpg";
import nerdLogo from "@/assets/clients/nerd-logo.jpg";
import favoritta from "@/assets/clients/favoritta.jpg";
import fretesja from "@/assets/clients/fretesja.jpg";

const clients = [
  { name: "Solution Cell", logo: solutionCell },
  { name: "Arena Castelo", logo: arenaCastelo },
  { name: "Senhor Pizza", logo: senhorPizza },
  { name: "Smart Assistência Técnica", logo: smartAssistencia },
  { name: "iShop Toledo", logo: ishopToledo },
  { name: "Nerd", logo: nerdLogo },
  { name: "Favoritta Store", logo: favoritta },
  { name: "FretesJá", logo: fretesja },
];

export const ClientsSection = () => {
  return (
    <section className="py-16 md:py-20 bg-background border-t border-border">
      <div className="container px-5 md:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground text-center mb-10 md:mb-12">
          Empresas que decidiram acelerar seus resultados
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-10 gap-y-10 md:gap-x-16 md:gap-y-12 max-w-5xl mx-auto items-center">
          {clients.map((client) => (
            <div key={client.name} className="flex items-center justify-center">
              <img
                src={client.logo}
                alt={client.name}
                loading="lazy"
                decoding="async"
                className="h-14 md:h-16 w-auto object-contain grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
