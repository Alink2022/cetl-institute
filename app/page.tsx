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
import { LeadershipSection } from "@/components/sections/LeadershipSection";
import { ResearchSection } from "@/components/sections/ResearchSection";
import { FAQSection } from "@/components/sections/FAQSection";

export default function Home() {
  return (
    <>
      <NavBar />
      <main>
        <HeroSection />
        <WordMarquee />
        <ProblemSection />
        <GoldDivider />
        <ResearchSection />
        <GoldDivider />
        <ThreePillars />
        <GoldDivider />
        <ELaaSSection />
        <WordMarquee />
        <LeadershipSection />
        <GoldDivider />
        <ProgramsSection />
        <GoldDivider />
        <PartnerLogos />
        <GoldDivider />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
