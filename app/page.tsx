import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { GoldDivider } from "@/components/ui/GoldDivider";
import { HeroSection } from "@/components/sections/HeroSection";
import { InstStatsBar } from "@/components/sections/InstStatsBar";
import { EcosystemSection } from "@/components/sections/EcosystemSection";
import { ElaasSection } from "@/components/sections/ElaasSection";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { PackagesSection } from "@/components/sections/PackagesSection";
import { CaseStudySection } from "@/components/sections/CaseStudySection";
import { ProgramsSection } from "@/components/sections/ProgramsSection";
import { InsightsSection } from "@/components/sections/InsightsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { SPGPartnerSection } from "@/components/sections/SPGPartnerSection";
import { CommunitySection } from "@/components/sections/CommunitySection";
import { TrustBar } from "@/components/sections/TrustBar";
import { LogoWatermark } from "@/components/ui/LogoWatermark";
import { ResearchSection } from "@/components/sections/ResearchSection";
import { FAQSection } from "@/components/sections/FAQSection";

export default function Home() {
  return (
    <>
      <NavBar />
      <main id="main-content" className="relative">
        <LogoWatermark />
        <HeroSection />
        <InstStatsBar />
        <EcosystemSection />
        <GoldDivider />
        <ElaasSection />
        <GoldDivider />
        <PortfolioSection />
        <GoldDivider />
        <PackagesSection />
        <GoldDivider />
        <ProgramsSection />
        <GoldDivider />
        <ResearchSection />
        <GoldDivider />
        <CaseStudySection />
        <InsightsSection />
        <GoldDivider />
        <TestimonialsSection />
        <GoldDivider />
        <CommunitySection />
        <GoldDivider />
        <SPGPartnerSection />
        <GoldDivider />
        <FAQSection />
        <TrustBar />
      </main>
      <Footer />
    </>
  );
}
