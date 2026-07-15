import foundersPhoto from "@/assets/founders.jpg";

export const FoundersSection = () => {
  return (
    <section className="py-20 md:py-28 bg-secondary">
      <div className="container px-5 md:px-8">
        <div className="max-w-5xl mx-auto grid md:grid-cols-[auto,1fr] items-center gap-10 md:gap-14">
          <img
            src={foundersPhoto}
            alt="Kleber Comitre e Romário Carvalho, fundadores da Acelera Ads, agência de tráfego pago em Umuarama PR"
            loading="lazy"
            decoding="async"
            width="320"
            height="320"
            className="w-56 h-56 md:w-80 md:h-80 object-cover mx-auto md:mx-0"
          />
          <div className="text-center md:text-left space-y-5 md:space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Nossa missão
            </p>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight leading-[1.1]">
              Ajudar empresas a venderem mais, todos os meses.
            </h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-xl">
              Fundada por Kleber Comitre e Romário Carvalho, a Acelera Ads nasceu para
              resolver um problema real: empresas que investem em anúncios sem clareza
              nem resultado. Nosso trabalho é simples de dizer e exigente de fazer —
              transformar cada real investido em novos clientes para o seu negócio.
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center md:justify-start text-sm text-foreground pt-2">
              <span>Kleber Comitre</span>
              <span className="text-border">·</span>
              <span>Romário Carvalho</span>
              <span className="text-border">·</span>
              <span>+30 empresas atendidas</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
