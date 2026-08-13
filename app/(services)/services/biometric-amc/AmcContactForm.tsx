"use client";

import React, { useState, ChangeEvent } from "react";

type Fields = {
  fullName: string;
  businessEmail: string;
  phone: string;
  message: string;
};

type Errors = Partial<Record<keyof Fields, string>>;

const INITIAL: Fields = { fullName: "", businessEmail: "", phone: "", message: "" };

function validate(f: Fields): Errors {
  const e: Errors = {};
  if (!f.fullName.trim()) e.fullName = "Full name is required.";
  if (!f.businessEmail.trim()) {
    e.businessEmail = "Business email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.businessEmail)) {
    e.businessEmail = "Enter a valid email address.";
  }
  if (!f.phone.trim()) {
    e.phone = "Phone number is required.";
  } else if (!/^[+]?[\d\s\-().]{7,}$/.test(f.phone)) {
    e.phone = "Enter a valid phone number.";
  }
  if (!f.message.trim()) {
    e.message = "Message is required.";
  } else if (f.message.trim().length < 10) {
    e.message = "Message must be at least 10 characters.";
  }
  return e;
}

export default function AmcContactForm() {
  const [fields, setFields] = useState<Fields>(INITIAL);
  const [errors, setErrors] = useState<Errors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof Fields, boolean>>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    const updated = { ...fields, [name]: value };
    setFields(updated);
    if (touched[name as keyof Fields]) {
      setErrors(validate(updated));
    }
  }

  function handleBlur(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const name = e.target.name as keyof Fields;
    setTouched((t) => ({ ...t, [name]: true }));
    setErrors(validate(fields));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const allTouched = { fullName: true, businessEmail: true, phone: true, message: true };
    setTouched(allTouched);
    const errs = validate(fields);
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setSubmitting(true);

    const text = [
      `👋 *New AMC Enquiry*`,
      ``,
      `*Name:* ${fields.fullName}`,
      `*Email:* ${fields.businessEmail}`,
      `*Phone:* ${fields.phone}`,
      `*Message:* ${fields.message}`,
    ].join("\n");

    const waUrl = `https://wa.me/918088602602?text=${encodeURIComponent(text)}`;
    window.open(waUrl, "_blank", "noopener,noreferrer");

    setSubmitting(false);
    setSubmitted(true);
  }

  /* ── Shared input class builder ── */
  const inputBase =
    "w-full bg-white/[0.08] border rounded-lg px-4 py-[11px] text-[13.5px] text-white placeholder-white/40 outline-none transition-all duration-150 focus:bg-white/[0.13]";

  function inputClass(name: keyof Fields) {
    const hasErr = touched[name] && errors[name];
    return `${inputBase} ${hasErr ? "border-red-400/70 focus:border-red-400" : "border-white/[0.18] focus:border-white/50"}`;
  }

  function ErrMsg({ name }: { name: keyof Fields }) {
    if (!touched[name] || !errors[name]) return null;
    return (
      <p className="mt-[5px] text-[11.5px] text-red-400 leading-tight">
        {errors[name]}
      </p>
    );
  }

  /* ── Success state ── */
  if (submitted) {
    return (
      <div className="w-full max-w-[540px] bg-white/[0.08] backdrop-blur-xl border border-white/[0.18] rounded-3xl p-9 shadow-[0_30px_60px_rgba(4,20,36,0.35)] flex flex-col items-center justify-center min-h-[420px] text-center">
        <div className="w-14 h-14 rounded-full bg-[rgba(127,224,176,0.2)] border border-[rgba(127,224,176,0.35)] flex items-center justify-center mb-5">
          <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="#7fe0b0" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </div>
        <div className="text-[22px] font-bold text-white mb-[10px]">Request Received</div>
        <p className="text-[13.5px] leading-[1.65] text-white/65 max-w-[320px]">
          Our team will get back to you within one business day to discuss your AMC requirements.
        </p>
      </div>
    );
  }

  /* ── Form ── */
  return (
    <div className="w-full max-w-[540px] bg-white/[0.08] backdrop-blur-xl border border-white/[0.18] rounded-3xl p-9 shadow-[0_30px_60px_rgba(4,20,36,0.35)]">

      {/* Card header */}
      <div className="flex items-center justify-between mb-1">
        <div className="w-[34px] h-[34px] rounded-[9px] bg-white/[0.15] flex items-center justify-center">
          <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        </div>
        <div className="flex items-center gap-[6px] text-[11px] font-semibold text-[#baf3d1] bg-[rgba(127,224,176,0.15)] border border-[rgba(127,224,176,0.3)] py-1 px-[10px] rounded-full">
          <span className="w-[5px] h-[5px] rounded-full bg-[#7fe0b0]" />
          Live Status
        </div>
      </div>

      <div className="text-[11px] tracking-[0.06em] uppercase text-white/55 mt-4 font-semibold">
        AMC · Get in Touch
      </div>
      <div className="text-[22px] font-bold text-white mt-[6px] mb-6">
        Request AMC Coverage
      </div>

      <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-[14px]">

        {/* Full Name */}
        <div>
          <label className="block text-[11.5px] font-semibold text-white/65 mb-[6px] tracking-[0.03em]">
            Full Name <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            name="fullName"
            value={fields.fullName}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Your full name"
            autoComplete="name"
            className={inputClass("fullName")}
          />
          <ErrMsg name="fullName" />
        </div>

        {/* Business Email + Phone — side by side */}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-[11.5px] font-semibold text-white/65 mb-[6px] tracking-[0.03em]">
              Business Email <span className="text-red-400">*</span>
            </label>
            <input
              type="email"
              name="businessEmail"
              value={fields.businessEmail}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="you@company.com"
              autoComplete="email"
              className={inputClass("businessEmail")}
            />
            <ErrMsg name="businessEmail" />
          </div>

          <div>
            <label className="block text-[11.5px] font-semibold text-white/65 mb-[6px] tracking-[0.03em]">
              Phone Number <span className="text-red-400">*</span>
            </label>
            <input
              type="tel"
              name="phone"
              value={fields.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="+91 98765 43210"
              autoComplete="tel"
              className={inputClass("phone")}
            />
            <ErrMsg name="phone" />
          </div>
        </div>

        {/* Message */}
        <div>
          <label className="block text-[11.5px] font-semibold text-white/65 mb-[6px] tracking-[0.03em]">
            Message <span className="text-red-400">*</span>
          </label>
          <textarea
            name="message"
            value={fields.message}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Describe your sites, device count or AMC requirements…"
            rows={3}
            className={`${inputClass("message")} resize-none`}
          />
          <div className="flex items-center justify-between mt-[5px]">
            <ErrMsg name="message" />
            <span className={`text-[11px] ml-auto ${fields.message.trim().length < 10 && touched.message ? "text-red-400" : "text-white/35"}`}>
              {fields.message.trim().length}/10 min
            </span>
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={submitting}
          className="mt-1 w-full py-[13px] rounded-lg text-[14px] font-bold text-[#05301e] bg-[#5de3a5] hover:bg-[#4dd498] active:bg-[#44c48d] transition-colors duration-150 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {submitting ? (
            <>
              <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
              </svg>
              Sending…
            </>
          ) : (
            <>
              Send Request
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </>
          )}
        </button>

        <p className="text-center text-[11px] text-white/35 leading-snug">
          We respond within one business day. No spam.
        </p>
      </form>
    </div>
  );
}
