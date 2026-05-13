import { MessageCircle } from "lucide-react";
import { useContent } from "@/contexts/ContentContext";

interface WhatsAppButtonProps {
  children: React.ReactNode;
  className?: string;
  size?: "default" | "lg";
}

export const WhatsAppButton = ({ children, className = "", size = "default" }: WhatsAppButtonProps) => {
  const { getWhatsAppUrl } = useContent();

  const handleClick = () => {
    if (typeof window !== "undefined") {
      (window as any).dataLayer?.push({ event: "whatsapp_click" });
      (window as any).fbq?.("track", "Contact");
    }
    window.open(getWhatsAppUrl(), "_blank");
  };

  const sizeClasses = size === "lg"
    ? "px-7 py-4 md:px-9 md:py-[18px] text-base md:text-lg gap-2.5"
    : "px-5 py-3 md:px-6 md:py-3 text-sm md:text-base gap-2";

  return (
    <button
      onClick={handleClick}
      className={`inline-flex items-center justify-center font-semibold rounded-full bg-whatsapp text-primary-foreground transition-colors duration-200 hover:bg-whatsapp-hover ${sizeClasses} ${className}`}
    >
      <MessageCircle className={size === "lg" ? "w-5 h-5" : "w-4 h-4"} />
      {children}
    </button>
  );
};

export const FloatingWhatsApp = () => {
  const { getWhatsAppUrl } = useContent();

  const handleClick = () => {
    if (typeof window !== "undefined") {
      (window as any).dataLayer?.push({ event: "whatsapp_click_floating" });
      (window as any).fbq?.("track", "Contact");
    }
    window.open(getWhatsAppUrl(), "_blank");
  };

  return (
    <button
      onClick={handleClick}
      aria-label="Falar no WhatsApp"
      className="fixed bottom-5 right-5 md:bottom-6 md:right-6 z-50 w-14 h-14 rounded-full bg-whatsapp text-primary-foreground flex items-center justify-center shadow-elevated transition-colors hover:bg-whatsapp-hover"
    >
      <MessageCircle className="w-6 h-6" />
    </button>
  );
};
