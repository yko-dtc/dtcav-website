import { Reveal } from "@/components/reveal";
import type { Project } from "@/content/projects";
import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  project: Project;
  index?: number;
};

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <Reveal
      className="overflow-hidden rounded-[2rem]"
      delay={index * 0.08}
    >
      <Link
        href={`/projects/${project.slug}`}
        className="group block overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] backdrop-blur-sm transition hover:border-white/20"
      >
        <div className="relative aspect-[1.15] overflow-hidden">
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            className="object-cover transition duration-700 group-hover:scale-[1.03]"
            sizes="(max-width: 1024px) 100vw, 33vw"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.08),rgba(2,6,23,0.78)_72%,rgba(2,6,23,0.95))]" />
          <div className="absolute inset-x-0 bottom-0 p-6">
            <p className="eyebrow">{project.eyebrow}</p>
            <h3 className="mt-4 text-2xl font-semibold text-white">{project.title}</h3>
            <p className="mt-3 text-sm text-cyan-50/80">
              {project.client} · {project.location}
            </p>
          </div>
        </div>

        <div className="space-y-6 p-6">
          <p className="text-sm leading-7 text-slate-300">{project.summary}</p>

          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 3).map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-slate-300"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-100 transition group-hover:text-white">
            View project
            <span aria-hidden="true">+</span>
          </div>
        </div>
      </Link>
    </Reveal>
  );
}
