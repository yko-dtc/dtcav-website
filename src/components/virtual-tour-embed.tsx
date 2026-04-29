import type { ProjectVirtualTour } from "@/content/projects";
import Link from "next/link";

type VirtualTourEmbedProps = {
  tour: ProjectVirtualTour;
};

export function VirtualTourEmbed({ tour }: VirtualTourEmbedProps) {
  return (
    <section className="rounded-[2.5rem] border border-white/10 bg-white/[0.03] p-6 lg:p-8">
      <div className="max-w-3xl">
        <p className="eyebrow">360 Virtual Tour</p>
        <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">{tour.title}</h2>
        <p className="mt-4 text-base leading-8 text-slate-300">{tour.description}</p>
      </div>

      {tour.embedUrl ? (
        <div className="mt-8 overflow-hidden rounded-[2rem] border border-white/10">
          <div className="aspect-[16/10] min-h-[320px]">
            <iframe
              src={tour.embedUrl}
              title={tour.title}
              className="h-full w-full"
              loading="lazy"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        </div>
      ) : (
        <div className="mt-8 rounded-[2rem] border border-dashed border-cyan-300/30 bg-cyan-300/5 p-6">
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
