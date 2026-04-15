import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import FeaturesSection from "@/components/FeaturesSection";
import PanelSection from "@/components/PanelSection";
import RoleSection from "@/components/RoleSection";
import Testimonials from "@/components/Testimonials";
import ContactSection from "@/components/ContactSection";
import FAQ from "@/components/FAQ";
import { Komunitas, Footer } from "@/components/KomunitasFooter";

export default function Home() {
  return (
    <div className="max-w-[480px] mx-auto relative overflow-x-hidden min-h-screen">
      <Navbar />
      <Hero />
      <HowItWorks />
      <FeaturesSection />
      <PanelSection />
      <RoleSection />
      <Testimonials />
      <ContactSection />
      <FAQ />
      <Komunitas />
      <Footer />
    </div>
  );
}
