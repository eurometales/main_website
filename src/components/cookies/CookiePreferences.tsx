import { BarChart3, Megaphone, Settings2 } from "lucide-react";
import { useCookieConsent } from "@/contexts/CookieConsentContext";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

/**
 * Panel de preferencias de cookies (modal/sheet).
 * Permite activar/desactivar analytics y marketing y enlaza a la política de cookies.
 */
export function CookiePreferences() {
  const {
    consent,
    preferencesOpen,
    closePreferences,
    setPreferences,
  } = useCookieConsent();

  const currentAnalytics = consent !== "pending" ? consent.analytics : false;
  const currentMarketing = consent !== "pending" ? consent.marketing : false;

  const [analytics, setAnalytics] = useState(currentAnalytics);
  const [marketing, setMarketing] = useState(currentMarketing);

  useEffect(() => {
    if (preferencesOpen) {
      setAnalytics(currentAnalytics);
      setMarketing(currentMarketing);
    }
  }, [preferencesOpen, currentAnalytics, currentMarketing]);

  const handleSave = () => {
    setPreferences({ analytics, marketing });
  };

  return (
    <Sheet open={preferencesOpen} onOpenChange={(open) => !open && closePreferences()}>
      <SheetContent side="right" className="flex flex-col sm:max-w-md">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <Settings2 className="h-5 w-5" />
            Preferencias de cookies
          </SheetTitle>
          <SheetDescription>
            Elige qué tipos de cookies permitir. Las cookies necesarias son siempre activas para el correcto
            funcionamiento del sitio.
          </SheetDescription>
        </SheetHeader>

        <div className="flex-1 space-y-6 py-6">
          <div className="flex items-center justify-between gap-4 rounded-lg border p-4">
            <div className="flex gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <BarChart3 className="h-5 w-5" />
              </div>
              <div>
                <Label htmlFor="cookie-analytics" className="text-base font-medium">
                  Cookies de análisis
                </Label>
                <p className="text-sm text-muted-foreground">
                  Nos ayudan a entender cómo usas la web (p. ej. páginas visitadas) para mejorar el servicio.
                </p>
              </div>
            </div>
            <Switch
              id="cookie-analytics"
              checked={analytics}
              onCheckedChange={setAnalytics}
              aria-label="Activar cookies de análisis"
            />
          </div>

          <div className="flex items-center justify-between gap-4 rounded-lg border p-4">
            <div className="flex gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Megaphone className="h-5 w-5" />
              </div>
              <div>
                <Label htmlFor="cookie-marketing" className="text-base font-medium">
                  Cookies de marketing
                </Label>
                <p className="text-sm text-muted-foreground">
                  Permiten recordar tus preferencias y mostrar contenido o anuncios más relevantes.
                </p>
              </div>
            </div>
            <Switch
              id="cookie-marketing"
              checked={marketing}
              onCheckedChange={setMarketing}
              aria-label="Activar cookies de marketing"
            />
          </div>
        </div>

        <SheetFooter className="flex-col gap-2 sm:flex-col">
          <Button onClick={handleSave} className="w-full">
            Guardar preferencias
          </Button>
          <Link
            to="/politica-cookies"
            onClick={closePreferences}
            className="text-center text-sm text-muted-foreground underline underline-offset-2 hover:text-primary"
          >
            Ver política de cookies
          </Link>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
