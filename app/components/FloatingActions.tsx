"use client";

import { useState, ChangeEvent, useEffect } from "react";

const WA_URL = `https://wa.me/918088602602`;

/* ── Inline contact form logic ── */
type Fields = { fullName: string; businessEmail: string; phone: string; message: string };
type Errors = Partial<Record<keyof Fields, string>>;
const INIT: Fields = { fullName: "", businessEmail: "", phone: "", message: "" };

function validate(f: Fields): Errors {
  const e: Errors = {};
  if (!f.fullName.trim()) e.fullName = "Required";
  if (!f.businessEmail.trim()) e.businessEmail = "Required";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.businessEmail)) e.businessEmail = "Invalid email";
  if (!f.phone.trim()) e.phone = "Required";
  else if (!/^[+]?[\d\s\-().]{7,}$/.test(f.phone)) e.phone = "Invalid number";
  if (!f.message.trim()) e.message = "Required";
  else if (f.message.trim().length < 10) e.message = "Min 10 characters";
  return e;
}

export default function FloatingActions() {
  const [formOpen, setFormOpen] = useState(false);

  /* Open when hero leaves viewport, close when it comes back */
  useEffect(() => {
    const hero = document.querySelector("section");
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          setFormOpen(true);
        } else {
          setFormOpen(false);
        }
      },
      { threshold: 0 }
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);
  const [fields, setFields] = useState<Fields>(INIT);
  const [errors, setErrors] = useState<Errors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof Fields, boolean>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const updated = { ...fields, [e.target.name]: e.target.value };
    setFields(updated);
    if (touched[e.target.name as keyof Fields]) setErrors(validate(updated));
  }

  function handleBlur(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const name = e.target.name as keyof Fields;
    setTouched((t) => ({ ...t, [name]: true }));
    setErrors(validate(fields));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setTouched({ fullName: true, businessEmail: true, phone: true, message: true });
    const errs = validate(fields);
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;
    setSubmitting(true);
    const text = [`👋 *New Enquiry*`, ``, `*Name:* ${fields.fullName}`, `*Email:* ${fields.businessEmail}`, `*Phone:* ${fields.phone}`, `*Message:* ${fields.message}`].join("\n");
    window.open(`https://wa.me/918088602602?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
    setSubmitting(false);
    setSubmitted(true);
  }

  return (
    <>
      {/* ── Floating form popup (anchored above the FAB cluster) ── */}
      <div
        className={`fixed bottom-[76px] right-20 z-[60] w-[300px] bg-white rounded-2xl shadow-[0_16px_48px_rgba(4,20,36,0.18)] border border-[#e2e8ee] overflow-hidden transition-all duration-300 ease-out origin-bottom-right ${
          formOpen ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-90 pointer-events-none"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 pt-5 pb-3 bg-[#0a1f3d]">
          <div>
            <div className="text-[10px] tracking-[0.08em] uppercase text-white/45 font-semibold">InOps Solutions</div>
            <div className="text-[15px] font-bold text-white mt-[2px]">Get in Touch</div>
          </div>
          <button
            onClick={() => { setFormOpen(false); setSubmitted(false); setFields(INIT); setErrors({}); setTouched({}); }}
            aria-label="Close form"
            className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors duration-150 flex-shrink-0"
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round"><path d="M18 6L6 18M6 6l12 12" /></svg>
          </button>
        </div>

        {/* Body */}
        <div className="px-5 pb-5 pt-4">
          {submitted ? (
            <div className="flex flex-col items-center text-center py-6">
              <div className="w-11 h-11 rounded-full bg-[rgba(19,98,168,0.10)] border border-[#1362a8]/20 flex items-center justify-center mb-3">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="#1362a8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </div>
              <div className="text-[15px] font-bold text-[#0b1e2d] mb-1">Sent!</div>
              <p className="text-[12px] leading-[1.6] text-[#6b7b8c]">We'll get back to you within one business day.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-[10px]">

              {/* Full Name */}
              <div>
                <label className="block text-[11px] font-semibold text-[#4a5766] mb-[4px]">Full Name <span className="text-red-500">*</span></label>
                <input type="text" name="fullName" value={fields.fullName} onChange={handleChange} onBlur={handleBlur} placeholder="Your full name"
                  className={`w-full bg-[#f4f6f8] border rounded-lg px-3 py-[8px] text-[12.5px] text-[#0b1e2d] placeholder-[#aab4bf] outline-none transition-all duration-150 focus:bg-white focus:border-[#1c7bb8] ${touched.fullName && errors.fullName ? "border-red-400" : "border-[#e2e8ee]"}`} />
                {touched.fullName && errors.fullName && <p className="mt-[3px] text-[10.5px] text-red-500">{errors.fullName}</p>}
              </div>

              {/* Email + Phone */}
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-[11px] font-semibold text-[#4a5766] mb-[4px]">Email <span className="text-red-500">*</span></label>
                  <input type="email" name="businessEmail" value={fields.businessEmail} onChange={handleChange} onBlur={handleBlur} placeholder="you@company.com"
                    className={`w-full bg-[#f4f6f8] border rounded-lg px-3 py-[8px] text-[12.5px] text-[#0b1e2d] placeholder-[#aab4bf] outline-none transition-all duration-150 focus:bg-white focus:border-[#1c7bb8] ${touched.businessEmail && errors.businessEmail ? "border-red-400" : "border-[#e2e8ee]"}`} />
                  {touched.businessEmail && errors.businessEmail && <p className="mt-[3px] text-[10.5px] text-red-500">{errors.businessEmail}</p>}
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-[#4a5766] mb-[4px]">Phone <span className="text-red-500">*</span></label>
                  <input type="tel" name="phone" value={fields.phone} onChange={handleChange} onBlur={handleBlur} placeholder="+91 98765"
                    className={`w-full bg-[#f4f6f8] border rounded-lg px-3 py-[8px] text-[12.5px] text-[#0b1e2d] placeholder-[#aab4bf] outline-none transition-all duration-150 focus:bg-white focus:border-[#1c7bb8] ${touched.phone && errors.phone ? "border-red-400" : "border-[#e2e8ee]"}`} />
                  {touched.phone && errors.phone && <p className="mt-[3px] text-[10.5px] text-red-500">{errors.phone}</p>}
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-[11px] font-semibold text-[#4a5766] mb-[4px]">Message <span className="text-red-500">*</span></label>
                <textarea name="message" value={fields.message} onChange={handleChange} onBlur={handleBlur} placeholder="Your requirements…" rows={3}
                  className={`w-full bg-[#f4f6f8] border rounded-lg px-3 py-[8px] text-[12.5px] text-[#0b1e2d] placeholder-[#aab4bf] outline-none transition-all duration-150 focus:bg-white focus:border-[#1c7bb8] resize-none ${touched.message && errors.message ? "border-red-400" : "border-[#e2e8ee]"}`} />
                <div className="flex justify-between mt-[3px]">
                  {touched.message && errors.message && <p className="text-[10.5px] text-red-500">{errors.message}</p>}
                  <span className={`text-[10.5px] ml-auto ${fields.message.trim().length < 10 && touched.message ? "text-red-400" : "text-[#aab4bf]"}`}>{fields.message.trim().length}/10</span>
                </div>
              </div>

              <button type="submit" disabled={submitting}
                className="w-full py-[10px] rounded-lg text-[13px] font-bold text-white bg-[#1362a8] hover:bg-[#1578c2] transition-colors duration-150 disabled:opacity-60 flex items-center justify-center gap-2 mt-1">
                {submitting ? "Sending…" : <>Send <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7" /></svg></>}
              </button>
            </form>
          )}
        </div>
      </div>

      {/* ── FAB cluster ── */}
      <div className="group/fab fixed bottom-6 right-5 z-[60] flex flex-col items-end gap-3">

        {/* Sub-buttons */}
        <div className="flex flex-col items-end gap-3 opacity-0 translate-y-4 pointer-events-none group-hover/fab:opacity-100 group-hover/fab:translate-y-0 group-hover/fab:pointer-events-auto transition-all duration-300 ease-out">

          {/* WhatsApp */}
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with us on WhatsApp"
            className="group/wa relative flex items-center justify-center w-[50px] h-[50px] rounded-full bg-[#25D366] shadow-[0_4px_18px_rgba(37,211,102,0.45)] hover:shadow-[0_6px_24px_rgba(37,211,102,0.65)] hover:-translate-y-[2px] transition-all duration-200"
          >
            <span className="pointer-events-none absolute right-[60px] whitespace-nowrap rounded-md bg-[#111] text-white text-[11.5px] font-medium px-[10px] py-[5px] opacity-0 group-hover/wa:opacity-100 transition-opacity duration-150 shadow-lg">
              Chat on WhatsApp
            </span>
            <svg width="26" height="26" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M16.003 3C9.374 3 4 8.373 4 15.003c0 2.15.57 4.168 1.563 5.916L4 29l8.29-1.543A11.955 11.955 0 0 0 16.003 28C22.63 28 28 22.627 28 16c0-6.628-5.37-13-11.997-13Z" fill="#fff" />
              <path d="M16.003 5.4C10.696 5.4 6.4 9.696 6.4 15.003c0 1.975.58 3.816 1.58 5.36l.258.41-.984 3.587 3.69-.968.398.235a9.588 9.588 0 0 0 4.661 1.213C21.31 24.84 25.6 20.546 25.6 15.24c0-5.306-4.288-9.84-9.597-9.84Zm5.667 13.47c-.24.675-1.393 1.29-1.944 1.37-.497.073-1.126.103-1.818-.114-.418-.133-.954-.31-1.64-.607-2.887-1.247-4.773-4.166-4.917-4.358-.143-.19-1.165-1.55-1.165-2.957 0-1.408.738-2.1 1-2.376.262-.277.572-.346.763-.346.19 0 .382.002.549.01.176.008.412-.067.644.49.24.575.815 1.98.886 2.123.07.143.118.311.023.5-.09.188-.136.305-.27.47-.133.164-.28.367-.4.493-.134.14-.272.292-.117.573.155.28.688 1.135 1.477 1.839 1.015.904 1.871 1.185 2.152 1.319.28.133.443.111.607-.067.163-.177.7-.814.886-1.094.187-.28.374-.234.63-.14.258.093 1.637.772 1.918.913.28.14.466.21.535.326.07.115.07.668-.17 1.343Z" fill="#25D366" />
            </svg>
          </a>

          {/* Contact form trigger */}
          <button
            onClick={() => setFormOpen(true)}
            aria-label="Open contact form"
            className="group/ct relative flex items-center justify-center w-[50px] h-[50px] rounded-full bg-[#1362a8] shadow-[0_4px_18px_rgba(19,98,168,0.40)] hover:shadow-[0_6px_24px_rgba(19,98,168,0.60)] hover:-translate-y-[2px] transition-all duration-200"
          >
            <span className="pointer-events-none absolute right-[60px] whitespace-nowrap rounded-md bg-[#111] text-white text-[11.5px] font-medium px-[10px] py-[5px] opacity-0 group-hover/ct:opacity-100 transition-opacity duration-150 shadow-lg">
              Contact Us
            </span>
            {/* Form / clipboard icon */}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
              <polyline points="10 9 9 9 8 9" />
            </svg>
          </button>
        </div>

        {/* Main trigger */}
        <div
          aria-label="Quick actions"
          className="flex items-center justify-center w-[54px] h-[54px] rounded-full bg-gradient-to-br from-[#1c7bb8] to-[#0d3a5c] shadow-[0_6px_22px_rgba(28,123,184,0.50)] cursor-pointer hover:-translate-y-[2px] hover:shadow-[0_8px_28px_rgba(28,123,184,0.65)] transition-all duration-200"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        </div>

      </div>
    </>
  );
}
