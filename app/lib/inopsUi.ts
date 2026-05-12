/**
 * Canonical UI classes — styles live in `app/globals.css` under `.inops-ui-*`.
 * Use these for headings, body, and buttons so every page stays visually aligned.
 */
export const inopsUi = {
  eyebrow: "inops-ui-eyebrow",
  eyebrowBrand: "inops-ui-eyebrow inops-ui-eyebrow--brand",
  /** Intro / hero subtitle (muted body) */
  lead: "inops-ui-lead",
  bodyMuted: "inops-ui-body-muted",
  /** Section h2–h4 accent colour */
  sectionHeading: "inops-ui-section-heading",
  /** Image banner: small label above title */
  heroKicker: "inops-ui-hero-kicker",
  /** Image banner: line under h1 */
  heroBannerDesc: "inops-ui-hero-banner-desc",
  btn: "inops-ui-btn",
  btnPrimary: "inops-ui-btn inops-ui-btn--primary",
  btnSecondary: "inops-ui-btn inops-ui-btn--secondary",
  /** Dark section / hero: translucent outline */
  btnGhostDark: "inops-ui-btn inops-ui-btn--ghost-dark",
  /** Gradient / blue closing CTA card */
  btnOnDarkPrimary: "inops-ui-btn inops-ui-btn--on-dark-primary",
  btnOnDarkSecondary: "inops-ui-btn inops-ui-btn--on-dark-secondary",
  btnFull: "inops-ui-btn inops-ui-btn--primary inops-ui-btn--full",
} as const;
