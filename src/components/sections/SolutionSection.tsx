import { Crosshair, Settings, LineChart, Lightbulb } from "lucide-react";
import { WhatsAppButton } from "../WhatsAppButton";

const solutions = [
  { icon: Lightbulb, title: "Estratégia personalizada", desc: "Cada negócio é único. Criamos um plano sob medida para o seu." },
  { icon: Settings, title: "Gestão profissional", desc: "Campanhas criadas e gerenciadas por especialistas certificados." },
  { icon: LineChart, title: "Otimização contínua", desc: "Monitoramento diário e ajustes para maximizar seus resultados." },
  { icon: Crosshair, title: "Análise de dados", desc: "Decisões baseadas em números reais, não em achismos." },
];

export const SolutionSection = () => (
  <section className="py-20 bg-gradient-hero text-primary-foreground">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
          A Acelera Ads resolve isso pra você
        </h2>
        <p className="text-primary-foreground/70 text-lg">
          Não vendemos cliques. Vendemos <strong className="text-primary-foreground">resultados.</strong>
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {solutions.map((s) => (
          <div key={s.title} className="p-6 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10 space-y-4 backdrop-blur-sm">
            <s.icon className="w-10 h-10 text-whatsapp" />
            <h3 className="font-bold text-lg">{s.title}</h3>
            <p className="text-primary-foreground/60 text-sm">{s.desc}</p>
          </div>
        ))}
      </div>

      <div className="text-center pt-12">
        <WhatsAppButton size="lg">Quero resultados reais</WhatsAppButton>
      </div>
    </div>
  </section>
);
