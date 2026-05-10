"use client";

import { motion, useReducedMotion } from "framer-motion";

const ease = [0.2, 0.85, 0.22, 1] as const;

/** Shared viewport: first scroll into view, then fly in (once). */
export const flyInViewport = {
  once: true as const,
  amount: 0.2 as const,
  margin: "0px 0px -8% 0px" as const,
};

const offsets = {
  up: { x: 0, y: 56 },
  down: { x: 0, y: -44 },
  left: { x: 48, y: 6 },
  right: { x: -48, y: 6 },
} as const;

export type FlyDirection = keyof typeof offsets;

type Tag = "h1" | "h2" | "h3" | "h4" | "p" | "span" | "div" | "li";

const motionTags: Record<Tag, (typeof motion)[Tag]> = {
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
  h4: motion.h4,
  p: motion.p,
  span: motion.span,
  div: motion.div,
  li: motion.li,
};

export type FlyInTextProps = {
  as?: Tag;
  direction?: FlyDirection;
  delay?: number;
  duration?: number;
  className?: string;
  id?: string;
  children: React.ReactNode;
  /**
   * `view` (default): animate when the element scrolls into view.
   * `mount`: animate on first paint — use for above-the-fold copy on page load.
   */
  trigger?: "view" | "mount";
};

export function FlyInText({
  as = "div",
  direction = "up",
  delay = 0,
  duration = 0.7,
  className,
  id,
  children,
  trigger = "view",
}: FlyInTextProps) {
  const reduce = useReducedMotion();
  const { x, y } = offsets[direction];
  const Cmp = motionTags[as];

  const initial = reduce ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x, y };
  const animate = { opacity: 1, x: 0, y: 0 };
  const transition = {
    duration: reduce ? 0 : duration,
    ease,
    delay: reduce ? 0 : delay,
  };

  if (trigger === "mount") {
    return (
      <Cmp id={id} className={className} initial={initial} animate={animate} transition={transition}>
        {children}
      </Cmp>
    );
  }

  return (
    <Cmp
      id={id}
      className={className}
      initial={initial}
      whileInView={animate}
      viewport={flyInViewport}
      transition={transition}
    >
      {children}
    </Cmp>
  );
}
