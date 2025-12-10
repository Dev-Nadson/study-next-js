import { CallToAction, CostumerStorySection, FeatureSection, HeroSection, SupportSection } from "@/Templates/LandingPage/Sections"

function LandingPage() {
    return (
        <article className="flex flex-col gap-10">
            <HeroSection />
            <FeatureSection />
            <SupportSection />
            <CostumerStorySection />
            <CallToAction />
        </article>
    )
}

export { LandingPage }