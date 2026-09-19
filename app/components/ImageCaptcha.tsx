"use client";

declare global {
  interface Window {
    grecaptcha: {
      enterprise: {
        ready: (cb: () => void) => void;
        execute: (siteKey: string, options: { action: string }) => Promise<string>;
      };
    };
  }
}

const SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? "";

export function useImageCaptcha() {
  async function getToken(): Promise<string | null> {
    if (!SITE_KEY || typeof window === "undefined" || !window.grecaptcha?.enterprise) {
      return null;
    }
    return new Promise((resolve) => {
      window.grecaptcha.enterprise.ready(async () => {
        try {
          const token = await window.grecaptcha.enterprise.execute(SITE_KEY, { action: "SUBMIT" });
          resolve(token);
        } catch {
          resolve(null);
        }
      });
    });
  }

  function reset() {
    // Enterprise v3 is stateless — nothing to reset
  }

  return { getToken, reset };
}

// No visible widget — Enterprise v3 is invisible
export function ImageCaptchaField(_props: { recaptchaRef?: unknown; error: string; variant: string }) {
  if (!_props.error) return null;
  return (
    <p className={`text-red-500 ${_props.variant === "compact" ? "text-[10.5px]" : "text-[13px]"}`}>
      {_props.error}
    </p>
  );
}
