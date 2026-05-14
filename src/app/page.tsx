import { HeroSection } from "@/components/HeroSection";
import { WorksIntro } from "@/components/WorksIntro";
import { ProjectRow } from "@/components/ProjectRow";
import { ArticlesSection } from "@/components/ArticlesSection";
import { CTASection } from "@/components/CTASection";
import { works } from "@/lib/works";

export default function Home() {
  return (
    <>
      <HeroSection />
      <WorksIntro />
      <section className="px-6 md:px-10">
        {works.map((work) => (
          <ProjectRow key={work.slug} work={work} />
        ))}
      </section>
      <ArticlesSection />
      <CTASection />
    </>
  );
}
