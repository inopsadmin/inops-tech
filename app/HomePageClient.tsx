import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import "./home-visual.css";
import LazyInViewVideo from "./components/LazyInViewVideo";

const FlyInText = dynamic(() => import("./components/FlyInText").then((m) => ({ default: m.FlyInText })));
import SectionFade from "./components/SectionFade";
import WhyInOpsSection from "./components/WhyInOpsSection";

const BusinessImpactSection = dynamic(() => import("./components/BusinessImpactSection"));
const FeaturesSlider = dynamic(() => import("./components/FeaturesSlider"));
const IndustriesSlider = dynamic(() => import("./components/IndustriesSlider"));
const CollaborateCtaBand = dynamic(() => import("./components/CollaborateCtaBand"));
const VideoLivePopups = dynamic(() => import("./components/VideoLivePopups"));
import type { VideoLivePopupItem } from "./components/VideoLivePopups";
import ClientMarqueeLogo from "@/app/components/ClientMarqueeLogo";
import { industryLeaderClientLogos } from "@/app/lib/industryLeaderClientLogos";
import { mediaVideos } from "@/app/lib/mediaAssets";
import { TRUSTED_BY_HEADLINE } from "@/app/lib/trustedClients";
import { inopsUi } from "@/app/lib/inopsUi";
import { homeFaqItems } from "@/app/lib/homeFaqItems";
import HeroSection from "./components/HeroSection";

type DashboardCard = {
  title: string;
  badge: string;
  imageSrc: string;
  imageAlt: string;
  description: string;
  badgeClass: string;
  footerTag: string;
  highlights: string[];
  footerChips: string[];
  videoSrc?: string;
  livePopups?: VideoLivePopupItem[];
};

const dashboardCards: DashboardCard[] = [
  {
    title: "Manager Dashboard",
    badge: "Team view",
    imageSrc: "/image-1024x692.webp",
    videoSrc: mediaVideos.managerDashboardDemo,
    imageAlt: "Manager dashboard",
    description:
      "Real-time visibility into workforce attendance, productivity, and on-ground operations. Make faster decisions with actionable insights at a team level.",
    badgeClass: "border-blue-200 bg-blue-50 text-blue-700",
    footerTag: "Unified command center",
    highlights: [
      "Multi-site attendance roll-up",
      "Shift & overtime alerts",
      "Payroll-ready export views",
    ],
    footerChips: ["Web + mobile", "Role-based access", "Live refreshes"],
    livePopups: [
      { position: "top-left", label: "Live", title: "Team activity", accent: "emerald" },
      {
        position: "bottom-right",
        label: "Synced",
        title: "Attendance updated",
        variant: "icon",
        icon: "check",
        accent: "blue",
      },
    ],
  },
  {
    title: "CXO Dashboard",
    badge: "Enterprise view",
    imageSrc: "/1_r5bfwbn5H6UK8ZnAJ1kufA.webp",
    videoSrc: mediaVideos.cxoDashboardDemo,
    imageAlt: "CXO dashboard",
    description:
      "A unified view of workforce, compliance, and operational performance across the organization. Drive strategic decisions with a single source of truth and enterprise-level insights.",
    badgeClass: "border-violet-200 bg-violet-50 text-violet-700",
    footerTag: "Executive command center",
    highlights: [
      "Cross-site KPI snapshots",
      "Compliance & risk posture",
      "Board-ready trend views",
    ],
    footerChips: ["Enterprise rollups", "Board exports", "Risk posture"],
    livePopups: [
      { position: "top-right", label: "Live", title: "Cross-site KPIs", accent: "violet" },
      {
        position: "bottom-left",
        label: "Insight",
        title: "Productivity +12%",
        variant: "icon",
        icon: "chart",
        accent: "blue",
      },
    ],
  },
  {
    title: "HR Dashboard",
    badge: "People ops",
    imageSrc: "/images/improve-hiring-quality.webp",
    videoSrc: mediaVideos.hrDashboardDemo,
    imageAlt: "HR dashboard",
    description:
      "Centralized control over employee data, compliance, and lifecycle management. Ensure accuracy, visibility, and seamless workforce governance across systems.",
    badgeClass: "border-emerald-200 bg-emerald-50 text-emerald-700",
    footerTag: "People operations control",
    highlights: [
      "Central employee records",
      "Lifecycle & document control",
      "Policy & audit trails",
    ],
    footerChips: ["Document vault", "Lifecycle workflows", "Audit-ready"],
    livePopups: [
      { position: "top-left", label: "Live", title: "People ops", accent: "emerald" },
      {
        position: "bottom-right",
        label: "Audit",
        title: "Compliance OK",
        variant: "icon",
        icon: "shield",
        accent: "emerald",
      },
    ],
  },
];

export default function Home() {
  return (
    <div className="home-page home-section-gap relative min-h-screen bg-white text-gray-900 perspective-page">
      {/* ── Hero ── */}
      <HeroSection />

      <section
        aria-labelledby="hero-trusted-clients-heading"
        className="relative overflow-x-hidden border-b border-gray-100 bg-white pt-4 pb-1.5 sm:pt-5 sm:pb-2 lg:pt-6 lg:pb-2.5"
      >
        <div className="pointer-events-none absolute inset-0 bg-dot-grid-subtle opacity-40" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-4 lg:px-12">
          <div className="mx-auto max-w-3xl text-center">
            <FlyInText
              as="h2"
              id="hero-trusted-clients-heading"
              direction="up"
              className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl"
            >
              {TRUSTED_BY_HEADLINE}
            </FlyInText>
            <div className="mx-auto mt-5 h-1 w-12 rounded-full bg-blue-500/80" aria-hidden />
          </div>
          <div className="mt-5 bg-white pt-3 pb-2 sm:pt-4 sm:pb-2">
            <div
              className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 sm:gap-x-4"
              role="list"
              aria-label="Client logos"
            >
              {industryLeaderClientLogos.map((src, i) => (
                <ClientMarqueeLogo key={`hero-logo-${i}`} src={src} />
              ))}
            </div>
          </div>
          <div className="mt-4 pb-3 text-center">
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-500 transition hover:text-[color:var(--inops-blue)]"
            >
              Customer stories
              <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14m0 0l-6-6m6 6l-6 6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Why InOps */}
      <WhyInOpsSection />

      {/* Product story: capabilities → connected stack → who it serves → outcomes → deep dive */}
      <SectionFade className="border-t border-gray-100">
        <FeaturesSlider />
      </SectionFade>

      <SectionFade className="border-t border-gray-100">
        <IndustriesSlider />
      </SectionFade>

      <BusinessImpactSection />

      {/* Feature cards + logo strip */}
      <SectionFade>
        <section className="border-t border-slate-100 bg-slate-50/50 py-8 lg:py-11">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <div className="mb-7 max-w-2xl lg:mb-9">
              <FlyInText
                as="p"
                direction="left"
                className="inline-flex w-fit items-center rounded-full bg-[color:var(--inops-blue)] px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white shadow-sm"
              >
                Command dashboards
              </FlyInText>
              <FlyInText as="h2" direction="up" delay={0.05} className={`mt-2 ${inopsUi.typeSection}`}>
                One view for managers, leadership, and HR
              </FlyInText>
              <FlyInText as="p" direction="up" delay={0.1} className={`mt-2 ${inopsUi.typeBody}`}>
                Live data across attendance, compliance, productivity, and executive KPIs.
              </FlyInText>
              <div className="mt-4 flex flex-wrap gap-2">
                {["Attendance", "Compliance", "Productivity", "Executive KPIs"].map((label, i) => (
                  <FlyInText
                    key={label}
                    as="span"
                    direction="up"
                    delay={0.12 + i * 0.05}
                    className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700 shadow-sm"
                  >
                    {label}
                  </FlyInText>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-10 lg:gap-14 xl:gap-16">
              {dashboardCards.map((card, cardIndex) => {
                const textFirst = cardIndex === 1;

                const mediaBlock = (
                  <div className="relative min-h-0 w-full min-w-0 md:h-full">
                    <div className="relative aspect-video w-full overflow-visible">
                      <div className="absolute inset-0 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_18px_50px_-38px_rgba(15,23,42,0.35)] ring-1 ring-white">
                        {card.videoSrc ? (
                          <LazyInViewVideo
                            className="absolute inset-0 h-full w-full object-cover object-center"
                            poster={card.imageSrc}
                            aria-label={card.imageAlt}
                          >
                            <source src={card.videoSrc} type="video/mp4" />
                          </LazyInViewVideo>
                        ) : (
                          <Image
                            src={card.imageSrc}
                            alt={card.imageAlt}
                            fill
                            className="object-cover object-center"
                            sizes="(max-width: 768px) 100vw, 50vw"
                          />
                        )}
                        {card.videoSrc ? (
                          <div
                            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/25 via-transparent to-transparent"
                            aria-hidden
                          />
                        ) : null}
                      </div>
                      {card.videoSrc && card.livePopups ? (
                        <VideoLivePopups popups={card.livePopups} />
                      ) : null}
                    </div>
                  </div>
                );

                const textBlock = (
                  <div className="flex min-h-0 w-full min-w-0 flex-col md:h-full">
                    <div className="shrink-0">
                      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                        <FlyInText as="h3" direction={textFirst ? "right" : "left"} className={inopsUi.typeCardTitle}>
                          {card.title}
                        </FlyInText>
                        <FlyInText
                          as="span"
                          direction="up"
                          delay={0.04}
                          className={`w-fit rounded-md border px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wide ${card.badgeClass}`}
                        >
                          {card.badge}
                        </FlyInText>
                      </div>
                      <FlyInText as="p" direction="up" delay={0.08} className={`mt-3 ${inopsUi.typeBody}`}>
                        {card.description}
                      </FlyInText>
                      <ul className="mt-5 flex w-full flex-col gap-2.5" aria-label="Key capabilities">
                        {card.highlights.map((line) => (
                          <li
                            key={line}
                            className="flex items-start gap-2.5 rounded-xl border border-slate-100 bg-gradient-to-br from-slate-50/95 to-white px-3 py-2.5 text-xs font-medium leading-snug text-slate-700 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.9)] ring-1 ring-slate-900/[0.04]"
                          >
                            <span
                              className="mt-0.5 h-5 w-5 shrink-0 rounded-lg bg-[color:var(--inops-blue)]/10 text-[color:var(--inops-blue)] ring-1 ring-[color:var(--inops-blue)]/20"
                              aria-hidden
                            >
                              <svg className="m-0.5 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
                                <path d="M20 6 9 17l-5-5" />
                              </svg>
                            </span>
                            <span>{line}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-6 grid w-full shrink-0 gap-3 md:mt-auto md:grid-cols-[auto_minmax(0,1fr)] md:items-end md:gap-5 md:pt-5">
                      <FlyInText as="div" direction="up" delay={0.12} className="shrink-0">
                        <span className="inline-flex items-center rounded-full bg-[color:var(--inops-blue)] px-3 py-1 text-xs font-semibold text-white shadow-sm">
                          {card.footerTag}
                        </span>
                      </FlyInText>
                      <div
                        className="flex min-w-0 items-center gap-1 max-md:flex-nowrap max-md:justify-between md:flex-wrap md:justify-end md:gap-2"
                        aria-label="At a glance"
                      >
                        {card.footerChips.map((chip) => (
                          <span
                            key={chip}
                            className="inline-flex min-w-0 max-md:max-w-[33%] max-md:flex-1 items-center justify-center rounded-full border border-slate-200/90 bg-slate-50/90 px-1.5 py-1 text-[9px] font-semibold uppercase leading-tight tracking-tight text-slate-600 shadow-sm ring-1 ring-slate-900/[0.03] md:flex-none md:px-2.5 md:text-[11px] md:leading-none md:tracking-wide"
                          >
                            <span className="block w-full text-center max-md:truncate md:inline md:w-auto md:whitespace-nowrap">
                              {chip}
                            </span>
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                );

                return (
                  <article
                    key={card.title}
                    data-no-site-hover
                    className="dashboard-feature-row flex flex-col gap-8 rounded-3xl border border-slate-200/70 bg-white p-6 shadow-[0_18px_50px_-40px_rgba(15,23,42,0.22)] md:grid md:grid-cols-2 md:items-stretch md:gap-x-10 md:gap-y-0 lg:gap-x-16 lg:p-8"
                  >
                    {textFirst ? (
                      <>
                        {textBlock}
                        {mediaBlock}
                      </>
                    ) : (
                      <>
                        {mediaBlock}
                        {textBlock}
                      </>
                    )}
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      </SectionFade>

      <SectionFade className="relative bg-white pb-6 pt-8 lg:pb-8 lg:pt-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <CollaborateCtaBand />
        </div>
      </SectionFade>

      <SectionFade className="border-t border-slate-100 bg-white">
        <section aria-labelledby="home-faq-heading" className="py-10 lg:py-14">
          <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12 lg:px-12">
            <div>
              <FlyInText as="h2" id="home-faq-heading" direction="up" delay={0.05} className={`mt-3 ${inopsUi.typeSection}`}>
                Frequently asked questions
              </FlyInText>
              <FlyInText as="p" direction="up" delay={0.1} className={`mt-3 ${inopsUi.typeBody}`}>
                Quick answers about InOps for workforce, compliance, and operations teams.
              </FlyInText>
            </div>

            <div className="divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-slate-50/70 shadow-[0_18px_50px_-42px_rgba(15,23,42,0.28)]">
              {homeFaqItems.map((item) => (
                <details key={item.question} className="group p-5 open:bg-white sm:p-6">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-left text-base font-semibold text-slate-950 marker:hidden">
                    <span>{item.question}</span>
                    <span
                      className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition group-open:rotate-45 group-open:text-blue-700"
                      aria-hidden
                    >
                      +
                    </span>
                  </summary>
                  <p className={`mt-3 pr-10 ${inopsUi.typeBody}`}>{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </SectionFade>
    </div>
  );
}
