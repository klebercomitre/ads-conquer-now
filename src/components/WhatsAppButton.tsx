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
    ? "px-8 py-4 text-lg gap-3"
    : "px-6 py-3 text-base gap-2";

  return (
    <button
      onClick={handleClick}
      className={`inline-flex items-center justify-center font-bold rounded-lg bg-gradient-cta text-primary-foreground transition-all duration-300 hover:scale-105 hover:brightness-110 animate-pulse-glow ${sizeClasses} ${className}`}
    >
      <MessageCircle className={size === "lg" ? "w-6 h-6" : "w-5 h-5"} />
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
      className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-gradient-cta text-primary-foreground flex items-center justify-center shadow-cta animate-pulse-glow transition-transform hover:scale-110"
    >
      <MessageCircle className="w-8 h-8" />
    </button>
  );
};
