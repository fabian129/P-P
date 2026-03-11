import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { MarqueeLogos } from "@/components/MarqueeLogos";
import { SelectedWorks } from "@/components/SelectedWorks";
import { PhilosophySection } from "@/components/PhilosophySection";
import { TestimonialSection } from "@/components/TestimonialSection";
import { VisualCTA } from "@/components/VisualCTA";
import { ContactSection, Footer } from "@/components/ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FAF9F8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Navbar />
      </div>
      <HeroSection />
      <MarqueeLogos />
      <SelectedWorks />
      <PhilosophySection />
      <TestimonialSection />
      <VisualCTA />
      <ContactSection />
      <Footer />
    </div>
  );
}
