export interface ModuleData {
  slug: string;
  badge: string;
  title: string;
  description: string;

  metrics: string[];
  challenges: string[];
  workflow: string[];
  features: string[];

  roi: {
    title: string;
    description: string;
  }[];

  aiInsights: string[];
  benefits: string[];

  cta: string;
  dashboard: {
    analytics: {
      label: string;
      value: number; 
    }[];
 
    kpis: {
      label: string;
      value: string;
    }[]; 
    feed: {
      label: string;
      status: string;
      tone: "ok" | "warn" | "err";
    }[];
  }
}

export const modules: ModuleData[] = [
  {
    slug: "attendance-leave",
    badge: "Attendance & Leave",
    title: "Attendance, Leave & Shift Management",
    description:
      "Attendance fraud, manual shift planning and workforce visibility gaps impact productivity and payroll accuracy.",

    metrics: ["Reduced Attendance Fraud", "Better Workforce Planning", "Accurate Payroll Processing"],

    challenges: [
      "Buddy Punching",
      "Shift Allocation",
      "Attendance Corrections",
      "Leave Visibility Mismatch",
      "No Real-Time Floor Headcount",
    ],

    workflow: [
      "Attendance Capture",
      "Shift Validation",
      "Exception Handling",
      "Workforce Visibility",
    ],

    features: [
      "Face Attendance",
      "CCTV Attendance",
      "Geo-Fencing Attendance",
      "Auto Rostering",
      "Leave Management",
      "Employee Self-Service",
    ],

    roi: [
      {
        title: "Reduced Attendance Fraud",
        description:
          "AI-backed presence verification reduces misuse across all sites and shifts.",
      },
      {
        title: "Improved Workforce Planning",
        description:
          "Auto-rostering improves shift staffing balance and reduces last-minute gaps.",
      },
      {
        title: "Accurate Payroll Processing",
        description:
          "Verified attendance data flows directly to payroll without manual correction cycles.",
      },
    ],

    aiInsights: [
      "Predict absenteeism, detect anomalies, and optimize shift allocation automatically.",
      "AI spots improbable movement, punch timing, and CCTV mismatches in real time.",
      "Smart notifications recommend roster moves before shift downtime occurs.",
    ],

    benefits: [
      "Managers gain real-time workforce visibility by line, shift, and site.",
      "HR improves attendance accuracy and controls time, leave, and access from one system.",
      "Workers get mobile self-service transparency and faster leave approvals.",
    ],

    cta: "Know exactly who is working, where, and when.",
    dashboard: {
      analytics: [
        { label: "Mon", value: 66 },
        { label: "Tue", value: 42 },
        { label: "Wed", value: 78 },
        { label: "Thu", value: 58 },
        { label: "Fri", value: 84 },
        { label: "Sat", value: 62 },
      ],
      kpis: [
        { label: "Present Workforce", value: "6,482" },
        { label: "Attendance Exceptions", value: "173" },
      ],
      feed: [
        { label: "Shift Coverage", status: "Active", tone: "ok" },
        { label: "Leave Status", status: "Updated", tone: "ok" },
        { label: "Attendance Anomaly", status: "Flagged", tone: "warn" },
      ],
    }
  },

  {
    slug: "compliance-report",
    badge: "P9 • Audit-ready India stack",
    title: "Labour Compliance Management",
    description:
      "Managing labour compliance across sites, contractors, and states is time-consuming and difficult to audit.",

    metrics: [
      "Reduced Compliance Effort",
      "Faster Audits",
      "Improved Regulatory Readiness",
    ],

    challenges: [
      "State-specific register complexity",
      "Manual statutory compilation",
      "Scattered evidence storage",
      "Audit request fire drills",
      "Multi-site monitoring gaps",
    ],

    workflow: [
      "Data Collection",
      "Compliance Validation",
      "Report Generation",
      "Audit Readiness",
    ],

    features: [
      "CLRA Compliance",
      "State-Specific Registers",
      "Statutory Report Generation",
      "Labour License Tracking",
      "Compliance Alerts",
      "Audit Repository",
    ],

    roi: [
      {
        title: "Reduced Compliance Effort",
        description:
          "Automated report generation eliminates manual statutory compilation across states.",
      },
      {
        title: "Faster Audits",
        description:
          "Pre-built report packs and centralized evidence reduce audit response time significantly..",
      },
      {
        title: "Improved Regulatory Readiness",
        description:
          "Alerts and compliance status maps surface the next risk before deadlines are missed.",
      },
    ],

    aiInsights: [
      "Monitor risks, track deadlines, and identify compliance gaps automatically across all sites.",
      "AI summarizes compliance risk hotspots by state, act, and contractor.",
      "Assistive search finds the right register, site, or vendor evidence instantly.",
    ],

    benefits: [
      "Compliance teams gain complete control over labour law obligations across every site.",
      "Plant teams know exactly what is pending, why, and by when.",
      "Auditors receive complete, traceable, site-tagged evidence with full documentation.",
    ],

    cta: "Secure every gate. Verify every worker. Control every site.",

    dashboard: {
      analytics: [
        { label: "Mon", value: 70 },
        { label: "Tue", value: 54 },
        { label: "Wed", value: 88 },
        { label: "Thu", value: 46 },
        { label: "Fri", value: 76 },
        { label: "Sat", value: 60 },
      ],
      kpis: [
        { label: "States Covered", value: "19" },
        { label: "Open Compliance Gaps", value: "8" },
      ],
      feed: [
        { label: "Statutory Filing", status: "Active", tone: "ok" },
        { label: "Audit Repository", status: "Synced", tone: "ok" },
        { label: "License Renewal", status: "Due Soon", tone: "warn" },
      ],
    }
  },

  {
    slug: "background-verification",
    badge: "Onboarding & BGV",
    title: "Contractor Onboarding & Background Verification",
    description:
      "Manual onboarding delays workforce deployment and increases compliance risks across industrial sites.",

    metrics: [
      "80% Faster Onboarding",
      "Reduced Verification Delays",
      "Improved Workforce Authenticity",
    ],

    challenges: [
      "Aadhaar / PAN Delays",
      "Manual Document Chasing",
      "BGV Visibility Gaps",
      "Medical Fitness Bottlenecks",
      "Training Approvals Stuck",
    ],

    workflow: [
      "Worker Registration",
      "Document Verification",
      "BGV & Medical Checks",
      "Deployment Approval",
    ],

    features: [
      "Aadhaar, PAN & UAN Verification",
      "Background Verification",
      "Medical Fitness Tracking",
      "Induction & Training Management",
      "Digital Document Collection",
      "Mobile Onboarding",
    ],

    roi: [
      {
        title: "80% Faster Onboarding",
        description:
          "Parallel verification workflows eliminate follow-up lag and deployment delays.",
      },
      {
        title: "Reduced Verification Delays",
        description:
          "Automated document collection and BGV tracking accelerate approvals.",
      },
      {
        title: "Improved Workforce Authenticity",
        description:
          "Every worker is fully verified before deployment, reducing compliance exposure.",
      },
    ],

    aiInsights: [
      "Identify missing documents, predict approval bottlenecks, and flag duplicate registrations.",
      "Smart checklist adapts by worker category, plant, and vendor requirements.",
      "Auto-summarized worker files give approvers instant readiness context.",
    ],

    benefits: [
      "HR accelerates workforce deployment with digital onboarding workflows.",
      "Compliance teams maintain complete worker verification records for every deployment.",
      "Vendors submit cleaner worker packets through a guided mobile onboarding journey.",
    ],

    cta: "Deploy verified workers faster with digital onboarding.",
    dashboard: {
      analytics: [
        { label: "Mon", value: 50 },
        { label: "Tue", value: 64 },
        { label: "Wed", value: 72 },
        { label: "Thu", value: 80 },
        { label: "Fri", value: 90 },
        { label: "Sat", value: 68 },
      ],
      kpis: [
        { label: "Onboarding Status", value: "Active" },
        { label: "BGV Progress", value: "94%" },
      ],
      feed: [
        { label: "Pending Approvals", status: "Review", tone: "warn" },
        { label: "Workforce Readiness", status: "Strong", tone: "ok" },
        { label: "Document Verification", status: "Done", tone: "ok" },
      ],
    }
  },

  {
    slug: "contractor-management",
    badge: "Contractor Core",
    title: "Contractor Lifecycle Management",
    description:
      "Managing contractor performance, compliance, and workforce strength across multiple sites is complex and fragmented without a centralized governance system.",

    metrics: [
      "Improved Vendor Accountability",
      "Centralized Contractor Governance",
      "Reduced Compliance Risks",
    ],

    challenges: [
      "Fragmented Contractor Data",
      "No Vendor-Level View",
      "Skill Mismatch on Shopfloor",
      "Document Expiry Surprises",
      "Blacklist Not Centralized",
    ],

    workflow: [
      "Contractor Registration",
      "Workforce Mapping",
      "Compliance Monitoring",
      "Performance Tracking",
    ],

    features: [
      "Contractor Master Database",
      "Work Order Management",
      "Contractor Scorecards",
      "Skill Mapping",
      "Vendor Performance Tracking",
      "Contractor Risk Management",
    ],

    roi: [
      {
        title: "Improved Vendor Accountability",
        description:
          "Scorecards make contractor performance and compliance exposure visible across all sites.",
      },
      {
        title: "Centralized Contractor Governance",
        description:
          "One master database replaces fragmented records across plants and vendors.",
      },
      {
        title: "Reduced Compliance Risks",
        description:
          "Expiry alerts and blacklist management surface risks before they become incidents.",
      },
    ],

    aiInsights: [
      "Predict contractor risks, benchmark vendors, and identify performance gaps automatically.",
      "Pattern detection spots underperforming vendors before escalation is required.",
      "Smart summaries compare sites, headcount mix, and compliance posture across the enterprise.",
    ],

    benefits: [
      "Operations, procurement, and compliance teams work from a single source of truth.",
      "Procurement sees vendor quality beyond commercial metrics.",
      "Corporate governance owns a central contractor ledger with full audit history.",
    ],

    cta: "Manage contractors with complete visibility and control.",
    dashboard: {
      analytics: [
        { label: "Mon", value: 58 },
        { label: "Tue", value: 72 },
        { label: "Wed", value: 64 },
        { label: "Thu", value: 86 },
        { label: "Fri", value: 70 },
        { label: "Sat", value: 80 },
      ],
      kpis: [
        { label: "Active Contractors", value: "146" },
        { label: "Contractor Scores", value: "92" },
      ],
      feed: [
        { label: "Compliance Status", status: "Active", tone: "ok" },
        { label: "Workforce Strength", status: "Strong", tone: "ok" },
        { label: "Contractor Risk Alert", status: "Watch", tone: "warn" },
      ],
    }
  },

  {
    slug: "wage-payroll",
    badge: "Wage & Billing",
    title: "Wage Processing & Invoice Reconciliation",
    description:
      "Manual wage calculations and invoice validation lead to disputes, delays, and financial leakage across contractor operations.",

    metrics: [
      "Reduced Billing Errors",
      "Faster Invoice Approvals",
      "Improved Cost Control",
    ],

    challenges: [
      "State-Wise Wage Complexity",
      "OT Disputes",
      "Invoice Mismatch Cycles",
      "Manual Reconciliation Load",
      "Payroll Handoff Friction",
    ],

    workflow: [
      "Attendance Processing",
      "Wage Calculation",
      "Invoice Validation",
      "Finance Approval",
    ],

    features: [
      "Wage Automation",
      "Overtime Calculations",
      "Minimum Wage Compliance",
      "Billing Reconciliation",
      "Invoice Validation",
      "ERP Integration",
    ],

    roi: [
      {
        title: "Reduced Billing Errors",
        description:
          "Automated reconciliation catches mismatches before they reach finance approval.",
      },
      {
        title: "Faster Invoice Approvals",
        description:
          "Validated invoices move cleanly through approval without manual intervention.",
      },
      {
        title: "Improved Cost Control",
        description:
          "Mismatch detection and audit-ready calculations eliminate hidden leakage.",
      },
    ],

    aiInsights: [
      "Detect payroll anomalies, billing mismatches, and unusual overtime patterns automatically.",
      "AI explains mismatch causes in plain language for faster approver resolution.",
      "Recommendation engine surfaces vendors and sites with hidden leakage risk.",
    ],

    benefits: [
      "Finance teams gain accuracy and cleaner invoice governance across all contractors.",
      "Contractors receive transparent wage calculations and faster dispute resolution.",
      "HR and payroll teams rely on one calculation source for all sites and states.",
    ],

    cta: "Automate wage governance and eliminate billing disputes.",
    dashboard: {
      analytics: [
        { label: "Mon", value: 60 },
        { label: "Tue", value: 48 },
        { label: "Wed", value: 74 },
        { label: "Thu", value: 66 },
        { label: "Fri", value: 82 },
        { label: "Sat", value: 56 },
      ],
      kpis: [
        { label: "Wage Summary", value: "₹38.6L" },
        { label: "Billing Variances", value: "27" },
      ],
      feed: [
        { label: "Invoice Status", status: "Active", tone: "ok" },
        { label: "Cost Leakage Alert", status: "Flagged", tone: "warn" },
        { label: "Invoice Matched", status: "Done", tone: "ok" },
      ],
    }
  },

  {
    slug: "cxo-dashboard",
    badge: "CXO Dashboard",
    title: "Executive & CXO Dashboard",
    description:
      "Leadership teams lack real-time visibility into workforce operations, compliance exposure, and contractor performance across sites.",

    metrics: [
      "Faster Decisions",
      "Enterprise-Wide Visibility",
      "Improved Operational Governance",
    ],

    challenges: [
      "No Multi-Location Command View",
      "Lagging Operational Signals",
      "Compliance Buried in Reports",
      "Vendor Exposure Not Benchmarked",
      "Cost Leakage Hard to Explain",
    ],

    workflow: [
      "Data Consolidation",
      "KPI Monitoring",
      "Risk Analysis",
      "Executive Insights",
    ],

    features: [
      "Workforce Analytics",
      "Contractor Analytics",
      "Compliance Dashboard",
      "Cost Leakage Monitoring",
      "Vendor Benchmarking",
      "Executive Reporting",
    ],

    roi: [
      {
        title: "Faster Decisions",
        description:
          "One dashboard replaces fragmented review decks and month-end reporting cycles.",
      },
      {
        title: "Enterprise-Wide Visibility",
        description:
          "Live workforce, compliance, and vendor data across every site and region.",
      },
      {
        title: "Improved Operational Governance",
        description:
          "KPIs, risk signals, and benchmarks align HR, finance, and operations teams.",
      },
    ],

    aiInsights: [
      "Generate executive summaries, identify risks, and forecast workforce trends automatically.",
      "AI writes a morning operations brief for each CXO view with prioritized action signals.",
      "Predictive benchmarking shows which plants and vendors will miss targets first.",
    ],

    benefits: [
      "Boardroom-ready insights for HR, operations, finance, and leadership teams.",
      "CXOs get enterprise visibility without waiting for month-end reporting packs.",
      "Shared analytics improves alignment across all leadership functions.",
    ],

    cta: "Transform workforce data into executive intelligence.",
    dashboard: {
      analytics: [
        { label: "Mon", value: 64 },
        { label: "Tue", value: 80 },
        { label: "Wed", value: 58 },
        { label: "Thu", value: 92 },
        { label: "Fri", value: 76 },
        { label: "Sat", value: 70 },
      ],
      kpis: [
        { label: "Workforce Strength", value: "31 Sites" },
        { label: "Compliance Score", value: "94%" },
      ],
      feed: [
        { label: "Vendor Performance", status: "Active", tone: "ok" },
        { label: "Cost Analytics", status: "Live", tone: "ok" },
        { label: "Operational Risk Alert", status: "Watch", tone: "warn" },
      ],
    },
  },

  {
    slug: "ai-assistance",
    badge: "AI Assistant",
    title: "AI Workforce Assistant",
    description:
      "Users spend too much time searching dashboards and reports for workforce information that should be available instantly.",

    metrics: [
      "Instant Access to Information",
      "Higher User Productivity",
      "Reduced Reporting Effort",
    ],

    challenges: [
      "Too Many Dashboards to Search",
      "Compliance Questions Depend on Analysts",
      "Report Requests Are Manual",
      "Anomalies Found Too Late",
      "Workflow Knowledge Trapped in Teams",
    ],

    workflow: [
      "Ask a Question",
      "AI Analyzes Data",
      "Generates Insights",
      "Triggers Actions",
    ],

    features: [
      "Conversational Analytics",
      "AI Compliance Assistant",
      "Payroll Query Assistant",
      "Report Generation",
      "Voice Commands",
      "Smart Recommendations",
    ],

    roi: [
      {
        title: "Instant Access to Information",
        description:
          "Decision-makers get answers without analyst bottlenecks or dashboard navigation.",
      },
      {
        title: "Higher User Productivity",
        description:
          "Business users access workforce intelligence in natural language from any device.",
      },
      {
        title: "Reduced Reporting Effort",
        description:
          "AI generates reports, summaries, and alerts automatically without manual effort.",
      },
    ],

    aiInsights: [
      "Generate reports, answer questions, identify risks, and automate actions through conversation.",
      "Agentic workflows trigger reminders, approvals, and report exports based on user queries.",
      "Voice and chat unify access for plant, HR, finance, and compliance teams.",
    ],

    benefits: [
      "Everyone from supervisors to CXOs can access workforce intelligence instantly.",
      "Analysts move from report production to exception management and strategic analysis.",
      "Leadership gets narrative insight with recommended next steps, not just data.",
    ],

    cta: "Ask. Analyze. Act.",
    dashboard: {
      analytics: [
        { label: "Mon", value: 64 },
        { label: "Tue", value: 80 },
        { label: "Wed", value: 58 },
        { label: "Thu", value: 92 },
        { label: "Fri", value: 76 },
        { label: "Sat", value: 70 },
      ],
      kpis: [
        { label: "Workforce Strength", value: "31 Sites" },
        { label: "Compliance Score", value: "94%" },
      ],
      feed: [
        { label: "Vendor Performance", status: "Active", tone: "ok" },
        { label: "Cost Analytics", status: "Live", tone: "ok" },
        { label: "Operational Risk Alert", status: "Watch", tone: "warn" },
      ],
    },
  },

  {
    slug: "challan-reconciliation",
    badge: "Challan Recon",
    title: "ESI & PF Challan Reconciliation",
    description:
      "Manual reconciliation makes it difficult to identify missing contributions and statutory compliance risks across vendors, states, and compliance periods.",

    metrics: [
      "Reduced Audit Risks",
      "Improved Compliance Accuracy",
      "Better Vendor Accountability",
    ],

    challenges: [
      "Missing Contribution Detection",
      "Challan Mismatch Analysis",
      "Vendor-Wise Exception Overload",
      "State-Wise Threshold Complexity",
      "Audit Readiness Pressure",
    ],

    workflow: [
      "Challan Upload",
      "Validation",
      "Reconciliation",
      "Exception Resolution",
    ],

    features: [
      "PF Validation",
      "ESI Validation",
      "Contribution Matching",
      "Vendor Reconciliation",
      "Compliance Monitoring",
      "Audit Reports",
    ],

    roi: [
      {
        title: "Reduced Audit Risks",
        description:
          "Engine catches statutory gaps before audits surface them.",
      },
      {
        title: "Improved Compliance Accuracy",
        description:
          "Automated matching eliminates manual reconciliation errors across vendors.",
      },
      {
        title: "Better Vendor Accountability",
        description:
          "Mismatch ownership is visible, traceable, and assigned for resolution.",
      },
    ],

    aiInsights: [
      "Identify variances, predict defaults, and prioritize compliance risks automatically.",
      "AI clusters exceptions by likely root cause and resolution priority.",
      "Predictive watchlists show vendors most likely to default in the next compliance cycle.",
    ],

    benefits: [
      "Compliance teams focus on exceptions instead of manual verification across spreadsheets.",
      "Finance sees statutory exposure in rupees, vendors, and compliance periods.",
      "Audit teams receive exportable evidence trails and reconciliation reports on demand.",
    ],

    cta: "Automate statutory compliance verification.",
    dashboard: {
      analytics: [
        { label: "Mon", value: 52 },
        { label: "Tue", value: 68 },
        { label: "Wed", value: 84 },
        { label: "Thu", value: 60 },
        { label: "Fri", value: 88 },
        { label: "Sat", value: 74 },
      ],
      kpis: [
        { label: "AI Queries", value: "1,284" },
        { label: "Actions Automated", value: "346" },
      ],
      feed: [
        { label: "Automated Reports", status: "Ready", tone: "ok" },
        { label: "Compliance Alerts", status: "Active", tone: "ok" },
        { label: "Recommended Actions", status: "Live", tone: "ok" },
      ],
    },
  },
];