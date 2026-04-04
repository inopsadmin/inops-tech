"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const smoothEase = [0.33, 1, 0.68, 1] as const;
const viewport = { once: true, amount: 0.2 };

/** Hero background — `public/images/Turnstiles2.jpg` */
const turnstilesHeroBg = "/images/Turnstiles2.jpg";

const productSpecs = [
  { label: "Power Requirements", value: "AC110V/220V, 50/60Hz" },
  { label: "Dimension(mm)", value: "L=520, W=310, H=1010" },
  { label: "Working Temperature", value: "28 °C - 60 °C" },
  { label: "Working Environment", value: "Indoor/Outdoor(if sheltered)" },
  { label: "RFID & Fingerprint Speed", value: "Maximum 30/Minute" },
  { label: "Material", value: "Stainless Steel" },
];

const whyChooseSlides = [
  { title: "Results-Driven", text: "We are committed to delivering measurable results that help our clients achieve their business objectives and drive sustainable growth." },
  { title: "Expertise", text: "Our team brings deep industry knowledge and technical expertise to every project, ensuring solutions that fit your unique needs." },
  { title: "Reliability", text: "Consistent performance and dependable support so you can focus on what matters most for your organization." },
  { title: "Innovation", text: "We leverage cutting-edge technology and best practices to future-proof your access control and workforce systems." },
  { title: "Partnership", text: "We work alongside you as a long-term partner, from planning through implementation and beyond." },
];

const numberedFeatures = [
  {
    number: 1,
    title: "Reliability",
    color: "bg-amber-500",
    description:
      "Consistency, dependability, trustworthiness, accuracy, credibility, solidity, steadfastness, authenticity, durability, fidelity, robustness, validity, resilience, faithfulness, certainty.",
  },
  {
    number: 2,
    title: "Safety Feature",
    color: "bg-emerald-500",
    description:
      "Airbags, antilock brakes, traction control, lane departure warning, blind spot detection, adaptive cruise control, rearview camera, stability control, tire pressure monitoring.",
  },
  {
    number: 3,
    title: "Built-in Reader Integration",
    color: "bg-pink-500",
    description:
      "Seamless compatibility with Kindle, Nook, iBooks, Google Play Books, Pocket, Adobe Digital Editions, and other popular e-reader platforms.",
  },
];

/** Cohesive blue–teal accent squares (single family, not rainbow). */
const featureBullets = [
  { text: "High-quality electric component", iconBg: "bg-sky-500" },
  { text: "Visual indicator for access granted or denied", iconBg: "bg-cyan-600" },
  { text: "Patented oil lubrication system reduces the need for maintenance", iconBg: "bg-blue-600" },
  { text: "Stainless steel casework which ensures long-lasting durability", iconBg: "bg-indigo-500" },
];

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export default function TurnstilesPage() {
  return (
    <>
      <div className="min-h-screen bg-white text-gray-900">
        {/* Hero — Turnstiles2.jpg + overlays */}
        <motion.section
          className="relative flex min-h-[340px] flex-col items-center justify-center overflow-hidden sm:min-h-[380px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* CSS background: reliable for public/ heroes (Next Image + fill can fail in some layouts) */}
          <div
            className="pointer-events-none absolute inset-0 z-0 bg-slate-900 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url("${turnstilesHeroBg}")` }}
            aria-hidden
          />
          <div className="absolute inset-0 z-[1] bg-gray-900/55" aria-hidden />
          <div
            className="absolute inset-0 z-[1] bg-gradient-to-b from-gray-900/50 via-gray-900/65 to-gray-900/80"
            aria-hidden
          />
          <div
            className="absolute inset-0 z-[1] bg-[radial-gradient(ellipse_90%_65%_at_50%_25%,rgba(6,182,212,0.14),transparent)]"
            aria-hidden
          />
          <div className="relative z-10 px-6 text-center">
            <motion.h1
              className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: smoothEase, delay: 0.1 }}
            >
              Turnstiles
            </motion.h1>
            <motion.nav
              className="mt-4 text-sm text-white/90"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: smoothEase, delay: 0.25 }}
              aria-label="Breadcrumb"
            >
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <span className="mx-2 text-white/60">/</span>
              <span className="text-blue-300 font-medium">Turnstiles</span>
            </motion.nav>
          </div>
        </motion.section>

        {/* Main content – tripod turnstile image left, text right */}
        <section className="py-6 lg:py-10 bg-white border-t border-gray-200">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-10 lg:items-center">
              <motion.div
                className="relative order-2 flex justify-center lg:order-1 lg:col-span-4 lg:justify-start"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewport}
                transition={{ duration: 0.7, ease: smoothEase }}
              >
                <div className="relative aspect-[4/3] w-full max-w-[16rem] overflow-hidden sm:max-w-xs lg:max-w-[30rem]">
                  <Image
                    src="/images/7.png"
                    alt="Stainless steel tripod turnstile with barrier arms"
                    fill
                    className=" object-center"
                    sizes="(max-width: 640px) 16rem, (max-width: 1024px) 20rem, 24rem"
                    priority
                  />
                </div>
              </motion.div>
              <motion.div
                className="order-1 lg:order-2 lg:col-span-8 lg:pl-2 xl:pl-6"
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewport}
                transition={{ duration: 0.7, ease: smoothEase, delay: 0.1 }}
              >
                <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl lg:text-5xl">
                  Tripod Turnstiles
                </h2>
                <p className="mt-6 max-w-none text-gray-600 leading-relaxed text-base sm:text-xl">
                  InOps&apos; single-lane turnstile series designed for smooth and silent operation and draws very little power. It is made of stainless steel which makes it highly durable. It is compact and designed to operate in small workspaces.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features – three numbered blocks */}
        <section className="py-6 lg:py-10 bg-gray-50/50 border-t border-gray-200">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
              {numberedFeatures.map((item, i) => (
                <motion.div
                  key={item.title}
                  className="rounded-xl border border-gray-200 bg-gray-50/80 p-6 backdrop-blur-sm"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewport}
                  transition={{ duration: 0.5, ease: smoothEase, delay: i * 0.08 }}
                >
                  <div className={`flex h-10 w-10 items-center justify-center rounded-full ${item.color} text-lg font-bold text-white`}>
                    {item.number}
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-gray-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features + specifications — side by side from lg */}
        <section className="border-t border-slate-200/80 bg-gradient-to-b from-slate-50 via-white to-slate-50 py-10 lg:py-14">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start lg:gap-10 xl:gap-14">
              {/* Left: Features */}
              <div>
                <motion.h2
                  className="text-center text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-left"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewport}
                  transition={{ duration: 0.5, ease: smoothEase }}
                >
                  Features
                </motion.h2>
                <motion.div
                  className="mx-auto mt-3 h-1 w-14 origin-center rounded-full bg-blue-600 lg:mx-0 lg:origin-left"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={viewport}
                  transition={{ duration: 0.4, ease: smoothEase }}
                  aria-hidden
                />
                <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
                  {featureBullets.map((item, i) => (
                    <motion.div
                      key={item.text}
                      className="flex gap-4 rounded-2xl border border-slate-200/90 bg-white p-4 shadow-sm ring-1 ring-slate-900/[0.04] transition-[box-shadow,border-color] duration-300 hover:border-slate-300 hover:shadow-lg sm:p-5"
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={viewport}
                      transition={{ duration: 0.5, ease: smoothEase, delay: i * 0.05 }}
                      whileHover={{ y: -3, transition: { duration: 0.2, ease: smoothEase } }}
                    >
                      <span
                        className={`flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl ${item.iconBg} text-white shadow-md shadow-slate-900/10`}
                      >
                        <CheckIcon className="text-white" />
                      </span>
                      <p className="text-[15px] font-medium leading-snug text-slate-700 pt-0.5">{item.text}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Right: Technical specifications */}
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewport}
                  transition={{ duration: 0.5, ease: smoothEase }}
                >
                  <h3 className="text-center text-lg font-semibold text-slate-800 sm:text-xl lg:text-left">
                    Technical specifications
                  </h3>
                  <p className="mx-auto mt-2 max-w-lg text-center text-sm text-slate-600 lg:mx-0 lg:max-w-none lg:text-left">
                    Key parameters for installation and operation
                  </p>
                </motion.div>

                <motion.dl
                  className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_8px_30px_rgb(15,23,42,0.06)]"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewport}
                  transition={{ duration: 0.5, ease: smoothEase, delay: 0.05 }}
                >
                  {productSpecs.map((row, index) => (
                    <div
                      key={row.label}
                      className={`flex flex-col gap-0.5 px-5 py-3.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4 sm:px-6 sm:py-4 lg:px-5 lg:py-3.5 xl:px-6 xl:py-4 ${
                        index !== productSpecs.length - 1 ? "border-b border-slate-100" : ""
                      } ${index % 2 === 0 ? "bg-white" : "bg-slate-50/60"}`}
                    >
                      <dt className="shrink-0 text-sm font-medium text-slate-700">{row.label}</dt>
                      <dd className="text-sm font-semibold text-slate-900 sm:max-w-[55%] sm:text-right sm:tabular-nums lg:max-w-[50%] xl:max-w-[55%]">
                        {row.value}
                      </dd>
                    </div>
                  ))}
                </motion.dl>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <WhyChooseUsSection />
      </div>
    </>
  );
}

function WhyChooseUsSection() {
  const [slideIndex, setSlideIndex] = useState(0);
  const slides = whyChooseSlides;

  return (
    <section className="py-4 lg:py-6 bg-white border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-center text-2xl font-bold text-gray-900 sm:text-3xl"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.5, ease: smoothEase }}
        >
          Why Choose Us
        </motion.h2>
        <div className="mx-auto mt-1.5 h-0.5 w-20 rounded-full bg-blue-500" aria-hidden />
        <div className="mt-4 grid grid-cols-1 gap-4 sm:gap-5 lg:grid-cols-12 lg:items-center lg:gap-5 xl:gap-6">
          {/* Left: network/tree graphic with icon circles */}
          <motion.div
            className="relative flex min-h-[200px] items-center justify-center lg:col-span-5 lg:min-h-[220px]"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewport}
            transition={{ duration: 0.6, ease: smoothEase }}
          >
            <svg
              viewBox="0 0 320 320"
              className="mx-auto h-auto w-full max-w-[min(100%,13rem)] sm:max-w-[14rem] lg:max-w-[15rem] xl:max-w-[17rem] pb-10"
              aria-hidden
            >
              {/* Connecting lines - tree/network style */}
              <g stroke="rgb(6 182 212)" strokeWidth="1.5" fill="none" opacity="0.6">
                <path d="M160 280 L160 220 L100 160 L80 100" />
                <path d="M160 220 L160 160 L200 100 L220 60" />
                <path d="M160 220 L220 160 L260 100" />
                <path d="M160 160 L120 100 L100 60" />
                <path d="M160 160 L200 100" />
                <path d="M160 280 L160 220" />
              </g>
              {/* Node circles with white center (icon placeholder) */}
              {[
                { cx: 80, cy: 100, color: "rgb(6 182 212)" },
                { cx: 220, cy: 60, color: "rgb(6 182 212)" },
                { cx: 260, cy: 100, color: "rgb(6 182 212)" },
                { cx: 100, cy: 60, color: "rgb(6 182 212)" },
                { cx: 200, cy: 100, color: "rgb(6 182 212)" },
                { cx: 120, cy: 100, color: "rgb(6 182 212)" },
                { cx: 160, cy: 160, color: "rgb(34 197 94)" },
                { cx: 160, cy: 220, color: "rgb(6 182 212)" },
                { cx: 100, cy: 160, color: "rgb(6 182 212)" },
                { cx: 220, cy: 160, color: "rgb(34 197 94)" },
                { cx: 160, cy: 280, color: "rgb(6 182 212)" },
              ].map((node, i) => (
                <g key={i}>
                  <circle cx={node.cx} cy={node.cy} r="22" fill={node.color} />
                  <circle cx={node.cx} cy={node.cy} r="8" fill="white" opacity="0.95" />
                </g>
              ))}
            </svg>
          </motion.div>
          {/* Right: Results-Driven + paragraph + pagination + prev/next */}
          <motion.div
            className="lg:col-span-7 lg:pl-1 xl:pl-3"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewport}
            transition={{ duration: 0.6, ease: smoothEase, delay: 0.1 }}
          >
            <div className="min-h-[9.5rem] sm:min-h-[10rem] lg:min-h-[11rem]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={slideIndex}
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -12 }}
                  transition={{ duration: 0.3, ease: smoothEase }}
                >
                  <h3 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl lg:text-4xl">
                    {slides[slideIndex].title}
                  </h3>
                  <p className="mt-3 max-w-none text-base leading-relaxed text-gray-600 sm:mt-4 sm:text-lg lg:text-xl lg:leading-relaxed">
                    {slides[slideIndex].text}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
            <div className="mt-5 flex items-center gap-3 sm:mt-6 sm:gap-4">
              <div className="flex gap-2">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setSlideIndex(i)}
                    className={`h-2.5 w-2.5 rounded-full transition-colors ${
                      i === slideIndex ? "scale-110 bg-blue-500" : "bg-gray-300 hover:bg-gray-400"
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
              <div className="flex gap-1.5">
                <button
                  onClick={() => setSlideIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1))}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 text-gray-600 transition hover:bg-gray-100 active:scale-95"
                  aria-label="Previous"
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={() => setSlideIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1))}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 text-gray-600 transition hover:bg-gray-100 active:scale-95"
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
  );
}
