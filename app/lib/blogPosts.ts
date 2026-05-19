export type BlogPostSection = {
  heading?: string;
  paragraphs: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  author: string;
  date: string;
  dateIso: string;
  category: string;
  readMinutes: number;
  image: string;
  imageAlt: string;
  sections: BlogPostSection[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "access-control-trends-2024",
    title: "Top 8 Access Control Technology Trends For 2024",
    description:
      "Key access control trends for industrial and enterprise sites: biometrics, mobile credentials, audit trails, and integrated workforce governance.",
    author: "InOps Editorial",
    date: "September 13, 2024",
    dateIso: "2024-09-13",
    category: "Access control",
    readMinutes: 6,
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Premium digital security dashboard representing modern access control",
    sections: [
      {
        paragraphs: [
          "Access control is no longer limited to doors and turnstiles. Manufacturing, logistics, and infrastructure operators now expect identity, attendance, and visitor flows to share one auditable system.",
        ],
      },
      {
        heading: "Biometrics at the gate",
        paragraphs: [
          "Face and fingerprint readers reduce buddy-punching while giving security teams real-time visibility. When biometrics connect to CLMS and payroll, every punch becomes a governed event—not a spreadsheet row.",
        ],
      },
      {
        heading: "What to prioritise in 2024",
        paragraphs: [
          "Unified dashboards, contractor lifecycle controls, and integration with HRIS/payroll rank highest for multi-site deployments. Platforms that cannot prove who entered, when, and under which contractor create compliance risk during audits.",
        ],
      },
    ],
  },
  {
    slug: "biometric-attendance-future-of-work",
    title: "The Future of Work: How Biometric Attendance Systems are Shaping the Workplace",
    description:
      "How biometric attendance improves accuracy, reduces leakage, and supports contract workforce governance across Indian manufacturing sites.",
    author: "InOps Editorial",
    date: "September 13, 2024",
    dateIso: "2024-09-13",
    category: "Biometrics",
    readMinutes: 8,
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Cybersecurity and digital identity technology representing biometric systems",
    sections: [
      {
        paragraphs: [
          "Hybrid shifts, contractor-heavy workforces, and multi-gate campuses make manual attendance unreliable. Biometric systems give HR and plant heads a single source of truth for who was on site.",
        ],
      },
      {
        heading: "Accuracy without friction",
        paragraphs: [
          "Modern readers authenticate in under a second, with anti-spoofing and offline buffers for plant networks. Data syncs to central dashboards so supervisors see exceptions—not end-of-month surprises.",
        ],
      },
      {
        heading: "Linking attendance to outcomes",
        paragraphs: [
          "When attendance feeds CLMS, canteen, and payroll, organisations close leakage loops: ghost workers, duplicate badges, and misaligned contractor headcount all become visible earlier.",
        ],
      },
    ],
  },
  {
    slug: "time-attendance-tracking-trends",
    title: "Navigating the Future of Work: 6 Trends in Employee Time and Attendance Tracking",
    description:
      "Six practical trends in time and attendance for enterprise operators: CCTV validation, mobile punch, shift rules, and audit-ready exports.",
    author: "InOps Editorial",
    date: "September 13, 2024",
    dateIso: "2024-09-13",
    category: "Time & attendance",
    readMinutes: 7,
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Business professional reviewing schedules and analytics for time tracking",
    sections: [
      {
        paragraphs: [
          "Time tracking has moved from registers to governed platforms. Plants that still reconcile Excel at month-end lose margin to overtime errors, missed shifts, and contractor mismatches.",
        ],
      },
      {
        heading: "Trends that matter on the ground",
        paragraphs: [
          "CCTV-assisted validation, geo-fenced mobile punch, and automated shift rules are becoming standard. Each reduces disputes between HR, contractors, and line managers.",
        ],
      },
      {
        heading: "Audit-ready by design",
        paragraphs: [
          "Exports aligned to statutory formats and contractor SLAs save weeks during inspections. The best systems treat attendance as evidence—not just operational data.",
        ],
      },
    ],
  },
  {
    slug: "hr-technology-efficiency-engagement",
    title: "Maximizing Employee Efficiency and Engagement: 6 Ways HR Technology Drives Success",
    description:
      "How integrated HR technology improves engagement, compliance, and workforce visibility for industrial enterprises in India.",
    author: "InOps Editorial",
    date: "September 13, 2024",
    dateIso: "2024-09-13",
    category: "HR technology",
    readMinutes: 6,
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "HR team collaboration and people strategy meeting in a modern office",
    sections: [
      {
        paragraphs: [
          "HR teams at manufacturing sites juggle compliance, contractor governance, and employee experience with limited staff. Technology only helps when identity, attendance, and payroll share one timeline.",
        ],
      },
      {
        heading: "Self-service that workers actually use",
        paragraphs: [
          "Mobile apps for leave, payslips, and shift visibility reduce help-desk load. When updates sync from the same attendance core, workers trust the data they see.",
        ],
      },
      {
        heading: "Engagement through transparency",
        paragraphs: [
          "Earned wage access, clear attendance history, and faster dispute resolution improve retention on high-churn lines. HR technology should make policies visible—not buried in email.",
        ],
      },
    ],
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getBlogPostHref(slug: string): string {
  return `/blog/${slug}`;
}
