"use client";

import { useState, useEffect, useCallback } from "react";

type CaptchaData = { svg: string; token: string };

export function useImageCaptcha() {
  const [data, setData] = useState<CaptchaData | null>(null);
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchCaptcha = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/captcha");
      const json: CaptchaData = await res.json();
      setData(json);
      setValue("");
      setError("");
    } catch {
      setError("Failed to load captcha — please refresh.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchCaptcha();
  }, [fetchCaptcha]);

  function validate(): boolean {
    if (!value.trim()) {
      setError("Please enter the verification code.");
      return false;
    }
    if (!data?.token) {
      setError("Captcha not loaded. Click refresh.");
      return false;
    }
    return true;
  }

  function reset() {
    fetchCaptcha();
  }

  return {
    svg: data?.svg ?? "",
    token: data?.token ?? "",
    value,
    setValue,
    error,
    setError,
    validate,
    reset,
    loading,
  };
}

// SVG rendered as a safe <img> data URI so it never executes inline scripts
function CaptchaImage({ svg, loading }: { svg: string; loading: boolean }) {
  if (loading || !svg) {
    return (
      <div className="flex items-center justify-center w-full h-full">
        <svg className="w-5 h-5 animate-spin text-current opacity-40" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8h4z" />
        </svg>
      </div>
    );
  }
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`}
      alt="Verification code — type the characters you see"
      draggable={false}
      className="w-full h-full object-contain select-none pointer-events-none"
    />
  );
}

const refreshIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M23 4v6h-6M1 20v-6h6" />
    <path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15" />
  </svg>
);

type FieldProps = {
  svg: string;
  loading: boolean;
  value: string;
  onChange: (v: string) => void;
  error: string;
  onRefresh: () => void;
  variant: "light" | "dark" | "compact";
};

export function ImageCaptchaField({ svg, loading, value, onChange, error, onRefresh, variant }: FieldProps) {
  if (variant === "dark") {
    return (
      <div>
        <label className="block text-[11.5px] font-semibold text-white/65 mb-[6px] tracking-[0.03em]">
          Verification <span className="text-red-400">*</span>
        </label>
        <div className="flex items-center gap-2">
          <div className="flex-shrink-0 w-[130px] h-[42px] rounded-lg overflow-hidden border border-white/[0.2] bg-white/[0.05]">
            <CaptchaImage svg={svg} loading={loading} />
          </div>
          <input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder="Type code"
            autoComplete="off"
            className={`w-full bg-white/[0.08] border rounded-lg px-3 py-[10px] text-[13.5px] text-white placeholder-white/40 outline-none transition-all duration-150 focus:bg-white/[0.13] ${error ? "border-red-400/70 focus:border-red-400" : "border-white/[0.18] focus:border-white/50"}`}
          />
          <button type="button" onClick={onRefresh} title="New code" disabled={loading}
            className="flex-shrink-0 w-5 h-5 text-white/50 hover:text-white transition-colors disabled:opacity-30">
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
          <div className="flex-shrink-0 w-[110px] h-[36px] rounded-lg overflow-hidden border border-[#e2e8ee] bg-[#eef2f6]">
            <CaptchaImage svg={svg} loading={loading} />
          </div>
          <input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder="Type code"
            autoComplete="off"
            className={`w-full bg-[#f4f6f8] border rounded-lg px-3 py-[8px] text-[12.5px] text-[#0b1e2d] placeholder-[#aab4bf] outline-none transition-all duration-150 focus:bg-white focus:border-[#1c7bb8] ${error ? "border-red-400" : "border-[#e2e8ee]"}`}
          />
          <button type="button" onClick={onRefresh} title="New code" disabled={loading}
            className="flex-shrink-0 w-4 h-4 text-[#6b7b8c] hover:text-[#1362a8] transition-colors disabled:opacity-30">
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
        <div className="flex-shrink-0 w-[160px] h-[50px] rounded-2xl overflow-hidden border border-slate-200 bg-slate-50">
          <CaptchaImage svg={svg} loading={loading} />
        </div>
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Type the code above"
          autoComplete="off"
          className={`w-full rounded-2xl border bg-white/90 py-3.5 px-4 text-slate-900 shadow-sm placeholder:text-slate-400 transition-[border-color,box-shadow] duration-200 focus:outline-none focus:ring-4 focus:ring-blue-500/10 ${error ? "border-red-400 focus:border-red-400" : "border-slate-200 focus:border-[var(--inops-blue)]"}`}
        />
        <button type="button" onClick={onRefresh} title="New code" disabled={loading}
          className="flex-shrink-0 w-[18px] h-[18px] text-slate-400 hover:text-[var(--inops-blue)] transition-colors disabled:opacity-30">
          {refreshIcon}
        </button>
      </div>
      {error && <p className="mt-1.5 text-[13px] text-red-500">{error}</p>}
    </div>
  );
}
