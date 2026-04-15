"use client";

import { heroAssets } from "@/content/assets";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

const cards = [
  { src: heroAssets[0], alt: "Premium AV conference room", className: "top-0 left-0 w-[62%]" },
  { src: heroAssets[1], alt: "Modern workspace technology environment", className: "right-0 top-16 w-[54%]" },
  { src: heroAssets[2], alt: "Integrated executive collaboration room", className: "bottom-0 left-[16%] w-[68%]" },
] as const;

export function HeroStack() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative mx-auto aspect-[0.88] w-full max-w-[34rem]">
      <div className="absolute inset-0 rounded-[2.5rem] bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.22),transparent_44%),radial-gradient(circle_at_bottom,rgba(59,130,246,0.2),transparent_40%)] blur-3xl" />
      {cards.map((card, index) => (
        <motion.div
          key={card.src}
          className={`absolute overflow-hidden rounded-[2rem] border border-white/12 bg-slate-900/70 shadow-[0_30px_100px_rgba(2,6,23,0.55)] ${card.className}`}
          initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 28, rotate: index === 1 ? 6 : index === 2 ? -4 : -8 }}
          animate={
            reduceMotion
              ? { opacity: 1 }
              : {
                  opacity: 1,
                  y: [0, index % 2 === 0 ? -12 : 12, 0],
                  rotate: index === 1 ? 6 : index === 2 ? -4 : -8,
                }
          }
          transition={{
            opacity: { duration: 0.9, delay: index * 0.12 },
            y: { duration: 8 + index, repeat: Number.POSITIVE_INFINITY, repeatType: "mirror", ease: "easeInOut" },
            rotate: { duration: 0.8, delay: index * 0.12 },
          }}
        >
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-slate-950/50 via-transparent to-cyan-200/5" />
          <div className="relative aspect-[0.9]">
            <Image src={card.src} alt={card.alt} fill className="object-cover" sizes="(max-width: 1024px) 80vw, 500px" />
          </div>
        </motion.div>
      ))}
      <motion.div
        className="absolute bottom-8 right-4 rounded-full border border-cyan-300/30 bg-slate-950/80 px-4 py-3 text-[11px] uppercase tracking-[0.26em] text-cyan-100 shadow-[0_18px_60px_rgba(14,165,233,0.2)]"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.85, delay: 0.4 }}
      >
        Seamless one-touch usability
      </motion.div>
    </div>
  );
}
