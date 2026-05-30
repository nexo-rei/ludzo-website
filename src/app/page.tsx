import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { WhySection } from "@/components/sections/WhySection";
import { StatsSection } from "@/components/sections/StatsSection";
import { RoadmapSection } from "@/components/sections/RoadmapSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { WaitlistSection } from "@/components/sections/WaitlistSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <AboutSection />
        <WhySection />
        <StatsSection />
        <RoadmapSection />
        <FAQSection />
        <WaitlistSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
