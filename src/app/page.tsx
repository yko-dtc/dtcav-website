import { HeroStack } from "@/components/hero-stack";
import { ManufacturerBand } from "@/components/manufacturer-band";
import { ProjectCard } from "@/components/project-card";
import { FadeScale, Reveal } from "@/components/reveal";
import { ServiceCard } from "@/components/service-card";
import { getFeaturedProjects } from "@/content/projects";
import {
  aboutContent,
  heroContent,
  manufacturerPartners,
  processSteps,
  proofStats,
  services,
  siteConfig,
  teamMembers,
} from "@/content/site";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  const featuredProjects = getFeaturedProjects();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.name,
    url: siteConfig.url,
    slogan: siteConfig.motto,
    description: siteConfig.description,
    serviceType: services.map((service) => service.title),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <section className="page-shell relative overflow-hidden py-16 lg:py-24">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-8">
            <Reveal className="eyebrow">{heroContent.eyebrow}</Reveal>
            <Reveal as="h1" className="max-w-3xl text-5xl font-semibold leading-[1.03] text-white sm:text-6xl lg:text-7xl">
              {heroContent.title}
            </Reveal>
            <Reveal className="max-w-2xl text-lg leading-8 text-slate-300" delay={0.08}>
              {heroContent.intro}
            </Reveal>
            <Reveal className="grid gap-3 sm:grid-cols-3" delay={0.15}>
              {heroContent.highlights.map((highlight) => (
                <div key={highlight} className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-slate-200">
                  {highlight}
                </div>
              ))}
            </Reveal>
            <Reveal className="flex flex-col gap-4 sm:flex-row" delay={0.22}>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-cyan-300/40 bg-cyan-300/15 px-6 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-100 transition hover:bg-cyan-300/25"
              >
                {siteConfig.ctaLabel}
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-full border border-white/10 px-6 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-slate-200 transition hover:border-white/25 hover:text-white"
              >
                Meet the team
              </Link>
            </Reveal>
            <Reveal className="max-w-2xl rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 text-sm leading-7 text-slate-300" delay={0.3}>
              <span className="eyebrow block pb-3">Current brand baseline</span>
              {heroContent.secondaryTitle} {aboutContent.intro}
            </Reveal>
          </div>
          <HeroStack />
        </div>
      </section>

      <section className="page-shell py-8 lg:py-14">
        <div className="grid gap-4 md:grid-cols-3">
          {proofStats.map((stat, index) => (
            <FadeScale
              key={stat.label}
              className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6"
              delay={index * 0.08}
            >
              <div className="text-5xl font-semibold text-white">{stat.value}</div>
              <div className="mt-3 text-sm uppercase tracking-[0.24em] text-cyan-200">{stat.label}</div>
              <p className="mt-4 text-sm leading-7 text-slate-400">{stat.detail}</p>
            </FadeScale>
          ))}
        </div>
      </section>

      <section className="page-shell grid gap-10 py-20 lg:grid-cols-[0.75fr_1.25fr]">
        <Reveal className="space-y-5">
          <p className="eyebrow">How we deliver</p>
          <h2 className="section-title">From workplace intent to commissioned performance.</h2>
          <p className="section-copy">
            The new site positions DTC AV around a higher-order promise: strategic AV environments that look refined,
            operate simply, and hold up under demanding day-to-day use.
          </p>
        </Reveal>
        <div className="space-y-4">
          {processSteps.map((step, index) => (
            <Reveal
              key={step.title}
              className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6"
              delay={index * 0.08}
            >
              <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-cyan-200">0{index + 1}</p>
                  <h3 className="mt-2 text-2xl font-semibold text-white">{step.title}</h3>
                </div>
                <p className="max-w-xl text-sm leading-7 text-slate-300">{step.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="page-shell py-20">
        <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <p className="eyebrow">Solutions</p>
            <h2 className="section-title mt-4 max-w-3xl">Rooms and systems designed around how your teams actually work.</h2>
          </Reveal>
          <Reveal className="max-w-xl text-sm leading-7 text-slate-300" delay={0.08}>
            Every solution page starts from the current DTC AV service language and translates it into a more premium, enterprise-ready story.
          </Reveal>
        </div>
        <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={service.slug} service={service} index={index} />
          ))}
        </div>
      </section>

      <section className="page-shell py-20">
        <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <p className="eyebrow">Client Projects</p>
            <h2 className="section-title mt-4 max-w-3xl">Selected client projects.</h2>
          </Reveal>
          <Reveal className="max-w-xl text-sm leading-7 text-slate-300" delay={0.08}>
            Explore real DTC AV environments and the systems behind them.
          </Reveal>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
        <Reveal className="mt-8">
          <Link
            href="/projects"
            className="inline-flex items-center justify-center rounded-full border border-white/10 px-6 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-slate-200 transition hover:border-white/25 hover:text-white"
          >
            Browse all projects
          </Link>
        </Reveal>
      </section>

      <section className="page-shell py-12">
        <div className="grid gap-8 overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.03] p-6 lg:grid-cols-[1.08fr_0.92fr] lg:p-8">
          <FadeScale className="relative aspect-[1.12] overflow-hidden rounded-[2rem]">
            <Image
              src="/media/services/boardroom.jpg"
              alt="Executive boardroom AV environment"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
          </FadeScale>
          <div className="flex flex-col justify-center space-y-6">
            <Reveal>
              <p className="eyebrow">Premium boardroom environments</p>
              <h2 className="section-title mt-4">Technology that strengthens the room instead of fighting it.</h2>
            </Reveal>
            <Reveal className="section-copy" delay={0.08}>
              Executive spaces need more than equipment. They need control, confidence, discretion, and presentation quality
              that matches the stakes of the conversations inside them.
            </Reveal>
            <Reveal className="grid gap-3 text-sm text-slate-300" delay={0.15}>
              <div className="rounded-2xl border border-white/10 px-4 py-4">Meeting rooms, conference rooms, and executive boardrooms</div>
              <div className="rounded-2xl border border-white/10 px-4 py-4">Scheduling and platform interoperability with intuitive controls</div>
              <div className="rounded-2xl border border-white/10 px-4 py-4">A finished system experience aligned with architectural quality</div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="page-shell py-20">
        <Reveal className="mb-8">
          <p className="eyebrow">Manufacturer alignment</p>
          <h2 className="section-title mt-4 max-w-2xl">Built with leading AV ecosystem partners already represented on the brand today.</h2>
        </Reveal>
        <ManufacturerBand items={manufacturerPartners} />
      </section>

      <section className="page-shell py-20">
        <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <p className="eyebrow">Team</p>
            <h2 className="section-title mt-4 max-w-2xl">Leadership and delivery expertise behind the installation.</h2>
          </Reveal>
          <Reveal className="max-w-xl text-sm leading-7 text-slate-300" delay={0.08}>
            The current site’s four team members are preserved, but presented with a more editorial and confidence-building treatment.
          </Reveal>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {teamMembers.map((member, index) => (
            <FadeScale key={member.name} className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03]" delay={index * 0.08}>
              <div className="relative aspect-[0.86]">
                <Image src={member.image} alt={member.name} fill className="object-cover" sizes="(max-width: 1024px) 50vw, 25vw" />
              </div>
              <div className="space-y-2 p-5">
                <h3 className="text-xl font-semibold text-white">{member.name}</h3>
                <p className="text-sm leading-6 text-slate-400">{member.title}</p>
              </div>
            </FadeScale>
          ))}
        </div>
      </section>

      <section className="page-shell py-20">
        <Reveal className="rounded-[2.5rem] border border-cyan-300/20 bg-[linear-gradient(135deg,rgba(14,165,233,0.18),rgba(15,23,42,0.94)_55%)] px-6 py-10 lg:px-10">
          <p className="eyebrow">Start the conversation</p>
          <div className="mt-5 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <h2 className="text-4xl font-semibold leading-tight text-white sm:text-5xl">
                Bring your next workplace technology project into a sharper, more seamless future.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-cyan-50/80">
                Whether you are planning a flagship boardroom, a town hall environment, or a broader AV transformation, the next step starts with scope.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-white transition hover:bg-white/15"
            >
              Discuss your project
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
