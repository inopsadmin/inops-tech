"use client";

import { useRef, useEffect } from "react";

const offsets = {
  up: "translateY(56px)",
  down: "translateY(-44px)",
  left: "translateX(48px) translateY(6px)",
  right: "translateX(-48px) translateY(6px)",
} as const;

export type FlyDirection = keyof typeof offsets;

type Tag = "h1" | "h2" | "h3" | "h4" | "p" | "span" | "div" | "li";

export type FlyInTextProps = {
  as?: Tag;
  direction?: FlyDirection;
  delay?: number;
  duration?: number;
  className?: string;
  id?: string;
  children: React.ReactNode;
  trigger?: "view" | "mount";
};

export function FlyInText({
  as: Tag = "div",
  direction = "up",
  delay = 0,
  duration = 0.7,
  className,
  id,
  children,
  trigger = "view",
}: FlyInTextProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ease = "cubic-bezier(0.2, 0.85, 0.22, 1)";
    const transition = `opacity ${duration}s ${ease} ${delay}s, transform ${duration}s ${ease} ${delay}s`;

    el.style.opacity = "0";
    el.style.transform = offsets[direction];

    if (trigger === "mount") {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          el.style.transition = transition;
          el.style.opacity = "1";
          el.style.transform = "none";
        });
      });
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.transition = transition;
          el.style.opacity = "1";
          el.style.transform = "none";
          observer.disconnect();
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -8% 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [trigger, direction, delay, duration]);

  return (
    // @ts-expect-error – ref type varies by tag, safe here
    <Tag ref={ref} id={id} className={className}>
      {children}
    </Tag>
  );
}
