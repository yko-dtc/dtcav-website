import { Reveal } from "@/components/reveal";
import type { services } from "@/content/site";
import Link from "next/link";

type Service = (typeof services)[number];

export function ServiceCard({ service, index }: { service: Service; index: number }) {
  return (
    <Reveal
      className="group rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
      delay={index * 0.08}
    >
      <div className="mb-5 text-xs uppercase tracking-[0.3em] text-cyan-200">{service.eyebrow}</div>
      <h3 className="text-2xl font-semibold text-white">{service.shortTitle}</h3>
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
