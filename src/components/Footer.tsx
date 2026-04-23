import { MapPin, Phone, Instagram, Facebook, Youtube } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";
import { translations } from "@/lib/translations";

const Footer = () => {
  const { language } = useLanguage();
  const copy = translations[language];

  return (
    <footer id="kontak" className="bg-primary text-primary-foreground py-16 md:py-20">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-1">CV. Subita Plastic</h3>
            <p className="text-primary-foreground/60 text-xs tracking-[0.15em] uppercase mb-6">
              Plastic Injection & Moulding
            </p>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              {copy.footer.description}
            </p>
          </div>

          {/* Locations */}
          <div>
            <h4 className="font-bold text-lg mb-5">{copy.footer.locationsHeading}</h4>
            <div className="space-y-4">
              <div className="flex gap-3">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-sm">{copy.footer.officeLabel}</p>
                  <p className="text-primary-foreground/70 text-sm">
                    Pasanggrahan, Kec. Ujung Berung, Kota Bandung, Jawa Barat
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-sm">{copy.footer.workshopLabel}</p>
                  <p className="text-primary-foreground/70 text-sm">
                    Komp. Lebak Wangi Asri Blok A2 No.16 Rt 05 / 13, Ds. Lebak Wangi Kec. Arjasari Kab. Bandung 40379
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Social & Contact */}
          <div>
            <h4 className="font-bold text-lg mb-5">{copy.footer.contactHeading}</h4>
            <div className="space-y-3">
              <a href="tel:+6285183333159" className="flex items-center gap-3 text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                <Phone className="w-4 h-4" />
                <span>+62 851-8333-3159</span>
              </a>
              <a href="#" className="flex items-center gap-3 text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                <Instagram className="w-4 h-4" />
                <span>@subitaplastic</span>
              </a>
              <a href="#" className="flex items-center gap-3 text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                <Facebook className="w-4 h-4" />
                <span>CV. Subita Plastic</span>
              </a>
              <a href="#" className="flex items-center gap-3 text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                <Youtube className="w-4 h-4" />
                <span>Subita Plastic Official</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/10 text-center text-sm text-primary-foreground/50">
          © {new Date().getFullYear()} CV. Subita Plastic. {copy.footer.rightsReserved}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
