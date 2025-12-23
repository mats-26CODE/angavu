import { HeroSection } from "@/components/shared/hero-section";
import { ProblemSection } from "@/components/shared/problem-section";
import { SolutionSection } from "@/components/shared/solution-section";
import { ConfidenceSection } from "@/components/shared/confidence-section";
import { FeaturesSection } from "@/components/shared/features-section";
import { HowItWorksSection } from "@/components/shared/how-it-works-section";
import { WhoIsForSection } from "@/components/shared/who-is-for-section";
import { PricingSection } from "@/components/shared/pricing-section";
import { FinalCTASection } from "@/components/shared/final-cta-section";

export default function LandingPage() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <ConfidenceSection />
      <FeaturesSection />
      <HowItWorksSection />
      <WhoIsForSection />
      <PricingSection />
      <FinalCTASection />
    </>
  );
}
