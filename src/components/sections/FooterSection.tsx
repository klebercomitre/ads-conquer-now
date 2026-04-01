import aceLeraLogo from "@/assets/acelera-logo.svg";
import { useContent } from "@/contexts/ContentContext";

export const FooterSection = () => {
  const { content } = useContent();

  return (
    <footer className="py-10 bg-foreground">
      <div className="container">
        <div className="flex flex-col items-center gap-4 text-center">
          <img src={aceLeraLogo} alt="Acelera Ads" className="h-8 brightness-0 invert opacity-70" />
          <p className="text-background/50 text-sm">{content.footerText}</p>
        </div>
      </div>
    </footer>
  );
};
