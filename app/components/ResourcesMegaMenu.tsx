"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const EVALUATE = [
  {
    label: "Case Studies",
    href: "/case-studies",
    description: "Results from Indian plants",
  },
];

const LEARN = [
  {
    label: "Blog",
    href: "/blog",
    description: "Guides for plant HR and compliance",
  },
];

const dropdownTransition = { type: "spring" as const, stiffness: 300, damping: 28 };

function ResourceItem({
  label,
  href,
  description,
  onNavigate,
}: {
  label: string;
  href: string;
  description: string;
  onNavigate?: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={() => onNavigate?.()}
      className="group block"
      style={{ textDecoration: "none", marginBottom: "18px" }}
    >
      <span
        className="group-hover:text-[color:var(--inops-blue)] inops-type-card-title"
        style={{
          display: "inline-block",
          color: "#1652d1",
          paddingBottom: "4px",
          textDecoration: "underline",
          textUnderlineOffset: "3px",
          transition: "color 0.15s ease",
        }}
      >
        {label}
      </span>
      <span className="inops-type-small group-hover:text-blue-700/90" style={{ display: "block", marginTop: "4px", color: "#4f75c2" }}>
        {description}
      </span>
    </Link>
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
      initial={{ opacity: 0, y: -8, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -8, scale: 0.97 }}
      transition={dropdownTransition}
      className="absolute right-0 top-full z-[100] pt-2"
      style={{ width: 420, boxSizing: "border-box" }}
    >
      <div style={{ width: "100%", boxSizing: "border-box", background: "#ffffff", borderRadius: "24px", boxShadow: "0 8px 40px rgba(0,0,0,0.13)", overflow: "hidden", padding: "24px 32px 28px", fontFamily: "var(--font-inops-sans)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 32px" }}>

          {/* Evaluate column */}
          <div>
            <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#a0aab8", marginBottom: "18px" }}>
              Evaluate
            </p>
            {EVALUATE.map((item) => (
              <ResourceItem key={item.href} {...item} onNavigate={onNavigate} />
            ))}
          </div>

          {/* Learn column */}
          <div>
            <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#a0aab8", marginBottom: "18px" }}>
              Learn
            </p>
            {LEARN.map((item) => (
              <ResourceItem key={item.href} {...item} onNavigate={onNavigate} />
            ))}
          </div>

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
    <div style={{ borderTop: "1px solid #ececee" }}>
      {/* Evaluate */}
      <div style={{ padding: "10px 16px 8px", fontSize: "10.5px", fontWeight: 700, letterSpacing: "0.4px", background: "#f7f8fa", borderBottom: "1px solid #ececee", textTransform: "uppercase", color: "#a0aab8" }}>
        Evaluate
      </div>
      <div style={{ padding: "8px 16px 4px" }}>
        {EVALUATE.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={() => onNavigate?.()}
            className="group block rounded-lg px-2 py-2 hover:bg-[#eaf0ff]"
            style={{ textDecoration: "none", marginBottom: "4px" }}
          >
            <span className="group-hover:text-[color:var(--inops-blue)] inops-type-card-title" style={{ display: "block", color: "#1652d1", textDecoration: "underline", textUnderlineOffset: "3px" }}>{item.label}</span>
            <span className="inops-type-small" style={{ display: "block", marginTop: "2px", color: "#4f75c2" }}>{item.description}</span>
          </Link>
        ))}
      </div>

      {/* Learn */}
      <div style={{ padding: "10px 16px 8px", fontSize: "10.5px", fontWeight: 700, letterSpacing: "0.4px", background: "#f7f8fa", borderTop: "1px solid #ececee", borderBottom: "1px solid #ececee", textTransform: "uppercase", color: "#a0aab8" }}>
        Learn
      </div>
      <div style={{ padding: "8px 16px 12px" }}>
        {LEARN.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={() => onNavigate?.()}
            className="group block rounded-lg px-2 py-2 hover:bg-[#eaf0ff]"
            style={{ textDecoration: "none", marginBottom: "4px" }}
          >
            <span className="group-hover:text-[color:var(--inops-blue)] inops-type-card-title" style={{ display: "block", color: "#1652d1", textDecoration: "underline", textUnderlineOffset: "3px" }}>{item.label}</span>
            <span className="inops-type-small" style={{ display: "block", marginTop: "2px", color: "#4f75c2" }}>{item.description}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
