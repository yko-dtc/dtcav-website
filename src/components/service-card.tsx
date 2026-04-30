import { Reveal } from "@/components/reveal";
import type { services } from "@/content/site";
import Link from "next/link";
import type { ReactNode } from "react";

type Service = (typeof services)[number];

const serviceIcons: Record<Service["slug"], ReactNode> = {
  "video-conferencing": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
      <rect x="3.5" y="6.5" width="11" height="11" rx="2.5" />
      <path d="M14.5 10.25 20.5 7.5v9l-6-2.75" />
    </svg>
  ),
  "sound-masking": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
      <path d="M12 3.5c2.75 2.2 5.68 3.3 8.5 3.5v5.5c0 4.6-3.28 7.94-8.5 8.99-5.22-1.05-8.5-4.39-8.5-8.99V7c2.82-.2 5.75-1.3 8.5-3.5Z" />
      <path d="M9 10.5c.7-.82 1.67-1.25 3-1.25s2.3.43 3 1.25" />
      <path d="M8 13c1.02-1.2 2.35-1.8 4-1.8s2.98.6 4 1.8" />
    </svg>
  ),
  "training-rooms": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
      <path d="M4 5.5h16v9H4z" />
      <path d="M8 19.5h8" />
      <path d="M12 14.5v5" />
      <path d="m9 9.5 2 2 4-4" />
    </svg>
  ),
  "town-hall": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
      <rect x="9" y="3.5" width="6" height="10" rx="3" />
      <path d="M6.5 10.5a5.5 5.5 0 0 0 11 0" />
      <path d="M12 16v4.5" />
      <path d="M9 20.5h6" />
    </svg>
  ),
  boardrooms: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
      <path d="M4 6.5h16v6H4z" />
      <path d="M7 17.5h10" />
      <path d="M9 12.5v5" />
      <path d="M15 12.5v5" />
      <path d="M12 6.5v6" />
    </svg>
  ),
};

export function ServiceCard({ service, index }: { service: Service; index: number }) {
  return (
    <Reveal
      className="group rounded-[2rem] border border-white/10 bg-white/5 p-5 backdrop-blur-sm sm:p-6"
      delay={index * 0.08}
    >
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-100 shadow-[0_16px_40px_rgba(14,165,233,0.12)]">
        {serviceIcons[service.slug]}
      </div>
      <div className="mb-5 text-xs uppercase tracking-[0.26em] text-cyan-200 sm:tracking-[0.3em]">{service.eyebrow}</div>
      <h3 className="text-xl font-semibold text-white sm:text-2xl">{service.shortTitle}</h3>
      <p className="mt-4 text-sm leading-7 text-slate-300">{service.summary}</p>
      <ul className="mt-6 space-y-2 text-sm text-slate-400">
        {service.capabilities.slice(0, 2).map((item) => (
          <li key={item} className="flex items-start gap-3">
            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-300" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <Link
        href={`/solutions/${service.slug}`}
        className="mt-8 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-100 transition group-hover:text-white"
      >
        Explore solution
        <span aria-hidden="true">+</span>
      </Link>
    </Reveal>
  );
}
