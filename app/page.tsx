import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { GoldDivider } from "@/components/ui/GoldDivider";
import { HeroSection } from "@/components/sections/HeroSection";
import { InstStatsBar } from "@/components/sections/InstStatsBar";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { ThreePillars } from "@/components/sections/ThreePillars";
import { ForOrgsSection } from "@/components/sections/ForOrgsSection";
import { ELaaSSection } from "@/components/sections/ELaaSSection";
import { CaseStudySection } from "@/components/sections/CaseStudySection";
import { ProgramsSection } from "@/components/sections/ProgramsSection";
import { InsightsSection } from "@/components/sections/InsightsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { PartnerLogos } from "@/components/sections/PartnerLogos";
import { SPGPartnerSection } from "@/components/sections/SPGPartnerSection";
import { IntersectionSection } from "@/components/sections/IntersectionSection";
import { CommunitySection } from "@/components/sections/CommunitySection";
import { ContactSection } from "@/components/sections/ContactSection";
import { WordMarquee } from "@/components/sections/WordMarquee";
import { TrustBar } from "@/components/sections/TrustBar";
import { LogoWatermark } from "@/components/ui/LogoWatermark";
import { LeadershipSection } from "@/components/sections/LeadershipSection";
import { ResearchSection } from "@/components/sections/ResearchSection";
import { FAQSection } from "@/components/sections/FAQSection";

export default function Home() {
  return (
    <>
      <NavBar />
      <main className="relative">
        <LogoWatermark />
        <HeroSection />
        <TrustBar />
        <InstStatsBar />
        <WordMarquee />
        <ProblemSection />
        <GoldDivider />
        <ResearchSection />
        <GoldDivider />
        <ThreePillars />
        <GoldDivider />
        <ForOrgsSection />
        <GoldDivider />
        <ELaaSSection />
        <GoldDivider />
        <CaseStudySection />
        <WordMarquee />
        <InsightsSection />
        <GoldDivider />
        <TestimonialsSection />
        <GoldDivider />
        <LeadershipSection />
        <GoldDivider />
        <ProgramsSection />
        <GoldDivider />
        <CommunitySection />
        <GoldDivider />
        <IntersectionSection />
        <GoldDivider />
        <SPGPartnerSection />
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
