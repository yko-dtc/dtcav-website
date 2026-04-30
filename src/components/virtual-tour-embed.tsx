import type { ProjectVirtualTour } from "@/content/projects";
import Link from "next/link";

type VirtualTourEmbedProps = {
  tour: ProjectVirtualTour;
};

export function VirtualTourEmbed({ tour }: VirtualTourEmbedProps) {
  const embedScale = tour.embedScale ?? 1;

  return (
    <section className="panel-padding rounded-[2.5rem] border border-white/10 bg-white/[0.03]">
      <div className="max-w-3xl">
        <p className="eyebrow">360 Virtual Tour</p>
        <h2 className="mt-4 text-2xl font-semibold text-white sm:text-3xl lg:text-4xl">{tour.title}</h2>
        <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">{tour.description}</p>
        {tour.openInNewTabHref ? (
          <a
            href={tour.openInNewTabHref}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center rounded-full border border-cyan-300/30 bg-cyan-300/15 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-50 shadow-[0_0_0_1px_rgba(103,232,249,0.08)] transition hover:bg-cyan-300/25 hover:text-white"
          >
            Open In New Tab
          </a>
        ) : null}
      </div>

      {tour.embedUrl ? (
        <div className="mt-8 overflow-hidden rounded-[2rem] border border-white/10">
          <div className="relative aspect-video min-h-[200px] sm:aspect-[16/10] sm:min-h-[320px]">
            <iframe
              src={tour.embedUrl}
              title={tour.title}
              className="absolute left-0 top-0 border-0"
              style={{
                width: `${100 / embedScale}%`,
                height: `${100 / embedScale}%`,
                transform: `scale(${embedScale})`,
                transformOrigin: "top left",
              }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        </div>
      ) : (
        <div className="panel-padding-sm mt-8 rounded-[2rem] border border-dashed border-cyan-300/30 bg-cyan-300/5">
          <p className="text-sm leading-7 text-cyan-50/80">
            This project is tour-ready. Add the approved embed URL in `src/content/projects.ts` to publish the
            immersive walkthrough here.
          </p>
          {tour.provider ? (
            <p className="mt-3 text-xs uppercase tracking-[0.24em] text-cyan-200">Preferred provider: {tour.provider}</p>
          ) : null}
          {tour.fallbackHref ? (
            <Link
              href={tour.fallbackHref}
              className="mt-5 inline-flex items-center rounded-full border border-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white transition hover:bg-white/10"
            >
              Contact DTC AV
            </Link>
          ) : null}
        </div>
      )}
    </section>
  );
}
