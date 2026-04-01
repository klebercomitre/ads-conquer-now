import { ShieldCheck } from "lucide-react";

const objections = [
  {
    q: '"E se não funcionar?"',
    a: "Trabalhamos com análise de dados e otimização contínua. Se algo não funciona, ajustamos rapidamente. Nosso compromisso é com seu resultado.",
  },
  {
    q: '"Já tentei antes e não deu certo"',
    a: "Provavelmente você não teve a estratégia certa. A maioria dos negócios que nos procura já passou por isso. Nós mudamos esse cenário.",
  },
  {
    q: '"Tráfego pago é caro"',
    a: "Caro é perder vendas todos os dias por não ter presença online profissional. Nossos clientes veem retorno já nas primeiras semanas.",
  },
  {
    q: '"Funciona para o meu nicho?"',
    a: "Atendemos desde e-commerces até negócios locais. Se seu público está na internet, podemos alcançá-lo.",
  },
];

export const ObjectionsSection = () => (
  <section className="py-20 bg-secondary">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
          Ainda tem dúvidas?
        </h2>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {objections.map((obj) => (
          <div key={obj.q} className="p-6 rounded-xl bg-card border shadow-card space-y-3">
            <div className="flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-foreground text-lg">{obj.q}</h3>
                <p className="text-muted-foreground mt-2">{obj.a}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
