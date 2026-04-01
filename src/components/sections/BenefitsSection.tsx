import { CheckCircle } from "lucide-react";
import { WhatsAppButton } from "../WhatsAppButton";

const benefits = [
  "Mais clientes qualificados todos os dias",
  "Aumento real nas vendas",
  "Previsibilidade de faturamento",
  "Crescimento escalável e sustentável",
  "Menos desperdício de dinheiro em anúncios",
  "Relatórios claros e transparentes",
];

export const BenefitsSection = () => (
  <section className="py-20 bg-secondary">
    <div className="container">
      <div className="max-w-4xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 space-y-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
            O que você ganha com a Acelera Ads
          </h2>
          <div className="space-y-4">
            {benefits.map((b) => (
              <div key={b} className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-whatsapp flex-shrink-0" />
                <span className="text-foreground font-medium">{b}</span>
              </div>
            ))}
          </div>
          <div className="pt-4">
            <WhatsAppButton>Começar agora</WhatsAppButton>
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <div className="w-72 h-72 rounded-2xl bg-gradient-hero flex items-center justify-center shadow-elevated">
            <div className="text-center text-primary-foreground space-y-2">
              <div className="text-6xl font-extrabold">3x</div>
              <div className="text-sm text-primary-foreground/70">mais resultados<br />com tráfego inteligente</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
