import { CallToAction } from "@/components/CallToAction";
import { CostumerStorySection } from "@/components/CostumerStorySection";
import { FeatureSection } from "@/components/FeatureSection";
import { HeroSection } from "@/components/HeroSection";
import { SupportSection } from "@/components/SupportSection";

export default function Home() {
  return (
    <>
      <article className="flex flex-col">
        <HeroSection />
        <FeatureSection />
        <SupportSection />
        <CostumerStorySection />
        <CallToAction />
      </article>
    </>
  );
}
