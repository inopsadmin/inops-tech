"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { inopsUi } from "@/app/lib/inopsUi";

const smoothEase = [0.33, 1, 0.68, 1] as const;

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value.trim(),
      email: (form.elements.namedItem("email") as HTMLInputElement).value.trim(),
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value.trim(),
      subject: (form.elements.namedItem("subject") as HTMLSelectElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value.trim(),
      source: "contact-page",
    };

    if (!data.name || !data.email || !data.message) {
      setStatus("error");
      setErrorMsg("Name, email and message are required.");
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const json = await res.json().catch(() => ({}));
        throw new Error(json.error ?? "Something went wrong. Please try again.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  /* ── Success state ── */
  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-green-50 border border-green-200">
          <svg className="h-8 w-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M20 6L9 17l-5-5" />
          </svg>
        </div>
        <h3 className="mb-2 text-[20px] font-bold text-slate-900">Message Sent!</h3>
        <p className="mb-6 text-[14px] leading-relaxed text-slate-500 max-w-xs">
          Thanks for reaching out. We'll get back to you within one business day.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="text-[13.5px] font-semibold text-[var(--inops-blue)] hover:underline"
        >
          Send another message →
        </button>
      </div>
    );
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit} noValidate>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {/* Name */}
        <label className="relative block">
          <span className="sr-only">Your Name</span>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full rounded-2xl border border-slate-200 bg-white/90 py-3.5 pl-4 pr-11 text-slate-900 shadow-sm placeholder:text-slate-400 transition-[border-color,box-shadow,background-color] duration-200 focus:border-[var(--inops-blue)] focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-500/10"
          />
          <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[var(--inops-blue)]">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </span>
        </label>

        {/* Email */}
        <label className="relative block">
          <span className="sr-only">Email Address</span>
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            className="w-full rounded-2xl border border-slate-200 bg-white/90 py-3.5 pl-4 pr-11 text-slate-900 shadow-sm placeholder:text-slate-400 transition-[border-color,box-shadow,background-color] duration-200 focus:border-[var(--inops-blue)] focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-500/10"
          />
          <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[var(--inops-blue)]">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </span>
        </label>

        {/* Subject */}
        <label className="relative block">
          <span className="sr-only">Subject</span>
          <select
            name="subject"
            className="w-full appearance-none rounded-2xl border border-slate-200 bg-white/90 py-3.5 pl-4 pr-11 text-slate-700 shadow-sm transition-[border-color,box-shadow,background-color] duration-200 focus:border-[var(--inops-blue)] focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-500/10"
          >
            <option value="">Select Subject</option>
            <option value="General Inquiry">General Inquiry</option>
            <option value="Support">Support</option>
            <option value="Sales">Sales</option>
            <option value="Partnership">Partnership</option>
          </select>
          <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[var(--inops-blue)]">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </span>
        </label>

        {/* Phone */}
        <label className="relative block">
          <span className="sr-only">Phone Number</span>
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            className="w-full rounded-2xl border border-slate-200 bg-white/90 py-3.5 pl-4 pr-11 text-slate-900 shadow-sm placeholder:text-slate-400 transition-[border-color,box-shadow,background-color] duration-200 focus:border-[var(--inops-blue)] focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-500/10"
          />
          <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[var(--inops-blue)]">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </span>
        </label>
      </div>

      {/* Message */}
      <label className="relative block">
        <span className="sr-only">Your Message</span>
        <textarea
          name="message"
          rows={5}
          placeholder="Your Message"
          required
          className="w-full resize-y rounded-2xl border border-slate-200 bg-white/90 py-3.5 pl-4 pr-11 pt-4 text-slate-900 shadow-sm placeholder:text-slate-400 transition-[border-color,box-shadow,background-color] duration-200 focus:border-[var(--inops-blue)] focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-500/10"
        />
        <span className="pointer-events-none absolute right-3 top-4 text-[var(--inops-blue)]">
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </span>
      </label>

      {/* Error banner */}
      {status === "error" && (
        <div className="flex items-center gap-3 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-[13.5px] text-red-700">
          <svg className="h-4 w-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
            <circle cx="12" cy="12" r="10" /><path d="M12 8v4m0 4h.01" strokeLinecap="round" />
          </svg>
          {errorMsg}
        </div>
      )}

      {/* Submit */}
      <div>
        <motion.button
          type="submit"
          disabled={status === "submitting"}
          className={`${inopsUi.btnFull} cursor-pointer shadow-xl shadow-slate-900/10 focus:outline-none focus:ring-4 focus:ring-blue-500/15 disabled:opacity-60 disabled:cursor-not-allowed`}
          whileHover={status !== "submitting" ? { scale: 1.01, transition: { duration: 0.2, ease: smoothEase } } : {}}
          whileTap={status !== "submitting" ? { scale: 0.98 } : {}}
        >
          {status === "submitting" ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8h4z" />
              </svg>
              Sending…
            </span>
          ) : (
            "Send Message"
          )}
        </motion.button>
      </div>
    </form>
  );
}
