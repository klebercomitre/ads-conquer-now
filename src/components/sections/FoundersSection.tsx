import foundersPhoto from "@/assets/founders.jpg";

export const FoundersSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="flex-shrink-0">
            <img
              src={foundersPhoto}
              alt="Kleber Comitre e Romário Carvalho, fundadores da Acelera Ads"
              className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-2xl shadow-lg border-4 border-primary/20"
            />
          </div>
          <div className="text-center md:text-left space-y-4">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Quem está por trás da Acelera Ads
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
              Kleber Comitre & Romário Carvalho
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Somos especialistas em tráfego pago com experiência real no mercado. 
              Já ajudamos mais de 30 negócios a transformar anúncios em vendas previsíveis. 
              Acreditamos que cada real investido precisa gerar resultado — e é isso que entregamos todos os dias.
            </p>
            <div className="flex flex-wrap gap-3 justify-center md:justify-start pt-2">
              <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                Meta Ads
              </span>
              <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                Google Ads
              </span>
              <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                +30 negócios atendidos
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
