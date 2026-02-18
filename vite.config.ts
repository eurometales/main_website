import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const gtmId = env.VITE_GTM_ID ?? "";

  return {
    server: {
      host: "::",
      port: 8080,
      hmr: {
        overlay: false,
      },
    },
    plugins: [
      react(),
      mode === "development" && componentTagger(),
      // Sustituye %VITE_GTM_ID% en index.html para que la etiqueta de Google se cargue en producción
      {
        name: "html-inject-gtm",
        transformIndexHtml(html) {
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
