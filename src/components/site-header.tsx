"use client";

import { brandAssets } from "@/content/assets";
import { navigation, siteConfig } from "@/content/site";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export function SiteHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6 sm:py-4 lg:px-10">
        <Link
          href="/"
          className="flex items-center gap-3"
          aria-label={`${siteConfig.name} home`}
          onClick={() => setIsOpen(false)}
        >
          <div className="relative h-12 w-[8.4rem] md:h-[2.925rem] md:w-[7.8rem]">
            <Image
              src={brandAssets.logo}
              alt={siteConfig.shortName}
              fill
              className="object-contain object-left"
              sizes="96px"
              priority
            />
          </div>
          <div className="hidden border-l border-white/10 pl-3 text-[11px] uppercase tracking-[0.32em] text-slate-300 md:block">
            {siteConfig.motto}
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => {
            const active =
              item.label === "Solutions"
                ? pathname.startsWith("/solutions")
                : item.href === "/"
                  ? pathname === item.href
                  : pathname === item.href || pathname.startsWith(`${item.href}/`);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm tracking-[0.16em] text-slate-300 transition hover:text-white",
                  active && "text-white",
                )}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-100 transition hover:bg-cyan-300/20"
          >
            {siteConfig.ctaLabel}
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white md:hidden sm:h-11 sm:w-11"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
          onClick={() => setIsOpen((value) => !value)}
        >
          <span className="space-y-1.5">
            <span className={cn("block h-px w-5 bg-white transition", isOpen && "translate-y-2 rotate-45")} />
            <span className={cn("block h-px w-5 bg-white transition", isOpen && "opacity-0")} />
            <span className={cn("block h-px w-5 bg-white transition", isOpen && "-translate-y-2 -rotate-45")} />
          </span>
        </button>
      </div>

      <motion.div
        initial={false}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
        }}
        className="overflow-hidden border-t border-white/10 bg-slate-950/95 md:hidden"
      >
        <div className="space-y-4 px-4 py-5 sm:px-6">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block text-sm uppercase tracking-[0.2em] text-slate-200"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="inline-flex rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-100"
            onClick={() => setIsOpen(false)}
          >
            {siteConfig.ctaLabel}
          </Link>
        </div>
      </motion.div>
    </header>
  );
}
