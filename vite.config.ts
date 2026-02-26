import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const gtmId = env.VITE_GTM_ID ?? "";

  const contactWebhook =
    env.RAILWAY_CONTACT_WEBHOOK_URL ??
    "https://primary-production-265b.up.railway.app/webhook/252fd3f8-e22f-4776-aa83-7927f924cdb0";
  const offerWebhook =
    env.RAILWAY_OFFER_WEBHOOK_URL ??
    "https://primary-production-265b.up.railway.app/webhook/0c187fd8-1c80-4893-9e80-bf819f14cae4";

  const contactTarget = new URL(contactWebhook);
  const offerTarget = new URL(offerWebhook);

  return {
    server: {
      host: "::",
      port: 8080,
      hmr: {
        overlay: false,
      },
      proxy: {
        "/api/contact": {
          target: contactTarget.origin,
          changeOrigin: true,
          secure: true,
          rewrite: () => contactTarget.pathname,
        },
        "/api/offer": {
          target: offerTarget.origin,
          changeOrigin: true,
          secure: true,
          rewrite: () => offerTarget.pathname,
        },
      },
    },
    plugins: [
      react(),
      mode === "development" && componentTagger(),
      // Sustituye %VITE_GTM_ID% en index.html para que la etiqueta de Google se cargue en producción
      {
        name: "html-inject-gtm",
        transformIndexHtml(html: string) {
          return html.replace(/%VITE_GTM_ID%/g, gtmId);
        },
      },
    ].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
