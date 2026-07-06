import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { GoldDivider } from "@/components/ui/GoldDivider";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { ThreePillars } from "@/components/sections/ThreePillars";
import { ELaaSSection } from "@/components/sections/ELaaSSection";
import { ProgramsSection } from "@/components/sections/ProgramsSection";
import { PartnerLogos } from "@/components/sections/PartnerLogos";
import { ContactSection } from "@/components/sections/ContactSection";
import { WordMarquee } from "@/components/sections/WordMarquee";

export default function Home() {
  return (
    <>
      <NavBar />
      <main>
        <HeroSection />
        <WordMarquee />
        <ProblemSection />
        <GoldDivider />
        <ThreePillars />
        <GoldDivider />
        <ELaaSSection />
        <WordMarquee />
        <ProgramsSection />
        <GoldDivider />
        <PartnerLogos />
        <GoldDivider />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
