/**
 * Solutions mega-menu: 4 columns per row. Accent = first column (light blue).
 */

export type SolutionsMegaCell =
  | { type: "empty" }
  | {
      type: "tile";
      title: string;
      subtitle?: string;
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
      title: "Iddion RegX- External",
      subtitle: "Contract Labour Management Solution",
      description: "Contract workforce governance with compliance, attendance & payroll.",
      href: "/clms",
    },
    {
      type: "tile",
      title: "Iddion RegX- Core",
      subtitle: "Human Resource Information System",
      description: "Central employee records and labour workflows for your organisation",
      href: "/hris",
    },
    {
      type: "tile",
      title: "Vizion",
      subtitle: "Canteen and visitor managemnt",
      description: "Canteen operations and visitor flow across your premises",
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
      title: "Warehouse Management",
      description: "Advanced inventory control with barcode scanning, real-time stock visibility, and intelligent warehouse operations.",
      href: "/enterprise-solution#asset-management",
    },
    {
      type: "tile",
      title: "Delivery Management",
      description: "Optimize deliveries with route planning, fleet tracking, proof of delivery, and real-time shipment visibility.",
      href: "/enterprise-solution#delivery-management",
    },
    {
      type: "tile",
      title: "Order Management",
      description: "Automate order processing, fulfillment, tracking, and returns with complete end-to-end order visibility.",
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
