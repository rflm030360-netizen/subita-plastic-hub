import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import materialHd from "@/assets/material-hd.jpg";
import materialPvc from "@/assets/material-pvc.jpg";
import materialPp from "@/assets/material-pp.jpg";
import materialNylon from "@/assets/material-nylon.jpg";
import materialPs from "@/assets/material-ps.jpg";
import materialAcrylic from "@/assets/material-acrylic.jpg";
import materialSpon from "@/assets/material-spon.jpg";

const materials = [
  { img: materialHd, name: "HD (HDPE)", spec: "Tahan benturan, kuat, dan ringan. Cocok untuk ember, jerigen, dan pipa." },
  { img: materialPvc, name: "PVC", spec: "Tahan cuaca, isolasi listrik baik. Ideal untuk pipa, kabel, dan profil." },
  { img: materialPp, name: "PP (Polypropylene)", spec: "Ringan, tahan panas & kimia. Untuk wadah makanan dan komponen otomotif." },
  { img: materialNylon, name: "Nilon (Polyamide)", spec: "Kuat & elastis, tahan aus. Digunakan untuk gear, bearing, dan tekstil." },
  { img: materialPs, name: "PS (Polystyrene)", spec: "Transparan, ringan, mudah dibentuk. Untuk kemasan dan produk sekali pakai." },
  { img: materialAcrylic, name: "AS Acrylic", spec: "Transparansi tinggi, tahan UV. Cocok untuk display, lensa, dan signage." },
  { img: materialSpon, name: "Spon (Foam)", spec: "Ringan, penyerap goncangan. Untuk packing, bantalan, dan isolasi." },
];

const MaterialsCarousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = 320;
    scrollRef.current.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <section id="bahan" className="py-20 md:py-28">
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading">Pilihan Bahan Baku</h2>
          <p className="section-subheading mt-3">
            Material plastik berkualitas untuk beragam kebutuhan industri
          </p>
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
            {materials.map((m, i) => (
              <div
                key={i}
                className="min-w-[280px] max-w-[280px] snap-start bg-card rounded-xl overflow-hidden border border-border shadow-sm hover:shadow-md transition-shadow flex-shrink-0"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={m.img}
                    alt={m.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    width={800}
                    height={600}
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-foreground">{m.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">{m.spec}</p>
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
