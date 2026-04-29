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
    <div className="page-shell py-16 lg:py-24">
      <div className="grid gap-10 lg:items-start lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-7">
          <Reveal>
            <p className="eyebrow">{project.eyebrow}</p>
            <h1 className="mt-5 text-5xl font-semibold leading-[1.06] text-white sm:text-6xl">{project.title}</h1>
            <p className="mt-6 text-lg leading-8 text-slate-300">{project.summary}</p>
          </Reveal>

          <Reveal className="grid gap-4 sm:grid-cols-2" delay={0.08}>
            <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-5">
              <p className="text-xs uppercase tracking-[0.24em] text-cyan-200">Client</p>
              <p className="mt-3 text-lg font-semibold text-white">{project.client}</p>
              <p className="mt-2 text-sm text-slate-400">{project.sector}</p>
            </div>
            <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-5">
              <p className="text-xs uppercase tracking-[0.24em] text-cyan-200">Location</p>
              <p className="mt-3 text-lg font-semibold text-white">{project.location}</p>
              <p className="mt-2 text-sm text-slate-400">{project.completionLabel}</p>
            </div>
          </Reveal>

          <Reveal className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 text-base leading-8 text-slate-300" delay={0.15}>
            {project.overview}
          </Reveal>
        </div>

        <FadeScale className="relative overflow-hidden rounded-[2.5rem] border border-white/10">
          <div className="relative aspect-[1.04]">
            <Image
              src={project.coverImage}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 55vw"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/10 to-transparent" />
        </FadeScale>
      </div>

      {project.virtualTour ? (
        <section className="mt-16">
          <VirtualTourEmbed tour={project.virtualTour} />
        </section>
      ) : null}

      <section className="mt-16 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <FadeScale className="rounded-[2.25rem] border border-white/10 bg-white/[0.02] p-7 lg:p-8">
          <div className="flex items-center gap-4">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-cyan-300/20 bg-cyan-300/10 text-sm font-semibold text-cyan-100">
              01
            </span>
            <p className="eyebrow">Challenge</p>
          </div>
          <h2 className="mt-6 text-3xl font-semibold text-white">Complex room mix. Zero tolerance for friction.</h2>
          <p className="mt-5 text-base leading-8 text-slate-300">{project.challenge}</p>
        </FadeScale>
        <FadeScale
          className="rounded-[2.25rem] border border-cyan-300/20 bg-[linear-gradient(135deg,rgba(8,145,178,0.18),rgba(15,23,42,0.96)_58%)] p-7 lg:p-8"
          delay={0.08}
        >
          <div className="flex items-center gap-4">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-sm font-semibold text-white">
              02
            </span>
            <p className="eyebrow">Solution</p>
          </div>
          <h2 className="mt-6 text-3xl font-semibold text-white">One AV standard across the entire office.</h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-cyan-50/85">{project.solution}</p>
        </FadeScale>
      </section>

      <section className="mt-16 grid gap-6 xl:grid-cols-[0.82fr_1.18fr]">
        <FadeScale className="rounded-[2.25rem] border border-white/10 bg-slate-900/60 p-7 lg:p-8">
          <p className="eyebrow">Scope</p>
          <h2 className="mt-4 text-2xl font-semibold text-white">Scope at a glance.</h2>
          <div className="mt-6 space-y-4">
            {project.scope.map((item, index) => (
              <div key={item} className="flex gap-4 border-t border-white/10 pt-4 first:border-t-0 first:pt-0">
                <span className="text-xs uppercase tracking-[0.24em] text-cyan-200">0{index + 1}</span>
                <p className="text-sm leading-7 text-slate-300">{item}</p>
              </div>
            ))}
          </div>
        </FadeScale>

        <FadeScale className="rounded-[2.25rem] border border-white/10 bg-white/[0.03] p-7 lg:p-8" delay={0.08}>
          <div className="max-w-3xl">
            <p className="eyebrow">Room Program</p>
            <h2 className="mt-4 text-2xl font-semibold text-white">Built for every mode of work.</h2>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {project.roomProgram.map((item, index) => (
              <div key={item} className="rounded-[1.75rem] border border-white/10 bg-slate-950/45 p-5">
                <p className="text-xs uppercase tracking-[0.24em] text-cyan-200">Program {index + 1}</p>
                <p className="mt-3 text-sm leading-7 text-slate-300">{item}</p>
              </div>
            ))}
          </div>
        </FadeScale>
      </section>

      <section className="mt-16 grid gap-6 lg:grid-cols-[1.12fr_0.88fr]">
        <FadeScale className="rounded-[2.25rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-7 lg:p-8">
          <p className="eyebrow">Systems</p>
          <h2 className="mt-4 text-2xl font-semibold text-white">Core systems.</h2>
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

        <FadeScale className="rounded-[2.25rem] border border-white/10 bg-slate-950/70 p-7 lg:p-8" delay={0.08}>
          <p className="eyebrow">Outcomes</p>
          <h2 className="mt-4 text-2xl font-semibold text-white">What it delivered.</h2>
          <div className="mt-6 space-y-4">
            {project.outcomes.map((item) => (
              <div key={item} className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-4">
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
            <FadeScale key={metric.label} className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6" delay={index * 0.08}>
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

      <section className="mt-16 rounded-[2.5rem] border border-cyan-300/20 bg-[linear-gradient(135deg,rgba(8,145,178,0.18),rgba(15,23,42,0.96)_55%)] px-8 py-10">
        <Reveal>
          <p className="eyebrow">Discuss a similar environment</p>
          <div className="mt-5 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <h2 className="text-4xl font-semibold leading-tight text-white">
                Ready to plan a project with this level of polish and usability?
              </h2>
              <p className="mt-4 text-base leading-8 text-cyan-50/80">
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
  );
}
