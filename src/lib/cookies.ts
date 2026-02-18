/**
 * Sistema de consentimiento de cookies conforme a la normativa de la UE
 * (RGPD y Directiva ePrivacy).
 */

export const COOKIE_CONSENT_KEY = "eurometales_cookie_consent";

export interface CookieConsent {
  /** Cookies técnicas necesarias para el funcionamiento (siempre true si hay consentimiento guardado) */
  necessary: boolean;
  /** Cookies de análisis/estadísticas */
  analytics: boolean;
  /** Cookies de marketing o redes sociales */
  marketing: boolean;
  /** Fecha del consentimiento (ISO) */
  timestamp: string;
}

export type CookieConsentStatus = "pending" | CookieConsent;

/** Consentimiento por defecto: solo necesarias (opt-in para el resto) */
export const DEFAULT_CONSENT: CookieConsent = {
  necessary: true,
  analytics: false,
  marketing: false,
  timestamp: new Date().toISOString(),
};

/** Aceptar todas las cookies */
export const ACCEPT_ALL_CONSENT: CookieConsent = {
  necessary: true,
  analytics: true,
  marketing: true,
  timestamp: new Date().toISOString(),
};

/** Solo cookies necesarias */
export const NECESSARY_ONLY_CONSENT: CookieConsent = {
  ...DEFAULT_CONSENT,
  timestamp: new Date().toISOString(),
};

function parseStored(value: string | null): CookieConsentStatus {
  if (!value) return "pending";
  try {
    const parsed = JSON.parse(value) as CookieConsent;
    if (
      typeof parsed.necessary === "boolean" &&
      typeof parsed.analytics === "boolean" &&
      typeof parsed.marketing === "boolean" &&
      typeof parsed.timestamp === "string"
    ) {
      return { ...parsed, necessary: true };
    }
  } catch {
    // ignore
  }
  return "pending";
}

export function getCookieConsent(): CookieConsentStatus {
  if (typeof window === "undefined") return "pending";
  return parseStored(localStorage.getItem(COOKIE_CONSENT_KEY));
}

export function setCookieConsent(consent: CookieConsent): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(consent));
}

export function hasUserConsented(): boolean {
  const status = getCookieConsent();
  return status !== "pending";
}

export function canUseAnalytics(): boolean {
  const status = getCookieConsent();
  return status !== "pending" && status.analytics;
}

export function canUseMarketing(): boolean {
  const status = getCookieConsent();
  return status !== "pending" && status.marketing;
}
