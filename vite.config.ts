import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const gtmId = env.VITE_GTM_ID ?? "";

  const railwayHost = "https://primary-production-265b.up.railway.app";

  return {
    server: {
      host: "::",
      port: 8080,
      hmr: {
        overlay: false,
      },
      proxy: {
        "/api/contact": {
          target: railwayHost,
          changeOrigin: true,
          secure: true,
          rewrite: () => "/webhook-test/252fd3f8-e22f-4776-aa83-7927f924cdb0",
        },
        "/api/offer": {
          target: railwayHost,
          changeOrigin: true,
          secure: true,
          rewrite: () => "/webhook-test/0c187fd8-1c80-4893-9e80-bf819f14cae4",
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
