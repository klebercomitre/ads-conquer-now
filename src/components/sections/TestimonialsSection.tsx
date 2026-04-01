import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Carlos M.",
    role: "Dono de E-commerce",
    text: "Em 3 meses triplicamos o faturamento com as campanhas da Acelera Ads. Profissionais de verdade!",
  },
  {
    name: "Ana Paula S.",
    role: "Clínica de Estética",
    text: "Antes eu gastava sem saber o que funcionava. Agora tenho agenda lotada todos os meses.",
  },
  {
    name: "Roberto L.",
    role: "Restaurante",
    text: "Achava que tráfego pago não funcionava para restaurante. A Acelera Ads provou o contrário.",
  },
];

export const TestimonialsSection = () => (
  <section className="py-20 bg-background">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
          Quem já acelerou com a gente
        </h2>
        <p className="text-muted-foreground text-lg">
          Resultados reais de empresários que decidiram parar de perder dinheiro.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {testimonials.map((t) => (
          <div key={t.name} className="p-6 rounded-xl border bg-card shadow-card space-y-4">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="text-foreground italic">"{t.text}"</p>
            <div>
              <div className="font-bold text-foreground">{t.name}</div>
              <div className="text-sm text-muted-foreground">{t.role}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
