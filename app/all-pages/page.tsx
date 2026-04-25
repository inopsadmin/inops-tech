"use client";

import Link from "next/link";

const mainPages = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const productPages = [
  { label: "Biometric Access Control", href: "/product/biometric-access-control" },
  { label: "Turnstiles", href: "/product/turnstiles" },
  { label: "Accessories", href: "/product/accessories" },
];

const solutionPages = [
  { label: "Time & Attendance", href: "/solutions/time-and-attendance" },
  { label: "Canteen Management", href: "/solutions/canteen-management" },
  { label: "Payroll Solutions", href: "/solutions/payroll-solutions" },
  { label: "Labour Management Software", href: "/solutions/labour-management" },
  { label: "Mobile App", href: "/solutions/mobile-app" },
  { label: "Enterprise Solution", href: "/solutions/enterprise-solution" },
  { label: "Visitor Management", href: "/solutions/visitor-management" },
  { label: "Fixed Asset Management", href: "/solutions/fixed-asset-management" },
];

const resourcePages = [
  { label: "Blog", href: "/blog" },
  { label: "Brochures", href: "/brochures" },
];

export default function AllPages() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-blue-50/40 px-4 py-8 text-gray-900 sm:px-6 sm:py-10">
      <div className="mx-auto max-w-2xl rounded-2xl border border-gray-200/80 bg-white/90 p-6 shadow-sm shadow-blue-900/5 backdrop-blur-sm sm:p-8">
        <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">All Pages</h1>
        <p className="mt-2 text-sm text-gray-600 sm:text-base">Quick links to every page on the site.</p>

        <section className="mt-8 space-y-5">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-blue-600">Main</h2>
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
            <h2 className="text-sm font-semibold uppercase tracking-wider text-blue-600">Product</h2>
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
            <h2 className="text-sm font-semibold uppercase tracking-wider text-blue-600">Solutions</h2>
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
            <h2 className="text-sm font-semibold uppercase tracking-wider text-blue-600">Resources</h2>
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
