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

const products = [
  { img: products1, title: "Produk Rumah Tangga" },
  { img: products2, title: "Komponen Industri" },
  { img: products3, title: "Wadah & Kemasan" },
  { img: products4, title: "Komponen Teknis" },
];

const machines = [
  { img: machine1, title: "Injection Molding Line" },
  { img: machine2, title: "CNC Control System" },
  { img: machine3, title: "Precision Mold Tooling" },
  { img: machine4, title: "Automated Production" },
];

const ProductGallery = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: dir === "left" ? -400 : 400, behavior: "smooth" });
  };

  return (
    <section id="produk" className="py-20 md:py-28 bg-secondary">
      <div className="container">
        {/* Products Slider */}
        <div className="text-center">
          <h2 className="section-heading">Galeri Produk</h2>
          <p className="section-subheading mt-3">Sampel barang jadi dari berbagai kategori</p>
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
            {products.map((p, i) => (
              <div
                key={i}
                className="min-w-[320px] md:min-w-[400px] snap-start rounded-xl overflow-hidden shadow-sm border border-border flex-shrink-0 group"
              >
                <div className="relative h-64 md:h-80 overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    width={800}
                    height={600}
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/80 to-transparent p-5">
                    <h3 className="text-primary-foreground font-bold text-lg">{p.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Machines Grid */}
        <div className="mt-20 text-center">
          <h2 className="section-heading">Mesin Produksi</h2>
          <p className="section-subheading mt-3">
            Didukung mesin injection moulding modern & berteknologi tinggi
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {machines.map((m, i) => (
            <div
              key={i}
              className="rounded-xl overflow-hidden shadow-sm border border-border group"
            >
              <div className="h-52 overflow-hidden">
                <img
                  src={m.img}
                  alt={m.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  width={800}
                  height={600}
                />
              </div>
              <div className="p-4 bg-card">
                <h3 className="text-sm font-semibold text-foreground">{m.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGallery;
