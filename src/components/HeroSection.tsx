import { useState, useEffect } from "react";
import heroFactory from "@/assets/hero-factory.jpg";
import heroMachine from "@/assets/hero-machine.jpg";
import heroTeam from "@/assets/hero-team.jpg";

const slides = [heroFactory, heroMachine, heroTeam];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="beranda" className="relative h-[80vh] md:h-screen overflow-hidden mt-16 md:mt-20">
      {slides.map((slide, i) => (
        <img
          key={i}
          src={slide}
          alt="CV. Subita Plastic Factory"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
          width={1920}
          height={1080}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 hero-overlay" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight max-w-4xl animate-fade-in">
          Siap Melayani Kebutuhan Injeksi
          <br />
          dan Percetakan Plastik Sesuai Keinginan Anda
        </h1>
        <p className="mt-4 md:mt-6 text-primary-foreground/80 text-base md:text-lg max-w-2xl animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Solusi plastic injection & moulding terpercaya dengan standar kualitas tinggi dan presisi untuk aplikasi otomotif, industri, dan kebutuhan rumah tangga
        </p>
        <a
          href="#layanan"
          className="mt-8 inline-flex items-center px-8 py-3 rounded-lg bg-accent text-accent-foreground font-semibold text-sm hover:bg-accent/90 transition-colors animate-fade-in"
          style={{ animationDelay: "0.4s" }}
        >
          Pelajari Lebih Lanjut
        </a>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              i === current ? "bg-accent w-8" : "bg-primary-foreground/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
