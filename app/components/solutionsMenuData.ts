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
      href: "/solutions/time-and-attendance",
    },
    {
      type: "tile",
      title: "Contract Employee Governance System",
      description: "Payroll and compliance governance for contractual employees.",
      href: "/solutions/payroll-solutions",
    },
    {
      type: "tile",
      title: "HR Information System",
      description: "Central employee records and labour workflows for your organisation.",
      href: "/solutions/labourmanagement",
    },
    {
      type: "tile",
      title: "Canteen & Visitor Management",
      description: "Canteen operations and visitor flow across your premises.",
      href: "/solutions/canteen-management",
    },
  ],
  [
    {
      type: "tile",
      accent: true,
      title: "Identity & Face Solution",
      description: "Mobile and hardware identity for attendance, access, and verification.",
      href: "/solutions/time-and-attendance",
    },
    {
      type: "tile",
      title: "Mobile App",
      description: "Employee self-service and identity on the go.",
      href: "/solutions/mobile-app",
    },
    {
      type: "tile",
      title: "CCTV Attendance",
      description: "Attendance backed by CCTV and vision workflows.",
      href: "/solutions/time-and-attendance",
    },
    {
      type: "tile",
      title: "Face Reader",
      description: "Biometric face recognition for secure access and time logs.",
      href: "/product/biometric-access-control",
    },
  ],
  // [
  //   {
  //     type: "tile",
  //     accent: true,
  //     title: "Products",
  //     description: "Hardware and accessories for access, attendance, and perimeter control.",
  //     href: "/product/biometric-access-control",
  //   },
  //   {
  //     type: "tile",
  //     title: "Biometric Access Control",
  //     description: "Readers, controllers, and integrations for secure entry and identity.",
  //     href: "/product/biometric-access-control",
  //   },
  //   {
  //     type: "tile",
  //     title: "Turnstiles",
  //     description: "Speed gates and turnstiles for orderly, high-throughput access.",
  //     href: "/product/turnstiles",
  //   },
  //   {
  //     type: "tile",
  //     title: "Accessories",
  //     description: "Mounts, cards, cables, and add-ons to complete your deployment.",
  //     href: "/product/accessories",
  //   },
  // ],
  [
    {
      type: "tile",
      accent: true,
      title: "Enterprise Solution",
      description: "Enterprise-wide visibility for assets and operations.",
      href: "/solutions/enterprise-solution",
    },
    // {
    //   type: "tile",
    //   title: "Biometric Access Control",
    //   description: "Readers, controllers, and integrations for secure entry and identity.",
    //   href: "/product/biometric-access-control",
    // },
    // {
    //   type: "tile",
    //   title: "Turnstiles",
    //   description: "Speed gates and turnstiles for orderly, high-throughput access.",
    //   href: "/product/turnstiles",
    // },
    // {
    //   type: "tile",
    //   title: "Accessories",
    //   description: "Mounts, cards, cables, and add-ons to complete your deployment.",
    //   href: "/product/accessories",
    // },
  ],
  [
    {
      type: "tile",
      accent: true,
      title: "EWA (Earned Wage Access)",
      description: "Early access to earned wages when employees need financial flexibility.",
      href: "/solutions/ewa",
    },
    // {
    //   type: "tile",
    //   title: "Biometric Access Control",
    //   description: "Readers, controllers, and integrations for secure entry and identity.",
    //   href: "/product/biometric-access-control",
    // },
    // {
    //   type: "tile",
    //   title: "Turnstiles",
    //   description: "Speed gates and turnstiles for orderly, high-throughput access.",
    //   href: "/product/turnstiles",
    // },
    // {
    //   type: "tile",
    //   title: "Accessories",
    //   description: "Mounts, cards, cables, and add-ons to complete your deployment.",
    //   href: "/product/accessories",
    // },

  ],
];
