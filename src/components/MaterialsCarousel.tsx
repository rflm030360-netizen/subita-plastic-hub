import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import materialHd from "@/assets/material-hd.jpg";
import materialPvc from "@/assets/material-pvc.jpg";
import materialPp from "@/assets/material-pp.jpg";
import materialNylon from "@/assets/material-nylon.jpg";
import materialPs from "@/assets/material-ps.jpg";
import materialAcrylic from "@/assets/material-acrylic.jpg";
import materialSpon from "@/assets/material-spon.jpg";
import { useLanguage } from "@/contexts/language-context";
import { translations } from "@/lib/translations";

const materialImages = [
  materialHd,
  materialPvc,
  materialPp,
  materialNylon,
  materialPs,
  materialAcrylic,
  materialSpon,
];

const MaterialsCarousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { language } = useLanguage();
  const copy = translations[language];

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = 320;
    scrollRef.current.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <section id="bahan" className="py-20 md:py-28">
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading">{copy.materials.heading}</h2>
          <p className="section-subheading mt-3">{copy.materials.subheading}</p>
        </div>

        <div className="relative mt-14">
          <button
            onClick={() => scroll("left")}
            className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-card shadow-lg border border-border flex items-center justify-center hover:bg-secondary transition-colors"
          >
            <ChevronLeft className="w-5 h-5 text-foreground" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-card shadow-lg border border-border flex items-center justify-center hover:bg-secondary transition-colors"
          >
            <ChevronRight className="w-5 h-5 text-foreground" />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {copy.materials.items.map((material, i) => (
              <div
                key={material.name}
                className="min-w-[280px] max-w-[280px] snap-start bg-card rounded-xl overflow-hidden border border-border shadow-sm hover:shadow-md transition-shadow flex-shrink-0"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={materialImages[i]}
                    alt={material.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    width={800}
                    height={600}
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-foreground">{material.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">
                    {material.spec}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MaterialsCarousel;
