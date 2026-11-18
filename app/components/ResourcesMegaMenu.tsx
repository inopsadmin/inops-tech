"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const EVALUATE = [
  {
    label: "Case Studies",
    href: "/case-studies",
    description: "Results from Indian plants",
  },
  {
    label: "CLMS Pricing",
    href: "/clms-pricing",
    description: "What drives the cost",
  },
];

const LEARN = [
  {
    label: "Blog",
    href: "/blog",
    description: "Guides for plant HR and compliance",
  },
  {
    label: "Brochures",
    href: "/brochures",
    description: "Product PDFs for evaluation teams",
  },
  {
    label: "Glossary",
    href: "/glossary",
    description: "Labour Code and CLRA terms explained",
  },
  {
    label: "Research & Insights",
    href: "/research-insights",
    description: "Compliance studies",
  },
];

const dropdownTransition = { type: "spring" as const, stiffness: 300, damping: 28 };

function ResourceGroup({
  heading,
  items,
  onNavigate,
}: {
  heading: string;
  items: { label: string; href: string; description: string }[];
  onNavigate?: () => void;
}) {
  return (
    <div className="min-w-0">
      <p className="mb-2 px-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-gray-400">
        {heading}
      </p>
      <ul className="space-y-0.5">
        {items.map((item, j) => (
          <motion.li
            key={item.href}
            initial={{ opacity: 0, x: -4 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.18, delay: 0.03 * j }}
          >
            <Link
              href={item.href}
              onClick={() => onNavigate?.()}
              className="group block rounded-lg px-3 py-2.5 transition-colors hover:bg-blue-50"
            >
              <span className="block text-sm font-medium text-gray-800 group-hover:text-blue-600">
                {item.label}
              </span>
              <span className="mt-0.5 block text-xs text-gray-500 group-hover:text-blue-500/80">
                {item.description}
              </span>
            </Link>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}

export function ResourcesMegaMenuDesktop({
  menuId,
  onNavigate,
}: {
  menuId: string;
  onNavigate?: () => void;
}) {
  return (
    <motion.div
      id={menuId}
      role="region"
      aria-label="Resources menu"
      initial={{ opacity: 0, y: -8, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -8, scale: 0.96 }}
      transition={dropdownTransition}
      className="absolute left-0 top-full z-[100] pt-2"
      style={{ minWidth: 420 }}
    >
      <div className="rounded-xl border border-slate-200/90 bg-white py-4 shadow-lg shadow-slate-900/[0.08] ring-1 ring-slate-950/[0.03]">
        <div className="grid grid-cols-2 gap-x-4 px-2">
          <ResourceGroup heading="Evaluate" items={EVALUATE} onNavigate={onNavigate} />
          <ResourceGroup heading="Learn" items={LEARN} onNavigate={onNavigate} />
        </div>
      </div>
    </motion.div>
  );
}

export function ResourcesMegaMenuMobile({
  onNavigate,
}: {
  onNavigate?: () => void;
}) {
  return (
    <div className="border-t border-gray-100 px-2 pb-3 pt-1">
      <p className="mb-1 mt-2 px-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-gray-400">
        Evaluate
      </p>
      {EVALUATE.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="block rounded-lg px-3 py-2 text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-600"
          onClick={() => onNavigate?.()}
        >
          <span className="font-medium">{item.label}</span>
          <span className="ml-2 text-xs text-gray-400">{item.description}</span>
        </Link>
      ))}
      <p className="mb-1 mt-3 px-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-gray-400">
        Learn
      </p>
      {LEARN.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="block rounded-lg px-3 py-2 text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-600"
          onClick={() => onNavigate?.()}
        >
          <span className="font-medium">{item.label}</span>
          <span className="ml-2 text-xs text-gray-400">{item.description}</span>
        </Link>
      ))}
    </div>
  );
}
