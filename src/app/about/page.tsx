import { FadeScale, Reveal } from "@/components/reveal";
import { manufacturerPartners, siteConfig, teamMembers, aboutContent } from "@/content/site";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet DTC AV Solutions and learn how the team approaches premium workplace audiovisual design, build, and integration.",
};

export default function AboutPage() {
  return (
    <div className="page-shell py-16 lg:py-24">
      <Reveal className="max-w-4xl">
        <p className="eyebrow">About DTC AV Solutions</p>
        <h1 className="mt-5 text-5xl font-semibold leading-[1.04] text-white sm:text-6xl">
          A more refined standard for workplace technology environments.
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          {aboutContent.positioning} {siteConfig.motto}.
        </p>
      </Reveal>

      <section className="mt-16 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <FadeScale className="overflow-hidden rounded-[2.5rem] border border-white/10">
          <div className="relative aspect-[1.08]">
            <Image src="/media/hero/nico-0170.jpg" alt="DTC AV workspace showcase" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 55vw" />
          </div>
        </FadeScale>
        <div className="space-y-5 rounded-[2.5rem] border border-white/10 bg-white/[0.03] p-8">
          <p className="eyebrow">Positioning</p>
          <p className="text-base leading-8 text-slate-300">{aboutContent.intro}</p>
          <div className="space-y-3 pt-4">
            {aboutContent.pillars.map((pillar, index) => (
              <Reveal key={pillar} className="rounded-2xl border border-white/10 px-4 py-4 text-sm leading-7 text-slate-300" delay={index * 0.08}>
                {pillar}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-20">
        <Reveal>
          <p className="eyebrow">Team</p>
          <h2 className="section-title mt-4 max-w-3xl">A delivery team that keeps design intent and user experience connected through execution.</h2>
        </Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {teamMembers.map((member, index) => (
            <FadeScale key={member.name} className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03]" delay={index * 0.08}>
              <div className="relative aspect-[0.86]">
                <Image src={member.image} alt={member.name} fill className="object-cover" sizes="(max-width: 1024px) 50vw, 25vw" />
              </div>
              <div className="space-y-2 p-5">
                <h3 className="text-2xl font-semibold text-white">{member.name}</h3>
                <p className="text-sm leading-7 text-slate-400">{member.title}</p>
              </div>
            </FadeScale>
          ))}
        </div>
      </section>

      <section className="mt-20 rounded-[2.5rem] border border-white/10 bg-white/[0.03] p-8">
        <Reveal>
          <p className="eyebrow">Manufacturer ecosystem</p>
          <h2 className="section-title mt-4 max-w-2xl">Trusted brands already woven into the current DTC AV story.</h2>
        </Reveal>
        <div className="mt-10 grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-5">
          {manufacturerPartners.map((item, index) => (
            <FadeScale
              key={item.name}
              className="relative flex h-24 items-center justify-center rounded-2xl border border-white/10 bg-slate-950/60 px-5"
              delay={index * 0.05}
            >
              <Image src={item.image} alt={item.name} fill className="object-contain p-5" sizes="160px" />
            </FadeScale>
          ))}
        </div>
      </section>

      <section className="mt-20">
        <Reveal className="rounded-[2.5rem] border border-cyan-300/20 bg-[linear-gradient(135deg,rgba(8,145,178,0.18),rgba(15,23,42,0.96)_52%)] px-8 py-10">
          <p className="eyebrow">Next step</p>
          <div className="mt-4 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <h2 className="text-4xl font-semibold leading-tight text-white">Tell us about the environment you need to build.</h2>
              <p className="mt-4 text-base leading-8 text-cyan-50/80">
                We built the new experience around clarity and confidence. The inquiry flow does the same.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-white transition hover:bg-white/15"
            >
              Go to contact
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
