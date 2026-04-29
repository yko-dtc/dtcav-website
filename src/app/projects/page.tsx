import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";
import { projects, projectsPageContent } from "@/content/projects";
import { siteConfig } from "@/content/site";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Client Projects",
  description:
    "Explore DTC AV client projects, case-study storytelling, and future-ready project pages designed to showcase integration outcomes.",
};

export default function ProjectsPage() {
  return (
    <>
      <section className="page-shell page-hero">
        <Reveal className="max-w-4xl">
          <p className="eyebrow">{projectsPageContent.eyebrow}</p>
          <h1 className="page-title mt-5">
            {projectsPageContent.title}
          </h1>
          <p className="mt-6 max-w-3xl text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">{projectsPageContent.intro}</p>
        </Reveal>
      </section>

      <section className="page-shell pb-14 sm:pb-16 lg:pb-20">
        <div className="max-w-5xl">
          <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
          </div>
        </div>
      </section>

      <section className="page-shell page-section">
        <Reveal className="rounded-[2.5rem] border border-cyan-300/20 bg-[linear-gradient(135deg,rgba(14,165,233,0.18),rgba(15,23,42,0.94)_55%)] px-5 py-8 sm:px-6 sm:py-10 lg:px-10">
          <p className="eyebrow">Start the conversation</p>
          <div className="mt-5 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
                {projectsPageContent.ctaTitle}
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-cyan-50/80 sm:text-base sm:leading-8">
                {projectsPageContent.ctaBody}
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
    </>
  );
}
