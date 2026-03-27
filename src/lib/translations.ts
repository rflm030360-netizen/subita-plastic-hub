import type { Language } from "@/contexts/language-context";

type SiteCopy = {
  header: {
    navLinks: Array<{ label: string; href: string }>;
    switchAriaLabel: string;
  };
  hero: {
    titleLines: [string, string];
    description: string;
    cta: string;
    slideAlt: string;
  };
  serviceProcess: {
    heading: string;
    subheading: string;
    stepLabel: string;
    steps: Array<{ title: string; desc: string }>;
  };
  materials: {
    heading: string;
    subheading: string;
    items: Array<{ name: string; spec: string }>;
  };
  productGallery: {
    productsHeading: string;
    productsSubheading: string;
    products: Array<{ title: string }>;
    machinesHeading: string;
    machinesSubheading: string;
    machines: Array<{ title: string }>;
  };
  footer: {
    description: string;
    locationsHeading: string;
    officeLabel: string;
    workshopLabel: string;
    contactHeading: string;
    rightsReserved: string;
  };
  whatsapp: {
    ariaLabel: string;
  };
};

export const translations: Record<Language, SiteCopy> = {
  id: {
    header: {
      navLinks: [
        { label: "Beranda", href: "#beranda" },
        { label: "Layanan", href: "#layanan" },
        { label: "Bahan Baku", href: "#bahan" },
        { label: "Produk", href: "#produk" },
        { label: "Kontak", href: "#kontak" },
      ],
      switchAriaLabel: "Ganti bahasa ke Bahasa Inggris",
    },
    hero: {
      titleLines: [
        "Siap Melayani Kebutuhan Injeksi",
        "dan Percetakan Plastik Sesuai Keinginan Anda",
      ],
      description:
        "Solusi plastic injection & moulding terpercaya dengan standar kualitas tinggi dan presisi untuk aplikasi otomotif, industri, dan kebutuhan rumah tangga",
      cta: "Pelajari Lebih Lanjut",
      slideAlt: "Pabrik CV. Subita Plastic",
    },
    serviceProcess: {
      heading: "Alur Pelayanan Kami",
      subheading:
        "Kami memastikan setiap tahapan produksi berjalan dengan standar tinggi untuk mewujudkan ide Anda menjadi produk nyata.",
      stepLabel: "LANGKAH",
      steps: [
        {
          title: "Planning (Perencanaan)",
          desc: "Kami berkolaborasi dengan Anda untuk menentukan spesifikasi, mendesain cetakan (molding), dan merencanakan setiap detail produksi secara presisi.",
        },
        {
          title: "Pemilihan Bahan",
          desc: "Memilih resin plastik yang optimal seperti HDPE, PP, PVC, Nylon, dan material lainnya yang disesuaikan khusus dengan karakteristik serta kebutuhan produk Anda.",
        },
        {
          title: "Pembuatan Barang",
          desc: "Proses pencetakan injeksi (injection molding) presisi tinggi dengan dukungan mesin-mesin canggih untuk memastikan hasil yang konsisten, akurat, dan tanpa cacat.",
        },
        {
          title: "Packing (Pengemasan)",
          desc: "Pemeriksaan kualitas (Quality Control) yang cermat diikuti dengan pengemasan profesional, memastikan produk aman dan siap dikirim langsung ke lokasi Anda.",
        },
      ],
    },
    materials: {
      heading: "Pilihan Bahan Baku",
      subheading: "Material plastik berkualitas untuk beragam kebutuhan industri",
      items: [
        {
          name: "HD (HDPE)",
          spec: "Tahan benturan, kuat, dan ringan. Cocok untuk ember, jerigen, dan pipa.",
        },
        {
          name: "PVC",
          spec: "Tahan cuaca, isolasi listrik baik. Ideal untuk pipa, kabel, dan profil.",
        },
        {
          name: "PP (Polypropylene)",
          spec: "Ringan, tahan panas & kimia. Untuk wadah makanan dan komponen otomotif.",
        },
        {
          name: "Nilon (Polyamide)",
          spec: "Kuat & elastis, tahan aus. Digunakan untuk gear, bearing, dan tekstil.",
        },
        {
          name: "PS (Polystyrene)",
          spec: "Transparan, ringan, mudah dibentuk. Untuk kemasan dan produk sekali pakai.",
        },
        {
          name: "AS Acrylic",
          spec: "Transparansi tinggi, tahan UV. Cocok untuk display, lensa, dan signage.",
        },
        {
          name: "Spon (Foam)",
          spec: "Ringan, penyerap goncangan. Untuk packing, bantalan, dan isolasi.",
        },
      ],
    },
    productGallery: {
      productsHeading: "Galeri Produk",
      productsSubheading: "Sampel barang jadi dari berbagai kategori",
      products: [
        { title: "Produk Rumah Tangga" },
        { title: "Komponen Industri" },
        { title: "Wadah & Kemasan" },
        { title: "Komponen Teknis" },
      ],
      machinesHeading: "Mesin Produksi",
      machinesSubheading: "Didukung mesin injection moulding modern & berteknologi tinggi",
      machines: [
        { title: "Injection Molding Line" },
        { title: "CNC Control System" },
        { title: "Precision Mold Tooling" },
        { title: "Automated Production" },
      ],
    },
    footer: {
      description:
        "Menyediakan solusi lengkap untuk kebutuhan produk plastik manufaktur dan rumah tangga dengan kualitas terbaik.",
      locationsHeading: "Lokasi",
      officeLabel: "Office (Kantor)",
      workshopLabel: "Workshop (Pabrik)",
      contactHeading: "Hubungi Kami",
      rightsReserved: "Seluruh hak cipta dilindungi.",
    },
    whatsapp: {
      ariaLabel: "Hubungi via WhatsApp",
    },
  },
  en: {
    header: {
      navLinks: [
        { label: "Home", href: "#beranda" },
        { label: "Services", href: "#layanan" },
        { label: "Materials", href: "#bahan" },
        { label: "Products", href: "#produk" },
        { label: "Contact", href: "#kontak" },
      ],
      switchAriaLabel: "Switch language to Bahasa Indonesia",
    },
    hero: {
      titleLines: [
        "Ready to Support Your Plastic Injection Needs",
        "and Custom Plastic Moulding Requirements",
      ],
      description:
        "Trusted plastic injection & moulding solutions with high quality standards and precision for automotive, industrial, and household applications",
      cta: "Learn More",
      slideAlt: "CV. Subita Plastic factory",
    },
    serviceProcess: {
      heading: "Our Service Process",
      subheading:
        "We ensure every production stage runs to a high standard to turn your ideas into real products.",
      stepLabel: "STEP",
      steps: [
        {
          title: "Planning",
          desc: "We work closely with you to define specifications, design the mould, and plan every production detail with precision.",
        },
        {
          title: "Material Selection",
          desc: "We choose the right plastic resins such as HDPE, PP, PVC, Nylon, and other materials based on your product's exact requirements and characteristics.",
        },
        {
          title: "Production",
          desc: "High-precision injection molding supported by advanced machinery to deliver consistent, accurate, and defect-free results.",
        },
        {
          title: "Packing",
          desc: "Careful quality control followed by professional packing ensures each product is secure and ready to be shipped directly to your location.",
        },
      ],
    },
    materials: {
      heading: "Material Options",
      subheading: "Quality plastic materials for a wide range of industrial needs",
      items: [
        {
          name: "HD (HDPE)",
          spec: "Impact resistant, strong, and lightweight. Suitable for buckets, jerry cans, and pipes.",
        },
        {
          name: "PVC",
          spec: "Weather resistant with good electrical insulation. Ideal for pipes, cables, and profiles.",
        },
        {
          name: "PP (Polypropylene)",
          spec: "Lightweight and resistant to heat and chemicals. Used for food containers and automotive components.",
        },
        {
          name: "Nylon (Polyamide)",
          spec: "Strong, flexible, and wear resistant. Commonly used for gears, bearings, and textiles.",
        },
        {
          name: "PS (Polystyrene)",
          spec: "Transparent, lightweight, and easy to shape. Suitable for packaging and disposable products.",
        },
        {
          name: "AS Acrylic",
          spec: "High transparency and UV resistance. Great for displays, lenses, and signage.",
        },
        {
          name: "Foam",
          spec: "Lightweight and shock absorbing. Used for packing, padding, and insulation.",
        },
      ],
    },
    productGallery: {
      productsHeading: "Product Gallery",
      productsSubheading: "Samples of finished goods from various categories",
      products: [
        { title: "Household Products" },
        { title: "Industrial Components" },
        { title: "Containers & Packaging" },
        { title: "Technical Components" },
      ],
      machinesHeading: "Production Machines",
      machinesSubheading: "Powered by modern, high-technology injection moulding machines",
      machines: [
        { title: "Injection Molding Line" },
        { title: "CNC Control System" },
        { title: "Precision Mold Tooling" },
        { title: "Automated Production" },
      ],
    },
    footer: {
      description:
        "Providing complete solutions for manufactured plastic products and household needs with the best quality standards.",
      locationsHeading: "Locations",
      officeLabel: "Office",
      workshopLabel: "Workshop",
      contactHeading: "Contact Us",
      rightsReserved: "All rights reserved.",
    },
    whatsapp: {
      ariaLabel: "Contact us on WhatsApp",
    },
  },
};
