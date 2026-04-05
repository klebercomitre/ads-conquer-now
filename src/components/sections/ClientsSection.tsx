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
    <section className="py-12 md:py-16 bg-muted/30">
      <div className="container px-5 md:px-8">
        <div className="text-center mb-8 md:mb-10">
          <p className="text-xs md:text-sm font-semibold uppercase tracking-widest text-primary mb-2">
            Empresas que confiam na Acelera Ads
          </p>
          <h2 className="text-xl md:text-3xl font-extrabold text-foreground">
            Nossos Clientes
          </h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto items-center">
          {clients.map((client) => (
            <div
              key={client.name}
              className="flex items-center justify-center p-3 md:p-4 rounded-xl bg-card border shadow-sm"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="h-14 w-14 md:h-20 md:w-20 object-contain rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
