import { WhatsAppButton } from "../WhatsAppButton";

export const CtaSection = () => (
  <section className="py-20 bg-gradient-hero">
    <div className="container">
      <div className="max-w-3xl mx-auto text-center space-y-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary-foreground leading-tight">
          Quer transformar anúncios em vendas todos os dias?
        </h2>
        <p className="text-lg text-primary-foreground/70 max-w-xl mx-auto">
          Fale agora com um especialista e descubra como escalar seu negócio com tráfego pago inteligente.
        </p>
        <WhatsAppButton size="lg">Chamar no WhatsApp agora</WhatsAppButton>
      </div>
    </div>
  </section>
);
