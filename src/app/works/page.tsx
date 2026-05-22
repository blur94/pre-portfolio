import { WorksIntro } from "@/components/WorksIntro";
import { ProjectRow } from "@/components/ProjectRow";
import { ArticlesSection } from "@/components/ArticlesSection";
import { CTASection } from "@/components/CTASection";
import { works } from "@/lib/works";

export const metadata = {
  title: "Works",
  description:
    "A collection of projects I've contributed to — from fintech and legaltech to admin dashboards and SaaS platforms.",
};

export default function Works() {
  return (
    <>
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
