"use client";

import Link from "next/link";
import { inopsUi } from "@/app/lib/inopsUi";

const mainPages = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const productPages = [
  { label: "Biometric Access Control", href: "/face" },
  { label: "Turnstiles", href: "/turnstiles" },
  { label: "Accessories", href: "/accessories" },
];

const solutionPages = [
  { label: "Time & Attendance", href: "/cctv" },
  { label: "Canteen Management", href: "/canteen-and-visitor" },
  { label: "Payroll Solutions", href: "/clms" },
  { label: "Labour Management Software", href: "/hris" },
  { label: "Mobile App", href: "/mobile-app" },
  { label: "Enterprise Solution", href: "/enterprise-solution" },
  { label: "Visitor Management", href: "/visitor-management" },
  { label: "Fixed Asset Management", href: "/fixed-asset-management" },
];

const resourcePages = [
  { label: "Blog", href: "/blog" },
  { label: "Brochures", href: "/brochures" },
];

export default function AllPages() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-blue-50/40 px-4 py-8 text-gray-900 sm:px-6 sm:py-10">
      <div className="mx-auto max-w-2xl rounded-2xl border border-gray-200/80 bg-white/90 p-6 shadow-sm shadow-blue-900/5 backdrop-blur-sm sm:p-8">
        <h1 className={inopsUi.sectionHeading}>All Pages</h1>
        <p className={`mt-2 ${inopsUi.lead}`}>Quick links to every page on the site.</p>

        <section className="mt-8 space-y-5">
          <div>
            <h2 className={inopsUi.eyebrowBrand}>Main</h2>
            <ul className="mt-2.5 space-y-1.5">
              {mainPages.map((p) => (
                <li key={p.href}>
                  <Link href={p.href} className="text-gray-700 underline decoration-blue-500/50 underline-offset-2 hover:text-blue-600 hover:decoration-blue-400">
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className={inopsUi.eyebrowBrand}>Product</h2>
            <ul className="mt-2.5 space-y-1.5">
              {productPages.map((p) => (
                <li key={p.href}>
                  <Link href={p.href} className="text-gray-700 underline decoration-blue-500/50 underline-offset-2 hover:text-blue-600 hover:decoration-blue-400">
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className={inopsUi.eyebrowBrand}>Solutions</h2>
            <ul className="mt-2.5 space-y-1.5">
              {solutionPages.map((p) => (
                <li key={p.href}>
                  <Link href={p.href} className="text-gray-700 underline decoration-blue-500/50 underline-offset-2 hover:text-blue-600 hover:decoration-blue-400">
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className={inopsUi.eyebrowBrand}>Resources</h2>
            <ul className="mt-2.5 space-y-1.5">
              {resourcePages.map((p) => (
                <li key={p.href}>
                  <Link href={p.href} className="text-gray-700 underline decoration-blue-500/50 underline-offset-2 hover:text-blue-600 hover:decoration-blue-400">
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
