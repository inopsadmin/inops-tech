/** Product JSON-LD copy for hardware routes. */
export const productSchemaByPath: Record<
  string,
  { name: string; description: string; category?: string }
> = {
  "/face-recognition-attendance": {
    name: "InOps Face Recognition Attendance System",
    description:
      "Industrial face recognition attendance terminals, fingerprint readers, and biometric attendance machines for Indian factory gates.",
    category: "Biometric Attendance Hardware",
  },
  "/turnstiles-access": {
    name: "InOps Turnstiles & Speed Gates",
    description:
      "High-throughput turnstiles and speed gates integrated with biometric identity and workforce attendance.",
    category: "Physical Access Control",
  },
  "/accessories": {
    name: "InOps Access Control Accessories",
    description:
      "Cards, mounts, cables, and deployment accessories for biometric readers and perimeter control.",
    category: "Access Control Accessories",
  },
};
