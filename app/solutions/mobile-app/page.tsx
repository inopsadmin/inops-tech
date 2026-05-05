"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
const smoothEase = [0.33, 1, 0.68, 1] as const;

const mobileAppHeroImage = "/WhatsApp Image 2026-05-04 at 12.24.06 PM.jpeg";
const viewport = { once: true, amount: 0.2 };

const featureCards = [
  {
    title: "Quick Check-In / Check-Out",
    description: "Employees can mark attendance in seconds with location-aware actions and clear status indicators.",
  },
  {
    title: "Leave & Regularization",
    description: "Submit leave requests and attendance regularizations from the same app with manager approval tracking.",
  },
  {
    title: "Shift & Schedule View",
    description: "Workers can see today's shift, upcoming roster, and exceptions without calling HR.",
  },
  {
    title: "Real-Time Activity Log",
    description: "Every attendance action is reflected instantly for employees, supervisors, and HR operations.",
  },
  {
    title: "Secure Identity Layer",
    description: "Role-based access and verified user identity keep attendance and profile data protected.",
  },
  {
    title: "Centralized Sync",
    description: "Attendance events sync with InOps modules for payroll, compliance, and workforce analytics.",
  },
];

const accurateTrackingFeatures = [
  {
    title: "Face Recognition",
    description:
      "Selfie-based check-ins with anti-spoofing technology ensures the right person is at the right place.",
    icon: "face",
  },
  {
    title: "Contactless Attendance",
    description:
      "Zero hardware required. Employees check in via their own devices using QR codes or geofencing.",
    icon: "phone",
  },
  {
    title: "Offline Sync",
    description:
      "Data is captured even without internet. Automatically syncs to the cloud once a connection is found.",
    icon: "offline",
  },
  {
    title: "Employee Directory",
    description:
      "Full profile management with roles, departments, and shift schedules all in one place.",
    icon: "users",
  },
  {
    title: "Secure Cloud Storage",
    description:
      "All attendance logs are encrypted and stored in the cloud for 100% data integrity and audit readiness.",
    icon: "cloud",
  },
  {
    title: "Fraud Prevention",
    description:
      "AI-driven anomaly detection flags suspicious activity like buddy punching or GPS manipulation.",
    icon: "shield",
  },
] as const;

const workflowSteps = [
  {
    title: "Open App",
    description: "Employee launches app at workplace",
    icon: "open",
  },
  {
    title: "Face Scan",
    description: "Quick 2-second AI scan",
    icon: "scan",
  },
  {
    title: "Captured",
    description: "Attendance logged instantly",
    icon: "captured",
  },
  {
    title: "Cloud Sync",
    description: "Real-time data synchronization",
    icon: "sync",
  },
  {
    title: "Dashboard",
    description: "Manager reviews reports",
    icon: "dashboard",
  },
] as const;

const integrationBenefits = [
  {
    title: "No Manual Entry",
    description: "Data flows automatically without spreadsheets.",
  },
  {
    title: "Real-time Sync",
    description: "Changes reflect in HR systems instantly.",
  },
  {
    title: "Centralized Data",
    description: "One source of truth for all locations.",
  },
] as const;

const modernTeamPoints = [
  {
    title: "No Biometrics Required",
    description: "Save thousands on specialized hardware.",
    icon: "shield",
  },
  {
    title: "Easy Deployment",
    description: "Set up your entire company in minutes.",
    icon: "play",
  },
  {
    title: "Accurate Tracking",
    description: "Eliminate time theft with AI facial data.",
    icon: "target",
  },
  {
    title: "Reduced Manual Work",
    description: "Automate 80% of attendance processing.",
    icon: "pulse",
  },
] as const;

function FeatureIcon({ kind }: { kind: (typeof accurateTrackingFeatures)[number]["icon"] }) {
  const cls = "h-5 w-5 text-blue-500";
  if (kind === "face") {
    return (
      <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
        <rect x="4" y="4" width="16" height="16" rx="4" />
        <circle cx="9" cy="10" r="1" />
        <circle cx="15" cy="10" r="1" />
        <path d="M8 15c1 .8 2.2 1.2 4 1.2s3-.4 4-1.2" />
      </svg>
    );
  }
  if (kind === "phone") {
    return (
      <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
        <rect x="7" y="3" width="10" height="18" rx="2" />
        <path d="M11 18h2" />
      </svg>
    );
  }
  if (kind === "offline") {
    return (
      <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
        <path d="M2 2l20 20" />
        <path d="M8.6 8.6A6 6 0 0118 12M6 12a6 6 0 011.2-3.6M3.5 8.5A12 12 0 0112 5c3 0 5.7 1.1 7.8 2.9" />
      </svg>
    );
  }
  if (kind === "users") {
    return (
      <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
        <circle cx="9" cy="8" r="3" />
        <circle cx="17" cy="9" r="2" />
        <path d="M4 18c0-2.8 2.2-5 5-5s5 2.2 5 5" />
        <path d="M15 18c0-1.8 1.2-3.3 2.9-3.8" />
      </svg>
    );
  }
  if (kind === "cloud") {
    return (
      <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
        <path d="M7 18h10a4 4 0 100-8 5 5 0 10-9.6 1.5A3.5 3.5 0 007 18z" />
      </svg>
    );
  }
  return (
    <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M12 3l7 3v6c0 5-3.5 8-7 9-3.5-1-7-4-7-9V6l7-3z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

function WorkflowStepIcon({ kind }: { kind: (typeof workflowSteps)[number]["icon"] }) {
  const cls = "h-5 w-5 text-blue-500";
  if (kind === "open") {
    return (
      <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
        <rect x="7" y="3" width="10" height="18" rx="2" />
        <path d="M11 18h2" />
      </svg>
    );
  }
  if (kind === "scan") {
    return (
      <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
        <path d="M4 8V6a2 2 0 012-2h2M20 8V6a2 2 0 00-2-2h-2M4 16v2a2 2 0 002 2h2M20 16v2a2 2 0 01-2 2h-2" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    );
  }
  if (kind === "captured") {
    return (
      <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
        <circle cx="12" cy="12" r="9" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    );
  }
  if (kind === "sync") {
    return (
      <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
        <path d="M4 12a8 8 0 0113.7-5.6L20 9" />
        <path d="M20 12a8 8 0 01-13.7 5.6L4 15" />
        <path d="M20 9h-3V6M4 15h3v3" />
      </svg>
    );
  }
  return (
    <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M4 19h16M6 16V8M12 16V5M18 16v-6" />
    </svg>
  );
}

function ModernTeamIcon({ kind }: { kind: (typeof modernTeamPoints)[number]["icon"] }) {
  const cls = "h-4 w-4 text-blue-400";
  if (kind === "shield") {
    return (
      <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
        <path d="M12 3l7 3v6c0 5-3.5 8-7 9-3.5-1-7-4-7-9V6l7-3z" />
      </svg>
    );
  }
  if (kind === "play") {
    return (
      <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
        <path d="M8 5v14l11-7-11-7z" />
      </svg>
    );
  }
  if (kind === "target") {
    return (
      <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
        <circle cx="12" cy="12" r="8" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    );
  }
  return (
    <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M3 12h4l2-6 4 12 2-6h6" />
    </svg>
  );
}

export default function MobileAppPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-gray-900">
      <motion.section
        className="w-full border-b border-slate-100 bg-white pt-8 sm:pt-10 lg:pt-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.45 }}
      >
        <motion.div
          className="relative w-full overflow-hidden"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: smoothEase, delay: 0.06 }}
        >
          <div className="relative min-h-[340px] w-full bg-white sm:min-h-[390px] lg:min-h-[430px]">
            <div className="relative mt-10 h-52 w-full sm:h-60 lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-1/2">
              <Image
                src={mobileAppHeroImage}
                alt="InOps mobile app for attendance and workforce self-service on the go"
                fill
                className="object-cover object-[center_35%] sm:object-center lg:object-[center_40%]"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              <div
                className="pointer-events-none absolute inset-y-0 left-0 hidden w-24 bg-gradient-to-r from-white to-transparent lg:block"
                aria-hidden
              />
            </div>
            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
              <div className="max-w-3xl px-2 py-8 sm:px-4 sm:py-10 lg:max-w-xl lg:py-16 lg:pr-6">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, ease: smoothEase, delay: 0.05 }}
                >
                  <span className="inline-flex rounded-full border border-blue-200 bg-blue-100/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-blue-700">
                    Mobile based attendance
                  </span>
                </motion.div>
                <motion.h1
                  className="mt-4 text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:mt-5 sm:text-4xl lg:text-[2.65rem] lg:leading-[1.12]"
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, ease: smoothEase, delay: 0.1 }}
                >
                  Attendance, now in <span className="text-blue-600">your pocket</span>
                </motion.h1>
                <motion.p
                  className="mt-5 max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base lg:text-[1.05rem]"
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: smoothEase, delay: 0.14 }}
                >
                  InOps Mobile App brings attendance, leave actions, and workforce visibility directly to your team—without
                  expensive hardware for day-to-day employee self-service.
                </motion.p>
                <motion.div
                  className="mt-7 flex flex-wrap items-center gap-3 sm:mt-8"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: smoothEase, delay: 0.18 }}
                >
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-full bg-sky-500 px-7 py-3 text-sm font-semibold text-white shadow-md shadow-sky-500/30"
                  >
                    Request Live Demo
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-full bg-blue-700 px-7 py-3 text-sm font-semibold text-white shadow-md shadow-blue-900/25"
                  >
                    Download App
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.section>
{/* 
      <section className="border-b border-gray-100 py-14 lg:py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.5, ease: smoothEase }}
          >
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">Built for field teams and enterprise operations</h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              The Mobile App helps teams manage day-to-day attendance workflows from anywhere while keeping HR and payroll systems synchronized. It is designed for scale, simplicity, and transparent employee communication.
            </p>
          </motion.div>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featureCards.map((card, idx) => (
              <motion.div
                key={card.title}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ duration: 0.45, ease: smoothEase, delay: idx * 0.04 }}
              >
                <h3 className="text-base font-semibold text-slate-900">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{card.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      <section className="pb-0 pt-16 lg:pt-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-12 lg:pb-20">
          <motion.div
            className="mx-auto max-w-3xl text-center"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.5, ease: smoothEase }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Everything You Need for Accurate Tracking
            </h2>
            <p className="mt-4 text-sm text-slate-500 sm:text-base">
              Powerful features designed to eliminate time theft and manual errors.
            </p>
          </motion.div>

          <div className="mt-10 grid grid-cols-1 gap-5 md:mt-12 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
            {accurateTrackingFeatures.map((feature, idx) => (
              <motion.article
                key={feature.title}
                className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ duration: 0.4, ease: smoothEase, delay: idx * 0.04 }}
              >
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50">
                  <FeatureIcon kind={feature.icon} />
                </span>
                <h3 className="mt-3 text-lg font-semibold text-slate-900">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{feature.description}</p>
              </motion.article>
            ))}
          </div>
        </div>

        <div className="mx-auto max-w-7xl border-t border-slate-200/90 px-4 pb-16 pt-14 sm:px-6 lg:px-12 lg:pb-20 lg:pt-20">
          <motion.div
            className="mx-auto max-w-3xl text-center"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.5, ease: smoothEase }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Seamless From Start to Finish
            </h2>
            <p className="mt-4 text-sm text-slate-500 sm:text-base">
              A frictionless experience for both employees and management.
            </p>
          </motion.div>

          <div className="mt-10 grid grid-cols-1 gap-8 max-sm:mx-auto max-sm:max-w-md sm:grid-cols-2 sm:gap-5 md:mt-12 md:grid-cols-3 md:gap-6 lg:grid-cols-5 lg:gap-8">
            {workflowSteps.map((step, idx) => (
              <motion.article
                key={step.title}
                className="flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ duration: 0.4, ease: smoothEase, delay: idx * 0.05 }}
              >
                <div className="relative inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white shadow-sm">
                  <span className="absolute -right-1 -top-1 h-4 w-4 rounded-full bg-blue-500 ring-2 ring-white" aria-hidden />
                  <WorkflowStepIcon kind={step.icon} />
                </div>
                <h3 className="mt-3 text-xl font-semibold text-slate-900 max-sm:text-lg">{step.title}</h3>
                <p className="mt-1 max-w-[150px] text-sm leading-relaxed text-slate-500 max-sm:max-w-[min(18rem,calc(100vw-2rem))]">{step.description}</p>
              </motion.article>
            ))}
          </div>
        </div>

        <div className="mx-auto max-w-7xl border-t border-slate-200/90 px-4 pb-16 pt-14 sm:px-6 lg:px-12 lg:pb-20 lg:pt-20">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-16">
            <motion.div
              className="min-w-0"
              initial={{ opacity: 0, x: -18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewport}
              transition={{ duration: 0.5, ease: smoothEase }}
            >
              <span className="inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-600">
                For Supervisors
              </span>
              <h2 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-slate-900 max-sm:text-3xl sm:text-5xl">
                Full Control Over Your Workforce
              </h2>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
                The Manager Dashboard provides a bird&apos;s eye view of daily attendance across multiple locations. Filter by department, track overtime, and generate payroll-ready reports in one click.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Live attendance feed with photo verification",
                  "Customizable shift and holiday management",
                  "Deep-drill down into employee history",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-2.5 text-sm font-medium text-slate-700 sm:text-base">
                    <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full border border-emerald-300 bg-emerald-50 text-emerald-500">
                      <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden>
                        <path d="M5 12l4 4L19 6" />
                      </svg>
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="mt-7 inline-flex items-center rounded-xl bg-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-sm"
              >
                Explore Dashboard Features
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewport}
              transition={{ duration: 0.5, ease: smoothEase, delay: 0.08 }}
              className="min-w-0 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 bg-slate-50 px-4 py-3 lg:flex-nowrap lg:gap-0">
                <div className="flex min-w-0 items-center gap-2">
                  <span className="inline-block h-2.5 w-2.5 shrink-0 rounded-full bg-blue-500" aria-hidden />
                  <span className="truncate text-sm font-semibold text-slate-800">Attendance Overview</span>
                </div>
                <span className="shrink-0 text-xs font-medium text-slate-500">Department: Sales</span>
              </div>
              <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-[220px_1fr]">
                <div className="space-y-3">
                  <div className="rounded-xl border border-slate-200 bg-white p-3">
                    <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">Total Employees</p>
                    <p className="mt-1 text-4xl font-bold text-slate-900">1,248</p>
                  </div>
                  <div className="rounded-xl border border-blue-100 bg-blue-50 p-3">
                    <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">Currently Present</p>
                    <p className="mt-1 text-4xl font-bold text-slate-900">1,102 <span className="text-sm text-emerald-600">+ 12%</span></p>
                  </div>
                  <div className="rounded-xl border border-rose-100 bg-rose-50 p-3">
                    <p className="text-[11px] font-semibold uppercase tracking-wide text-rose-500">Absent/Late</p>
                    <p className="mt-1 text-4xl font-bold text-rose-600">146</p>
                  </div>
                </div>

                <div>
                  <div className="mb-3 flex items-center justify-between">
                    <h3 className="text-sm font-semibold text-slate-800">Real-time Activity</h3>
                    <span className="text-xs font-semibold text-blue-500">View Reports</span>
                  </div>
                  <div className="space-y-2">
                    {[
                      { name: "Sarah Jenkins", role: "UI Designer", time: "08:52 AM", status: "On Time" },
                      { name: "Michael Chen", role: "Developer", time: "09:05 AM", status: "Late" },
                      { name: "Emily Watson", role: "Project Manager", time: "08:45 AM", status: "On Time" },
                      { name: "David Miller", role: "HR Specialist", time: "08:30 AM", status: "On Time" },
                    ].map((person) => (
                      <div key={person.name} className="grid grid-cols-[1fr_auto] items-center rounded-lg border border-slate-100 px-3 py-2">
                        <div>
                          <p className="text-sm font-semibold text-slate-800">{person.name}</p>
                          <p className="text-xs text-slate-500">{person.role}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-xs font-semibold text-slate-700">{person.time}</p>
                          <span
                            className={`mt-1 inline-flex rounded-full px-2 py-0.5 text-[10px] font-semibold ${
                              person.status === "On Time" ? "bg-emerald-50 text-emerald-600" : "bg-amber-50 text-amber-600"
                            }`}
                          >
                            {person.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="mx-auto max-w-7xl border-t border-slate-200/90 px-4 pb-16 pt-14 sm:px-6 lg:px-12 lg:pb-20 lg:pt-20">
          <motion.div
            className="mx-auto max-w-3xl text-center"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.5, ease: smoothEase }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Plug &amp; Play Integrations
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-500 sm:text-base">
              SmartAttendance connects effortlessly with your existing HR ecosystem, ensuring data flows where you need it most.
            </p>
          </motion.div>

          <motion.div
            className="mx-auto mt-10 max-w-5xl rounded-[2rem] border border-blue-100 bg-gradient-to-r from-blue-50 to-blue-50 p-6 shadow-sm sm:mt-12 lg:mt-14 lg:p-8"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.5, ease: smoothEase, delay: 0.05 }}
          >
            <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-[1fr_auto_1fr]">
              <div className="space-y-3">
                <div className="inline-flex min-h-[46px] w-full items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
                  <span className="text-blue-500">📱</span>
                  <span className="text-sm font-semibold text-slate-700">Mobile App</span>
                </div>
                <div className="inline-flex min-h-[46px] w-full items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
                  <span className="text-slate-500 text-xs font-bold">API</span>
                  <span className="text-sm font-semibold text-slate-700">Custom SDK</span>
                </div>
              </div>

              <div className="relative flex items-center justify-center py-2">
                <span className="absolute left-[-40px] hidden h-[2px] w-10 bg-blue-200 lg:block" aria-hidden />
                <span className="absolute right-[-40px] hidden h-[2px] w-10 bg-blue-200 lg:block" aria-hidden />
                <div className="flex h-28 w-28 flex-col items-center justify-center rounded-full bg-blue-500 text-center text-white shadow-lg shadow-blue-300/50">
                  <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden>
                    <path d="M7 18a4 4 0 010-8 5 5 0 019.7 1A3.5 3.5 0 0117 18H7z" />
                    <path d="M12 12v5M10 15l2 2 2-2" />
                  </svg>
                  <span className="mt-1 text-[11px] font-bold tracking-wide">CORE CLOUD</span>
                </div>
              </div>

              <div className="space-y-3">
                <div className="inline-flex min-h-[46px] w-full items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
                  <span className="text-blue-500">🗄️</span>
                  <span className="text-sm font-semibold text-slate-700">Core HR System</span>
                </div>
                <div className="inline-flex min-h-[46px] w-full items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
                  <span className="text-emerald-500">📄</span>
                  <span className="text-sm font-semibold text-slate-700">Payroll Reports</span>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-8 text-center sm:grid-cols-3 sm:gap-10 lg:mt-14">
            {integrationBenefits.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ duration: 0.4, ease: smoothEase, delay: idx * 0.05 }}
              >
                <h3 className="text-2xl font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-500">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="w-full border-t border-slate-200/90 pb-12 pt-12 lg:pb-16 lg:pt-16">
          <motion.section
            className="overflow-hidden border-y border-slate-800 from-[#0b141f] via-[#101a27] to-[#0b141f] py-12 shadow-2xl shadow-slate-900/40 sm:py-14 lg:py-16 bg-black"
            aria-labelledby="why-smartattendance-heading"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.55, ease: smoothEase }}
          >
            <div className="mx-auto grid min-w-0 max-w-7xl grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.22fr)] lg:gap-8 lg:px-12">
              <div className="min-w-0">
                <h2
                  id="why-smartattendance-heading"
                  className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl"
                >
                  Why Modern Teams <br className="hidden sm:block" /> Choose SmartAttendance
                </h2>
                <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
                  Built for speed, accuracy, and enterprise-grade reliability.
                </p>
                <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-4">
                  {modernTeamPoints.map((point, idx) => (
                    <motion.article
                      key={point.title}
                      className="rounded-xl border border-slate-700/80 bg-slate-900/60 p-4 shadow-sm shadow-black/20 sm:p-5"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={viewport}
                      transition={{ duration: 0.35, ease: smoothEase, delay: idx * 0.05 }}
                    >
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-slate-800 ring-1 ring-slate-700/80">
                        <ModernTeamIcon kind={point.icon} />
                      </span>
                      <h3 className="mt-3 text-base font-semibold leading-snug text-white sm:text-lg">{point.title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-slate-400">{point.description}</p>
                    </motion.article>
                  ))}
                </div>
              </div>

              <motion.div
                className="relative flex w-full min-w-0 justify-center lg:justify-end"
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewport}
                transition={{ duration: 0.45, ease: smoothEase, delay: 0.08 }}
              >
                <figure className="m-0 w-full max-w-[min(100%,620px)] sm:max-w-[min(100%,720px)] lg:max-w-[min(100%,860px)]">
                  <Image
                    src="/Gemini_Generated_Image_34d3gr34d3gr34d3-removebg-preview.png"
                    alt="SmartAttendance mobile and workforce experience — dual phone mockups showing attendance and activity in the app."
                    width={677}
                    height={369}
                    quality={95}
                    className="h-auto w-full object-contain object-center"
                    sizes="(max-width: 640px) min(100vw,620px), (max-width: 1024px) min(100vw,720px), 860px"
                  />
                  <figcaption className="sr-only">SmartAttendance mobile and workforce experience</figcaption>
                </figure>
              </motion.div>
            </div>
          </motion.section>
        </div>

        <div className="mx-auto max-w-7xl px-4 pb-16 pt-10 sm:px-6 lg:px-12 lg:pb-20 lg:pt-14">
        <motion.div
          className="relative overflow-hidden rounded-3xl bg-blue-500 px-6 py-16 text-center shadow-xl max-sm:rounded-2xl max-sm:px-4 max-sm:py-12 sm:px-10 lg:py-20"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.5, ease: smoothEase }}
        >
          <span
            className="pointer-events-none absolute -left-8 top-6 h-40 w-40 rounded-full border-4 border-white/15"
            aria-hidden
          />
          <span
            className="pointer-events-none absolute -bottom-10 right-6 h-60 w-60 rounded-full border-4 border-white/15"
            aria-hidden
          />

          <h2 className="relative z-10 mx-auto max-w-3xl text-4xl font-bold leading-tight tracking-tight text-slate-950 max-sm:text-3xl sm:text-6xl">
            Transform attendance management with a mobile-first solution.
          </h2>
          <p className="relative z-10 mx-auto mt-6 max-w-3xl text-base leading-relaxed text-slate-900/80 max-sm:mt-4 max-sm:text-sm sm:text-2xl">
            Join thousands of businesses streamlining their operations with SmartAttendance. Start your 14-day free trial today.
          </p>

          <div className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex min-w-[170px] items-center justify-center rounded-xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-md"
            >
              Get Started Now
            </Link>
            <Link
              href="/contact"
              className="inline-flex min-w-[170px] items-center justify-center rounded-xl border border-white/35 bg-white/10 px-6 py-3 text-sm font-semibold text-white"
            >
              Schedule Demo
            </Link>
          </div>

          <p className="relative z-10 mt-6 text-xs font-semibold text-slate-900/40 sm:text-sm">
            No credit card required • Unlimited users • Instant setup
          </p>
        </motion.div>
        </div>
      </section>
    </div>
  );
}
