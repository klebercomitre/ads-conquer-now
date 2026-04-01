import { AlertTriangle } from "lucide-react";

const pains = [
  {
    title: "Já investiu e não teve retorno?",
    desc: "Você colocou dinheiro em anúncios, mas as vendas não vieram. Parece que jogou dinheiro fora.",
  },
  {
    title: "Leads desqualificados?",
    desc: "Os contatos que chegam não compram, não respondem ou não são o público certo.",
  },
  {
    title: "Falta de previsibilidade?",
    desc: "Não sabe quantos clientes vai ter no próximo mês. Vive na montanha-russa de vendas.",
  },
  {
    title: "Não entende os números?",
    desc: "Relatórios confusos, métricas que não fazem sentido e nenhuma clareza sobre o que está funcionando.",
  },
];

export const PainSection = () => (
  <section className="py-20 bg-background">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
          Isso te parece familiar?
        </h2>
        <p className="text-muted-foreground text-lg">
          Se você já passou por alguma dessas situações, saiba que <strong className="text-foreground">não é culpa sua.</strong> A maioria dos negócios sofre com tráfego mal gerenciado.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {pains.map((pain) => (
          <div
            key={pain.title}
            className="p-6 rounded-xl border border-destructive/20 bg-destructive/5 space-y-3 transition-all hover:shadow-card"
          >
            <div className="flex items-center gap-3">
              <AlertTriangle className="w-5 h-5 text-destructive flex-shrink-0" />
              <h3 className="font-bold text-foreground text-lg">{pain.title}</h3>
            </div>
            <p className="text-muted-foreground">{pain.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
