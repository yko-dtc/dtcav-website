import { FadeScale, Reveal } from "@/components/reveal";
import { getServiceBySlug, services, siteConfig } from "@/content/site";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {};
  }

  return {
    title: service.shortTitle,
    description: service.summary,
  };
}

export default async function SolutionDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="page-shell page-hero">
      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="space-y-7">
          <Reveal>
            <p className="eyebrow">{service.eyebrow}</p>
            <h1 className="page-title mt-5 leading-[1.06]">{service.title}</h1>
            <p className="mt-6 text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">{service.summary}</p>
          </Reveal>
          <Reveal className="panel-padding-sm rounded-[2rem] border border-white/10 bg-white/[0.03] text-sm leading-7 text-slate-300 sm:text-base sm:leading-8" delay={0.08}>
            {service.description}
          </Reveal>
          <Reveal className="panel-padding-sm rounded-[2rem] border border-white/10 bg-white/[0.03] text-sm leading-7 text-slate-300" delay={0.15}>
            {service.detail}
          </Reveal>
        </div>
        <FadeScale className="relative overflow-hidden rounded-[2.5rem] border border-white/10">
          <div className="relative aspect-[1.02]">
            <Image src={service.image} alt={service.title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 55vw" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/10 to-transparent" />
        </FadeScale>
      </div>

      <section className="mt-16 grid gap-6 lg:grid-cols-2">
        <FadeScale className="panel-padding-sm rounded-[2rem] border border-white/10 bg-white/[0.03]">
          <p className="eyebrow">Capabilities</p>
          <ul className="mt-5 space-y-4">
            {service.capabilities.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm leading-7 text-slate-300">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-300" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </FadeScale>
        <FadeScale className="panel-padding-sm rounded-[2rem] border border-white/10 bg-white/[0.03]" delay={0.08}>
          <p className="eyebrow">Outcomes</p>
          <ul className="mt-5 space-y-4">
            {service.outcomes.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm leading-7 text-slate-300">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-300" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </FadeScale>
      </section>

      <section className="panel-padding mt-16 rounded-[2.5rem] border border-white/10 bg-white/[0.03]">
        <Reveal>
          <p className="eyebrow">Integrated delivery</p>
          <h2 className="section-title mt-4 max-w-3xl">A space succeeds when the technical performance and the user experience are equally intentional.</h2>
          <p className="mt-5 max-w-3xl text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">
            DTC AV Solutions approaches every environment with the same standard: premium design language, practical controls, and deployment shaped around the realities of collaboration, training, presentation, and leadership communication.
          </p>
        </Reveal>
      </section>

      <section className="mt-16">
        <Reveal className="rounded-[2.5rem] border border-cyan-300/20 bg-[linear-gradient(135deg,rgba(8,145,178,0.18),rgba(15,23,42,0.96)_55%)] px-5 py-8 sm:px-6 sm:py-10 lg:px-8">
          <p className="eyebrow">Discuss this solution</p>
          <div className="mt-5 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">Ready to talk about your {service.shortTitle.toLowerCase()} environment?</h2>
              <p className="mt-4 text-sm leading-7 text-cyan-50/80 sm:text-base sm:leading-8">
                Share your project scope and the DTC AV team will follow up with the next step.
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
