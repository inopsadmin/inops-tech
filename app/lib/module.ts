export interface ModuleData {
  slug: string;
  badge: string;
  title: string;
  description: string;
  seoTitle?: string;
  seoDescription?: string;
  seoKeywords?: string[];
  /** Optional keyword-bearing H2 content sections rendered after the hero. Body may contain inline HTML (e.g. <a> tags). */
  contentSections?: { h2: string; body: string }[];
  /** Optional FAQ items rendered visibly and as JSON-LD FAQPage schema. */
  faq?: { question: string; answer: string }[];

  metrics: string[];
  challenges: string[];
  workflow: {
    title: string;
    description: string;
  }[];
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
    title: "Contract Worker Attendance & Leave Management",
    description:
      "Automate contract worker attendance, shift management, and leave tracking — biometric verification, real-time headcount, and CLRA 9-day continuous attendance monitoring across all sites.",
    seoTitle: "Contract Worker Attendance & Leave Management | InOps CLMS",
    seoKeywords: [
      "contract worker attendance",
      "shift roster management factory",
      "contractor attendance tracking",
      "OT management contract labour",
      "9 day attendance rule CLRA",
    ],

    contentSections: [
      {
        h2: "Real-time capture from every device",
        body: "Face terminals, fingerprint readers, AI-based CCTV attendance, QR, card, and the InOps mobile app with GPS all feed one attendance stream under one worker identity. Late arrivals, early departures, and absences are flagged in real time — no manual reconciliation at shift end.",
      },
      {
        h2: "Shift, OT and leave policies applied automatically",
        body: 'Shift windows, OT thresholds, and leave policies are configured per contractor, per category, and per site, and apply to every punch automatically — state-aware minimum hours and statutory OT rules included. OT beyond threshold requires supervisor approval, and verified hours flow directly to <a href="/contract-labour-management/modules/wage-payroll" class="text-blue-600 underline">contractor payroll</a>.',
      },
      {
        h2: "How is contract worker attendance different from employee attendance?",
        body: "Every punch carries a contractor mapping — agency, contract, site, cost centre — and each gate pass is checked for current validity before the record is written. An employee attendance system tracks time; a CLMS attendance module creates compliance records: headcount against the licensed contractor strength, the inputs for Form XIII, and the audit trail that survives a labour inspector visit.",
      },
      {
        h2: "Feeding the 9-day rule and CLRA registers",
        body: 'Continuous attendance is tracked per worker, with alerts before the threshold is crossed so HR can schedule the rest day in time. These alerts feed the same engine as our <a href="/contract-labour-management/modules/compliance-report" class="text-blue-600 underline">CLRA compliance software</a> — and the data behind them is the same attendance record that populates Form V and Form XIII.',
      },
    ],

    faq: [
      {
        question: "Which devices can capture contract worker attendance?",
        answer:
          "Face terminals, fingerprint readers, AI-based CCTV attendance, QR, card, and the InOps mobile app with GPS — all feeding one attendance engine under one worker identity. Mixed hardware across gates needs no extra configuration.",
      },
      {
        question: "Can shift and OT rules differ per contractor?",
        answer:
          "Yes. Shift windows, OT thresholds, and leave policies are configured per contractor, category, and site, and apply automatically to every punch — no manual roster interpretation.",
      },
      {
        question: "How does the system handle the 9-day continuous attendance rule?",
        answer:
          "Continuous attendance is tracked per worker; HR is alerted before the threshold is crossed so the weekly rest day can be scheduled in time. Alerts feed the same engine as our CLRA registers.",
      },
      {
        question: "Do verified hours flow to payroll automatically?",
        answer:
          "Yes — approved attendance and OT flow directly to contractor payroll and invoice reconciliation, so what's paid always traces to what the gates recorded.",
      },
    ],

    metrics: ["Reduced Attendance Fraud", "Better Workforce Planning", "Accurate Payroll Processing"],

    challenges: [
      "Buddy Punching",
      "Shift Allocation",
      "Attendance Corrections",
      "Leave Visibility Mismatch",
      "No Real-Time Floor Headcount",
    ],

    workflow: [
      {
        title: "Attendance Capture",
        description: "Attendance is recorded through biometric devices, mobile app, CCTV AI, or geofencing."
      },
      {
        title: "Shift Validation",
        description: "System validates punches against roster, shift schedules, and overtime policies."
      },
      {
        title: "Exception Processing",
        description: "Late arrivals, missing punches, absenteeism, and shift deviations are flagged."
      },
      {
        title: "Workforce Visibility",
        description: "Real-time dashboards provide workforce strength, attendance status, and leave analytics."
      },
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
    badge: "CLRA Compliance",
    title: "CLRA Compliance Software for Principal Employers",
    description:
      "InOps CLRA compliance software automates every obligation a principal employer carries under the Contract Labour (Regulation & Abolition) Act: digital Form V and Form XIII registers maintained in real time, contractor licence expiry and headcount-cap tracking per establishment, alerts on the 9-day continuous attendance threshold, and statutory returns generated directly from biometric gate data. Every register entry traces to a verified gate event — so audit day is a report export, not a records hunt.",
    seoTitle: "CLRA Compliance Software — Digital Registers, Licences & Statutory Returns | InOps",
    seoDescription:
      "CLRA compliance software for principal employers: automated Form V & Form XIII registers, contractor licence tracking, 9-day rest-rule alerts, and audit-ready statutory returns — generated from live gate data.",
    seoKeywords: [
      "CLRA compliance software",
      "Form V register software",
      "Form XIII automation",
      "contract labour compliance software India",
      "contractor licence tracking",
    ],

    faq: [
      {
        question: "What is CLRA compliance software?",
        answer:
          "CLRA compliance software automates the statutory obligations that principal employers carry under the Contract Labour (Regulation & Abolition) Act: maintaining Form V and Form XIII registers, tracking contractor licences and headcount caps per establishment, monitoring the 9-day continuous attendance threshold, and generating statutory returns from verified gate and payroll data — with no manual compilation between the gate event and the filed document.",
      },
      {
        question: "Which registers does InOps maintain digitally under CLRA?",
        answer:
          "InOps maintains Form V (register of contractors), Form XIII (register of contract workers), muster rolls, and wage and overtime registers — all updated in real time from biometric gate events. Every entry is audit-ready and traceable to a verified gate punch, so inspectors or internal auditors receive current documents, not month-end reconstructions.",
      },
      {
        question: "Does InOps track contractor licences and headcount caps?",
        answer:
          "Yes. InOps records each contractor's CLRA licence number, expiry date, and permitted headcount per establishment. Deployments that would breach a licensed headcount cap are flagged before the worker enters. Licence-expiry alerts fire ahead of the renewal deadline so principal employers do not inadvertently engage a contractor whose authorisation has lapsed.",
      },
      {
        question: "What is the 9-day rule alert in CLRA compliance?",
        answer:
          "Under the Contract Labour Act and corresponding state rules, a contract worker who works nine or more consecutive days without a weekly off may acquire compensatory rest entitlements — and in some states may trigger employment-rights exposure for the principal employer. InOps monitors continuous attendance per worker per site and alerts HR before the ninth day so the mandatory weekly off can be scheduled in time.",
      },
      {
        question: "Can InOps generate CLRA statutory returns automatically?",
        answer:
          "Yes. InOps generates statutory returns directly from live gate and payroll data in state-specific formats. Returns include all required register extracts, PF and ESI challan-ready summaries, and Form V/XIII data — exported as ready-to-file documents without manual compilation. Multi-state establishments get separate outputs per applicable state rules.",
      },
    ],

    contentSections: [
      {
        h2: "What does CLRA compliance software automate?",
        body: "InOps automates the four obligation categories every principal employer faces under CLRA: statutory registers (Form V, Form XIII, muster rolls, wage registers); contractor licence verification and headcount-cap monitoring per establishment; the 9-day continuous attendance threshold that creates compensatory rest and potential employment-rights exposure; and statutory returns filed directly from live gate and payroll data — with no manual compilation between the gate event and the filed document.",
      },
      {
        h2: "Form V and Form XIII registers, maintained from gate data",
        body: "Traditional compliance treats Form V and Form XIII as month-end paperwork. InOps treats them as live outputs of gate operations: every contractor deployment, headcount change, or work-commencement event writes to the register in real time. When an inspector arrives or an audit is called, the register is current to the last gate punch — not reconstructed from memory. This is the structural difference between CLRA compliance software and a document-filing tool.",
      },
      {
        h2: "Licence, headcount and 9-day rule monitoring",
        body: "InOps tracks each contractor's CLRA licence number, expiry date, and permitted headcount per establishment. Deployments that would breach a licensed headcount cap are flagged before the worker enters. The 9-day continuous attendance rule — where a contract worker working nine or more consecutive days without a weekly off may acquire compensatory rest entitlements and, in some states, permanent employment risk — is monitored per worker per site, with HR alerts before the threshold is crossed.",
      },
      {
        h2: "Built for audits and inspections",
        body: "Principal employers at PSUs, defence establishments, and large manufacturing plants face periodic CLRA inspections with short notice. InOps stores every register, licence, Form V, and gate event in a single audit repository, tagged by site, contractor, and period. An inspection request is answered with a filtered export — not a records search across files and emails. Compliance officers report audit response time dropping from days to under an hour.",
      },
    ],

    metrics: [
      "Reduced Compliance Effort",
      "Faster Audit Response",
      "Improved Regulatory Readiness",
    ],

    challenges: [
      "Form V / Form XIII maintained manually",
      "Contractor licence expiry missed",
      "9-day rest-rule not tracked per worker",
      "Audit evidence scattered across files",
      "Multi-site statutory gaps undetected",
    ],

    workflow: [
      {
        title: "Gate data captured",
        description: "Every worker entry and exit is biometrically verified and written to the compliance record in real time — no manual transcription."
      },
      {
        title: "Registers updated automatically",
        description: "Form V, Form XIII, muster rolls, and wage registers are maintained from live gate and payroll data — always current, never reconstructed."
      },
      {
        title: "Alerts before thresholds are crossed",
        description: "Licence expiry, headcount cap, and 9-day continuous attendance alerts fire before the compliance event, not after it."
      },
      {
        title: "Audit-ready export on demand",
        description: "Any register, filing period, site, or contractor can be exported as a statutory-format document in under a minute."
      },
    ],

    features: [
      "Form V & Form XIII Registers",
      "Contractor Licence Tracking",
      "9-Day Attendance Alerts",
      "State-Specific Register Templates",
      "Statutory Return Generation",
      "Central Audit Repository",
    ],

    roi: [
      {
        title: "Reduced Compliance Effort",
        description:
          "Automated register maintenance eliminates manual statutory compilation across contractors and states.",
      },
      {
        title: "Faster Audit Response",
        description:
          "Centralized evidence and filtered exports reduce inspector-response time from days to under an hour.",
      },
      {
        title: "Improved Regulatory Readiness",
        description:
          "Licence, headcount, and 9-day alerts surface the next compliance risk before deadlines or inspections arrive.",
      },
    ],

    aiInsights: [
      "Monitor CLRA risks, track licence deadlines, and flag 9-day threshold exposures automatically across all sites.",
      "AI summarizes compliance hotspots by contractor, establishment, and state act.",
      "Assistive search locates any register entry, Form V, or contractor document instantly.",
    ],

    benefits: [
      "Compliance teams maintain current CLRA registers without manual effort across every establishment.",
      "Plant HR knows exactly which workers are approaching the 9-day threshold and which contractor licences are expiring.",
      "Auditors and inspectors receive complete, site-tagged, period-filtered evidence in a single export.",
    ],

    cta: "Make CLRA audit day a report export, not a records hunt.",

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
        { label: "Licence Renewal", status: "Due Soon", tone: "warn" },
      ],
    }
  },

  {
    slug: "background-verification",
    badge: "Onboarding & BGV",
    title: "Contractor Onboarding & Background Verification",
    description:
      "InOps automates contractor onboarding and background verification — Aadhaar, PAN, UAN checks, medical clearance, and digital document collection — so workers are compliance-ready before their first gate entry.",
    seoTitle: "Contractor Onboarding & Background Verification Module | InOps CLMS",
    seoKeywords: [
      "contractor onboarding software",
      "worker background verification module",
      "Aadhaar verification onboarding",
      "industrial worker onboarding",
      "digital worker onboarding",
    ],

    contentSections: [
      {
        h2: "Onboarding in hours, not weeks",
        body: "Digital intake captures documents in the worker's language and handles batch flows for shutdown and surge volumes — hundreds of workers processed in parallel rather than one by one. Onboarding that previously took days compresses to hours, with no proportional increase in HR headcount.",
      },
      {
        h2: "What gets verified before first entry?",
        body: 'Aadhaar-linked identity, criminal and court records, medical fitness certification, and induction completion — a worker without clearance on any of these criteria is gate-blocked until the outstanding step resolves. BGV-pending status is enforced at the barrier via <a href="/contract-labour-management/modules/gate-compliance" class="text-blue-600 underline">gate compliance and auto-blocking</a>.',
      },
      {
        h2: "Records built for audits",
        body: "Every worker carries a per-worker verification trail: what was checked, when, by which authority, with what result. Records are structured for defence and PSU audit requirements and available on demand — no manual collation before an inspection visit.",
      },
      {
        h2: "Verification beyond the platform",
        body: 'Need background checks without deploying the full CLMS? InOps offers standalone background verification as a service — see <a href="/services/background-verification" class="text-blue-600 underline">background verification services</a> when the service page is live.',
      },
    ],

    faq: [
      {
        question: "What does contractor onboarding include?",
        answer:
          "Identity capture with Aadhaar linkage, background verification, medical fitness recording, induction scheduling, document collection, and automatic assignment to contractor, site, and shift — fully digital, batch-capable for surge intake.",
      },
      {
        question: "How fast can a batch of workers be onboarded?",
        answer:
          "Bulk intake is built for shutdown and ramp volumes — hundreds of workers processed in days, with digital checks returning within their SLAs.",
      },
      {
        question: "Is worker consent captured?",
        answer:
          "Yes — digitally, in the worker's language, before any verification runs; records follow DPDP-aligned retention.",
      },
      {
        question: "Can a worker be blocked until verification completes?",
        answer:
          "Yes — with gate compliance enabled, BGV-pending status is a blocking rule: no clearance, no entry, automatically.",
      },
    ],

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
      {
        title: "Digital Registration ",
        description: "Contractor uploads worker details, Aadhaar, PAN, bank details, and supporting documents."
      },
      {
        title: "Automated Verification",
        description: "Identity, UAN, PF, ESI, and background verification checks are initiated automatically."
      },
      {
        title: "Medical & Safety Clearance",
        description: "Worker undergoes medical fitness validation and mandatory induction training."
      },
      {
        title: "Workforce Activation",
        description: "Approved workers are assigned to contractor, location, shift, and become deployment-ready."
      },
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
    title: "Contractor Compliance & Lifecycle Management",
    description:
      "Manage contractor compliance centrally: licences, CLRA registrations, headcount limits, document expiry alerts, and contractor scorecards — across every vendor and site from one dashboard.",
    seoTitle: "Contractor Management & Compliance Software | Licences, Renewals — InOps",
    seoKeywords: [
      "contractor compliance software India",
      "contractor management system",
      "labour contractor licence tracking",
      "principal employer contractor management",
      "multi-site contractor management",
    ],

    contentSections: [
      {
        h2: "Every contractor, one governed view",
        body: "Contractor profiles, commercial agreements, insurance certificates, key contacts, and site deployments consolidate in one record — updated as documents renew and workers are added or removed. No more chasing attachment emails or rebuilding context at audit time.",
      },
      {
        h2: "Licences, caps and renewals",
        body: 'CLRA licence validity and permitted headcount limits are tracked per establishment, with alerts before expiry and flags when deployment approaches the licensed cap. Licence data syncs with the registers maintained in our <a href="/contract-labour-management/modules/compliance-report" class="text-blue-600 underline">CLRA compliance software</a>, so Form V headcount always reflects the current licensed limit. A lapsed licence can trigger auto-blocking at the gate via <a href="/contract-labour-management/modules/gate-compliance" class="text-blue-600 underline">gate compliance</a>.',
      },
      {
        h2: "What should a principal employer track per contractor?",
        body: "Valid CLRA licence and remaining headroom against the cap · PF/ESI challan evidence per cycle · insurance certificate and agreement validity dates · deployment strength vs. work-order scope · incident and compliance history. These are the fields a labour inspector or internal audit will request — keeping them current in one system is the difference between a 30-minute audit response and a three-week reconstruction.",
      },
      {
        h2: "Manpower allocation and accountability",
        body: "Workers are allocated against work orders and site assignments, so deployment strength and scope are always comparable. Site-level performance comparisons — attendance reliability, compliance flags, OT patterns — make the difference between contractors visible before it becomes a production issue.",
      },
    ],

    faq: [
      {
        question: "Can InOps track CLRA licence limits per contractor?",
        answer:
          "Yes — licence validity and permitted headcount are tracked per establishment, with alerts before expiry and visibility when deployment approaches the cap.",
      },
      {
        question: "What happens when a contractor's licence lapses?",
        answer:
          "The contractor is flagged across dashboards and registers immediately, and with gate compliance enabled, their workers can be blocked at entry until the licence is restored — with every denial logged.",
      },
      {
        question: "Does it verify contractors' statutory remittances?",
        answer:
          "Contractor PF/ESI challan evidence is captured against each cycle, so principal-employer liability exposure from contractor defaults is visible before it becomes an audit finding.",
      },
      {
        question: "Can we compare contractor performance across sites?",
        answer:
          "Yes — attendance reliability, compliance flags, OT patterns, and incident history are reportable per contractor across every site they serve.",
      },
    ],

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
      {
        title: "Contractor Registration",
        description: "Vendor profile, contracts, licenses, and work orders are onboarded into the system."
      },
      {
        title: "Workforce Mapping",
        description: "Workers are linked to contractors, departments, cost centers, and project locations."
      },
      {
        title: "Compliance Monitoring",
        description: "The platform continuously tracks licenses, manpower strength, and statutory obligations."
      },
      {
        title: "Performance Evaluation",
        description: "Contractor scorecards, compliance ratings, and productivity metrics are updated automatically."
      },
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
    badge: "Wage & Invoice",
    title: "Contract Labour Wage & Invoice Reconciliation",
    description:
      "InOps automates contract labour payroll — wage calculations, OT approvals, and PF/ESI deductions — and reconciles contractor invoices against biometric attendance records before finance sign-off.",
    seoTitle: "Contract Labour Payroll Software | Wages, OT & Statutory Deductions — InOps",
    seoKeywords: [
      "contract labour payroll software",
      "contractor payroll processing India",
      "contractor wage calculation",
      "PF ESI deduction contract workers",
      "OT management contract labour",
    ],

    contentSections: [
      {
        h2: "Wages computed from gate-verified hours",
        body: "Wage rates are configured per worker category, contractor, and state minimum-wage schedule, and applied only to hours verified by the attendance engine — not the contractor's submitted roster. Every rupee in the payroll run traces back to a biometric punch or approved attendance event.",
      },
      {
        h2: "OT with approval workflow",
        body: 'When hours breach the configured OT threshold, the system creates a digital approval request for the supervisor — OT that goes unapproved never enters the payable calculation. This is the structural answer to ghost OT: the gate knows what was worked; the rule knows what was approved; the invoice can only carry the intersection. See also <a href="/contract-labour-management/modules/challan-reconciliation" class="text-blue-600 underline">challan reconciliation</a> for the statutory-deduction side.',
      },
      {
        h2: "Why compute contractor payroll from gate data?",
        body: 'Contractor-submitted rosters are where leakage lives: inflated headcount, unworked OT credited, wrong rate codes applied. Computing wages from gate data ends the argument at source — the record is the gate log, not the spreadsheet. Deductions computed from the same record flow automatically to <a href="/contract-labour-management/modules/challan-reconciliation" class="text-blue-600 underline">challan reconciliation</a> for PF/ESI filing.',
      },
      {
        h2: "Statutory deductions built in",
        body: 'PF, ESI, and LWF are computed per worker against each payroll cycle, with challan-ready outputs for filing. Deduction gaps and mismatches surface in real time rather than at filing deadlines. The same records feed the registers maintained in our <a href="/contract-labour-management/modules/compliance-report" class="text-blue-600 underline">CLRA compliance software</a>.',
      },
    ],

    faq: [
      {
        question: "How are contractor wage rates managed?",
        answer:
          "Rates are configured per worker category, contractor, and state minimum-wage schedule; revisions apply from their effective date with a full audit trail.",
      },
      {
        question: "What stops unauthorized overtime from being paid?",
        answer:
          "OT beyond the configured threshold requires digital supervisor approval before it becomes payable, and invoices reconcile line-by-line against approved OT only — closing unauthorised, ghost, and unclaimed OT alike.",
      },
      {
        question: "Are PF and ESI handled for contract workers?",
        answer:
          "Yes — PF, ESI, and LWF are computed per worker with challan-ready outputs, and reconciliation gaps are flagged in real time rather than at filing deadlines.",
      },
      {
        question: "Can contractors see their own payroll data?",
        answer:
          "Yes — contractor logins expose their workers' verified hours, computed wages, and deduction summaries, which cuts disputes before invoicing.",
      },
    ],

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
      {
        title: "Attendance Consolidation",
        description: "Approved attendance and overtime data are collected from all sites."
      },
      {
        title: "Wage Computation",
        description: "System calculates wages based on minimum wage rules, OT, deductions, and benefits."
      },
      {
        title: "Invoice Reconciliation",
        description: "Contractor invoices are matched against attendance, wages, and approved manpower."
      },
      {
        title: "Finance Approval",
        description: "Validated invoices move through approval workflows and ERP integration."
      },
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
    title: "Contractor Workforce Analytics & CXO Dashboard",
    description:
      "Real-time contractor workforce analytics for leadership: headcount by site, compliance scores, cost leakage, and vendor benchmarking — without waiting for month-end reporting packs.",
    seoTitle: "CXO Dashboard — Contractor Workforce Analytics & Cost Leakage | InOps",
    seoKeywords: [
      "contractor workforce analytics",
      "workforce dashboard manufacturing",
      "contractor spend visibility",
      "compliance dashboard CXO",
      "cost leakage monitoring CLMS",
    ],

    contentSections: [
      {
        h2: "From gate events to board answers",
        body: "Every number on the CXO dashboard traces to the same attendance engine that drives gate access, contractor payroll, and CLRA registers — no manual stitching, no month-end compilation. Live data means the headcount you see at 9 AM reflects what the gates recorded at shift change, not last week's export.",
      },
      {
        h2: "What does contractor cost leakage look like at the executive level?",
        body: 'Headcount vs. invoiced deltas across sites, OT trend anomalies by plant and contractor, compliance-risk heatmaps flagging licence gaps and register failures — surfaced for leadership before they become audit findings or invoice disputes. The OT side is quantified in our <a href="/blog/ot-leakage-benchmarks-indian-factories-2026" class="text-blue-600 underline">OT leakage benchmarks report</a>.',
      },
      {
        h2: "Views per audience",
        body: "CXOs see the enterprise rollup: total headcount, spend, compliance posture, and cross-site anomalies. Plant heads drill to their site. Finance sees the invoice and deduction picture. Board exports are scheduled or on-demand — same numbers the plant sees, aggregated without reformatting.",
      },
    ],

    faq: [
      {
        question: "What KPIs does the CXO dashboard show?",
        answer:
          "Contractor headcount and spend by site, compliance posture and open risks, OT and leakage trends, invoice-vs-verified deltas, and cross-site comparisons — refreshed from live gate data.",
      },
      {
        question: "Can data be exported for board reviews?",
        answer:
          "Yes — board-ready exports and scheduled reports are standard, with the same numbers the plant sees, aggregated.",
      },
      {
        question: "Is the dashboard real-time?",
        answer:
          "Dashboards read from the live attendance and compliance engine; there is no month-end compilation step.",
      },
    ],

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
      {
        title: "Data Aggregation",
        description: "Data from attendance, compliance, onboarding, and payroll modules is consolidated."
      },
      {
        title: "KPI Monitoring ",
        description: "Key metrics such as workforce strength, contractor performance, and compliance scores are tracked."
      },
      {
        title: "Risk Identification",
        description: "AI highlights compliance risks, manpower shortages, and financial leakages."
      },
      {
        title: "Executive Decision Making",
        description: "Leadership receives actionable insights, trends, and recommendations."
      },
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
    title: "AI Workforce Compliance Assistant",
    description:
      "Ask InOps AI questions about attendance, compliance, payroll, or contractor status — and get instant answers, anomaly alerts, and automated report generation across all your CLMS data.",
    seoTitle: "AI Assistance for Contractor Compliance | Anomaly Detection — InOps",
    seoKeywords: [
      "AI workforce compliance",
      "attendance anomaly detection",
      "AI contractor management",
      "workforce AI manufacturing",
      "CLMS AI assistant",
    ],

    contentSections: [
      {
        h2: "Grounded in gate-verified data",
        body: "Every AI flag traces to a verified gate event, attendance record, or compliance register — not an estimate or benchmark average. When the system surfaces an anomaly, the underlying events are attached; there is no 'the AI said so' without evidence.",
      },
      {
        h2: "What anomalies can AI detect in contractor attendance?",
        body: "Proxy-punch patterns — impossible travel between punches, synchronized entries across multiple workers; OT clustering in the final days of the billing cycle; headcount-vs-invoice drift across contractor agencies; and compliance deadlines at risk based on the current register state. Each flag includes the specific events that triggered it.",
      },
      {
        h2: "Assistance, not autopilot",
        body: "AI surfaces anomalies and recommends actions — supervisors and HR approve before anything changes. Every control remains human-owned and audit-logged. In enterprise and PSU environments, automated decisions on workforce records require human accountability at each step; the system is designed around that constraint.",
      },
    ],

    faq: [
      {
        question: "What does AI assistance actually flag?",
        answer:
          "Attendance anomalies that suggest proxy punching, OT patterns that predict leakage, invoice-vs-attendance drift, and compliance gaps forming before deadlines — each with the underlying events attached.",
      },
      {
        question: "Does AI take actions automatically?",
        answer:
          "No — it recommends; supervisors and HR approve. Every control remains human-owned and audit-logged.",
      },
      {
        question: "What data does it learn from?",
        answer:
          "Your own gate-verified attendance, OT, and compliance history — patterns are site-specific, not generic benchmarks.",
      },
    ],

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
      {
        title: "Ask a Question",
        description: "User asks a workforce, compliance, payroll, or contractor-related question."
      },
      {
        title: "Data Analysis",
        description: "AI analyzes data across all modules and historical records."
      },
      {
        title: "Insight Generation",
        description: "System prepares summaries, exceptions, root causes, and recommendations."
      },
      {
        title: "Action Execution",
        description: "Users can trigger workflows, generate reports, or assign corrective actions."
      },
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
    title: "Challan & Invoice Reconciliation for Contract Labour",
    description:
      "InOps automatically matches PF and ESI challans against attendance and payroll records, catching the 25–30% discrepancy rate typical of manual contractor billing before it reaches the statutory deadline.",
    seoTitle: "Challan & Invoice Reconciliation for Contract Labour | InOps",
    seoKeywords: [
      "contractor invoice reconciliation",
      "challan reconciliation software",
      "contractor billing verification",
      "invoice attendance matching",
      "PF ESI challan reconciliation",
    ],

    contentSections: [
      {
        h2: "Invoices vs gates, line by line",
        body: "Contractor invoices are matched against gate-verified headcount, hours, and approved OT before payment — not after. Discrepancies carry the underlying gate evidence: the specific worker, the specific punch or absence, and the approved versus billed amount.",
      },
      {
        h2: "Why do contractor invoices and attendance never match?",
        body: 'Three mismatch sources dominate: headcount — workers billed who never presented at the gate; hours — rounded or fabricated shift lengths; OT — claimed at rates or volumes that never received supervisor approval. Each is structural and repeating, not a one-time error. The wage side is governed by <a href="/contract-labour-management/modules/wage-payroll" class="text-blue-600 underline">contract labour payroll software</a>.',
      },
      {
        h2: "Statutory challans checked too",
        body: 'PF and ESI challans are matched against computed deductions per worker, per cycle — gaps between what was deducted and what was remitted surface before the statutory deadline, not after. Principal-employer liability from contractor remittance defaults is visible in real time, feeding the same registers as our <a href="/contract-labour-management/modules/compliance-report" class="text-blue-600 underline">CLRA compliance software</a>.',
      },
      {
        h2: "What finance gets back",
        body: "Finance teams report recovering 80–120 hours per month previously spent on manual invoice review and reconciliation. Cycle close moves from a weekend exercise to a routine handoff. Discrepancy rates of 25–30% on invoice line items — typical before deployment — contract sharply within the first billing cycles as contractors learn what the gate data will catch.",
      },
    ],

    faq: [
      {
        question: "What exactly gets reconciled?",
        answer:
          "Contractor invoices against gate-verified headcount, hours, and approved OT — line by line — plus statutory challans against computed PF/ESI/LWF deductions.",
      },
      {
        question: "When are discrepancies caught?",
        answer:
          "Before payment. Flags carry the underlying gate evidence, so disputes resolve on records rather than arguments.",
      },
      {
        question: "How large are typical discrepancies?",
        answer:
          "Industry experience puts contractor invoice discrepancy at 25–30% of line items; deployments typically recover several percent of total contractor spend in the first cycles.",
      },
      {
        question: "Does this replace our AP process?",
        answer:
          "No — it feeds it. Verified invoices flow to your existing AP/ERP with the reconciliation evidence attached.",
      },
    ],

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
      {
        title: "Challan Upload ",
        description: "Contractors upload PF and ESI challans, ECR files, and supporting records."
      },
      {
        title: "Data Validation",
        description: "System validates employee-wise contributions against statutory records."
      },
      {
        title: "Reconciliation",
        description: "Contributions are matched with attendance, wages, and contractor submissions."
      },
      {
        title: "Exception Resolution",
        description: "Variances are highlighted and assigned for corrective action."
      },
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

  {
    slug: "gate-compliance",
    badge: "Gate Compliance",
    title: "Gate Pass Management System for Industrial Sites",
    description:
      "InOps gate pass management system enforces compliance rules at the point of entry — verifying contractor licences, Form V coverage, and headcount limits before a worker crosses the gate, then writing every event to the statutory compliance record in real time.",
    seoTitle: "Gate Pass Management System | Gate Compliance & Access Control — InOps CLMS",
    seoDescription:
      "Gate pass management system for industrial sites: contractor licence verification, CLRA headcount enforcement, biometric entry control, and real-time statutory record updates — at every gate, every shift.",
    seoKeywords: [
      "gate pass management system",
      "factory gate compliance software",
      "contractor gate access control India",
      "industrial gate pass software",
      "CLRA gate enforcement",
    ],

    contentSections: [
      {
        h2: "Statutory and CLRA rules enforced at the gate",
        body: 'The gate is where compliance obligations are created — not the register. InOps evaluates CLRA licence validity, Form V headcount limits, and 9-day continuous attendance status before each worker enters, using the same engine that powers our <a href="/contract-labour-management/modules/compliance-report" class="text-blue-600 underline">CLRA compliance software</a>. A gate event without a compliance check is an unverified record.',
      },
      {
        h2: "How does a gate pass management system work?",
        body: "InOps issues digital gate passes tied to a worker's biometric identity, contractor licence, and site assignment. Each pass carries an expiry, a permitted zone, and a shift window. At the gate, the biometric terminal verifies the worker's identity against the pass — not just a badge — before entry is granted. Passes that are expired, outside permitted hours, or for an unlicensed contractor are rejected automatically.",
      },
      {
        h2: "Gate data as the source of compliance records",
        body: "Every gate event — entry, exit, zone change, rejection — is written to the CLMS compliance record in real time. This means Form XIII register entries, headcount totals, and attendance logs are current to the last gate punch. There is no manual transfer between the gate log and the statutory register.",
      },
    ],

    metrics: [
      "Reduced Unauthorised Entry",
      "Real-Time Compliance Records",
      "Faster Audit Response",
    ],

    challenges: [
      "Unlicensed contractors entering site",
      "Headcount caps exceeded per establishment",
      "Gate logs not linked to statutory registers",
      "Manual gate pass issuance and tracking",
      "No real-time rejection audit trail",
    ],

    workflow: [
      {
        title: "Pass Issuance",
        description: "Digital gate passes are generated from contractor onboarding data — licence, site, permitted zone, and shift window pre-loaded.",
      },
      {
        title: "Biometric Verification at Gate",
        description: "Worker identity is verified against the pass via face recognition or fingerprint terminal before entry is granted.",
      },
      {
        title: "Compliance Check",
        description: "Licence validity, Form V headcount limits, and 9-day attendance status are evaluated in real time before the gate opens.",
      },
      {
        title: "Record Update",
        description: "Each gate event writes to the statutory compliance record, attendance log, and headcount dashboard simultaneously.",
      },
    ],

    features: [
      "Digital Gate Pass Issuance",
      "Biometric Entry Verification",
      "CLRA Headcount Enforcement",
      "Licence Validity Checks",
      "Zone & Shift Access Control",
      "Real-Time Rejection Audit Trail",
    ],

    roi: [
      {
        title: "Reduced Unauthorised Entry",
        description: "Licence checks and headcount caps enforced at the terminal eliminate manual oversight gaps at busy factory gates.",
      },
      {
        title: "Live Statutory Records",
        description: "Gate events write directly to compliance registers — no manual transcription, no month-end reconstruction.",
      },
      {
        title: "Faster Audit Response",
        description: "Gate pass history, entry logs, and rejection records are searchable by worker, contractor, date, or site in under a minute.",
      },
    ],

    aiInsights: [
      "AI flags unusual entry patterns — off-shift access, repeated rejections, and headcount anomalies — before they become compliance events.",
      "Smart alerts surface contractors whose licences will expire before the next pay cycle.",
      "Predictive headcount analysis warns when a contractor is approaching their permitted deployment limit per establishment.",
    ],

    benefits: [
      "Security teams gain a biometric-verified gate log that doubles as a statutory compliance record.",
      "Compliance officers see real-time headcount per contractor per establishment — with alerts before limits are breached.",
      "HR and plant managers get a single audit trail from gate entry to payroll, with no manual linking required.",
    ],

    cta: "Make every gate event a compliance record.",

    dashboard: {
      analytics: [
        { label: "Mon", value: 74 },
        { label: "Tue", value: 58 },
        { label: "Wed", value: 82 },
        { label: "Thu", value: 66 },
        { label: "Fri", value: 90 },
        { label: "Sat", value: 48 },
      ],
      kpis: [
        { label: "Active Gate Passes", value: "3,841" },
        { label: "Entry Rejections Today", value: "12" },
      ],
      feed: [
        { label: "Gate Pass Status", status: "Live", tone: "ok" },
        { label: "Licence Checks", status: "Active", tone: "ok" },
        { label: "Headcount Cap", status: "Near Limit", tone: "warn" },
      ],
    },
  },

  {
    slug: "onboarding-offboarding",
    badge: "Onboarding & Offboarding",
    title: "Contractor Onboarding & Offboarding Lifecycle Management",
    description:
      "InOps digitises the full contractor lifecycle — from document collection, BGV, and induction on day one, to structured exits with asset recovery, final settlement, and statutory closure — so every entry and departure is compliant, traceable, and audit-ready.",
    seoTitle: "Contractor Onboarding & Offboarding Management | InOps CLMS",
    seoDescription:
      "End-to-end contractor onboarding and offboarding software: digital intake, background verification, induction, gate-pass issuance, structured exit, asset recovery, and final statutory settlement — all in one system.",
    seoKeywords: [
      "contractor onboarding offboarding software",
      "worker lifecycle management India",
      "digital contractor exit process",
      "industrial worker onboarding system",
      "contractor final settlement software",
    ],

    contentSections: [
      {
        h2: "From offer to gate pass in hours",
        body: "Worker details, Aadhaar, PAN, bank account, and supporting documents are captured digitally — in the worker's language — and processed in parallel. Background verification, medical fitness, and induction can run concurrently so onboarding that previously took days compresses to hours, even for bulk shutdown intake of hundreds of workers.",
      },
      {
        h2: "Gate access locked until every clearance is complete",
        body: 'Onboarding status is enforced at the gate: a worker whose BGV is pending, medical check is incomplete, or induction is unfinished is auto-blocked at entry. There is no manual follow-up loop — the gate itself holds the compliance line. This connects directly with our <a href="/contract-labour-management/modules/gate-compliance" class="text-blue-600 underline">gate compliance and auto-blocking module</a>.',
      },
      {
        h2: "Structured exits that close the loop",
        body: "Offboarding is as governed as onboarding: gate passes are revoked on the last working day, PPE and asset returns are tracked digitally, outstanding dues are flagged before final settlement is processed, and statutory closure — PF, ESI, gratuity where applicable — is computed from the same attendance and wage records used during employment. No ad-hoc spreadsheet at exit.",
      },
      {
        h2: "Full audit trail from day one to last day",
        body: 'Every onboarding action — what was verified, when, by whom, with what result — and every offboarding step — who approved the exit, which assets were returned, when the gate pass was revoked — is stored in the per-worker record. Auditors and compliance officers see a continuous thread, not two separate filing systems. The record feeds both <a href="/contract-labour-management/modules/compliance-report" class="text-blue-600 underline">CLRA registers</a> and contractor payroll settlement automatically.',
      },
    ],

    faq: [
      {
        question: "What does digital onboarding include for contract workers?",
        answer:
          "Identity capture with Aadhaar linkage, PAN and UAN verification, background verification, medical fitness recording, induction scheduling, document collection, consent capture in the worker's language, and automatic assignment to contractor, site, shift, and cost centre — fully digital and batch-capable for surge intake.",
      },
      {
        question: "Can a worker be blocked at the gate until onboarding is complete?",
        answer:
          "Yes — with gate compliance enabled, any incomplete clearance (BGV pending, medical outstanding, induction not done) is a blocking rule. No manual chase required; the gate enforces it automatically.",
      },
      {
        question: "How is offboarding handled for contract workers?",
        answer:
          "Gate passes are revoked on the designated last day, asset and PPE returns are tracked digitally, outstanding advances or dues are flagged, and final settlement — including PF, ESI, and statutory deductions — is computed from the verified attendance and wage record. Every step is logged in the worker's audit trail.",
      },
      {
        question: "Does the system handle bulk intake for shutdowns?",
        answer:
          "Yes — bulk onboarding is built for shutdown and ramp volumes. Hundreds of workers can be processed in parallel with digital checks running concurrently, significantly reducing deployment lead time versus sequential manual intake.",
      },
      {
        question: "Is offboarding data linked to compliance registers?",
        answer:
          "Yes — departure events update Form XIII in real time, gate pass revocation is logged, and the final wage and statutory settlement feeds CLRA records. There is no separate offboarding filing step.",
      },
    ],

    metrics: [
      "80% Faster Onboarding",
      "Zero Compliance Gaps at Exit",
      "Full Lifecycle Auditability",
    ],

    challenges: [
      "Paper-based intake delays deployment",
      "BGV and medical clearance bottlenecks",
      "Gate access issued before compliance is complete",
      "Ad-hoc exit process misses assets and dues",
      "No single audit trail from day one to last day",
    ],

    workflow: [
      {
        title: "Digital Registration",
        description:
          "Worker details, Aadhaar, PAN, bank account, and documents are captured digitally via mobile or web — in batch for bulk intake.",
      },
      {
        title: "Parallel Verification",
        description:
          "BGV, medical fitness, and induction run concurrently. Gate access is blocked until every clearance is green.",
      },
      {
        title: "Activation & Gate Pass",
        description:
          "Cleared workers are assigned to contractor, site, shift, and cost centre. A digital gate pass is issued and biometric identity is enrolled.",
      },
      {
        title: "Structured Exit",
        description:
          "On separation, gate pass is revoked, assets are recovered, dues are flagged, and final settlement with statutory closure is computed and logged.",
      },
    ],

    features: [
      "Digital Intake & Document Collection",
      "Aadhaar, PAN & UAN Verification",
      "Background Verification Integration",
      "Medical Fitness & Induction Tracking",
      "Gate-Pass Issuance & Revocation",
      "Structured Exit & Final Settlement",
    ],

    roi: [
      {
        title: "80% Faster Onboarding",
        description:
          "Parallel digital workflows eliminate sequential paper chasing and reduce deployment lead time from days to hours.",
      },
      {
        title: "Zero Compliance Gaps at Exit",
        description:
          "Structured offboarding ensures gate passes are revoked, assets recovered, and statutory closure completed — every time.",
      },
      {
        title: "Full Lifecycle Auditability",
        description:
          "A continuous per-worker record from first document to last settlement satisfies labour inspector and internal audit requirements without reconstruction.",
      },
    ],

    aiInsights: [
      "AI flags stalled onboarding steps, predicts BGV bottlenecks, and surfaces workers approaching exit without a completed offboarding checklist.",
      "Smart intake adapts the document checklist by worker category, contractor, plant, and applicable state rules.",
      "Automated alerts notify HR before gate passes expire and before statutory filing deadlines following a worker's separation.",
    ],

    benefits: [
      "HR teams deploy verified workers faster with digital parallel workflows replacing paper-based sequential intake.",
      "Compliance officers maintain complete, real-time onboarding and offboarding records for every worker across every site.",
      "Finance and statutory teams receive computed final settlements and closure data without manual handoff from HR.",
    ],

    cta: "Make every entry and exit compliant, traceable, and audit-ready.",

    dashboard: {
      analytics: [
        { label: "Mon", value: 56 },
        { label: "Tue", value: 72 },
        { label: "Wed", value: 88 },
        { label: "Thu", value: 64 },
        { label: "Fri", value: 80 },
        { label: "Sat", value: 48 },
      ],
      kpis: [
        { label: "Active Onboardings", value: "214" },
        { label: "Pending Exits", value: "18" },
      ],
      feed: [
        { label: "BGV Clearances", status: "In Progress", tone: "warn" },
        { label: "Gate Pass Issuance", status: "Live", tone: "ok" },
        { label: "Exit Settlements", status: "3 Pending", tone: "warn" },
      ],
    },
  },
];