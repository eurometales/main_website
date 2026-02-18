import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import type { CookieConsent, CookieConsentStatus } from "@/lib/cookies";
import {
  getCookieConsent,
  setCookieConsent,
  ACCEPT_ALL_CONSENT,
  NECESSARY_ONLY_CONSENT,
} from "@/lib/cookies";

interface CookieConsentContextValue {
  /** Estado actual: "pending" o el objeto de consentimiento */
  consent: CookieConsentStatus;
  /** El usuario aún no ha elegido (mostrar banner) */
  isPending: boolean;
  /** Aceptar todas las cookies */
  acceptAll: () => void;
  /** Rechazar cookies no esenciales (solo necesarias) */
  rejectNonEssential: () => void;
  /** Guardar preferencias personalizadas */
  setPreferences: (prefs: Pick<CookieConsent, "analytics" | "marketing">) => void;
  /** Abrir el panel de preferencias (desde el footer) */
  openPreferences: () => void;
  /** Cerrar el panel de preferencias */
  closePreferences: () => void;
  /** Si el panel de preferencias está abierto */
  preferencesOpen: boolean;
}

const CookieConsentContext = createContext<CookieConsentContextValue | null>(null);

export function CookieConsentProvider({ children }: { children: ReactNode }) {
  const [consent, setConsentState] = useState<CookieConsentStatus>("pending");
  const [preferencesOpen, setPreferencesOpen] = useState(false);

  const syncFromStorage = useCallback(() => {
    setConsentState(getCookieConsent());
  }, []);

  useEffect(() => {
    syncFromStorage();
  }, [syncFromStorage]);

  const acceptAll = useCallback(() => {
    setCookieConsent(ACCEPT_ALL_CONSENT);
    setConsentState(ACCEPT_ALL_CONSENT);
    setPreferencesOpen(false);
  }, []);

  const rejectNonEssential = useCallback(() => {
    setCookieConsent(NECESSARY_ONLY_CONSENT);
    setConsentState(NECESSARY_ONLY_CONSENT);
    setPreferencesOpen(false);
  }, []);

  const setPreferences = useCallback((prefs: Pick<CookieConsent, "analytics" | "marketing">) => {
    const newConsent: CookieConsent = {
      necessary: true,
      analytics: prefs.analytics,
      marketing: prefs.marketing,
      timestamp: new Date().toISOString(),
    };
    setCookieConsent(newConsent);
    setConsentState(newConsent);
    setPreferencesOpen(false);
  }, []);

  const openPreferences = useCallback(() => setPreferencesOpen(true), []);
  const closePreferences = useCallback(() => setPreferencesOpen(false), []);

  const value: CookieConsentContextValue = {
    consent,
    isPending: consent === "pending",
    acceptAll,
    rejectNonEssential,
    setPreferences,
    openPreferences,
    closePreferences,
    preferencesOpen,
  };

  return (
    <CookieConsentContext.Provider value={value}>
      {children}
    </CookieConsentContext.Provider>
  );
}

export function useCookieConsent(): CookieConsentContextValue {
  const ctx = useContext(CookieConsentContext);
  if (!ctx) {
    throw new Error("useCookieConsent debe usarse dentro de CookieConsentProvider");
  }
  return ctx;
}
