import {
  brandAssets,
  heroAssets,
  manufacturerAssets,
  serviceAssets,
  teamAssets,
} from "@/content/assets";

export const siteConfig = {
  name: "DTC AV Solutions",
  shortName: "DTC AV",
  url: "https://www.dtcav.com",
  motto: "Designing the Future of Workspace Technology",
  description:
    "DTC AV Solutions designs, builds, and integrates high-performance workplace technology for conference rooms, town halls, training environments, and executive spaces.",
  ctaLabel: "Start Your Project",
  contactHeadline: "Tell us about your project to get started.",
} as const;

export const navigation = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/solutions/video-conferencing", label: "Solutions" },
  { href: "/contact", label: "Contact" },
] as const;

export const heroContent = {
  eyebrow: "Enterprise AV Design + Integration",
  title: "Workplace technology environments engineered for the next decade.",
  intro:
    "DTC AV Solutions delivers premium audiovisual design, build, and integration for organizations that expect seamless performance, elevated aesthetics, and true one-touch usability.",
  highlights: [
    "Multi-million-dollar AV environments",
    "Top-tier manufacturer alignment",
    "Built for high-stakes collaboration",
  ],
  secondaryTitle: "User-centric innovation that puts your business at the cutting edge.",
  carouselImages: heroAssets,
} as const;

export const proofStats = [
  { value: "5", label: "core workplace environments", detail: "designed around real collaboration patterns" },
  { value: "1", label: "button simplicity", detail: "for spaces that need frictionless operation" },
  { value: "17", label: "manufacturer partners", detail: "featured across the current DTC AV platform" },
] as const;

export const processSteps = [
  {
    title: "Design Intent",
    description:
      "We shape the technology strategy around user experience, spatial aesthetics, workflow demands, and long-term operational needs.",
  },
  {
    title: "Precision Buildout",
    description:
      "Integration is coordinated across room types, control systems, audio coverage, display strategy, and collaboration platforms.",
  },
  {
    title: "Commissioning + Confidence",
    description:
      "Each space is tuned, tested, and delivered with polished handoff so teams can operate complex systems with confidence from day one.",
  },
] as const;

export const services = [
  {
    slug: "video-conferencing",
    title: "Video Conferencing",
    shortTitle: "Video Conferencing",
    eyebrow: "Hybrid Collaboration",
    image: serviceAssets["video-conferencing"],
    summary:
      "High-definition conferencing systems designed for clear communication across rooms, platforms, and distributed teams.",
    description:
      "HD video technologies are advancing with the same end goal in mind: seamless and efficient communication across multiple platforms and locations.",
    detail:
      "Today, more than 65% of all meetings involve at least one remote participant, making this practice area one of the most important in our industry. From huddle rooms to divisible board rooms, DTC AV can design, implement, and maintain solutions that fit your schedule, budget, and technical requirements.",
    capabilities: [
      "Huddle spaces, conference rooms, and divisible boardrooms",
      "Platform-friendly room experiences for Zoom, Microsoft Teams, Google Workspace, and more",
      "Clear sightlines, camera framing, and intelligible audio pickup",
    ],
    outcomes: [
      "Smoother hybrid participation",
      "Lower user friction during meetings",
      "Consistent room behavior across the workplace",
    ],
  },
  {
    slug: "sound-masking",
    title: "Sound Masking",
    shortTitle: "Sound Masking",
    eyebrow: "Speech Privacy",
    image: serviceAssets["sound-masking"],
    summary:
      "Thoughtful sound masking systems that minimize distraction, protect privacy, and improve the day-to-day workplace experience.",
    description:
      "DTC AV has the ability to design and implement thoughtful sound masking solutions that efficiently minimize the noise caused by an office.",
    detail:
      "As a matter of speech privacy, or giving employees a distraction-free environment, our highly targeted, sleek systems deliver a level of noise mitigation that will positively impact the workplace environment.",
    capabilities: [
      "Targeted masking layouts for open-plan environments",
      "Acoustic comfort planning for focus-driven work areas",
      "Refined systems that complement modern interior design",
    ],
    outcomes: [
      "Improved speech privacy",
      "Reduced distraction across teams",
      "More comfortable shared environments",
    ],
  },
  {
    slug: "training-rooms",
    title: "Training Rooms",
    shortTitle: "Training Rooms",
    eyebrow: "Learning Environments",
    image: serviceAssets["training-rooms"],
    summary:
      "Flexible training environments built for instruction, recording, collaboration, and hybrid participation at scale.",
    description:
      "DTC AV offers customized programs to work for you and your team on high-end training rooms that enhance learning and development within your organization.",
    detail:
      "Divisible room technology, wireless presentation, and targeted microphone pick-up for remote and in-person meetings allow for group sessions of all sizes to be easily coordinated in real-time, and recorded for future use.",
    capabilities: [
      "Divisible-room technology and wireless presentation",
      "Targeted microphone pickup for in-room and remote participants",
      "Recording-ready systems for repeatable knowledge sharing",
    ],
    outcomes: [
      "Higher-quality facilitation",
      "Scalable hybrid training sessions",
      "Better retention through reliable room performance",
    ],
  },
  {
    slug: "town-hall",
    title: "Town Hall",
    shortTitle: "Town Hall",
    eyebrow: "All-Hands Communication",
    image: serviceAssets["town-hall"],
    summary:
      "Custom town hall environments that support open communication, strong presence, and organization-wide engagement.",
    description:
      "Inter-company collaboration is integral to any organization, and a customized town hall environment facilitates open communication and creativity.",
    detail:
      "Let DTC AV design and build a customized town hall with projection screens, ambient sound, wireless microphones, and a vast array of plug and play technology.",
    capabilities: [
      "Projection, ambient sound, and wireless microphone systems",
      "Plug-and-play setups for frequent leadership communications",
      "Layouts that feel intentional for large-format gatherings",
    ],
    outcomes: [
      "More engaging all-hands experiences",
      "Reliable large-room communication",
      "Stronger connection between teams and leadership",
    ],
  },
  {
    slug: "boardrooms",
    title: "Meeting Rooms, Conference Rooms, Executive Boardrooms",
    shortTitle: "Boardrooms",
    eyebrow: "Executive Collaboration",
    image: serviceAssets.boardrooms,
    summary:
      "Seamless, user-friendly meeting environments that elevate executive collaboration and reflect the quality of the spaces they serve.",
    description:
      "Build out a seamless, user-friendly experience in all meeting rooms, conference rooms and executive board rooms that will enhance the way your employees collaborate and work.",
    detail:
      "Book rooms and check availability from platforms such as Office 365, Microsoft Exchange, Google G Suite, Zoom, and more, with intuitive functionality at its core.",
    capabilities: [
      "Executive boardrooms and high-visibility meeting spaces",
      "Scheduling and room-booking workflows connected to modern workplace platforms",
      "Controls and interfaces centered on intuitive operation",
    ],
    outcomes: [
      "Elevated executive experience",
      "Faster meeting starts",
      "Technology that aligns with premium interior design",
    ],
  },
] as const;

export const manufacturerPartners = Object.entries(manufacturerAssets).map(
  ([name, image]) => ({
    name,
    image,
  }),
);

export const teamMembers = [
  {
    name: "Ryan King",
    title: "Director of AV Operations",
    image: teamAssets["ryan-king"],
  },
  {
    name: "Dave Rivera",
    title: "Lead, AV Testing & Commissioning",
    image: teamAssets["dave-rivera"],
  },
  {
    name: "Rob Catalano",
    title: "AV Project Manager",
    image: teamAssets["rob-catalano"],
  },
  {
    name: "Andrea Zarreva",
    title: "AV Design Engineer",
    image: teamAssets["andrea-zarreva"],
  },
] as const;

export const aboutContent = {
  intro:
    "DTC AV Solutions designs and installs audio visual systems specifically to your needs with one-button ease of use as a top priority, ensuring the result is seamlessly user-friendly and aligned with the aesthetic of the space.",
  positioning:
    "The company is oriented around premium workplace technology environments where usability, polish, and long-term maintainability matter as much as the spec sheet.",
  pillars: [
    "User-first system design that reduces operational friction",
    "Premium workplace integration for meeting, learning, and presentation spaces",
    "Manufacturer-aligned delivery for high-performance enterprise environments",
  ],
} as const;

export const contactDetails = {
  intro:
    "Share the scope, timeline, and room types involved, and we will follow up with a tailored response built around your workplace goals.",
  reassurance:
    "Every inquiry receives both an internal project alert and a confirmation email to the requester, creating a clean handoff from first contact.",
  expectations: [
    "Project fit conversation",
    "Recommended next steps",
    "Clear follow-up from the DTC AV team",
  ],
} as const;

export const footerContent = {
  statement: "Premium AV design, build, and integration for modern workspaces.",
  copyright: "All content copyright © 2025",
} as const;

export const socialPreview = {
  title: `${siteConfig.shortName} | ${siteConfig.motto}`,
  description: siteConfig.description,
  image: brandAssets.socialCard,
} as const;

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}
