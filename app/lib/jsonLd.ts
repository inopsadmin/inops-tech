/**
 * Safe JSON-LD serialization for inline `<script type="application/ld+json">` tags.
 */
export function serializeJsonLd(data: Record<string, unknown> | Record<string, unknown>[]): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export function jsonLdScriptProps(data: Record<string, unknown> | Record<string, unknown>[]) {
  return {
    type: "application/ld+json" as const,
    dangerouslySetInnerHTML: { __html: serializeJsonLd(data) },
  };
}
