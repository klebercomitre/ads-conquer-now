import { WhatsAppButton } from "../WhatsAppButton";
import aceLeraLogo from "@/assets/acelera-logo.svg";

export const HeroSection = () => (
  <section className="relative bg-gradient-hero min-h-[90vh] flex items-center overflow-hidden">
    {/* Decorative elements */}
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-primary-glow/10 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full bg-primary/10 blur-3xl" />
    </div>

    <div className="container relative z-10 py-20">
      <div className="max-w-3xl mx-auto text-center space-y-8">
        <img src={aceLeraLogo} alt="Acelera Ads" className="h-10 mx-auto mb-6 brightness-0 invert opacity-80" />
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-primary-foreground">
          Pare de gastar dinheiro com anúncios que{" "}
          <span className="text-whatsapp">não vendem.</span>
        </h1>

        <p className="text-lg md:text-xl text-primary-foreground/70 max-w-2xl mx-auto leading-relaxed">
          Na Acelera Ads, transformamos investimento em tráfego em{" "}
          <strong className="text-primary-foreground">vendas previsíveis todos os dias.</strong>{" "}
          Chega de jogar dinheiro fora com campanhas que não dão retorno.
        </p>

        <div className="pt-4">
          <WhatsAppButton size="lg">Falar no WhatsApp</WhatsAppButton>
        </div>

        <div className="flex flex-wrap justify-center gap-8 pt-8 text-primary-foreground/50 text-sm">
          <span>✓ Meta Ads</span>
          <span>✓ Google Ads</span>
          <span>✓ +30 negócios atendidos</span>
          <span>✓ Foco em ROI</span>
        </div>
      </div>
    </div>
  </section>
);
