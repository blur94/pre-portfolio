import { AboutHeroSection } from "@/components/AboutHeroSection";
import { StatsRow } from "@/components/StatsRow";
import { BioBlock } from "@/components/BioBlock";
import { TechStacksCard } from "@/components/TechStacksCard";
import { ExperienceCard } from "@/components/ExperienceCard";
import { PictureGallery } from "@/components/PictureGallery";
import { CTASection } from "@/components/CTASection";

export const metadata = {
  title: "About",
  description:
    "Software developer exploring the intersection of design, music, and code. 6+ years of experience building impactful digital products.",
};

export default function About() {
  return (
    <>
      <AboutHeroSection />
      <StatsRow />
      <BioBlock />
      <div className="grid gap-6 px-6 pb-4 md:grid-cols-2 md:px-10">
        <TechStacksCard />
        <ExperienceCard />
      </div>
      <PictureGallery />
      <CTASection />
    </>
  );
}
