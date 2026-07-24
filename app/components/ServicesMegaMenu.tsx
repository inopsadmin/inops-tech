"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const industryItems = [
  {
    label: "Manufacturing",
    href: "/industry/manufacturing",
    icon: (
      <>
        <path d="M6 20v-4l3-3 3 3v4" />
        <path d="M9 13V7l4-3" />
        <circle cx="13" cy="4" r="1.4" />
        <path d="M4 20h9" />
        <path d="M15 9c1.5 0 3 1 3 3s-1.5 3-3 3" />
      </>
    ),
  },
  {
    label: "Automotive",
    href: "/industry/automotive",
    icon: (
      <>
        <path d="M2 8h11v8H2z" />
        <path d="M13 11h4l3 3v2h-7z" />
        <circle cx="6" cy="18" r="1.6" />
        <circle cx="17" cy="18" r="1.6" />
      </>
    ),
  },
  {
    label: "Electronics",
    href: "/industry/electronics",
    icon: (
      <>
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <path d="M9 9h6v6H9z" />
      </>
    ),
  },
  {
    label: "Logistics",
    href: "/industry/logistics",
    icon: (
      <>
        <rect x="4" y="9" width="8" height="8" rx="1" />
        <rect x="12" y="5" width="8" height="8" rx="1" />
      </>
    ),
  },
  {
    label: "Pharma",
    href: "/industry/pharma",
    icon: (
      <>
        <circle cx="12" cy="7" r="3.4" />
        <path d="M5 20c0-3.9 3.1-7 7-7s7 3.1 7 7" />
      </>
    ),
  },
];

const serviceItems = [
  {
    label: "Background Verification",
    href: "/services/bgv",
    icon: (
      <>
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="3.4" />
        <path d="M16 11l1.5 1.5L20 10" />
      </>
    ),
  },
  {
    label: "Biometric AMC",
    href: "/services/biometric",
    icon: (
      <>
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.6 1.6 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.6 1.6 0 0 0-1.8-.3 1.6 1.6 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.6 1.6 0 0 0-1-1.5 1.6 1.6 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.6 1.6 0 0 0 .3-1.8 1.6 1.6 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.6 1.6 0 0 0 1.5-1 1.6 1.6 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.6 1.6 0 0 0 1.8.3H9a1.6 1.6 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.6 1.6 0 0 0 1 1.5 1.6 1.6 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.6 1.6 0 0 0-.3 1.8V9a1.6 1.6 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.6 1.6 0 0 0-1.5 1z" />
      </>
    ),
  },
  {
    label: "Biometric Database Audit",
    href: "/services/biometric-database-audit",
    icon: (
      <>
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.7-4 3-9 3s-9-1.3-9-3" />
        <path d="M3 5v14c0 1.7 4 3 9 3s9-1.3 9-3V5" />
      </>
    ),
  },
  {
    label: "CLRA Compliance Audit",
    href: "/services/clra-compliance-audit",
    icon: (
      <>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </>
    ),
  },
  {
    label: "Industrial Manpower Supply",
    href: "/services/industrial-manpower-supply",
    icon: (
      <>
        <circle cx="9" cy="7" r="2.6" />
        <path d="M3.5 19c0-3 2.5-5.4 5.5-5.4s5.5 2.4 5.5 5.4" />
        <circle cx="17" cy="8" r="2.1" />
        <path d="M14.7 13.8c2.6.2 4.8 2.4 4.8 5.2" />
      </>
    ),
  },
];

function MenuItem({
  label,
  href,
  icon,
  onNavigate,
}: {
  label: string;
  href: string;
  icon: React.ReactNode;
  onNavigate: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onNavigate}
      className="group"
      style={{ display: "flex", alignItems: "flex-start", gap: "12px", textDecoration: "none", cursor: "pointer" }}
    >
      <span style={{ flex: "none", width: "18px", height: "18px", display: "flex", alignItems: "center", justifyContent: "center", color: "#1652d1" }}>
        <svg viewBox="0 0 24 24" fill="none" stroke="#1652d1" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ width: "100%", height: "100%" }}>
          {icon}
        </svg>
      </span>
      <span style={{ display: "inline-block" }}>
        <span
          className="group-hover:text-[#1652d1] group-hover:border-[#1652d1] inops-type-small"
          style={{
            display: "inline-block",
            fontWeight: 600,
            color: "#0a1958",
            paddingBottom: "5px",
            borderBottom: "1px solid #ececee",
            transition: "color 0.15s ease, border-color 0.15s ease",
          }}
        >
          {label}
        </span>
      </span>
    </Link>
  );
}

export function ServicesMegaMenuDesktop({
  menuId,
  onNavigate,
}: {
  menuId?: string;
  onNavigate: () => void;
}) {
  return (
    <motion.div
      id={menuId}
      role="dialog"
      aria-label="Services menu"
      initial={{ opacity: 0, y: -8, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -8, scale: 0.97 }}
      transition={{ type: "spring", stiffness: 300, damping: 28 }}
      className="fixed z-[100]"
      style={{
        top: "var(--home-nav-offset)",
        left: "50%",
        x: "-50%",
        width: "64rem",
        maxWidth: "calc(100vw - 32px)",
        paddingTop: "12px",
      }}
    >
      <div
        style={{
          width: "100%",
          background: "#ffffff",
          borderRadius: "14px",
          boxShadow: "0 30px 60px rgba(0,0,0,0.25)",
          overflow: "hidden",
        }}
      >
        {/* Header */}
        <div style={{ background: "#f7f8fa", padding: "22px 32px 20px", borderBottom: "1px solid #ececee" }}>
          <h2 className="inops-type-card-title" style={{ margin: "0 0 4px" }}>Industry & Workforce Solutions</h2>
          {/* <p className="inops-type-small" style={{ margin: "0 0 2px", fontWeight: 600 }}>Industry Solutions & Workforce Compliance Services</p> */}
          <p className="inops-type-small" style={{ margin: 0 }}>Complete workforce management solutions for industrial enterprises</p>
        </div>

        {/* Industries label */}
        <div style={{ padding: "12px 32px 8px", fontSize: "14px", fontWeight: 600, letterSpacing: "0px", color: "#8a8f9c", borderBottom: "1px solid #ececee" }}>
          SOLUTION{" "}
          <span style={{ margin: "0 6px", color: "#c7cad1" }}>›</span>{" "}
          <span style={{ color: "#3a3f4b" }}>BY INDUSTRIES</span>
        </div>

        {/* Industries grid — 4 cols matching reference */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "28px 24px", padding: "26px 32px 30px" }}>
          {industryItems.map((item) => (
            <MenuItem key={item.href} {...item} onNavigate={onNavigate} />
          ))}
        </div>

        {/* Services label */}
        <div style={{ padding: "12px 32px 8px", fontSize: "14px", fontWeight: 600, letterSpacing: "0px", color: "#8a8f9c", borderBottom: "1px solid #ececee" }}>
          SOLUTION{" "}
          <span style={{ margin: "0 6px", color: "#c7cad1" }}>›</span>{" "}
          <span style={{ color: "#3a3f4b" }}>BY SERVICES</span>
        </div>

        {/* Services grid — 3 cols matching reference workforce grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "28px 24px", padding: "26px 32px 30px" }}>
          {serviceItems.map((item) => (
            <MenuItem key={item.href} {...item} onNavigate={onNavigate} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function ServicesMegaMenuMobile({ onNavigate }: { onNavigate: () => void }) {
  return (
    <div style={{ borderTop: "1px solid #ececee" }}>
      {/* Industries label */}
      <div style={{ padding: "10px 16px 8px", fontSize: "10.5px", fontWeight: 700, letterSpacing: "0.4px", color: "#8a8f9c", background: "#f7f8fa", borderBottom: "1px solid #ececee" }}>
        SOLUTION <span style={{ margin: "0 6px", color: "#c7cad1" }}>›</span> <span style={{ color: "#3a3f4b" }}>BY INDUSTRIES</span>
      </div>
      <div style={{ padding: "8px 8px 4px" }}>
        {industryItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={onNavigate}
            className="group flex items-center gap-2.5 rounded-lg px-3 py-2 hover:bg-[#eaf0ff]"
            style={{ textDecoration: "none" }}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="#1652d1" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ width: "16px", height: "16px", flexShrink: 0 }}>
              {item.icon}
            </svg>
            <span className="group-hover:text-[#1652d1] inops-type-small" style={{ fontWeight: 600, color: "#0a1958" }}>{item.label}</span>
          </Link>
        ))}
      </div>

      {/* Services label */}
      <div style={{ padding: "10px 16px 8px", fontSize: "10.5px", fontWeight: 700, letterSpacing: "0.4px", color: "#8a8f9c", background: "#f7f8fa", borderTop: "1px solid #ececee", borderBottom: "1px solid #ececee" }}>
        SOLUTION <span style={{ margin: "0 6px", color: "#c7cad1" }}>›</span> <span style={{ color: "#3a3f4b" }}>BY SERVICES</span>
      </div>
      <div style={{ padding: "8px 8px 12px" }}>
        {serviceItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={onNavigate}
            className="group flex items-center gap-2.5 rounded-lg px-3 py-2 hover:bg-[#eaf0ff]"
            style={{ textDecoration: "none" }}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="#1652d1" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ width: "16px", height: "16px", flexShrink: 0 }}>
              {item.icon}
            </svg>
            <span className="group-hover:text-[#1652d1] inops-type-small" style={{ fontWeight: 600, color: "#0a1958" }}>{item.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
