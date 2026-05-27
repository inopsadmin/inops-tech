/** Product JSON-LD copy for hardware routes. */
export const productSchemaByPath: Record<
  string,
  { name: string; description: string; category?: string }
> = {
  "/product/biometric-access-control": {
    name: "InOps Biometric Access Control",
    description:
      "Enterprise face and fingerprint readers, controllers, and attendance integrations for Indian industrial sites.",
    category: "Biometric Access Control Hardware",
  },
  "/product/turnstiles": {
    name: "InOps Turnstiles & Speed Gates",
    description:
      "High-throughput turnstiles and speed gates integrated with biometric identity and workforce attendance.",
    category: "Physical Access Control",
  },
  "/product/accessories": {
    name: "InOps Access Control Accessories",
    description:
      "Cards, mounts, cables, and deployment accessories for biometric readers and perimeter control.",
    category: "Access Control Accessories",
  },
};
