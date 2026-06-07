import aceLeraLogo from "@/assets/acelera-logo.svg";
import { useContent } from "@/contexts/ContentContext";
import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";

export const FooterSection = () => {
  const { content } = useContent();
  const phoneFormatted = (() => {
    const n = content.whatsappNumber.replace(/\D/g, "");
    // expects 55 + DDD + número
    if (n.length >= 12) {
      const ddd = n.slice(2, 4);
      const rest = n.slice(4);
      const first = rest.length === 9 ? rest.slice(0, 5) : rest.slice(0, 4);
      const second = rest.length === 9 ? rest.slice(5) : rest.slice(4);
      return `+55 (${ddd}) ${first}-${second}`;
    }
    return content.whatsappNumber;
  })();

  return (
    <footer className="py-12 md:py-16 bg-foreground">
      <div className="container px-5 md:px-8">
        <div className="grid gap-10 md:grid-cols-3 md:gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <img src={aceLeraLogo} alt="Acelera Ads" className="h-8 brightness-0 invert opacity-90" />
            <p className="text-background/60 text-sm leading-relaxed max-w-xs">
              Agência de tráfego pago especializada em Google Ads e Meta Ads.
              Transformamos investimento em vendas previsíveis.
            </p>
            <p className="text-background/50 text-xs">CNPJ: 64.181.146/0001-63</p>
          </div>

          {/* Contato */}
          <div className="space-y-3">
            <h3 className="text-background text-sm font-semibold uppercase tracking-wider mb-4">
              Contato
            </h3>
            <a
              href={`https://wa.me/${content.whatsappNumber.replace(/\D/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-background/70 hover:text-background text-sm transition-colors"
            >
              <Phone className="w-4 h-4 shrink-0" aria-hidden="true" />
              <span>{phoneFormatted}</span>
            </a>
            <a
              href="mailto:contato@aceleraadsumuarama.com.br"
              className="flex items-center gap-2 text-background/70 hover:text-background text-sm transition-colors break-all"
            >
              <Mail className="w-4 h-4 shrink-0" aria-hidden="true" />
              <span>contato@aceleraadsumuarama.com.br</span>
            </a>
            <div className="flex items-start gap-2 text-background/70 text-sm">
              <MapPin className="w-4 h-4 shrink-0 mt-0.5" aria-hidden="true" />
              <span>Umuarama, Paraná, Brasil</span>
            </div>
          </div>

          {/* Legal */}
          <div className="space-y-3">
            <h3 className="text-background text-sm font-semibold uppercase tracking-wider mb-4">
              Institucional
            </h3>
            <Link
              to="/privacidade"
              className="block text-background/70 hover:text-background text-sm transition-colors"
            >
              Política de Privacidade
            </Link>
            <Link
              to="/termos"
              className="block text-background/70 hover:text-background text-sm transition-colors"
            >
              Termos de Uso
            </Link>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-background/10 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-background/50 text-xs md:text-sm text-center md:text-left">
            {content.footerText}
          </p>
          <p className="text-background/40 text-xs">Umuarama/PR · CNPJ 64.181.146/0001-63</p>
        </div>
      </div>
    </footer>
  );
};
