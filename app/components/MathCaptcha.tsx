"use client";

import { useState, useCallback } from "react";

function generateCaptcha() {
  const a = Math.floor(Math.random() * 9) + 1;
  const b = Math.floor(Math.random() * 9) + 1;
  const add = Math.random() > 0.5;
  return {
    question: add ? `${a} + ${b} = ?` : `${a + b} − ${b} = ?`,
    answer: add ? a + b : a,
  };
}

export function useMathCaptcha() {
  const [captcha, setCaptcha] = useState(generateCaptcha);
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  const refresh = useCallback(() => {
    setCaptcha(generateCaptcha());
    setValue("");
    setError("");
  }, []);

  const validate = useCallback((): boolean => {
    const parsed = parseInt(value, 10);
    if (isNaN(parsed) || parsed !== captcha.answer) {
      setError("Wrong answer — try this new one.");
      setCaptcha(generateCaptcha());
      setValue("");
      return false;
    }
    setError("");
    return true;
  }, [value, captcha.answer]);

  const reset = useCallback(() => {
    setCaptcha(generateCaptcha());
    setValue("");
    setError("");
  }, []);

  return { question: captcha.question, value, setValue, error, validate, reset, refresh };
}

type CaptchaFieldProps = {
  question: string;
  value: string;
  onChange: (v: string) => void;
  error: string;
  onRefresh: () => void;
  variant: "light" | "dark" | "compact";
};

export function MathCaptchaField({ question, value, onChange, error, onRefresh, variant }: CaptchaFieldProps) {
  const refreshIcon = (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M23 4v6h-6M1 20v-6h6" />
      <path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15" />
    </svg>
  );

  if (variant === "dark") {
    return (
      <div>
        <label className="block text-[11.5px] font-semibold text-white/65 mb-[6px] tracking-[0.03em]">
          Verification <span className="text-red-400">*</span>
        </label>
        <div className="flex items-center gap-2">
          <span className="text-[13px] font-mono text-white bg-white/[0.12] border border-white/[0.2] rounded-lg px-3 py-[10px] flex-shrink-0 min-w-[90px] text-center select-none">
            {question}
          </span>
          <input
            type="number"
            inputMode="numeric"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder="Answer"
            className={`w-full bg-white/[0.08] border rounded-lg px-3 py-[10px] text-[13.5px] text-white placeholder-white/40 outline-none transition-all duration-150 focus:bg-white/[0.13] ${error ? "border-red-400/70 focus:border-red-400" : "border-white/[0.18] focus:border-white/50"}`}
          />
          <button type="button" onClick={onRefresh} title="New question" className="flex-shrink-0 text-white/50 hover:text-white transition-colors">
            {refreshIcon}
          </button>
        </div>
        {error && <p className="mt-[5px] text-[11.5px] text-red-400 leading-tight">{error}</p>}
      </div>
    );
  }

  if (variant === "compact") {
    return (
      <div>
        <label className="block text-[11px] font-semibold text-[#4a5766] mb-[4px]">
          Verification <span className="text-red-500">*</span>
        </label>
        <div className="flex items-center gap-2">
          <span className="text-[11.5px] font-mono text-[#0b1e2d] bg-[#eef2f6] border border-[#e2e8ee] rounded-lg px-2.5 py-[7px] flex-shrink-0 min-w-[80px] text-center select-none">
            {question}
          </span>
          <input
            type="number"
            inputMode="numeric"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder="?"
            className={`w-full bg-[#f4f6f8] border rounded-lg px-3 py-[8px] text-[12.5px] text-[#0b1e2d] placeholder-[#aab4bf] outline-none transition-all duration-150 focus:bg-white focus:border-[#1c7bb8] ${error ? "border-red-400" : "border-[#e2e8ee]"}`}
          />
          <button type="button" onClick={onRefresh} title="New question" className="flex-shrink-0 text-[#6b7b8c] hover:text-[#1362a8] transition-colors">
            {refreshIcon}
          </button>
        </div>
        {error && <p className="mt-[3px] text-[10.5px] text-red-500">{error}</p>}
      </div>
    );
  }

  // light (ContactForm)
  return (
    <div>
      <div className="block text-sm font-medium text-slate-700 mb-1.5">
        Verification <span className="text-red-500">*</span>
      </div>
      <div className="flex items-center gap-3">
        <span className="font-mono text-[14px] text-slate-800 bg-slate-100 border border-slate-200 rounded-2xl px-4 py-3.5 flex-shrink-0 min-w-[100px] text-center select-none">
          {question}
        </span>
        <input
          type="number"
          inputMode="numeric"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Your answer"
          className={`w-full rounded-2xl border bg-white/90 py-3.5 px-4 text-slate-900 shadow-sm placeholder:text-slate-400 transition-[border-color,box-shadow] duration-200 focus:outline-none focus:ring-4 focus:ring-blue-500/10 ${error ? "border-red-400 focus:border-red-400" : "border-slate-200 focus:border-[var(--inops-blue)]"}`}
        />
        <button type="button" onClick={onRefresh} title="New question" className="flex-shrink-0 text-slate-400 hover:text-[var(--inops-blue)] transition-colors">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M23 4v6h-6M1 20v-6h6" />
            <path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15" />
          </svg>
        </button>
      </div>
      {error && <p className="mt-1.5 text-[13px] text-red-500">{error}</p>}
    </div>
  );
}
