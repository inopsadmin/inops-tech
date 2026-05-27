import { SITE_NAME } from "@/app/lib/site";

export type BreadcrumbItem = {
  name: string;
  path: string;
};

const HOME: BreadcrumbItem = { name: SITE_NAME, path: "/" };

/** Human-readable labels for breadcrumb trails (visible + JSON-LD). */
const LABEL_BY_PATH: Record<string, string> = {
  "/about": "About",
  "/contact": "Contact",
  "/blog": "Blog",
  "/brochures": "Brochures",
  "/product/biometric-access-control": "Biometric Access Control",
  "/product/turnstiles": "Turnstiles",
  "/product/accessories": "Accessories",
  "/solutions/labourmanagement": "Contract Labour Management",
  "/solutions/ewa": "Earned Wage Access (EWA)",
  "/solutions/payroll-solutions": "Payroll & Workforce Governance",
  "/solutions/time-and-attendance": "Time & Attendance",
  "/solutions/canteen-management": "Canteen & Visitor Management",
  "/solutions/mobile-app": "Mobile Workforce App",
  "/solutions/enterprise-solution": "Enterprise Solution",
  "/solutions/visitor-management": "Visitor Management",
  "/solutions/fixed-asset-management": "Fixed Asset Management",
};

export function getBreadcrumbsForPath(pathname: string): BreadcrumbItem[] {
  const normalized = pathname.startsWith("/") ? pathname : `/${pathname}`;
  if (normalized === "/") return [HOME];

  const blogMatch = /^\/blog\/([^/]+)$/.exec(normalized);
  if (blogMatch) {
    const slug = blogMatch[1];
    const title = slug
      .split("-")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ");
    return [HOME, { name: "Blog", path: "/blog" }, { name: title, path: normalized }];
  }

  const label = LABEL_BY_PATH[normalized];
  if (!label) return [HOME];

  if (normalized.startsWith("/solutions/")) {
    return [HOME, { name: "Solutions", path: "/#solutions" }, { name: label, path: normalized }];
  }
  if (normalized.startsWith("/product/")) {
    return [HOME, { name: "Products", path: "/product/biometric-access-control" }, { name: label, path: normalized }];
  }

  return [HOME, { name: label, path: normalized }];
}
