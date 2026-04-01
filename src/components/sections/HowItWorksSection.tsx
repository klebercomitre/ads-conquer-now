import { Search, Map, Rocket, TrendingUp } from "lucide-react";

const steps = [
  { icon: Search, step: "01", title: "Diagnóstico", desc: "Analisamos seu negócio, público e concorrência a fundo." },
  { icon: Map, step: "02", title: "Estratégia", desc: "Criamos o plano ideal para atrair os clientes certos." },
  { icon: Rocket, step: "03", title: "Implementação", desc: "Colocamos as campanhas no ar com precisão cirúrgica." },
  { icon: TrendingUp, step: "04", title: "Otimização e escala", desc: "Melhoramos continuamente para escalar seus resultados." },
];

export const HowItWorksSection = () => (
  <section className="py-20 bg-background">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
          Como funciona
        </h2>
        <p className="text-muted-foreground text-lg">
          Um processo simples e transparente para transformar anúncios em vendas.
        </p>
      </div>

      <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
        {steps.map((s, i) => (
          <div key={s.step} className="text-center space-y-4 relative">
            {i < steps.length - 1 && (
              <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-[2px] bg-border" />
            )}
            <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mx-auto relative z-10">
              <s.icon className="w-7 h-7 text-primary" />
            </div>
            <div className="text-xs font-bold text-primary tracking-widest">{s.step}</div>
            <h3 className="font-bold text-foreground text-lg">{s.title}</h3>
            <p className="text-muted-foreground text-sm">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
