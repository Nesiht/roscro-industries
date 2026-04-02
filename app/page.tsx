import { HeroSection } from "@/components/sections/hero-section";
import { WhoWeAreSection } from "@/components/sections/who-we-are-section";
import { CurrentOperationsSection } from "@/components/sections/current-operations-section";
import { LongTermDirectionSection } from "@/components/sections/long-term-direction-section";
import { ContributionAreasSection } from "@/components/sections/contribution-areas-section";
import { WhyRoscroSection } from "@/components/sections/why-roscro-section";
import { RecruitmentSection } from "@/components/sections/recruitment-section";
import { FutureReportsSection } from "@/components/sections/future-reports-section";

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "RosCro Industries",
            url: "https://roscro.eu",
          }),
        }}
      />
      <main>
        <HeroSection />
        <div className="section-divider" />
        <WhoWeAreSection />
        <div className="section-divider" />
        <CurrentOperationsSection />
        <div className="section-divider" />
        <LongTermDirectionSection />
        <div className="section-divider" />
        <ContributionAreasSection />
        <div className="section-divider" />
        <WhyRoscroSection />
        <div className="section-divider" />
        <RecruitmentSection />
        <div className="section-divider" />
        <FutureReportsSection />
      </main>
    </>
  );
}
