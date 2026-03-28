"use client";

import { motion } from "framer-motion";

const smoothEase = [0.33, 1, 0.68, 1] as const;

/** Pair with `whileHover` on cards (y-lift) so hover doesn’t inherit stagger delays */
export const hoverTransition = { duration: 0.22, ease: smoothEase } as const;

export function FadeUp({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px", amount: 0.2 }}
      transition={{ duration: 0.65, delay, ease: smoothEase }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerContainer({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial="initial"
      whileInView="whileInView"
      viewport={{ once: true, margin: "-60px", amount: 0.15 }}
      variants={{
        initial: {},
        whileInView: {
          transition: { staggerChildren: 0.07, delayChildren: 0.12 },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
  interactive,
}: {
  children: React.ReactNode;
  className?: string;
  /** Subtle lift on hover (for cards in grids) */
  interactive?: boolean;
}) {
  return (
    <motion.div
      className={className}
      variants={{
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.55, ease: smoothEase }}
      whileHover={interactive ? { y: -4, transition: hoverTransition } : undefined}
    >
      {children}
    </motion.div>
  );
}

/** Stagger item with 3D flip-in (rotateY) for cards */
export function StaggerItem3D({
  children,
  className,
  direction = "left",
}: {
  children: React.ReactNode;
  className?: string;
  direction?: "left" | "right";
}) {
  const fromRotate = direction === "left" ? -18 : 18;
  return (
    <motion.div
      className={className}
      variants={{
        initial: { opacity: 0, rotateY: fromRotate, y: 24 },
        whileInView: { opacity: 1, rotateY: 0, y: 0 },
      }}
      transition={{ duration: 0.65, ease: smoothEase }}
      style={{ transformStyle: "preserve-3d", transformOrigin: "center center" }}
    >
      {children}
    </motion.div>
  );
}
