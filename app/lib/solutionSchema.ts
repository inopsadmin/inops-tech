/** SoftwareApplication JSON-LD copy per solution route. */
export const solutionSchemaByPath: Record<
  string,
  { name: string; description: string }
> = {
  "/early-wage-access": {
    name: "InOps Earned Wage Access (EWA)",
    description:
      "Payroll-connected earned wage access with real-time attendance validation and compliant withdrawals for industrial workforces.",
  },
  "/contract-labour-management": {
    name: "InOps CLMS — Contract Labour Management System",
    description:
      "Contract Labour Management Software (CLMS) for Indian manufacturers: CLRA compliance, contractor onboarding, biometric attendance, PF/ESI statutory deductions, and payroll automation.",
  },
  "/hris": {
    name: "InOps HRIS — HR Information System for Contract Labour",
    description:
      "Contract labour management with biometric attendance, PF/ESI workflows, gate compliance, and payroll-ready data for Indian manufacturers.",
  },
  "/cctv-attendance": {
    name: "InOps Camera & AI Attendance for Contract Workers",
    description:
      "Camera-based and AI attendance for manufacturing contract workers — face recognition, CCTV integration, proxy prevention, OT verification, and CLRA compliance linked to the InOps CLMS platform.",
  },
  "/canteen-and-visitor": {
    name: "InOps Canteen & Visitor Management",
    description:
      "Meal issuance, visitor desk, and subsidy controls integrated with identity and workforce systems.",
  },
  "/mobile-app-attendance": {
    name: "InOps Mobile Workforce App",
    description:
      "Mobile self-service for attendance, leave, payslips, and supervisor workflows with GPS validation.",
  },
  "/enterprise-solution": {
    name: "InOps Enterprise Operations Platform",
    description:
      "Connected assets, logistics, and warehouse operations with real-time visibility and automation.",
  },
  "/visitor-management": {
    name: "InOps Visitor Management",
    description:
      "Visitor pre-registration, lobby check-in, and campus access aligned with contractor and employee identity.",
  },
  "/fixed-asset-management": {
    name: "InOps Fixed Asset Management",
    description:
      "Track, audit, and optimise fixed assets across sites with integrated workforce and access controls.",
  },
  "/delivery-management": {
    name: "InOps Delivery Management System",
    description:
      "Last-mile and factory dispatch tracking: route management, GPS tracking, proof of delivery, and delivery analytics for Indian manufacturing and logistics operations.",
  },
  "/order-management": {
    name: "InOps Order Management System",
    description:
      "End-to-end order lifecycle tracking from placement to fulfillment, integrated with inventory and dispatch workflows for Indian manufacturing operations.",
  },
  "/warehouse-management": {
    name: "InOps Warehouse Management System",
    description:
      "Barcode and RFID-powered inventory tracking, storage optimization, and stock movement reporting for Indian factory warehouses and stores.",
  },
};
