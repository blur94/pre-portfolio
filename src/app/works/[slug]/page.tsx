import { notFound } from "next/navigation";

import { ProjectHero } from "@/components/ProjectHero";
import { ProjectScreenshot } from "@/components/ProjectScreenshot";
import { ContentSection } from "@/components/ContentSection";
import { CodeBlock } from "@/components/CodeBlock";
import { ProjectGallery } from "@/components/ProjectGallery";
import { CTASection } from "@/components/CTASection";
import { works } from "@/lib/works";

export function generateStaticParams() {
  return works.map((work) => ({ slug: work.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const work = works.find((w) => w.slug === slug);
  if (!work) return {};
  return {
    title: `${work.title} — Gilead Odo`,
    description: work.description,
  };
}

export default async function WorkView({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const work = works.find((w) => w.slug === slug);
  if (!work) notFound();

  return (
    <>
      <ProjectHero work={work} />
      <ProjectScreenshot work={work} />

      {work.overview && (
        <ContentSection heading="Overview">
          <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
            {work.overview}
          </p>
        </ContentSection>
      )}

      {work.roles && work.roles.length > 0 && (
        <ContentSection heading="My Role">
          <ul className="flex flex-col gap-3">
            {work.roles.map((role) => (
              <li key={role} className="flex items-start gap-3 text-base text-muted-foreground">
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                {role}
              </li>
            ))}
          </ul>
        </ContentSection>
      )}

      {work.features && work.features.length > 0 && (
        <ContentSection heading="Key Features">
          <ul className="flex flex-col gap-3">
            {work.features.map((feature) => (
              <li key={feature} className="flex items-start gap-3 text-base text-muted-foreground">
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                {feature}
              </li>
            ))}
          </ul>
        </ContentSection>
      )}

      {work.fileTree && (
        <CodeBlock content={work.fileTree} label="Project structure" />
      )}

      <ProjectGallery images={work.galleryImages} title={work.title} />

      <CTASection />
    </>
  );
}
