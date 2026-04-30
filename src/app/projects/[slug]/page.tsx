import { FadeScale, Reveal } from "@/components/reveal";
import { ProjectGalleryLightbox } from "@/components/project-gallery-lightbox";
import { VirtualTourEmbed } from "@/components/virtual-tour-embed";
import { getProjectBySlug, projects } from "@/content/projects";
import { siteConfig } from "@/content/site";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {};
  }

  return {
    title: `${project.title} | Client Projects`,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="relative min-h-[50vh] sm:min-h-[58vh] lg:min-h-[66vh]">
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.18),rgba(2,6,23,0.2)_35%,rgba(2,6,23,0.78)_72%,rgba(2,6,23,0.98))]" />
          <div className="absolute inset-x-0 bottom-0">
            <div className="page-shell pb-8 sm:pb-10 lg:pb-12">
              <Reveal className="max-w-4xl">
                <p className="eyebrow">{project.eyebrow}</p>
                <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-[1.04] text-white sm:text-5xl lg:text-6xl">
                  {project.title}
                </h1>
                <p className="mt-5 max-w-3xl text-base leading-7 text-slate-200 sm:text-lg sm:leading-8">
                  {project.summary}
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <div className="page-shell pb-14 pt-10 sm:pb-16 sm:pt-12 lg:pb-20 lg:pt-14">
        <div className="space-y-7">
          <Reveal className="grid gap-4 sm:grid-cols-2" delay={0.08}>
            <div className="panel-padding-sm rounded-[1.75rem] border border-white/10 bg-white/[0.03]">
              <p className="text-xs uppercase tracking-[0.24em] text-cyan-200">Client</p>
              <p className="mt-3 text-base font-semibold text-white sm:text-lg">{project.client}</p>
              <p className="mt-2 text-sm text-slate-400">{project.sector}</p>
            </div>
            <div className="panel-padding-sm rounded-[1.75rem] border border-white/10 bg-white/[0.03]">
              <p className="text-xs uppercase tracking-[0.24em] text-cyan-200">Location</p>
              <p className="mt-3 text-base font-semibold text-white sm:text-lg">{project.location}</p>
              <p className="mt-2 text-sm text-slate-400">{project.completionLabel}</p>
            </div>
          </Reveal>

          <Reveal className="panel-padding-sm max-w-4xl rounded-[2rem] border border-white/10 bg-white/[0.03] text-sm leading-7 text-slate-300 sm:text-base sm:leading-8" delay={0.15}>
            {project.overview}
          </Reveal>
        </div>

        {project.virtualTour ? (
          <section className="mt-16">
            <VirtualTourEmbed tour={project.virtualTour} />
          </section>
        ) : null}

        <section className="mt-16 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <FadeScale className="panel-padding rounded-[2.25rem] border border-white/10 bg-white/[0.02]">
            <div className="flex items-center gap-4">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-cyan-300/20 bg-cyan-300/10 text-sm font-semibold text-cyan-100">
                01
              </span>
              <p className="eyebrow">Challenge</p>
            </div>
            <h2 className="mt-6 text-2xl font-semibold text-white sm:text-3xl">Complex room mix. Zero tolerance for friction.</h2>
            <p className="mt-5 text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">{project.challenge}</p>
          </FadeScale>
          <FadeScale
            className="panel-padding rounded-[2.25rem] border border-cyan-300/20 bg-[linear-gradient(135deg,rgba(8,145,178,0.18),rgba(15,23,42,0.96)_58%)]"
            delay={0.08}
          >
            <div className="flex items-center gap-4">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-sm font-semibold text-white">
                02
              </span>
              <p className="eyebrow">Solution</p>
            </div>
            <h2 className="mt-6 text-2xl font-semibold text-white sm:text-3xl">One AV standard across the entire office.</h2>
            <p className="mt-5 max-w-3xl text-sm leading-7 text-cyan-50/85 sm:text-base sm:leading-8">{project.solution}</p>
          </FadeScale>
        </section>

        <section className="mt-16 grid gap-6 xl:grid-cols-[0.82fr_1.18fr]">
          <FadeScale className="panel-padding rounded-[2.25rem] border border-white/10 bg-slate-900/60">
            <p className="eyebrow">Scope</p>
            <h2 className="mt-4 text-xl font-semibold text-white sm:text-2xl">Scope at a glance.</h2>
            <div className="mt-6 space-y-4">
              {project.scope.map((item, index) => (
                <div key={item} className="flex gap-4 border-t border-white/10 pt-4 first:border-t-0 first:pt-0">
                  <span className="text-xs uppercase tracking-[0.24em] text-cyan-200">0{index + 1}</span>
                  <p className="text-sm leading-7 text-slate-300">{item}</p>
                </div>
              ))}
            </div>
          </FadeScale>

          <FadeScale className="panel-padding rounded-[2.25rem] border border-white/10 bg-white/[0.03]" delay={0.08}>
            <div className="max-w-3xl">
              <p className="eyebrow">Room Program</p>
              <h2 className="mt-4 text-xl font-semibold text-white sm:text-2xl">Built for every mode of work.</h2>
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {project.roomProgram.map((item, index) => (
                <div key={item} className="panel-padding-sm rounded-[1.75rem] border border-white/10 bg-slate-950/45">
                  <p className="text-xs uppercase tracking-[0.24em] text-cyan-200">Program {index + 1}</p>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{item}</p>
                </div>
              ))}
            </div>
          </FadeScale>
        </section>

        <section className="mt-16 grid gap-6 lg:grid-cols-[1.12fr_0.88fr]">
          <FadeScale className="panel-padding rounded-[2.25rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))]">
            <p className="eyebrow">Systems</p>
            <h2 className="mt-4 text-xl font-semibold text-white sm:text-2xl">Core systems.</h2>
            <div className="mt-8 flex flex-wrap gap-3">
              {project.technologies.map((item) => (
                <div
                  key={item}
                  className="rounded-full border border-cyan-300/20 bg-cyan-300/8 px-4 py-2 text-sm leading-6 text-cyan-50"
                >
                  {item}
                </div>
              ))}
            </div>
          </FadeScale>

          <FadeScale className="panel-padding rounded-[2.25rem] border border-white/10 bg-slate-950/70" delay={0.08}>
            <p className="eyebrow">Outcomes</p>
            <h2 className="mt-4 text-xl font-semibold text-white sm:text-2xl">What it delivered.</h2>
            <div className="mt-6 space-y-4">
              {project.outcomes.map((item) => (
                <div key={item} className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] px-4 py-3.5 sm:p-4">
                  <p className="text-sm leading-7 text-slate-300">{item}</p>
                </div>
              ))}
            </div>
          </FadeScale>
        </section>

        <section className="mt-16">
          <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <Reveal>
              <p className="eyebrow">Project Signals</p>
              <h2 className="section-title mt-4 max-w-3xl">Key project signals.</h2>
            </Reveal>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {project.metrics.map((metric, index) => (
              <FadeScale key={metric.label} className="panel-padding-sm rounded-[2rem] border border-white/10 bg-white/[0.03]" delay={index * 0.08}>
                <div className="text-3xl font-semibold text-white">{metric.value}</div>
                <div className="mt-3 text-sm uppercase tracking-[0.24em] text-cyan-200">{metric.label}</div>
                <p className="mt-4 text-sm leading-7 text-slate-400">{metric.detail}</p>
              </FadeScale>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <Reveal>
              <p className="eyebrow">Gallery</p>
              <h2 className="section-title mt-4 max-w-3xl">Project gallery.</h2>
            </Reveal>
          </div>
          <FadeScale delay={0.08}>
            <ProjectGalleryLightbox images={project.gallery} title={project.title} />
          </FadeScale>
        </section>

        <section className="mt-16 rounded-[2.5rem] border border-cyan-300/20 bg-[linear-gradient(135deg,rgba(8,145,178,0.18),rgba(15,23,42,0.96)_55%)] px-5 py-8 sm:px-6 sm:py-10 lg:px-8">
          <Reveal>
            <p className="eyebrow">Discuss a similar environment</p>
            <div className="mt-5 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">
                  Ready to plan a project with this level of polish and usability?
                </h2>
                <p className="mt-4 text-sm leading-7 text-cyan-50/80 sm:text-base sm:leading-8">
                  Tell {siteConfig.shortName} about your rooms, workflow goals, and timeline, and the team will follow up with a tailored next step.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-white transition hover:bg-white/15"
              >
                Contact {siteConfig.shortName}
              </Link>
            </div>
          </Reveal>
        </section>
      </div>
    </>
  );
}
