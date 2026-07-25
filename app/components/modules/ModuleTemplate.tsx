import { ModuleData } from "@/app/lib/module";
import HeroSection from "./HeroSection";
import ContentSectionsSection from "./ContentSectionsSection";
import ChallengeSection from "./Challenge";
import WorkflowSection from "./Workflow";
import FeaturesSection from "./Features";
import RoiSection from "./RoiSection";
import AISection from "./AISection";
import CTASection from "./CTA";
import Dashboard from "./Dashboard";
import FAQSection from "./FAQSection";

interface ModuleTemplateProps {
  data: ModuleData;
}

export default function ModuleTemplate({ data }: ModuleTemplateProps) {
  return (
    <main>
      <HeroSection data={data} />
      <ContentSectionsSection data={data} />
      <ChallengeSection data={data} />
      <WorkflowSection data={data} />
      <FeaturesSection data={data} />
      <Dashboard data={data}/>
      <RoiSection data={data} />
      <AISection data={data} />
      <CTASection data={data} />
      <FAQSection data={data} />
    </main>
  );
}