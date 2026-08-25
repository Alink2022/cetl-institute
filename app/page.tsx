import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { GoldDivider } from "@/components/ui/GoldDivider";
import { HeroSection } from "@/components/sections/HeroSection";
import { InstStatsBar } from "@/components/sections/InstStatsBar";
import { EcosystemSection } from "@/components/sections/EcosystemSection";
import { ProductPortfolioSection } from "@/components/sections/ProductPortfolioSection";
import { MarketStatsSection } from "@/components/sections/MarketStatsSection";
import { SkillsQuadrantSection } from "@/components/sections/SkillsQuadrantSection";
import { CaseStudySection } from "@/components/sections/CaseStudySection";
import { ProgramsSection } from "@/components/sections/ProgramsSection";
import { InsightsSection } from "@/components/sections/InsightsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { TrustBar } from "@/components/sections/TrustBar";
import { LogoWatermark } from "@/components/ui/LogoWatermark";
import { FAQSection } from "@/components/sections/FAQSection";
import { ContactSection } from "@/components/sections/ContactSection";

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
        <ProductPortfolioSection />
        <GoldDivider />
        <MarketStatsSection />
        <SkillsQuadrantSection />
        <GoldDivider />
        <ProgramsSection />
        <GoldDivider />
        <CaseStudySection />
        <InsightsSection />
        <GoldDivider />
        <TestimonialsSection />
        <GoldDivider />
        <FAQSection />
        <ContactSection />
        <TrustBar />
      </main>
      <Footer />
    </>
  );
}
