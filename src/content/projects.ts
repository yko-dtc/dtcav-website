import { projectAssets } from "@/content/assets";

export type ProjectMetric = {
  label: string;
  value: string;
  detail: string;
};

export type ProjectVirtualTour = {
  title: string;
  description: string;
  embedUrl?: string;
  embedScale?: number;
  openInNewTabHref?: string;
  fallbackHref?: string;
  provider?: string;
};

export type Project = {
  slug: string;
  title: string;
  client: string;
  sector: string;
  location: string;
  completionLabel: string;
  eyebrow: string;
  summary: string;
  overview: string;
  challenge: string;
  solution: string;
  scope: readonly string[];
  roomProgram: readonly string[];
  technologies: readonly string[];
  outcomes: readonly string[];
  metrics: readonly ProjectMetric[];
  coverImage: string;
  gallery: readonly string[];
  featured?: boolean;
  virtualTour?: ProjectVirtualTour;
};

export const projectsPageContent = {
  eyebrow: "Client Projects",
  title: "Client projects in real environments.",
  intro:
    "A focused portfolio of real workplace technology environments.",
  ctaTitle: "Have a space that needs this level of integration?",
  ctaBody:
    "Share the room types, constraints, and timeline, and the DTC AV team can help define the right next step.",
} as const;

export const projects: readonly Project[] = [
  {
    slug: "aquarian-holdings",
    title: "Aquarian Holdings Flagship NYC Office",
    client: "Aquarian Holdings",
    sector: "Financial",
    location: "Manhattan, New York City",
    completionLabel: "Three-floor flagship office AV deployment",
    eyebrow: "Executive Collaboration + Workplace AV",
    summary:
      "A three-floor Manhattan AV deployment unifying executive rooms, meeting spaces, open areas, and workplace audio.",
    overview:
      "DTC AV delivered a unified workplace technology experience across Aquarian Holdings' flagship Manhattan office.",
    challenge:
      "Support a wide range of room types across three floors without sacrificing consistency or ease of use.",
    solution:
      "Deploy one coordinated AV standard across collaboration, presentation, scheduling, open-area display, and workplace audio.",
    scope: [
      "Flagship NYC office AV deployment across three floors",
      "Executive boardrooms and conference environments",
      "Standardized meeting-room workflows across varied room types",
      "Open-area display control and distributed workplace audio",
      "Sound masking for open offices, trading environments, and executive areas",
      "System commissioning, testing, and client training",
    ],
    roomProgram: [
      "Executive and large-format meeting spaces designed for leadership collaboration and client-facing use",
      "Conference rooms and flexible collaboration spaces standardized around a common user experience",
      "Huddle rooms and smaller meeting environments built for consistent day-to-day hybrid use",
      "Executive offices, phone rooms, and specialty spaces supported by tailored presentation and control workflows",
      "Open areas, lounges, and workplace support zones integrated into the broader AV ecosystem",
    ],
    technologies: [
      "Custom Crestron control and room scheduling",
      "Native Teams room workflows with flexible presentation options",
      "Intelligent camera, microphone, and speaker systems",
      "Open-area display routing and workplace audio control",
      "Distributed background music and sound masking",
    ],
    outcomes: [
      "One consistent user experience across the office",
      "Hybrid-ready rooms with flexible presentation workflows",
      "Open-area display and audio aligned with the meeting-room standard",
      "Commissioned and delivered for confident daily use",
    ],
    metrics: [
      {
        label: "Floors",
        value: "3",
        detail: "The deployment spanned Aquarian Holdings' flagship Manhattan office across three full floors.",
      },
      {
        label: "Room mix",
        value: "Multi-format",
        detail: "The office combined executive, conference, huddle, open-area, and workplace-support environments under one AV standard.",
      },
      {
        label: "Experience",
        value: "Unified",
        detail: "Control, presentation, scheduling, and workplace audio were aligned into one coordinated user experience.",
      },
    ],
    coverImage: projectAssets["aquarian-holdings"].cover,
    gallery: projectAssets["aquarian-holdings"].gallery,
    featured: true,
    virtualTour: {
      title: "Aquarian Holdings 360 Virtual Tour",
      description:
        "Explore the Aquarian Holdings flagship office through an immersive 360 walkthrough that complements the project photography and case-study overview.",
      embedUrl: "https://realsee.ai/z7RRA3zk",
      embedScale: 0.6,
      openInNewTabHref: "https://realsee.ai/z7RRA3zk",
      provider: "RealSee",
    },
  },
] as const;

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getFeaturedProjects() {
  return projects.filter((project) => project.featured);
}
