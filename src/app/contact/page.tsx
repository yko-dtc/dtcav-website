import { ContactForm } from "@/components/contact-form";
import { FadeScale, Reveal } from "@/components/reveal";
import { contactDetails, siteConfig } from "@/content/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start your DTC AV Solutions project inquiry and send your scope directly to the team.",
};

export default function ContactPage() {
  return (
    <div className="page-shell py-16 lg:py-24">
      <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr]">
        <div className="space-y-8">
          <Reveal>
            <p className="eyebrow">Contact us</p>
            <h1 className="mt-5 text-5xl font-semibold leading-[1.06] text-white sm:text-6xl">
              {siteConfig.contactHeadline}
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-300">{contactDetails.intro}</p>
          </Reveal>

          <div className="grid gap-4">
            {contactDetails.expectations.map((item, index) => (
              <FadeScale key={item} className="rounded-[1.8rem] border border-white/10 bg-white/[0.03] p-5" delay={index * 0.08}>
                <p className="text-sm uppercase tracking-[0.22em] text-cyan-200">What to expect</p>
                <p className="mt-3 text-lg text-white">{item}</p>
              </FadeScale>
            ))}
          </div>

          <Reveal className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 text-sm leading-7 text-slate-300" delay={0.24}>
            {contactDetails.reassurance}
          </Reveal>
        </div>

        <Reveal id="inquiry">
          <ContactForm />
        </Reveal>
      </div>
    </div>
  );
}
