import { Helmet } from "react-helmet-async";
import { Cookie, BarChart3, Megaphone, Shield } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { useCookieConsent } from "@/contexts/CookieConsentContext";

const PoliticaCookies = () => {
  const { openPreferences } = useCookieConsent();

  return (
    <>
      <Helmet>
        <title>Política de cookies | {siteConfig.name}</title>
        <meta name="description" content="Política de cookies de Eurometales. Información sobre el uso de cookies en nuestro sitio web conforme a la normativa de la UE." />
      </Helmet>
      <Layout>
        <div className="section-container py-12 md:py-16">
          <h1 className="font-heading text-3xl font-bold tracking-tight md:text-4xl">
            Política de cookies
          </h1>
          <p className="mt-2 text-muted-foreground">
            Última actualización: {new Date().toLocaleDateString("es-ES", { day: "numeric", month: "long", year: "numeric" })}
          </p>

          <div className="prose prose-neutral mt-8 max-w-none dark:prose-invert">
            <p>
              En <strong>{siteConfig.contact.companyName}</strong> utilizamos cookies y tecnologías similares en
              nuestro sitio web conforme al Reglamento (UE) 2016/679 (RGPD) y la Directiva 2002/58/CE (ePrivacy).
              Esta página explica qué son las cookies, qué tipos utilizamos y cómo puedes gestionar tus preferencias.
            </p>

            <h2 className="mt-8 flex items-center gap-2 text-xl font-heading font-bold">
              <Cookie className="h-5 w-5 text-primary" />
              ¿Qué son las cookies?
            </h2>
            <p>
              Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo (ordenador, tablet o
              móvil) cuando visitas un sitio web. Permiten que el sitio recuerde tus acciones y preferencias durante
              un tiempo, para no tener que volver a configurarlas en cada visita.
            </p>

            <h2 className="mt-8 flex items-center gap-2 text-xl font-heading font-bold">
              <Shield className="h-5 w-5 text-primary" />
              Cookies necesarias
            </h2>
            <p>
              Son imprescindibles para el funcionamiento del sitio. Incluyen, por ejemplo, la cookie que guarda tu
              consentimiento sobre el uso de cookies, la sesión o la seguridad. No requieren tu consentimiento
              previo y no pueden desactivarse desde esta web si quieres usar el sitio con normalidad.
            </p>

            <h2 className="mt-8 flex items-center gap-2 text-xl font-heading font-bold">
              <BarChart3 className="h-5 w-5 text-primary" />
              Cookies de análisis
            </h2>
            <p>
              Nos permiten conocer cómo se utiliza el sitio (páginas visitadas, tiempo de estancia, etc.) de forma
              agregada y anónima. Esta información nos ayuda a mejorar la web. Solo las utilizamos si nos das tu
              consentimiento.
            </p>

            <h2 className="mt-8 flex items-center gap-2 text-xl font-heading font-bold">
              <Megaphone className="h-5 w-5 text-primary" />
              Cookies de marketing
            </h2>
            <p>
              Se utilizan para recordar preferencias, mostrar contenido más relevante o medir la efectividad de
              campañas. Solo se activan si aceptas este tipo de cookies en las preferencias.
            </p>

            <h2 className="mt-8 text-xl font-heading font-bold">
              Cómo gestionar tus preferencias
            </h2>
            <p>
              Puedes cambiar en cualquier momento qué cookies aceptas. Haz clic en el botón siguiente para abrir el
              panel de preferencias de cookies.
            </p>
            <Button onClick={openPreferences} variant="outline" className="mt-2">
              Gestionar preferencias de cookies
            </Button>

            <h2 className="mt-8 text-xl font-heading font-bold">
              Derechos y más información
            </h2>
            <p>
              Tienes derecho a acceder, rectificar, suprimir y limitar el tratamiento de tus datos, así como a
              oponerte y a la portabilidad. Para ejercer estos derechos o cualquier consulta sobre privacidad,
              puedes contactarnos en{" "}
              <a href={`mailto:${siteConfig.contact.email}`} className="text-primary underline hover:no-underline">
                {siteConfig.contact.email}
              </a>
              . También puedes presentar una reclamación ante la autoridad de control competente.
            </p>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default PoliticaCookies;
