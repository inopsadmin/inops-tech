/**
 * Solutions mega-menu: 4 columns per row. Accent = first column (light blue).
 */

export type SolutionsMegaCell =
  | { type: "empty" }
  | {
      type: "tile";
      title: string;
      description: string;
      href: string;
      accent?: boolean;
    };

export const solutionsMegaRows: SolutionsMegaCell[][] = [
  [
    {
      type: "tile",
      accent: true,
      title: "Workforce Governance Solution",
      description: "End-to-end platform for workforce governance, time, and attendance.",
      href: "/clms",
    },
    {
      type: "tile",
      title: "Contract Employee Governance System",
      description: "Payroll and compliance governance for contractual employees.",
      href: "/clms",
    },
    {
      type: "tile",
      title: "HR Information System",
      description: "Central employee records and labour workflows for your organisation.",
      href: "/hris",
    },
    {
      type: "tile",
      title: "Canteen & Visitor Management",
      description: "Canteen operations and visitor flow across your premises.",
      href: "/canteen-and-visitor",
    },
  ],
  [
    {
      type: "tile",
      accent: true,
      title: "Identity & Face Solution",
      description: "Mobile and hardware identity for attendance, access, and verification.",
      href: "/mobile-app",
    },
    {
      type: "tile",
      title: "Mobile App",
      description: "Employee self-service and identity on the go.",
      href: "/mobile-app",
    },
    {
      type: "tile",
      title: "CCTV Attendance",
      description: "Attendance backed by CCTV and vision workflows.",
      href: "/cctv",
    },
    {
      type: "tile",
      title: "Face Reader",
      description: "Biometric face recognition for secure access and time logs.",
      href: "/face",
    },
  ],
  // [
  //   {
  //     type: "tile",
  //     accent: true,
  //     title: "Products",
  //     description: "Hardware and accessories for access, attendance, and perimeter control.",
  //     href: "/face",
  //   },
  //   {
  //     type: "tile",
  //     title: "Biometric Access Control",
  //     description: "Readers, controllers, and integrations for secure entry and identity.",
  //     href: "/face",
  //   },
  //   {
  //     type: "tile",
  //     title: "Turnstiles",
  //     description: "Speed gates and turnstiles for orderly, high-throughput access.",
  //     href: "/turnstiles",
  //   },
  //   {
  //     type: "tile",
  //     title: "Accessories",
  //     description: "Mounts, cards, cables, and add-ons to complete your deployment.",
  //     href: "/accessories",
  //   },
  // ],
  [
    {
      type: "tile",
      accent: true,
      title: "Enterprise Solution",
      description: "Enterprise-wide visibility for assets and operations.",
      href: "/enterprise-solution",
    },
    {
      type: "tile",
      title: "Asset Management",
      description: "End-to-end asset lifecycle tracking with intelligent maintenance scheduling.",
      href: "/enterprise-solution#asset-management",
    },
    {
      type: "tile",
      title: "Route Optimization",
      description: "AI-powered route planning with live fleet tracking to reduce fuel and transit time.",
      href: "/enterprise-solution#delivery-management",
    },
    {
      type: "tile",
      title: "Warehouse Management",
      description: "Advanced inventory control with smart slotting and real-time stock visibility.",
      href: "/enterprise-solution#warehouse-management",
    },
  ],
  [
    {
      type: "tile",
      accent: true,
      title: "EWA (Earned Wage Access)",
      description: "Early access to earned wages when employees need financial flexibility.",
      href: "/ewa",
    },
    // {
    //   type: "tile",
    //   title: "Biometric Access Control",
    //   description: "Readers, controllers, and integrations for secure entry and identity.",
    //   href: "/face",
    // },
    // {
    //   type: "tile",
    //   title: "Turnstiles",
    //   description: "Speed gates and turnstiles for orderly, high-throughput access.",
    //   href: "/turnstiles",
    // },
    // {
    //   type: "tile",
    //   title: "Accessories",
    //   description: "Mounts, cards, cables, and add-ons to complete your deployment.",
    //   href: "/accessories",
    // },

  ],
];
