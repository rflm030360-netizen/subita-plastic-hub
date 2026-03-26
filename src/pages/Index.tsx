import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServiceProcess from "@/components/ServiceProcess";
import MaterialsCarousel from "@/components/MaterialsCarousel";
import ProductGallery from "@/components/ProductGallery";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => (
  <div className="min-h-screen">
    <Header />
    <HeroSection />
    <ServiceProcess />
    <MaterialsCarousel />
    <ProductGallery />
    <Footer />
    <WhatsAppButton />
  </div>
);

export default Index;
