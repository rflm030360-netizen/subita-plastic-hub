import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import products1 from "@/assets/products-1.jpg";
import products2 from "@/assets/products-2.jpg";
import products3 from "@/assets/products-3.jpg";
import products4 from "@/assets/products-4.jpg";
import machine1 from "@/assets/machine-1.jpg";
import machine2 from "@/assets/machine-2.jpg";
import machine3 from "@/assets/machine-3.jpg";
import machine4 from "@/assets/machine-4.jpg";
import { useLanguage } from "@/contexts/language-context";
import { translations } from "@/lib/translations";

const productImages = [products1, products2, products3, products4];
const machineImages = [machine1, machine2, machine3, machine4];

const ProductGallery = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { language } = useLanguage();
  const copy = translations[language];

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: dir === "left" ? -400 : 400, behavior: "smooth" });
  };

  return (
    <section id="produk" className="py-20 md:py-28 bg-secondary">
      <div className="container">
        {/* Products Slider */}
        <div className="text-center">
          <h2 className="section-heading">{copy.productGallery.productsHeading}</h2>
          <p className="section-subheading mt-3">{copy.productGallery.productsSubheading}</p>
        </div>

        <div className="relative mt-14">
          <button
            onClick={() => scroll("left")}
            className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-card shadow-lg border border-border flex items-center justify-center hover:bg-muted transition-colors"
          >
            <ChevronLeft className="w-5 h-5 text-foreground" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-card shadow-lg border border-border flex items-center justify-center hover:bg-muted transition-colors"
          >
            <ChevronRight className="w-5 h-5 text-foreground" />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {copy.productGallery.products.map((product, i) => (
              <div
                key={product.title}
                className="min-w-[320px] md:min-w-[400px] snap-start rounded-xl overflow-hidden shadow-sm border border-border flex-shrink-0 group"
              >
                <div className="relative h-64 md:h-80 overflow-hidden">
                  <img
                    src={productImages[i]}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    width={800}
                    height={600}
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/80 to-transparent p-5">
                    <h3 className="text-primary-foreground font-bold text-lg">{product.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Machines Grid */}
        <div className="mt-20 text-center">
          <h2 className="section-heading">{copy.productGallery.machinesHeading}</h2>
          <p className="section-subheading mt-3">{copy.productGallery.machinesSubheading}</p>
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {copy.productGallery.machines.map((machine, i) => (
            <div
              key={machine.title}
              className="rounded-xl overflow-hidden shadow-sm border border-border group"
            >
              <div className="h-52 overflow-hidden">
                <img
                  src={machineImages[i]}
                  alt={machine.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  width={800}
                  height={600}
                />
              </div>
              <div className="p-4 bg-card">
                <h3 className="text-sm font-semibold text-foreground">{machine.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGallery;
