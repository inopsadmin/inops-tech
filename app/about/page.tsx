"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useLayoutEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedCounter from "../components/AnimatedCounter";
const smoothEase = [0.33, 1, 0.68, 1] as const;
const viewport = { once: true, amount: 0.2 };

/** Hero background — `public/images/about-us.jpg` */
const aboutHeroBg = "/images/about-us.jpg";

const cultureCards: { title: string; imageSrc?: string }[] = [
  { title: "Optisecure 5k", imageSrc: "/images/bio_new.png" },
  { title: "Optisecure T7", imageSrc: "/images/SL-600.png" },
  { title: "Biosense", imageSrc: "/images/DL-600-1.png" },
  { title: "HR Information System" },
  { title: "Contract workforce governance system" },
  { title: "EWA" },
  { title: "Enterprise solution" },
  { title: "CCTV Sol" },
  { title: "Mobile APP" },
  { title: "Canteen& Visitor management" },
];

const productRangeImages = [
  "/images/product-range-1.png",
  "/images/product-range-2.png",
  "/images/product-range-3.png",
] as const;

// const differentiators = [
//   {
//     title: "Dedicated Partnership",
//     text: "We are committed to building lasting client partnerships. Our team works closely with you to understand your unique challenges and deliver tailored solutions that drive real business outcomes.",
//   },
//   {
//     title: "End-to-End Automation Expertise",
//     text: "From attendance and access automation to integrated hardware and software, we specialize in comprehensive project management. We bring together the best tools and processes to streamline your operations.",
//   },
//   {
//     title: "Excellence in Technology Solutions",
//     text: "Our expertise spans networking, security, cloud services, and enterprise applications. We help organizations leverage technology to innovate, scale, and stay ahead in a digital-first world.",
//   },
// ];

const expertiseSlides = [
  {
    title: "CLMS & Workforce Management",
    text: "Deep experience in contract labour management systems, attendance, and compliance automation.",
  },
  {
    title: "Biometric & Access Control",
    text: "Integration of face, fingerprint, and card-based systems with your existing HR and payroll workflows.",
  },
  {
    title: "Cloud & Enterprise IT",
    text: "Secure, scalable cloud solutions and enterprise-grade networking and security implementations.",
  },
  {
    title: "Compliance & Reporting",
    text: "Statutory compliance, PF, ESIC, and automated reporting to keep you audit-ready.",
  },
  {
    title: "Custom Integrations",
    text: "Seamless connections between your ERP, HRMS, and our platforms for a unified operations view.",
  },
];

const techIcons = [
  { name: "Cloud", path: "M3 15a4 4 0 004 4h10a4 4 0 004-4V9a4 4 0 00-4-4H7a4 4 0 00-4 4v6zm0 0h4v4" },
  { name: "Gear", path: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z" },
  { name: "Server", path: "M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" },
  { name: "Lock", path: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" },
  { name: "Chart", path: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" },
  { name: "Document", path: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" },
  { name: "Wifi", path: "M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" },
  { name: "Device", path: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" },
];

export default function AboutPage() {
  const [expertiseIndex, setExpertiseIndex] = useState(0);
  const textColumnRef = useRef<HTMLDivElement>(null);
  const [galleryHeightPx, setGalleryHeightPx] = useState<number | undefined>(undefined);

  useLayoutEffect(() => {
    const el = textColumnRef.current;
    if (!el || typeof ResizeObserver === "undefined") return;

    const mq = window.matchMedia("(min-width: 1024px)");

    const readTextHeight = () => {
      const h = el.offsetHeight;
      return h > 0 ? Math.round(h) : null;
    };

    const syncHeight = () => {
      if (!mq.matches) {
        setGalleryHeightPx(undefined);
        return;
      }
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          const h = readTextHeight();
          if (h != null) setGalleryHeightPx(h);
        });
      });
    };

    const ro = new ResizeObserver(syncHeight);
    ro.observe(el);
    mq.addEventListener("change", syncHeight);
    window.addEventListener("resize", syncHeight);

    let cancelled = false;
    document.fonts?.ready?.then(() => {
      if (!cancelled) syncHeight();
    });

    syncHeight();

    return () => {
      cancelled = true;
      ro.disconnect();
      mq.removeEventListener("change", syncHeight);
      window.removeEventListener("resize", syncHeight);
    };
  }, []);

  return (
    <>
      <div className="min-h-screen bg-white text-gray-900">
        {/* Hero — about-us.jpg + overlays (CSS background for reliable load) */}
        <motion.section
          className="relative flex min-h-[340px] flex-col items-center justify-center overflow-hidden sm:min-h-[380px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div
            className="pointer-events-none absolute inset-0 z-0 bg-slate-900 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url("${aboutHeroBg}")` }}
            aria-hidden
          />
          {/* <div className="absolute inset-0 z-[1] bg-gray-900/55" aria-hidden /> */}
          <div
            className="absolute inset-0 z-[1] bg-gradient-to-b from-gray-900/50 via-gray-900/65 to-gray-900/80"
            aria-hidden
          />
          <div
            className="absolute inset-0 z-[1] bg-[radial-gradient(ellipse_90%_65%_at_50%_25%,rgba(56,189,248,0.12),transparent)]"
            aria-hidden
          />
          <div className="relative z-10 px-6 text-center">
            <motion.h1
              className="text-4xl font-bold tracking-tight text-white sm:text-5xl"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: smoothEase, delay: 0.1 }}
            >
              About US
            </motion.h1>
            <motion.nav
              className="mt-3 text-sm text-white/90"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: smoothEase, delay: 0.25 }}
              aria-label="Breadcrumb"
            >
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <span className="mx-2 text-white/60">/</span>
              <span className="text-blue-300 font-medium">About US</span>
            </motion.nav>
          </div>
        </motion.section>

        {/* About InOps: intro + hero image */}
        <section className="border-t border-gray-100/80 py-6 lg:py-10 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-5 xl:gap-6 lg:items-start">
              {/* Left: height matches text column on lg (ResizeObserver); full half width */}
              <motion.div
                className="w-full min-h-0 overflow-hidden lg:min-h-0"
                style={
                  galleryHeightPx != null
                    ? { height: galleryHeightPx, maxHeight: galleryHeightPx }
                    : undefined
                }
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewport}
                transition={{ duration: 0.75, ease: smoothEase }}
              >
                <motion.div
                  className={
                    "group relative min-h-0 overflow-hidden rounded-2xl border border-slate-200/90 bg-slate-50 shadow-[0_28px_70px_-52px_rgba(15,23,42,0.55)] " +
                    (galleryHeightPx != null ? "h-full" : "aspect-[16/10]")
                  }
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewport}
                  transition={{ duration: 0.6, ease: smoothEase }}
                  whileHover={{ y: -3, transition: { duration: 0.22, ease: smoothEase } }}
                >
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-blue-100/45 via-white/10 to-transparent" aria-hidden />
                  <Image
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=85"
                    alt="Unified platform for workforce and operations"
                    fill
                    className="object-cover object-center transition duration-700 ease-out group-hover:scale-[1.03]"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority={false}
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/55 via-slate-950/10 to-transparent" aria-hidden />
                  <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/90 backdrop-blur">
                    One platform
                  </div>
                  <div className="absolute bottom-5 left-5 right-5">
                    <div className="h-px w-full bg-gradient-to-r from-white/55 via-white/15 to-transparent" aria-hidden />
                    <div className="mt-3 flex flex-wrap gap-2">
                      {["Workforce", "Finance", "Operations", "Compliance"].map((pill) => (
                        <span
                          key={pill}
                          className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-medium text-white/85 backdrop-blur"
                        >
                          {pill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Right: heading + paragraph — ref on native div so height sync always runs */}
              <motion.div
                className="min-h-0"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewport}
                transition={{ duration: 0.75, ease: smoothEase, delay: 0.1 }}
              >
                <div ref={textColumnRef} className="min-h-0">
                <motion.h2
                  className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl lg:text-4xl"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewport}
                  transition={{ duration: 0.5, ease: smoothEase, delay: 0.2 }}
                >
                  One Platform. Complete Workforce, Financial &amp; Operational Control
                </motion.h2>
                <motion.p
                  className="mt-6 text-gray-600 leading-relaxed text-base sm:text-lg"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewport}
                  transition={{ duration: 0.5, ease: smoothEase, delay: 0.28 }}
                >
                  InOps IT Solutions enables enterprises to manage workforce operations, financial access, and business processes through a unified platform. From workforce governance and face-based identity solutions to earned wage access and enterprise operations, InOps brings visibility, compliance, and control into one system. Designed for large, distributed organizations, it integrates seamlessly with existing infrastructure while improving efficiency, reducing risk, and driving productivity at scale.
                </motion.p>

                {/* Key differentiators */}
                {/* <div className="mt-8 space-y-6">
                  {differentiators.map((item, i) => (
                    <motion.div
                      key={item.title}
                      className="flex gap-4 rounded-xl py-1 transition-colors duration-200 hover:bg-slate-50/80"
                      initial={{ opacity: 0, x: 24 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={viewport}
                      transition={{ duration: 0.5, ease: smoothEase, delay: 0.1 * i }}
                      whileHover={{ x: 4, transition: { duration: 0.2, ease: smoothEase } }}
                    >
                      <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600 text-sm font-bold">
                        ✓
                      </span>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                        <p className="mt-1 text-gray-600 text-sm sm:text-base leading-relaxed">{item.text}</p>
                      </div>
                    </motion.div>
                  ))}
                </div> */}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Our workspace / culture — full-bleed marquee like Industries We Serve, gapless tiles */}
        <section className="relative overflow-x-hidden border-t border-gray-100/80 bg-gradient-to-b from-slate-50/90 to-gray-50 py-8 lg:py-10">
          <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
            <div className="text-center">
              {/* <span className="section-badge">Culture</span> */}
              <motion.h2
                className="mt-4 text-center text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl lg:text-4xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ duration: 0.5, ease: smoothEase }}
              >
               Product Range
              </motion.h2>
              {/* <motion.p
                className="mx-auto mt-3 max-w-xl text-gray-600"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ duration: 0.5, ease: smoothEase, delay: 0.08 }}
              >
                We believe in collaboration, innovation, and a culture that puts people and technology first.
              </motion.p> */}
            </div>
          </div>
          <motion.div
            className="hover-pause relative mt-8 w-screen max-w-[100vw] left-1/2 -translate-x-1/2 overflow-hidden"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.6, ease: smoothEase }}
          >
            <div className="flex w-max gap-0 animate-marquee-slow" style={{ willChange: "transform" }}>
              {[...cultureCards, ...cultureCards, ...cultureCards].map((card, i) => (
                <div
                  key={`${card.title}-${i}`}
                  className="group relative h-[168px] w-[280px] flex-shrink-0 overflow-hidden border border-slate-200/70 bg-gradient-to-b from-[#14324d] via-[#163755] to-[#102a41] shadow-[0_22px_55px_-40px_rgba(15,23,42,0.7)] transition duration-300 hover:-translate-y-1 hover:border-sky-200/70 hover:shadow-[0_28px_70px_-44px_rgba(30,64,175,0.35)]"
                >
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_25%,rgba(56,189,248,0.26),transparent_55%),radial-gradient(circle_at_80%_75%,rgba(99,102,241,0.18),transparent_55%)] opacity-80" aria-hidden />
                  <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent opacity-60" aria-hidden />

                  <div className="relative flex h-full flex-col items-center justify-center px-5 text-center">
                    <div className="relative h-[86px] w-[86px] rounded-2xl border border-white/15 bg-white/[0.07] shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-sm">
                      <Image
                        src={productRangeImages[i % productRangeImages.length]}
                        alt={card.title}
                        fill
                        className="object-contain p-2 drop-shadow-[0_12px_22px_rgba(0,0,0,0.35)] transition-transform duration-300 group-hover:scale-[1.05]"
                        sizes="86px"
                      />
                    </div>
                    <div className="mt-4">
                      <div className="text-[13px] font-body-medium text-white/90 leading-snug tracking-wide">
                        {card.title}
                      </div>
                    </div>
                  </div>

                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-black/25 via-black/5 to-transparent opacity-80" aria-hidden />
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden />
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Stats + Vision + Mission + CTA */}
        <section className="relative border-t border-gray-100/80 bg-white py-10 lg:py-12">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(59,130,246,0.09),transparent_45%),radial-gradient(circle_at_82%_85%,rgba(14,165,233,0.08),transparent_45%)]" aria-hidden />
          <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
            <motion.div
              className="grid grid-cols-2 gap-6 sm:grid-cols-4"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.6, ease: smoothEase }}
            >
              {[
                { value: 2500, suffix: "+", label: "Hardware Managed" },
                { value: 75, suffix: "+", label: "Plants Covered" },
                { value: 25, suffix: "+", label: "Manufacturing Enterprise" },
                { value: 1, suffix: "L+", label: "Workers on Platform" },
              ].map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-slate-200 bg-white/80 px-5 py-4 text-center shadow-[0_12px_32px_-26px_rgba(15,23,42,0.35)] backdrop-blur">
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    duration={1.25}
                    className="text-2xl font-heading-bold tracking-tight text-slate-900 sm:text-3xl"
                  />
                  <div className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-600">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div
              className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2"
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.65, ease: smoothEase, delay: 0.05 }}
            >
              <div className="rounded-3xl border border-slate-200 bg-gradient-to-b from-white to-slate-50/70 p-7 shadow-[0_18px_55px_-38px_rgba(15,23,42,0.45)]">
                <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-700">
                  Vision
                </div>
                <p className="mt-4 text-sm leading-relaxed text-slate-700 sm:text-base">
                  To build the most trusted workforce ecosystem—where work, identity, and financial access seamlessly come together.
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-gradient-to-b from-white to-slate-50/70 p-7 shadow-[0_18px_55px_-38px_rgba(15,23,42,0.45)]">
                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-700">
                  Mission
                </div>
                <p className="mt-4 text-sm leading-relaxed text-slate-700 sm:text-base">
                  To help enterprises digitize and control workforce operations through unified governance and verified data, and extend this foundation to enable earned wage access and a curated marketplace of financial and worker-focused services.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="mt-12"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.6, ease: smoothEase, delay: 0.06 }}
            >
              <div className="rounded-3xl bg-gradient-to-r from-amber-300 via-yellow-200 to-blue-600 p-[2px] shadow-[0_22px_70px_-46px_rgba(15,23,42,0.55)]">
                <div className="relative overflow-hidden rounded-[calc(theme(borderRadius.3xl)-2px)] bg-white">
                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(245,158,11,0.32),rgba(59,130,246,0.32),rgba(16,185,129,0.28))] opacity-20" aria-hidden />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/80 via-white/55 to-white/90" aria-hidden />
                  <div className="relative flex flex-col items-center justify-center gap-5 px-6 py-8 text-center sm:px-10 sm:py-10">
                    <div className="max-w-2xl">
                      <div className="text-4xl font-bold text-slate-700">
                        Ready to collaborate or learn more?
                      </div>
                      <div className="mt-2 text-xl leading-relaxed text-slate-600 sm:text-base">
                        Reach out to us and let’s create impactful solutions together.
                      </div>
                    </div>
                    <div className="mt-1 flex flex-wrap items-center justify-center gap-3">
                      <Link
                        href="/#contact"
                        className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md transition hover:bg-blue-700"
                      >
                        Book a Demo
                      </Link>
                      <a
                        href="tel:08027745220"
                        className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50"
                      >
                        Get a Call Back
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Why Choose Us: tech tree visual + Expertise card */}
        <section className="border-t border-gray-100/80 bg-white py-4 lg:py-6">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.h2
              className="text-center text-2xl font-bold text-gray-900 sm:text-3xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.5, ease: smoothEase }}
            >
              Why Choose Us
            </motion.h2>
            <motion.div
              className="mx-auto mt-1.5 h-1 w-16 rounded-full bg-gradient-to-r from-blue-500 to-blue-600"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={viewport}
              transition={{ duration: 0.4, ease: smoothEase }}
            />

            <div className="mt-4 grid grid-cols-1 gap-4 sm:gap-5 lg:grid-cols-12 lg:items-center lg:gap-5 xl:gap-6">
              {/* Left: tech icons grid (tree-like visual) */}
              <motion.div
                className="relative flex flex-wrap justify-center gap-4 sm:gap-6 lg:col-span-5"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewport}
                transition={{ duration: 0.7, ease: smoothEase }}
              >
                {techIcons.map((icon, i) => (
                  <motion.div
                    key={icon.name}
                    className="flex h-14 w-14 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-600 shadow-sm transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={viewport}
                    transition={{ duration: 0.4, ease: smoothEase, delay: 0.05 * i }}
                    whileHover={{ scale: 1.08 }}
                  >
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d={icon.path} />
                    </svg>
                  </motion.div>
                ))}
              </motion.div>

              {/* Right: Expertise card with slider */}
              <motion.div
                className="rounded-2xl border border-gray-200 bg-gray-50 p-6 shadow-sm sm:p-7 lg:col-span-7 lg:p-8"
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewport}
                transition={{ duration: 0.7, ease: smoothEase }}
              >
                <h3 className="text-xl font-bold text-gray-900 sm:text-2xl">Expertise</h3>
                <p className="mt-2 text-base leading-relaxed text-gray-600 sm:text-lg">
                  Our team brings diverse expertise across technology, compliance, and operations to deliver solutions that work for you.
                </p>
                <div className="mt-5 min-h-[9.5rem] sm:min-h-[10rem] lg:min-h-[11rem]">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={expertiseIndex}
                      initial={{ opacity: 0, x: 12 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -12 }}
                      transition={{ duration: 0.3, ease: smoothEase }}
                    >
                      <h4 className="text-lg font-bold tracking-tight text-gray-900 sm:text-xl lg:text-2xl">
                        {expertiseSlides[expertiseIndex].title}
                      </h4>
                      <p className="mt-3 text-base leading-relaxed text-gray-600 sm:text-lg lg:text-xl lg:leading-relaxed">
                        {expertiseSlides[expertiseIndex].text}
                      </p>
                    </motion.div>
                  </AnimatePresence>
                </div>
                <div className="mt-5 flex items-center justify-between sm:mt-6">
                  <div className="flex gap-2">
                    {expertiseSlides.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setExpertiseIndex(i)}
                        className={`h-2.5 w-2.5 rounded-full transition-colors ${
                          i === expertiseIndex ? "scale-110 bg-blue-600" : "bg-gray-300 hover:bg-gray-400"
                        }`}
                        aria-label={`Go to slide ${i + 1}`}
                      />
                    ))}
                  </div>
                  <div className="flex gap-1.5">
                    <button
                      onClick={() => setExpertiseIndex((prev) => (prev === 0 ? expertiseSlides.length - 1 : prev - 1))}
                      className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 text-gray-600 transition hover:border-gray-300 hover:bg-gray-100 active:scale-95"
                      aria-label="Previous"
                    >
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button
                      onClick={() => setExpertiseIndex((prev) => (prev === expertiseSlides.length - 1 ? 0 : prev + 1))}
                      className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 text-gray-600 transition hover:border-gray-300 hover:bg-gray-100 active:scale-95"
                      aria-label="Next"
                    >
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Professional solutions CTA block (same as home section)
        <section className="relative overflow-hidden border-t border-gray-100">
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.035 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.22 }}
            transition={{ duration: 1.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1800&q=85"
              alt="Worker at access control"
              fill
              className="object-cover"
              sizes="100vw"
              priority={false}
            />
            <div className="absolute inset-0 bg-black/55" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/35 to-black/40" />
          </motion.div>

          <div className="relative mx-auto flex min-h-[min(72vh,38rem)] max-w-7xl flex-col items-center justify-center px-6 py-10 text-center text-white lg:px-12">
            <motion.div
              className="w-full max-w-5xl rounded-3xl border border-white/10 bg-white/5 px-6 py-10 shadow-[0_25px_60px_-25px_rgba(0,0,0,0.6)] backdrop-blur-md sm:px-10 sm:py-12"
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.span
                className="text-sm tracking-wide text-white/75"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
              >
                We are always ahead
              </motion.span>

              <motion.h2
                className="mt-3 text-center text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              >
                Professional solutions for your business.
              </motion.h2>

              <motion.p
                className="mx-auto mt-4 max-w-xl text-center text-sm leading-relaxed text-white/75 sm:text-base"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.16 }}
              >
                We provide premium customer support and affordable programs to roll out CLMS, attendance, and access—site by site, at your pace.
              </motion.p>

              <motion.div
                className="mx-auto mt-6 flex gap-3"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: 0.22 }}
              >
                <div className="h-1 w-10 rounded-full bg-emerald-400" />
              </motion.div>

              <motion.div
                className="mt-10 flex flex-wrap items-center justify-center gap-3"
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.24 }}
              >
                <motion.div whileHover={{ scale: 1.03, y: -1 }} whileTap={{ scale: 0.98 }}>
                  <Link
                    href="#contact"
                    className="inline-flex items-center justify-center rounded-xl bg-blue-500 px-5 py-2.5 text-sm text-white shadow-md transition hover:bg-blue-600"
                  >
                    Start A Project
                  </Link>
                </motion.div>
                <motion.a
                  href="tel:08027745220"
                  className="inline-flex items-center justify-center rounded-full border-2 border-blue-200 bg-blue-50 px-4 py-2 text-sm text-blue-700 transition hover:border-blue-300 hover:bg-blue-100"
                  aria-label="Call us"
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Call Us: 08027745220
                </motion.a>
                <span className="text-xs text-white/70">For any question</span>
              </motion.div>

              <motion.div
                className="mt-10 grid w-full grid-cols-1 gap-8 text-center sm:grid-cols-3 sm:gap-0"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.26 }}
              >
                <div className="sm:px-8">
                  <div className="text-5xl font-bold tracking-tight text-white drop-shadow">856</div>
                  <div className="mt-2 text-xs uppercase tracking-[0.22em] text-white/70">Satisfied Clients</div>
                  <div className="mt-1 text-xs text-white/55">Merits-leading experience</div>
                </div>
                <div className="relative sm:px-8">
                  <div className="pointer-events-none absolute inset-y-2 -left-px hidden w-px bg-white/12 sm:block" aria-hidden />
                  <div className="pointer-events-none absolute inset-y-2 -right-px hidden w-px bg-white/12 sm:block" aria-hidden />
                  <div className="text-5xl font-bold tracking-tight text-white drop-shadow">238</div>
                  <div className="mt-2 text-xs uppercase tracking-[0.22em] text-white/70">Successful Investments</div>
                  <div className="mt-1 text-xs text-white/55">Merits-leading experience</div>
                </div>
                <div className="sm:px-8">
                  <div className="text-5xl font-bold tracking-tight text-white drop-shadow">341</div>
                  <div className="mt-2 text-xs uppercase tracking-[0.22em] text-white/70">Satisfied Clients</div>
                  <div className="mt-1 text-xs text-white/55">Merits-leading experience</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section> */}
      </div>
    </>
  );
}
