import { z } from "zod";

export const projectTypeOptions = [
  "Video conferencing",
  "Sound masking",
  "Training rooms",
  "Town hall",
  "Meeting and boardrooms",
  "Full workplace AV strategy",
] as const;

export const budgetTimelineOptions = [
  "Immediate need",
  "Planning next 3 months",
  "Planning next 6-12 months",
  "Exploring options",
] as const;

export const contactSchema = z.object({
  name: z.string().min(2, "Please share your name.").max(80),
  company: z.string().min(2, "Please share your company.").max(120),
  email: z.string().email("Please enter a valid email."),
  phone: z.string().min(7, "Please enter a valid phone number.").max(30),
  projectType: z.enum(projectTypeOptions, {
    error: "Please choose the project type that best fits your request.",
  }),
  budgetTimeline: z.enum(budgetTimelineOptions, {
    error: "Please choose a budget and timeline qualifier.",
  }),
  projectLocation: z.string().max(120).optional().or(z.literal("")),
  message: z
    .string()
    .min(24, "Please provide a bit more project detail so we can respond well.")
    .max(3000),
  website: z.string().max(0).optional(),
});

export type ContactSubmission = z.infer<typeof contactSchema>;
