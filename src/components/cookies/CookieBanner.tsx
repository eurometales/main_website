import { Cookie, Shield } from "lucide-react";
import { useCookieConsent } from "@/contexts/CookieConsentContext";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

/**
 * Banner de cookies conforme a la normativa de la UE (RGPD / ePrivacy).
 * Solo se muestra cuando el usuario no ha dado aún su consentimiento.
 */
export function CookieBanner() {
  const { isPending, acceptAll, rejectNonEssential, openPreferences } = useCookieConsent();

  if (!isPending) return null;

  return (
    <div
      role="dialog"
      aria-labelledby="cookie-banner-title"
      aria-describedby="cookie-banner-desc"
      className="fixed bottom-0 left-0 right-0 z-[100] border-t bg-background/95 shadow-lg backdrop-blur supports-[backdrop-filter]:bg-background/80"
    >
      <div className="section-container py-4">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Cookie className="h-5 w-5" aria-hidden />
            </div>
            <div>
              <h2 id="cookie-banner-title" className="font-heading text-sm font-bold text-foreground sm:text-base">
                Utilizamos cookies
              </h2>
              <p id="cookie-banner-desc" className="mt-0.5 text-sm text-muted-foreground">
                Usamos cookies propias y de terceros para el funcionamiento del sitio, análisis y, si nos das tu
                consentimiento, para marketing. Puedes aceptar todas, solo las necesarias o{" "}
                <button
                  type="button"
                  onClick={openPreferences}
                  className="underline underline-offset-2 hover:text-primary focus:outline-none focus:ring-2 focus:ring-ring rounded"
                >
                  personalizar
                </button>
                . Más información en nuestra{" "}
                <Link to="/politica-cookies" className="underline underline-offset-2 hover:text-primary">
                  política de cookies
                </Link>
                .
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-2 sm:shrink-0">
            <Button
              variant="outline"
              size="sm"
              onClick={rejectNonEssential}
              className="gap-1.5"
              aria-label="Rechazar cookies no esenciales"
            >
              <Shield className="h-4 w-4" />
              Solo necesarias
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={openPreferences}
              aria-label="Abrir preferencias de cookies"
            >
              Personalizar
            </Button>
            <Button
              variant="default"
              size="sm"
              onClick={acceptAll}
              aria-label="Aceptar todas las cookies"
            >
              Aceptar todas
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
