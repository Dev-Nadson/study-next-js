import { CallToAction, CostumerStorySection, FeatureSection, HeroSection, SupportSection } from "@/Templates/LandingPage/Sections"

function LandingPage() {
    return (
        <article className="flex flex-col gap-10">
            <HeroSection />
            <FeatureSection />
            <SupportSection />
            <CostumerStorySection />
            <div className="relative translate-y-1/14">
                <CallToAction />
            </div>
        </article>
    )
}

export { LandingPage }