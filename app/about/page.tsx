"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useLayoutEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
const smoothEase = [0.33, 1, 0.68, 1] as const;
const viewport = { once: true, amount: 0.2 };

/** Hero background — `public/images/about-us.jpg` */
const aboutHeroBg = "/images/about-us.jpg";

const aboutImages = [
  { src: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&q=85", alt: "Industrial and manufacturing" },
  { src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&q=85", alt: "Team collaboration" },
  { src: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&q=85", alt: "Technology and business" },
  { src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=85", alt: "Professional at work" },
];

const aboutSectionImages = [
  {
    src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    alt: "Modern office workspace",
  },
  {
    src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
    alt: "Team collaboration meeting",
  },
  {
    src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
    alt: "Team discussion",
  },
];

const differentiators = [
  {
    title: "Dedicated Partnership",
    text: "We are committed to building lasting client partnerships. Our team works closely with you to understand your unique challenges and deliver tailored solutions that drive real business outcomes.",
  },
  {
    title: "End-to-End Automation Expertise",
    text: "From attendance and access automation to integrated hardware and software, we specialize in comprehensive project management. We bring together the best tools and processes to streamline your operations.",
  },
  {
    title: "Excellence in Technology Solutions",
    text: "Our expertise spans networking, security, cloud services, and enterprise applications. We help organizations leverage technology to innovate, scale, and stay ahead in a digital-first world.",
  },
];

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
              About
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
              <span className="text-blue-300 font-medium">About</span>
            </motion.nav>
          </div>
        </motion.section>

        {/* About InOps: intro + 4 images + differentiators */}
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
                <div
                  className={
                    "grid min-h-0 w-full grid-cols-2 gap-2 sm:gap-2.5 lg:gap-2.5 " +
                    (galleryHeightPx != null
                      ? "h-full lg:[grid-template-rows:minmax(0,1.55fr)_minmax(0,1fr)_minmax(0,1fr)]"
                      : "")
                  }
                >
                  <motion.div
                    className={
                      "group relative col-span-2 min-h-0 overflow-hidden rounded-xl border border-gray-200/90 shadow-lg sm:rounded-2xl sm:shadow-xl max-lg:aspect-video " +
                      (galleryHeightPx != null ? "lg:aspect-auto lg:h-full" : "lg:aspect-[16/9]")
                    }
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={viewport}
                    transition={{ duration: 0.6, ease: smoothEase }}
                    whileHover={{ y: -2, transition: { duration: 0.22, ease: smoothEase } }}
                  >
                    <Image
                      src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=85"
                      alt="InOps team and digital workspace"
                      fill
                      className="object-cover object-center transition duration-500 ease-out group-hover:scale-[1.03]"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </motion.div>
                  {aboutImages.map((img, i) => (
                    <motion.div
                      key={img.alt}
                      className={
                        "group relative min-h-0 overflow-hidden rounded-lg border border-gray-200/90 shadow-md sm:rounded-xl sm:shadow-lg max-lg:aspect-[4/3] " +
                        (galleryHeightPx != null ? "lg:aspect-auto lg:h-full" : "lg:aspect-[4/3]")
                      }
                      initial={{ opacity: 0, scale: 0.96 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={viewport}
                      transition={{ duration: 0.5, ease: smoothEase, delay: 0.06 * i }}
                      whileHover={{ y: -2, transition: { duration: 0.22, ease: smoothEase } }}
                    >
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        className="object-cover object-center transition duration-500 ease-out group-hover:scale-105"
                        sizes="(max-width: 1024px) 50vw, 25vw"
                      />
                    </motion.div>
                  ))}
                </div>
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
                  className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl lg:text-5xl"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewport}
                  transition={{ duration: 0.5, ease: smoothEase, delay: 0.2 }}
                >
                  About InOps: Empowering Business Digitalization
                </motion.h2>
                <motion.p
                  className="mt-6 text-gray-600 leading-relaxed text-base sm:text-lg"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewport}
                  transition={{ duration: 0.5, ease: smoothEase, delay: 0.28 }}
                >
                  At InOps Solutions, we believe in the power of technology to transform how businesses operate. Our mission is to drive innovation, efficiency, and growth through digital transformation. We partner with organizations to deliver Trusted Workforce Management Solutions—streamlining operations, enhancing compliance, and building scalable systems that adapt to your needs.
                </motion.p>

                {/* Key differentiators */}
                <div className="mt-8 space-y-6">
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
                </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Our workspace / culture — full-bleed marquee like Industries We Serve, gapless tiles */}
        <section className="relative overflow-x-hidden border-t border-gray-100/80 bg-gradient-to-b from-slate-50/90 to-gray-50 py-8 lg:py-10">
          <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
            <div className="text-center">
              <span className="section-badge">Culture</span>
              <motion.h2
                className="mt-4 text-center text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl lg:text-4xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ duration: 0.5, ease: smoothEase }}
              >
                Our workspace & culture
              </motion.h2>
              <motion.p
                className="mx-auto mt-3 max-w-xl text-gray-600"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ duration: 0.5, ease: smoothEase, delay: 0.08 }}
              >
                We believe in collaboration, innovation, and a culture that puts people and technology first.
              </motion.p>
            </div>
          </div>
          <div className="hover-pause relative mt-8 w-screen max-w-[100vw] left-1/2 -translate-x-1/2 overflow-hidden">
            <div className="flex w-max gap-0 animate-marquee-slow" style={{ willChange: "transform" }}>
              {[...aboutSectionImages, ...aboutSectionImages, ...aboutSectionImages].map((img, i) => (
                <div
                  key={`${img.alt}-${i}`}
                  className="group relative h-[320px] w-[320px] flex-shrink-0 overflow-hidden"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover object-center transition duration-500 group-hover:scale-105"
                    sizes="320px"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent" />
                  <div className="pointer-events-none absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-sm font-heading text-white drop-shadow-md">{img.alt}</p>
                  </div>
                </div>
              ))}
            </div>
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
      </div>
    </>
  );
}
