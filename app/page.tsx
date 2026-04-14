import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PanelSection from "@/components/PanelSection";
import RoleSection from "@/components/RoleSection";
import FeaturesSection from "@/components/FeaturesSection";
import ContactSection from "@/components/ContactSection";
import FAQ from "@/components/FAQ";
import { Komunitas, Footer } from "@/components/KomunitasFooter";

export default function Home() {
  return (
    <div className="max-w-[480px] mx-auto relative overflow-x-hidden min-h-screen">
      <Navbar />
      <Hero />
      <FeaturesSection />
      <PanelSection />
      <RoleSection />
      <ContactSection />
      <FAQ />
      <Komunitas />
      <Footer />
    </div>
  );
}
