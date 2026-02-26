/**
 * Rutas del proxy (Netlify Functions / Vite dev). El navegador llama a /api/*
 * y el backend reenvía a Railway. Las URLs reales de Railway se configuran por
 * env: RAILWAY_CONTACT_WEBHOOK_URL y RAILWAY_OFFER_WEBHOOK_URL (ver .env.example).
 */
export const contactWebhookUrl = "/api/contact";
export const offerWebhookUrl = "/api/offer";
