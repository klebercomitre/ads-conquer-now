import aceLeraLogo from "@/assets/acelera-logo.svg";
import { useContent } from "@/contexts/ContentContext";

export const FooterSection = () => {
  const { content } = useContent();

  return (
    <footer className="py-12 md:py-16 bg-foreground">
      <div className="container px-5 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <img src={aceLeraLogo} alt="Acelera Ads" className="h-7 brightness-0 invert opacity-80" />
          <p className="text-background/50 text-xs md:text-sm">{content.footerText}</p>
          <p className="text-background/40 text-xs">CNPJ: 64.181.146/0001-63</p>
        </div>
      </div>
    </footer>
  );
};
