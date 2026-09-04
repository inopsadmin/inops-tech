/**
 * /services/biometric-amc
 *
 * Organic keyword volume: zero across all AMC variants tested.
 * Role: paid search landing page (eSSL / ZKTeco / Realtime brand terms + AMC/service/repair
 * modifiers, takeover angle) and sales collateral.
 * Do NOT optimise for organic search. noindex is intentional.
 */

import { routeMetadata } from "@/app/lib/seoMetadata";
import type { Metadata } from "next";

const PAGE_TITLE = "Biometric AMC & Repair Services India | ZKTeco, eSSL & Multi-Brand Device Maintenance — InOps";
const PAGE_DESCRIPTION =
  "SLA-backed AMC and repair for eSSL, ZKTeco, and Realtime biometric devices — face terminals, fingerprint readers, and RFID access hardware. Multi-site, single-vendor service across India.";

export const metadata: Metadata = {
  ...routeMetadata({
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    path: "/services/biometric-amc",
  }),
  // No organic volume exists for any AMC keyword variant — noindex intentional.
  // Page serves paid search (brand + AMC/service modifiers) and sales collateral.
  robots: { index: false, follow: false },
};

export default function BiometricAmcLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
