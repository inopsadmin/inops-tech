"use client";

import { useState, FormEvent, useRef, useEffect } from "react";

type Props = {
  brochureTitle: string;
  pdfSlug: string;
  onClose: () => void;
};

type Status = "idle" | "submitting" | "success";

export default function BrochureGateModal({ brochureTitle, pdfSlug, onClose }: Props) {
  const [status, setStatus] = useState<Status>("idle");
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [onClose]);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value.trim();
    const email = (form.elements.namedItem("email") as HTMLInputElement).value.trim();

    try {
      await fetch("/api/brochure-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, brochureTitle }),
      });
    } catch {
      // Non-blocking — lead capture failure should not block the user
    }

    const gtag = (window as Window & { gtag?: (...args: unknown[]) => void }).gtag;
    gtag?.("event", "generate_lead", {
      lead_type: "brochure",
      form_location: "brochures",
      brochure_title: brochureTitle,
      lead_name: name,
      lead_email: email,
    });

    setStatus("success");

    // Attempt download — succeeds once PDFs are added to public/brochures/files/
    const link = document.createElement("a");
    link.href = `/brochures/files/${pdfSlug}.pdf`;
    link.download = `${pdfSlug}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 px-4 backdrop-blur-sm"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      role="dialog"
      aria-modal="true"
      aria-label={`Download ${brochureTitle}`}
    >
      <div
        ref={dialogRef}
        className="relative w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl ring-1 ring-slate-900/[0.06]"
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-600"
          aria-label="Close"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {status === "success" ? (
          <div className="flex flex-col items-center py-6 text-center">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-green-50 border border-green-200">
              <svg className="h-7 w-7 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M20 6L9 17l-5-5" />
              </svg>
            </div>
            <h2 className="mb-1 text-lg font-bold text-slate-900">Thanks — we'll be in touch</h2>
            <p className="mb-5 text-sm text-slate-500">Your brochure will download automatically if available, or our team will email it to you shortly.</p>
            <button onClick={onClose} className="text-sm font-semibold text-[var(--inops-blue)] hover:underline">
              Close
            </button>
          </div>
        ) : (
          <>
            <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-[var(--inops-blue)]">Free download</p>
            <h2 className="mb-1 text-xl font-bold text-slate-900 leading-snug">{brochureTitle}</h2>
            <p className="mb-6 text-sm text-slate-500">Enter your details to download the PDF.</p>

            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[var(--inops-blue)] focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-500/10"
              />
              <input
                type="email"
                name="email"
                placeholder="Work Email"
                required
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[var(--inops-blue)] focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-500/10"
              />

              <button
                type="submit"
                disabled={status === "submitting"}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-[var(--inops-navy)] px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-[var(--inops-blue)] disabled:opacity-60"
              >
                {status === "submitting" ? (
                  <>
                    <svg className="h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8h4z" />
                    </svg>
                    Sending…
                  </>
                ) : (
                  <>
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4-4 4m0 0-4-4m4 4V4" />
                    </svg>
                    Download PDF
                  </>
                )}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
