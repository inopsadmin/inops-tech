import Link from "next/link";
import { SCHEMA_SITE_NAV_PAGES } from "@/app/lib/site";

/**
 * Homepage quick links mirroring footer “Popular pages” — reinforces sitelink-eligible URLs for crawlers.
 */
export default function HomeSitelinkQuickNav() {
  return (
    <section
      className="border-y border-slate-200/80 bg-slate-50/80 py-12 lg:py-14"
      aria-labelledby="home-popular-pages-heading"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <h2
          id="home-popular-pages-heading"
          className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-slate-500"
        >
          Popular solutions
        </h2>
        <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SCHEMA_SITE_NAV_PAGES.map((item) => (
            <li key={item.path} className="min-w-0 rounded-2xl border border-slate-200/90 bg-white p-5 shadow-sm transition-shadow hover:shadow-md">
              <Link
                href={item.path}
                className="text-base font-semibold text-[color:var(--inops-blue)] underline-offset-4 hover:underline"
              >
                {item.name}
              </Link>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
