import { ClipboardList, Layers, Factory, Package } from "lucide-react";

const steps = [
  { icon: ClipboardList, title: "Planning (Perencanaan)", desc: "Kami berkolaborasi dengan Anda untuk menentukan spesifikasi, mendesain cetakan (molding), dan merencanakan setiap detail produksi secara presisi." },
  { icon: Layers, title: "Pemilihan Bahan", desc: "Memilih resin plastik yang optimal seperti HDPE, PP, PVC, Nylon, dan material lainnya yang disesuaikan khusus dengan karakteristik serta kebutuhan produk Anda." },
  { icon: Factory, title: "Pembuatan Barang", desc: "Proses pencetakan injeksi (injection molding) presisi tinggi dengan dukungan mesin-mesin canggih untuk memastikan hasil yang konsisten, akurat, dan tanpa cacat." },
  { icon: Package, title: "Packing (Pengemasan)", desc: "Pemeriksaan kualitas (Quality Control) yang cermat diikuti dengan pengemasan profesional, memastikan produk aman dan siap dikirim langsung ke lokasi Anda." },
];

const ServiceProcess = () => (
  <section id="layanan" className="py-20 md:py-28 bg-secondary">
    <div className="container text-center">
      <h2 className="section-heading">Alur Pelayanan Kami</h2>
      <p className="section-subheading mt-3">
        Kami memastikan setiap tahapan produksi berjalan dengan standar tinggi untuk mewujudkan ide Anda menjadi produk nyata.
      </p>

      <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step, i) => (
          <div key={i} className="relative group">
            <div className="bg-card rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow border border-border text-center">
              <div className="w-16 h-16 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <step.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <div className="text-xs font-bold text-accent mb-2 tracking-wider">
                LANGKAH {i + 1}
              </div>
              <h3 className="text-lg font-bold text-foreground">{step.title}</h3>
              <p className="text-sm text-muted-foreground mt-2">{step.desc}</p>
            </div>

            {i < steps.length - 1 && (
              <div className="hidden lg:block absolute top-1/2 -right-3 w-6 text-border">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServiceProcess;
