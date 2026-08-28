import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { GoldDivider } from "@/components/ui/GoldDivider";
import { HeroSection } from "@/components/sections/HeroSection";
import { InstStatsBar } from "@/components/sections/InstStatsBar";
import { EcosystemSection } from "@/components/sections/EcosystemSection";
import { MethodologySection } from "@/components/sections/MethodologySection";
import { ProductPortfolioSection } from "@/components/sections/ProductPortfolioSection";
import { MarketStatsSection } from "@/components/sections/MarketStatsSection";
import { SkillsQuadrantSection } from "@/components/sections/SkillsQuadrantSection";
import { TechQuoteSection } from "@/components/sections/TechQuoteSection";
import { CaseStudySection } from "@/components/sections/CaseStudySection";
import { InsightsSection } from "@/components/sections/InsightsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { TeamSection } from "@/components/sections/TeamSection";
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
        <MethodologySection />
        <GoldDivider />
        <ProductPortfolioSection />
        <EcosystemSection />
        <GoldDivider />
        <MarketStatsSection />
        <SkillsQuadrantSection />
        <TechQuoteSection />
        <CaseStudySection />
        <InsightsSection />
        <GoldDivider />
        <TestimonialsSection />
        <GoldDivider />
        <FAQSection />
        <ContactSection />
        <TeamSection />
      </main>
      <Footer />
    </>
  );
}
