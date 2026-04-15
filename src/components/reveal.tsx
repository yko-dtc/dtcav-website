"use client";

import { motion, type MotionProps, useReducedMotion } from "framer-motion";
import type { ElementType, ReactNode } from "react";

type RevealProps = MotionProps & {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  delay?: number;
  distance?: number;
  id?: string;
};

export function Reveal({
  as = "div",
  children,
  className,
  delay = 0,
  distance = 28,
  ...rest
}: RevealProps) {
  const reduceMotion = useReducedMotion();
  const Component = motion.create(as);

  if (reduceMotion) {
    return (
      <Component
        className={className}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.35, delay }}
        {...rest}
      >
        {children}
      </Component>
    );
  }

  return (
    <Component
      className={className}
      initial={{ opacity: 0, y: distance }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: [0.21, 1, 0.35, 1], delay }}
      {...rest}
    >
      {children}
    </Component>
  );
}

export function FadeScale({
  as = "div",
  children,
  className,
  delay = 0,
  ...rest
}: RevealProps) {
  const reduceMotion = useReducedMotion();
  const Component = motion.create(as);

  return (
    <Component
      className={className}
      initial={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.96 }}
      whileInView={reduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.75, ease: [0.21, 1, 0.35, 1], delay }}
      {...rest}
    >
      {children}
    </Component>
  );
}
