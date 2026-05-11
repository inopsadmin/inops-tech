"use client";

import { motion } from "framer-motion";

/**
 * Premium scroll-based animations (Framer Motion).
 * Viewport: once: true, amount: 0.3
 * Transition: ~0.7s easeOut. Cards: hover scale 1.05.
 *
 * Usage:
 * <AnimatedSection className="py-16">
 *   <AnimatedHeading as="h2" className="text-slate-900">Title</AnimatedHeading>
 *   <AnimatedParagraph className="mt-4 text-slate-600">Subtitle</AnimatedParagraph>
 *   <AnimatedCardGrid className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
 *     <AnimatedCardItem direction="left" className="...">Card 1</AnimatedCardItem>
 *     <AnimatedCardItem direction="right" className="...">Card 2</AnimatedCardItem>
 *     <AnimatedCardItem direction="bottom" className="...">Card 3</AnimatedCardItem>
 *     <AnimatedCardItem direction="top" className="...">Card 4</AnimatedCardItem>
 *   </AnimatedCardGrid>
 * </AnimatedSection>
 *
 * Or use standalone AnimatedCard with direction for single cards.
 */

const viewportConfig = { once: true, amount: 0.25 };
const easeSmooth = [0.33, 1, 0.68, 1] as const;
const transitionConfig = { duration: 0.8, ease: easeSmooth };
const staggerDelay = 0.1;

/* ----- Section wrapper ----- */
type AnimatedSectionProps = {
  children: React.ReactNode;
  id?: string;
  className?: string;
};

export function AnimatedSection({ children, id, className = "" }: AnimatedSectionProps) {
  return (
    <motion.section
      id={id}
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: 0.1,
          },
        },
      }}
    >
      {children}
    </motion.section>
  );
}

/* ----- Heading: animate from bottom (y: 60 → 0) ----- */
type AnimatedHeadingProps = {
  children: React.ReactNode;
  as?: "h1" | "h2" | "h3" | "h4";
  className?: string;
};

const headingTags = {
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
  h4: motion.h4,
};

export function AnimatedHeading({
  children,
  as: Tag = "h2",
  className = "",
}: AnimatedHeadingProps) {
  const Component = headingTags[Tag];
  return (
    <Component
      className={className}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportConfig}
      transition={transitionConfig}
    >
      {children}
    </Component>
  );
}

/* ----- Paragraph: fade in with slight upward motion ----- */
type AnimatedParagraphProps = {
  children: React.ReactNode;
  className?: string;
};

export function AnimatedParagraph({ children, className = "" }: AnimatedParagraphProps) {
  return (
    <motion.p
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportConfig}
      transition={{ ...transitionConfig, duration: 0.75 }}
    >
      {children}
    </motion.p>
  );
}

/* ----- Card directions for alternate fly-in ----- */
export type AnimatedCardDirection = "left" | "right" | "bottom" | "top";

const cardDirectionVariants: Record<
  AnimatedCardDirection,
  { hidden: { opacity: number; x?: number; y?: number }; visible: { opacity: number; x?: number; y?: number } }
> = {
  left: { hidden: { opacity: 0, x: -100 }, visible: { opacity: 1, x: 0 } },
  right: { hidden: { opacity: 0, x: 100 }, visible: { opacity: 1, x: 0 } },
  bottom: { hidden: { opacity: 0, y: 100 }, visible: { opacity: 1, y: 0 } },
  top: { hidden: { opacity: 0, y: -100 }, visible: { opacity: 1, y: 0 } },
};

/* ----- Single card with direction and hover scale ----- */
type AnimatedCardProps = {
  children: React.ReactNode;
  direction?: AnimatedCardDirection;
  className?: string;
};

export function AnimatedCard({
  children,
  direction = "bottom",
  className = "",
}: AnimatedCardProps) {
  const { hidden, visible } = cardDirectionVariants[direction];
  return (
    <motion.div
      className={className}
      initial={hidden}
      whileInView={visible}
      viewport={viewportConfig}
      transition={{ ...transitionConfig, type: "tween", duration: 0.35 }}
      whileHover={{ scale: 1.05 }}
      style={{ transformOrigin: "center center" }}
    >
      {children}
    </motion.div>
  );
}

/* ----- Container for staggered cards (use with AnimatedCard) ----- */
type AnimatedCardGridProps = {
  children: React.ReactNode;
  className?: string;
};

export function AnimatedCardGrid({ children, className = "" }: AnimatedCardGridProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: 0.15,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

/* ----- Staggered card item (for use inside AnimatedCardGrid with direction) ----- */
type AnimatedCardItemProps = {
  children: React.ReactNode;
  direction: AnimatedCardDirection;
  className?: string;
};

export function AnimatedCardItem({
  children,
  direction,
  className = "",
}: AnimatedCardItemProps) {
  return (
    <motion.div
      className={className}
      variants={cardDirectionVariants[direction]}
      transition={transitionConfig}
      whileHover={{
        scale: 1.03,
        y: -6,
        rotateY: 3,
        transition: { duration: 0.35, ease: [0.33, 1, 0.68, 1] },
      }}
      style={{
        transformOrigin: "center center",
        transformStyle: "preserve-3d",
      }}
    >
      {children}
    </motion.div>
  );
}
