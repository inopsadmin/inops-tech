"use client";

import { useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? "";

export function useImageCaptcha() {
  const ref = useRef<ReCAPTCHA>(null);

  function getToken(): string | null {
    return ref.current?.getValue() ?? null;
  }

  function reset() {
    ref.current?.reset();
  }

  return { ref, getToken, reset };
}

type FieldProps = {
  recaptchaRef: React.RefObject<ReCAPTCHA | null>;
  error: string;
  variant: "light" | "dark" | "compact";
};

export function ImageCaptchaField({ recaptchaRef, error, variant }: FieldProps) {
  if (!SITE_KEY) {
    return (
      <p className="text-xs text-amber-500 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2">
        reCAPTCHA not configured — add <code>NEXT_PUBLIC_RECAPTCHA_SITE_KEY</code> to .env
      </p>
    );
  }

  if (variant === "compact") {
    return (
      <div>
        <div style={{ transform: "scale(0.82)", transformOrigin: "left top", height: "54px", overflow: "hidden" }}>
          <ReCAPTCHA ref={recaptchaRef} sitekey={SITE_KEY} theme="light" size="normal" />
        </div>
        {error && <p className="mt-1 text-[10.5px] text-red-500">{error}</p>}
      </div>
    );
  }

  return (
    <div>
      <ReCAPTCHA
        ref={recaptchaRef}
        sitekey={SITE_KEY}
        theme={variant === "dark" ? "dark" : "light"}
        size="normal"
      />
      {error && (
        <p className={`mt-1.5 text-red-500 text-[13px]`}>
          {error}
        </p>
      )}
    </div>
  );
}
