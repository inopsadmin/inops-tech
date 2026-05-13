"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FlyInText } from "@/app/components/FlyInText";
import { inopsUi } from "@/app/lib/inopsUi";

const smoothEase = [0.33, 1, 0.68, 1] as const;
const viewport = { once: true, amount: 0.12 };

const posts = [
  {
    title: "Top 8 Access Control Technology Trends For 2024",
    author: "InOps Editorial",
    date: "September 13, 2024",
    snippet:
      "In a rapidly evolving digital landscape, access control technology continues to redefine security and convenience. Explore the key trends shaping the industry this year.",
    slug: "access-control-trends-2024",
    category: "Access control",
    readMinutes: 6,
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Premium digital security dashboard representing modern access control",
  },
  {
    title: "The Future of Work: How Biometric Attendance Systems are Shaping the Workplace",
    author: "admin",
    date: "September 13, 2024",
    snippet:
      "In today's rapidly evolving business landscape, the future of work is being shaped by smart attendance and identity solutions. Learn how biometrics are transforming workforce management.",
    slug: "biometric-attendance-future-of-work",
    category: "Biometrics",
    readMinutes: 8,
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Cybersecurity and digital identity technology representing biometric systems",
  },
  {
    title: "Navigating the Future of Work: 6 Trends in Employee Time and Attendance Tracking",
    author: "admin",
    date: "September 13, 2024",
    snippet:
      "In today's dynamic work environment, where remote work, flexible hours, and hybrid models are the norm, effective time and attendance tracking has never been more critical.",
    slug: "time-attendance-tracking-trends",
    category: "Time & attendance",
    readMinutes: 7,
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Business professional reviewing schedules and analytics for time tracking",
  },
  {
    title: "Maximizing Employee Efficiency and Engagement: 6 Ways HR Technology Drives Success",
    author: "admin",
    date: "September 13, 2024",
    snippet:
      "In today's fast-paced business environment, organizations are turning to HR technology to boost efficiency, engagement, and overall workforce performance.",
    slug: "hr-technology-efficiency-engagement",
    category: "HR technology",
    readMinutes: 6,
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "HR team collaboration and people strategy meeting in a modern office",
  },
] as const;

const blogBanner = {
  src: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1920&q=85",
  alt: "Editorial workspace ,  professional typing on a laptop for journal content",
  tagline: "Insights on workforce security, identity, and operations",
} as const;

const featuredHighlights = [
  "Physical security signals",
  "Identity-led operations",
  "Modern access workflows",
] as const;

function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m0 0l-6-6m6 6l-6 6" />
    </svg>
  );
}

export default function BlogPage() {
  const [featured, ...rest] = posts;

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#eef4f8] text-slate-950">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_12%,rgba(57,189,232,0.16),transparent_28%),radial-gradient(circle_at_86%_8%,rgba(29,95,191,0.12),transparent_24%),linear-gradient(180deg,#eef4f8_0%,#f8fbfd_56%,#eef4f8_100%)]"
        aria-hidden
      />

      <section className="relative z-[1] px-4 pb-12 pt-24 sm:px-6 sm:pt-28 lg:px-12 lg:pb-16 lg:pt-28">
        <div className="mx-auto max-w-7xl">
          <motion.header
            className="relative left-1/2 w-screen max-w-[100vw] -translate-x-1/2 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.55, ease: smoothEase }}
          >
            <div className="overflow-hidden border-b border-slate-200/90 shadow-[0_28px_80px_-36px_rgba(15,47,87,0.55)]">
              <div className="relative aspect-[3/1] min-h-[120px] w-full sm:aspect-[16/5] sm:min-h-[140px] lg:min-h-[160px]">
                <Image
                  src={blogBanner.src}
                  alt={blogBanner.alt}
                  fill
                  className="object-cover object-center"
                  sizes="100vw"
                  priority
                />
                <div
                  className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-slate-950/35 to-slate-950/80"
                  aria-hidden
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center px-6 py-5 sm:py-6">
                  <p className={inopsUi.heroKicker}>InOps</p>
                  <h1 className="mt-4 text-white">Blog</h1>
                  <p className={`${inopsUi.heroBannerDesc} mt-3 max-w-md`}>{blogBanner.tagline}</p>
                </div>
              </div>
            </div>
          </motion.header>

          <motion.div
            className="mb-8 mt-14 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.5, ease: smoothEase }}
          >
            <div>
              <FlyInText as="p" direction="down" className={inopsUi.eyebrowBrand}>
                Featured story
              </FlyInText>
              <FlyInText as="h2" direction="left" delay={0.06} className={`mt-3 ${inopsUi.sectionHeading} !text-black`}>
                Start with the signal
              </FlyInText>
            </div>
            <FlyInText as="p" direction="up" delay={0.08} className={`max-w-lg ${inopsUi.lead}`}>
              Our editor&apos;s pick on what is changing across physical security, identity, and connected access.
            </FlyInText>
          </motion.div>

          <motion.article
            className="group relative overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white shadow-[0_30px_90px_-55px_rgba(15,47,87,0.65)] ring-1 ring-slate-900/[0.04]"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.6, ease: smoothEase }}
          >
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#39bde8]/15 blur-3xl" aria-hidden />
            <div className="grid gap-0 lg:grid-cols-12">
              <Link
                href="#"
                className="relative block aspect-[16/11] overflow-hidden bg-slate-100 lg:col-span-7 lg:aspect-auto lg:min-h-[440px]"
                aria-label={`Read featured article: ${featured.title}`}
              >
                <Image
                  src={featured.image}
                  alt={featured.imageAlt}
                  fill
                  className="object-cover transition duration-700 ease-out group-hover:scale-[1.03]"
                  sizes="(max-width: 1024px) 100vw, 58vw"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[var(--inops-navy)]/55 via-transparent to-[#39bde8]/10 opacity-90 transition group-hover:opacity-75" />
                <span className="absolute left-5 top-5 inline-flex rounded-full border border-white/40 bg-white/95 px-3.5 py-1.5 text-xs font-semibold text-[var(--inops-navy)] shadow-sm backdrop-blur-sm">
                  {featured.category}
                </span>
                <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/20 bg-[#061428]/65 p-4 text-white backdrop-blur-md sm:max-w-sm">
                  <FlyInText as="p" direction="down" className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7dd3fc]">
                    Inside this read
                  </FlyInText>
                  <FlyInText as="div" direction="up" delay={0.06} className="mt-3 flex flex-wrap gap-2">
                    {featuredHighlights.map((highlight) => (
                      <span key={highlight} className="rounded-full bg-white/10 px-3 py-1 text-xs text-slate-200">
                        {highlight}
                      </span>
                    ))}
                  </FlyInText>
                </div>
              </Link>

              <div className="relative flex flex-col justify-center border-t border-slate-100 bg-gradient-to-br from-white via-slate-50/80 to-[#eaf7fc] p-8 sm:p-10 lg:col-span-5 lg:border-l lg:border-t-0">
                <FlyInText as="div" direction="right" className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm font-medium text-slate-500">
                  <span className="flex items-center gap-1.5">
                    <svg className="h-4 w-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    {featured.author}
                  </span>
                  <span className="hidden h-1 w-1 rounded-full bg-slate-300 sm:inline" aria-hidden />
                  <time dateTime="2024-09-13">{featured.date}</time>
                  <span className="hidden h-1 w-1 rounded-full bg-slate-300 sm:inline" aria-hidden />
                  <span>{featured.readMinutes} min read</span>
                </FlyInText>

                <FlyInText as="h3" direction="left" delay={0.08} className="mt-5 text-black">
                  <Link href="#" className="transition-colors hover:text-[var(--inops-blue)]">
                    {featured.title}
                  </Link>
                </FlyInText>
                <FlyInText as="p" direction="up" delay={0.14} className="mt-5 text-base leading-8 text-slate-600 line-clamp-4">
                  {featured.snippet}
                </FlyInText>

                <FlyInText as="div" direction="up" delay={0.2} className="mt-8">
                  <Link
                    href="#"
                    className="inline-flex items-center gap-2 self-start rounded-full bg-[var(--inops-navy)] px-6 py-3 text-sm font-semibold text-white shadow-xl shadow-slate-900/20 transition hover:-translate-y-0.5 hover:bg-[var(--inops-blue)] hover:shadow-blue-600/25"
                  >
                    Read article
                    <ArrowRightIcon className="h-4 w-4" />
                  </Link>
                </FlyInText>
              </div>
            </div>
          </motion.article>
        </div>
      </section>

      {/* Article grid */}
      <section className="relative border-y border-slate-200/80 bg-[#f8fbfd] px-4 py-16 sm:px-6 lg:px-12 lg:py-24">
        <div
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(29,95,191,0.06)_0%,transparent_36%),radial-gradient(circle_at_80%_20%,rgba(57,189,232,0.12),transparent_30%)]"
          aria-hidden
        />
        <div className="mx-auto max-w-7xl">
          <motion.div
            className="mx-auto max-w-2xl text-center"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.5, ease: smoothEase }}
          >
            <FlyInText as="p" direction="down" className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--inops-blue)]">
              More articles
            </FlyInText>
            <FlyInText as="h2" direction="up" delay={0.06} className="mt-3 !text-black">
              Latest from the journal
            </FlyInText>
            <FlyInText as="p" direction="up" delay={0.12} className="mt-4 leading-7 text-slate-600">
              Workforce tech, compliance, and secure access curated for operators and people leaders.
            </FlyInText>
          </motion.div>

          <div className="relative mt-12 grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((post, i) => (
              <motion.article
                key={post.slug}
                className="group flex h-full flex-col overflow-hidden rounded-[1.65rem] border border-white bg-white shadow-[0_18px_55px_-36px_rgba(15,47,87,0.5)] ring-1 ring-slate-900/[0.04] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_32px_70px_-40px_rgba(15,47,87,0.58)]"
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ duration: 0.55, ease: smoothEase, delay: 0.06 * i }}
              >
                <Link href="#" className="relative aspect-[16/10] block overflow-hidden bg-slate-100" aria-label={post.title}>
                  <Image
                    src={post.image}
                    alt={post.imageAlt}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-[1.06]"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--inops-navy)]/55 via-transparent to-transparent opacity-75" />
                  <span className="absolute left-4 top-4 rounded-full border border-white/30 bg-white/95 px-3 py-1 text-xs font-semibold text-[var(--inops-navy)] backdrop-blur-sm">
                    {post.category}
                  </span>
                  <span className="absolute bottom-4 right-4 rounded-full bg-[#061428]/75 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md">
                    0{i + 2}
                  </span>
                </Link>

                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <FlyInText
                    as="div"
                    direction="right"
                    delay={0.04 + i * 0.04}
                    className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-medium text-slate-500"
                  >
                    <time dateTime="2024-09-13">{post.date}</time>
                    <span className="text-slate-300" aria-hidden>
                      ·
                    </span>
                    <span>{post.readMinutes} min read</span>
                  </FlyInText>
                  <FlyInText as="h3" direction="up" delay={0.08 + i * 0.04} className="mt-4 text-black">
                    <Link href="#" className="transition-colors hover:text-[var(--inops-blue)]">
                      {post.title}
                    </Link>
                  </FlyInText>
                  <FlyInText as="p" direction="up" delay={0.12 + i * 0.04} className="mt-3 flex-1 text-sm leading-7 text-slate-600 line-clamp-3">
                    {post.snippet}
                  </FlyInText>
                  <FlyInText as="div" direction="up" delay={0.16 + i * 0.04} className="mt-6">
                    <Link
                      href="#"
                      className="inline-flex items-center gap-2 self-start rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-[var(--inops-blue)] transition hover:gap-3 hover:border-[var(--inops-blue)] hover:bg-blue-50 hover:text-[var(--brand-hover)]"
                    >
                      Continue reading
                      <ArrowRightIcon className="h-4 w-4" />
                    </Link>
                  </FlyInText>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative px-4 pb-20 pt-10 sm:px-6 lg:px-12 lg:pt-14">
        <motion.div
          className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-white/15 bg-[var(--inops-navy)] px-8 py-12 shadow-[0_35px_90px_-45px_rgba(6,20,40,0.9)] sm:px-12 lg:py-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.55, ease: smoothEase }}
        >
          <div
            className="pointer-events-none absolute -right-16 -top-24 h-64 w-64 rounded-full bg-[#39bde8]/25 blur-3xl"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -bottom-20 -left-12 h-56 w-56 rounded-full bg-[var(--inops-blue)]/40 blur-3xl"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.18)_1px,transparent_1px)] [background-size:42px_42px]"
            aria-hidden
          />
          <div className="relative grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
            <div className="max-w-2xl">
              <FlyInText as="p" direction="down" className="text-xs font-semibold uppercase tracking-[0.24em] text-[#7dd3fc]">
                Need an operator view?
              </FlyInText>
              <FlyInText as="h2" direction="left" delay={0.06} className="mt-4 text-white">
                Bring clarity to your workforce stack
              </FlyInText>
              <FlyInText as="p" direction="up" delay={0.12} className="mt-4 text-base leading-8 text-slate-300">
                Talk to our team about biometric attendance, access control, and HR integrations tailored to your sites.
              </FlyInText>
            </div>
            <FlyInText as="div" direction="up" delay={0.16} className="flex flex-col gap-4 sm:flex-row lg:justify-end">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[var(--inops-navy)] shadow-lg transition hover:-translate-y-0.5 hover:bg-slate-100"
              >
                Contact us
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:-translate-y-0.5 hover:bg-white/10 hover:text-white"
              >
                Explore solutions
              </Link>
            </FlyInText>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
