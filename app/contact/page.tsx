"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ContactForm from "../components/ContactForm";
import { FlyInText } from "@/app/components/FlyInText";

const smoothEase = [0.33, 1, 0.68, 1] as const;
const viewport = { once: true, amount: 0.2 };

const contactBanner = {
  src: "/images/contact-hero.png",
  alt: "InOps support specialist with headset — friendly, professional customer assistance",
  tagline: "Sales, support & partnerships — Bengaluru",
} as const;

const contactInfo = [
  {
    label: "Location:",
    value: "No.18, 4th 'C' Cross, 1st Main Rd, Koramangala Industrial Layout, 5th Block, Bengaluru, Karnataka 560095.",
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    label: "Email:",
    value: "contact@inops.tech",
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: "Call:",
    value: "+91 8088602602",
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
];

export default function ContactPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#eef4f8] text-slate-950">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_10%,rgba(57,189,232,0.16),transparent_28%),radial-gradient(circle_at_86%_0%,rgba(29,95,191,0.12),transparent_24%),linear-gradient(180deg,#eef4f8_0%,#f8fbfd_56%,#eef4f8_100%)]"
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
                  src={contactBanner.src}
                  alt={contactBanner.alt}
                  fill
                  className="object-cover object-[center_22%] sm:object-[center_28%]"
                  sizes="100vw"
                  priority
                />
                <div
                  className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-slate-950/35 to-slate-950/80"
                  aria-hidden
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center px-6 py-5 sm:py-6">
                  <p className="text-sm font-semibold tracking-wide text-white drop-shadow-md sm:text-base">InOps</p>
                  <h1 className="mt-4 text-white">Contact</h1>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-white/88">{contactBanner.tagline}</p>
                </div>
              </div>
            </div>
          </motion.header>

          <div className="mb-8 mt-14 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <FlyInText as="p" direction="down" className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--inops-blue)]">
                Get in touch
              </FlyInText>
              <FlyInText
                as="h2"
                direction="left"
                delay={0.06}
                className="mt-3 text-[var(--inops-navy)]"
              >
                We&apos;re ready to help
              </FlyInText>
            </div>
            <FlyInText as="p" direction="up" delay={0.08} className="max-w-lg text-sm leading-7 text-slate-600">
              Send a message or reach us directly for product demos, implementation questions, and support requests.
            </FlyInText>
          </div>

          <div className="grid grid-cols-1 gap-7 lg:grid-cols-[0.9fr_1.1fr]">
            <motion.div
              className="relative overflow-hidden rounded-[1.65rem] border border-white bg-white p-6 shadow-[0_18px_55px_-36px_rgba(15,47,87,0.5)] ring-1 ring-slate-900/[0.04] sm:p-7 lg:p-8"
              initial={{ opacity: 0, x: -36 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewport}
              transition={{ duration: 0.65, ease: smoothEase }}
              whileHover={{ y: -6, transition: { duration: 0.22, ease: smoothEase } }}
            >
              <div
                className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-[#39bde8]/15 blur-3xl"
                aria-hidden
              />
              <div className="relative space-y-5">
                {contactInfo.map((item, i) => (
                  <motion.div
                    key={item.label}
                    className="group rounded-2xl border border-slate-200/80 bg-gradient-to-br from-white to-slate-50/80 p-5 transition hover:border-[var(--inops-blue)]/35 hover:shadow-[0_18px_45px_-32px_rgba(15,47,87,0.65)]"
                    initial={{ opacity: 0, y: 22 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={viewport}
                    transition={{ duration: 0.5, ease: smoothEase, delay: 0.08 * i }}
                    whileHover={{ x: 5, transition: { duration: 0.2, ease: smoothEase } }}
                  >
                    <div className="flex gap-4">
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-[var(--inops-navy)] text-white shadow-lg shadow-slate-900/15 transition group-hover:bg-[var(--inops-blue)] group-hover:shadow-blue-600/25">
                        {item.icon}
                      </div>
                      <div>
                        <FlyInText
                          as="p"
                          direction="right"
                          delay={0.05 * i}
                          className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--inops-blue)]"
                        >
                          {item.label.replace(":", "")}
                        </FlyInText>
                        <FlyInText as="p" direction="up" delay={0.08 + 0.05 * i} className="mt-2 leading-7 text-slate-600">
                          {item.value}
                        </FlyInText>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="relative overflow-hidden rounded-[1.65rem] border border-white bg-white p-6 shadow-[0_18px_55px_-36px_rgba(15,47,87,0.5)] ring-1 ring-slate-900/[0.04] sm:p-7 lg:p-8"
              initial={{ opacity: 0, x: 36 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewport}
              transition={{ duration: 0.65, ease: smoothEase, delay: 0.08 }}
              whileHover={{ y: -6, transition: { duration: 0.22, ease: smoothEase } }}
            >
              <div
                className="pointer-events-none absolute -right-16 -top-20 h-56 w-56 rounded-full bg-[var(--inops-blue)]/10 blur-3xl"
                aria-hidden
              />
              <div className="relative">
                <FlyInText as="p" direction="down" className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--inops-blue)]">
                  Message us
                </FlyInText>
                <FlyInText as="h3" direction="left" delay={0.06} className="mt-3 text-[var(--inops-navy)]">
                  Send us a message
                </FlyInText>
                <FlyInText as="p" direction="up" delay={0.12} className="mt-3 text-sm leading-7 text-slate-600">
                  Tell us what you need. Our team will get back with the right next step.
                </FlyInText>
                <div className="mt-7">
                  <ContactForm />
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="mt-10 overflow-hidden rounded-[1.75rem] border border-white bg-white shadow-[0_24px_80px_-48px_rgba(15,47,87,0.55)] ring-1 ring-slate-900/[0.04]"
            initial={{ opacity: 0, y: 38 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.65, ease: smoothEase }}
            whileHover={{ y: -4, transition: { duration: 0.22, ease: smoothEase } }}
          >
            <div className="border-b border-slate-200/80 bg-gradient-to-r from-white via-slate-50 to-[#eaf7fc] px-6 py-5 sm:px-8">
              <FlyInText as="p" direction="right" className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--inops-blue)]">
                Bengaluru office
              </FlyInText>
              <FlyInText as="h3" direction="up" delay={0.06} className="mt-2 text-[var(--inops-navy)]">
                Koramangala Industrial Layout
              </FlyInText>
            </div>
            <iframe
              title="Office location - Koramangala, Bengaluru"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.016988!2d77.6242!3d12.9352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15e3e5c14749%3A0x1b7756b2e58d8d8!2sKoramangala%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1709123456789"
              width="100%"
              height="390"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block w-full grayscale-[15%] transition duration-500 hover:grayscale-0"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
