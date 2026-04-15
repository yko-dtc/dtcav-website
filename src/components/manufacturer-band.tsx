"use client";

import { FadeScale } from "@/components/reveal";
import type { manufacturerPartners } from "@/content/site";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

type Manufacturer = (typeof manufacturerPartners)[number];

export function ManufacturerBand({ items }: { items: Manufacturer[] }) {
  const reduceMotion = useReducedMotion();
  const doubledItems = [...items, ...items];

  return (
    <FadeScale className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] py-6">
      <motion.div
        className="flex min-w-max items-center gap-10 px-8"
        animate={
          reduceMotion
            ? undefined
            : {
                x: ["0%", "-50%"],
              }
        }
        transition={
          reduceMotion
            ? undefined
            : {
                duration: 24,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }
        }
      >
        {doubledItems.map((item, index) => (
          <div
            key={`${item.name}-${index}`}
            className="relative h-12 w-28 shrink-0 opacity-80 transition hover:opacity-100"
          >
            <Image src={item.image} alt={item.name} fill className="object-contain" sizes="112px" />
          </div>
        ))}
      </motion.div>
    </FadeScale>
  );
}
