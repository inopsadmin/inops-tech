"use client";

import SolutionPageClosingCta from "@/app/components/SolutionPageClosingCta";

export default function CollaborateCtaBand() {
  return (
    <SolutionPageClosingCta
      embedded
      headingId="collaborate-cta-heading"
      heading="Ready to collaborate or learn more?"
      description={
        <>
          Reach out to us and let&apos;s create impactful solutions together.
        </>
      }
      primaryLabel="Book a Demo"
      secondaryLabel="Get a Call Back"
      primaryHref="/contact"
      secondaryHref="tel:+918088602602"
    />
  );
}
