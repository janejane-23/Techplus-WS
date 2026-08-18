import { Hero } from "@/components/sections/Hero";
import { ExecutiveChallenges } from "@/components/sections/ExecutiveChallenges";
import { CoreNarrative } from "@/components/sections/CoreNarrative";
import { BusinessOutcomes } from "@/components/sections/BusinessOutcomes";
import { ConsultingServices } from "@/components/sections/ConsultingServices";
import { SapPlatform } from "@/components/sections/SapPlatform";
import { OmsPlusPositioning } from "@/components/sections/OmsPlusPositioning";
import { BlogPreview } from "@/components/sections/BlogPreview";
import { IndustryFocus } from "@/components/sections/IndustryFocus";
import { Differentiators } from "@/components/sections/Differentiators";
import { GlobalPresence } from "@/components/sections/GlobalPresence";
import { FinalCta } from "@/components/sections/FinalCta";
import { homepageContent } from "@/content/homepage";

export default function Home() {
  return (
    <>
      <Hero content={homepageContent.hero} />
      <ExecutiveChallenges content={homepageContent.executiveChallenges} />
      <CoreNarrative content={homepageContent.coreNarrative} />
      <BusinessOutcomes content={homepageContent.businessOutcomes} />
      <ConsultingServices content={homepageContent.consultingServices} />
      <SapPlatform content={homepageContent.sapPlatform} />
      <OmsPlusPositioning content={homepageContent.omsPlus} />
      <BlogPreview content={homepageContent.blogPreview} />
      <IndustryFocus content={homepageContent.industryFocus} />
      <Differentiators content={homepageContent.differentiators} />
      <GlobalPresence content={homepageContent.globalPresence} />
      <FinalCta content={homepageContent.finalCta} />
    </>
  );
}
