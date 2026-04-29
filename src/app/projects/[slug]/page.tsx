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

      <section className="mt-16 grid gap-6 lg:grid-cols-2">
        <FadeScale className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6">
          <p className="eyebrow">Challenge</p>
          <p className="mt-5 text-sm leading-7 text-slate-300">{project.challenge}</p>
        </FadeScale>
        <FadeScale className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6" delay={0.08}>
          <p className="eyebrow">Solution</p>
          <p className="mt-5 text-sm leading-7 text-slate-300">{project.solution}</p>
        </FadeScale>
      </section>

      <section className="mt-16 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <FadeScale className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6">
          <p className="eyebrow">Scope</p>
          <ul className="mt-5 space-y-4">
            {project.scope.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm leading-7 text-slate-300">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-300" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </FadeScale>

        <FadeScale className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6" delay={0.08}>
          <p className="eyebrow">Room Program</p>
          <ul className="mt-5 space-y-4">
            {project.roomProgram.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm leading-7 text-slate-300">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-300" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </FadeScale>
      </section>

      <section className="mt-16 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <FadeScale className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6">
          <p className="eyebrow">Systems</p>
          <ul className="mt-5 space-y-4">
            {project.technologies.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm leading-7 text-slate-300">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-300" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </FadeScale>

        <FadeScale className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6" delay={0.08}>
          <p className="eyebrow">Outcomes</p>
          <ul className="mt-5 space-y-4">
            {project.outcomes.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm leading-7 text-slate-300">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-300" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </FadeScale>
      </section>

      <section className="mt-16">
        <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <p className="eyebrow">Project Signals</p>
            <h2 className="section-title mt-4 max-w-3xl">A reusable metrics band for future case studies.</h2>
          </Reveal>
          <Reveal className="max-w-xl text-sm leading-7 text-slate-300" delay={0.08}>
            These short proof points can be replaced with room counts, rollout scale, adoption gains, or other client-approved metrics whenever those details are available.
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
            <h2 className="section-title mt-4 max-w-3xl">Visual proof for the environment story.</h2>
          </Reveal>
          <Reveal className="max-w-xl text-sm leading-7 text-slate-300" delay={0.08}>
            Each project can carry a small gallery from <code>public/media/projects/project-slug</code> or reuse existing approved imagery until dedicated assets are available.
          </Reveal>
        </div>
        <FadeScale delay={0.08}>
          <ProjectGalleryLightbox images={project.gallery} title={project.title} />
        </FadeScale>
      </section>

      {project.virtualTour ? (
        <section className="mt-16">
          <VirtualTourEmbed tour={project.virtualTour} />
        </section>
      ) : null}

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
