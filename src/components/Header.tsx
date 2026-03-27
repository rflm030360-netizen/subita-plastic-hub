import { useState } from "react";
import { Menu, X, Globe } from "lucide-react";
import logo from "@/assets/logo.png";
import { useLanguage } from "@/contexts/language-context";
import { translations } from "@/lib/translations";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();
  const copy = translations[language];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
      <div className="container flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src={logo} alt="CV. Subita Plastic" className="h-10 md:h-12 w-auto" />
          <div className="flex flex-col">
            <span className="text-sm md:text-base font-bold text-foreground leading-tight font-serif">
              CV. Subita Plastic
            </span>
            <span className="text-[10px] md:text-xs font-medium tracking-[0.2em] text-foreground uppercase font-display">
              Plastic Injection & Moulding
            </span>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {copy.header.navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Language + Mobile Toggle */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleLanguage}
            aria-label={copy.header.switchAriaLabel}
            className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-primary transition-colors px-2 py-1 rounded-md border border-border"
          >
            <Globe className="w-3.5 h-3.5" />
            <span>{language === "id" ? "ID" : "EN"}</span>
            <span className="text-border">|</span>
            <span className="text-muted-foreground/50">{language === "id" ? "EN" : "ID"}</span>
          </button>

          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <nav className="lg:hidden bg-card border-t border-border py-4">
          {copy.header.navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block px-6 py-3 text-sm font-medium text-foreground/80 hover:text-primary hover:bg-secondary transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
