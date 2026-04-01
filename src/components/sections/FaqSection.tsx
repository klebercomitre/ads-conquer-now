import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Quanto preciso investir em anúncios?",
    a: "O investimento varia conforme o seu nicho e seus objetivos. Na reunião de diagnóstico, sugerimos o valor ideal para o seu caso. Trabalhamos com negócios a partir de R$ 1.000/mês em mídia.",
  },
  {
    q: "Em quanto tempo vejo resultado?",
    a: "Os primeiros resultados costumam aparecer entre 7 e 15 dias. A otimização completa leva em torno de 30 a 60 dias para atingir o potencial máximo.",
  },
  {
    q: "Vocês atendem qualquer tipo de negócio?",
    a: "Atendemos diversos segmentos: e-commerces, negócios locais, prestadores de serviço, infoprodutores e mais. Se o seu público está na internet, podemos ajudar.",
  },
  {
    q: "Preciso ter site ou loja virtual?",
    a: "Não necessariamente. Podemos trabalhar com landing pages, Instagram, WhatsApp e outras estratégias. Avaliamos o melhor caminho no diagnóstico.",
  },
  {
    q: "Como funciona o contrato?",
    a: "Trabalhamos com planos mensais, sem fidelidade longa. Acreditamos que os resultados falam por si só.",
  },
];

export const FaqSection = () => (
  <section className="py-20 bg-background">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
          Perguntas frequentes
        </h2>
      </div>

      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="border rounded-xl px-6 bg-card shadow-card">
              <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  </section>
);
