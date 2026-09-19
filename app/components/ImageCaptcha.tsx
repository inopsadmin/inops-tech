"use client";
import { useState, useEffect, useRef } from "react";

type CaptchaState = {
  question: string;
  token: string;
  answer: string;
  error: string;
};

type CaptchaHandle = {
  getPayload(): { captchaToken: string; captchaAnswer: string } | null;
  reset(): void;
};

export function useImageCaptcha() {
  const ref = useRef<CaptchaHandle>({ getPayload: () => null, reset: () => {} });

  function getToken(): string | null {
    const payload = ref.current.getPayload();
    if (!payload) return null;
    return `${payload.captchaToken}::${payload.captchaAnswer}`;
  }

  function reset() {
    ref.current.reset();
  }

  return { ref, getToken, reset };
}

type FieldProps = {
  recaptchaRef: React.RefObject<CaptchaHandle>;
  error: string;
  variant: "light" | "dark" | "compact";
};

export function ImageCaptchaField({ recaptchaRef, error, variant }: FieldProps) {
  const [state, setState] = useState<CaptchaState>({
    question: "",
    token: "",
    answer: "",
    error: "",
  });

  async function fetchQuestion() {
    setState((s) => ({ ...s, answer: "", error: "" }));
    try {
      const res = await fetch("/api/captcha");
      const data = await res.json() as { question: string; token: string };
      setState((s) => ({ ...s, question: data.question, token: data.token }));
    } catch {
      setState((s) => ({ ...s, question: "?", token: "" }));
    }
  }

  useEffect(() => {
    fetchQuestion();
  }, []);

  useEffect(() => {
    recaptchaRef.current = {
      getPayload() {
        if (!state.token || !state.answer.trim()) return null;
        return { captchaToken: state.token, captchaAnswer: state.answer.trim() };
      },
      reset() {
        fetchQuestion();
      },
    };
  }, [state.token, state.answer]);

  const isCompact = variant === "compact";
  const isDark = variant === "dark";

  const inputCls = `
    w-16 text-center rounded-lg border px-2 py-[6px] text-[13px] outline-none transition-colors
    ${isDark
      ? "bg-white/10 border-white/25 text-white placeholder-white/40 focus:border-white/60"
      : "bg-white border-slate-200 text-slate-900 placeholder-slate-400 focus:border-blue-400"}
    ${isCompact ? "py-[5px] text-[12px]" : ""}
  `.trim();

  const labelCls = `
    font-semibold select-none
    ${isDark ? "text-white/70" : "text-slate-600"}
    ${isCompact ? "text-[11px]" : "text-[13px]"}
  `.trim();

  const refreshCls = `
    ml-1 opacity-50 hover:opacity-90 transition-opacity cursor-pointer
    ${isDark ? "text-white" : "text-slate-500"}
  `;

  return (
    <div>
      <div className="flex items-center gap-2">
        <span className={labelCls}>
          {state.question ? `${state.question} = ?` : "…"}
        </span>
        <button
          type="button"
          onClick={fetchQuestion}
          className={refreshCls}
          aria-label="New question"
          title="New question"
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M23 4v6h-6M1 20v-6h6" />
            <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
          </svg>
        </button>
        <input
          type="text"
          inputMode="numeric"
          maxLength={3}
          value={state.answer}
          onChange={(e) => setState((s) => ({ ...s, answer: e.target.value }))}
          placeholder="?"
          className={inputCls}
          aria-label="Captcha answer"
        />
      </div>
      {error && (
        <p className={`mt-1 text-red-500 ${isCompact ? "text-[10.5px]" : "text-[13px]"}`}>
          {error}
        </p>
      )}
    </div>
  );
}
