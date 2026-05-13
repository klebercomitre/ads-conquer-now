import foundersPhoto from "@/assets/founders.jpg";

export const FoundersSection = () => {
  return (
    <section className="py-20 md:py-28 bg-secondary">
      <div className="container px-5 md:px-8">
        <div className="max-w-5xl mx-auto grid md:grid-cols-[auto,1fr] items-center gap-10 md:gap-14">
          <img
            src={foundersPhoto}
            alt="Kleber Comitre e Romário Carvalho, fundadores da Acelera Ads"
            className="w-56 h-56 md:w-80 md:h-80 object-cover mx-auto md:mx-0"
          />
          <div className="text-center md:text-left space-y-5 md:space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Quem está por trás da Acelera Ads
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight leading-[1.1]">
              Kleber Comitre &amp; Romário Carvalho
            </h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-xl">
              Somos especialistas em tráfego pago com experiência real no mercado.
              Já ajudamos mais de 30 negócios a transformar anúncios em vendas previsíveis.
              Acreditamos que cada real investido precisa gerar resultado — e é isso que entregamos todos os dias.
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center md:justify-start text-sm text-foreground pt-2">
              <span>Meta Ads</span>
              <span className="text-border">·</span>
              <span>Google Ads</span>
              <span className="text-border">·</span>
              <span>+30 negócios atendidos</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
