"use client";

import { budgetTimelineOptions, contactSchema, projectTypeOptions } from "@/lib/contact-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import type { ReactNode } from "react";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import type { z } from "zod";

type ContactFormValues = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [serverMessage, setServerMessage] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      phone: "",
      projectType: "Full workplace AV strategy",
      budgetTimeline: "Planning next 3 months",
      projectLocation: "",
      message: "",
      website: "",
    },
  });

  const onSubmit = (values: ContactFormValues) => {
    setServerMessage(null);

    startTransition(async () => {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const result = (await response.json().catch(() => null)) as
        | { success: boolean; message?: string }
        | null;

      if (!response.ok || !result?.success) {
        setServerMessage(result?.message ?? "We could not submit the form right now. Please try again.");
        return;
      }

      reset();
      setServerMessage("Your inquiry has been submitted. We have sent a confirmation email and will follow up soon.");
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5 rounded-[2rem] border border-white/10 bg-white/[0.04] p-5 shadow-[0_24px_120px_rgba(14,165,233,0.12)] backdrop-blur-xl sm:space-y-6 sm:p-6 md:p-8"
    >
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Name" error={errors.name?.message}>
          <input {...register("name")} className={inputClassName} />
        </Field>
        <Field label="Company" error={errors.company?.message}>
          <input {...register("company")} className={inputClassName} />
        </Field>
        <Field label="Email" error={errors.email?.message}>
          <input type="email" {...register("email")} className={inputClassName} />
        </Field>
        <Field label="Phone" error={errors.phone?.message}>
          <input {...register("phone")} className={inputClassName} />
        </Field>
        <Field label="Project Type" error={errors.projectType?.message}>
          <select {...register("projectType")} className={inputClassName}>
            {projectTypeOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Budget / Timeline" error={errors.budgetTimeline?.message}>
          <select {...register("budgetTimeline")} className={inputClassName}>
            {budgetTimelineOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="Project Location" error={errors.projectLocation?.message}>
        <input {...register("projectLocation")} className={inputClassName} />
      </Field>

      <Field label="Project Scope" error={errors.message?.message}>
        <textarea {...register("message")} rows={6} className={`${inputClassName} resize-none`} />
      </Field>

      <input
        {...register("website")}
        tabIndex={-1}
        autoComplete="off"
        className="sr-only"
        aria-hidden="true"
      />

      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p className="text-sm leading-7 text-slate-400">
          You and the DTC AV team will both receive a confirmation email after submission.
        </p>
        <button
          type="submit"
          disabled={isPending}
          className="inline-flex items-center justify-center rounded-full border border-cyan-300/40 bg-cyan-300/15 px-5 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-100 transition hover:bg-cyan-300/25 disabled:cursor-not-allowed disabled:opacity-60 sm:px-6 sm:tracking-[0.24em]"
        >
          {isPending ? "Submitting..." : "Submit Inquiry"}
        </button>
      </div>

      {serverMessage ? <p className="text-sm text-cyan-100">{serverMessage}</p> : null}
    </form>
  );
}

function Field({
  children,
  label,
  error,
}: {
  children: ReactNode;
  label: string;
  error?: string;
}) {
  return (
    <label className="block space-y-2">
      <span className="text-xs uppercase tracking-[0.22em] text-slate-300">{label}</span>
      {children}
      {error ? <span className="text-sm text-rose-300">{error}</span> : null}
    </label>
  );
}

const inputClassName =
  "w-full rounded-[1.2rem] border border-white/10 bg-slate-950/70 px-4 py-2.5 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/50 sm:py-3";
