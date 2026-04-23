import { MessageCircle } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";
import { translations } from "@/lib/translations";

const WhatsAppButton = () => {
  const { language } = useLanguage();
  const copy = translations[language];

  return (
    <a
      href="https://wa.me/6285183333159"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-whatsapp text-primary-foreground flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
      aria-label={copy.whatsapp.ariaLabel}
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  );
};

export default WhatsAppButton;
