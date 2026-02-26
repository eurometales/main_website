/**
 * Proxy en el mismo dominio (Netlify Functions). El navegador llama a /api/*
 * y Netlify reenvía a Railway, evitando CORS.
 */
export const contactWebhookUrl = "/api/contact";
export const offerWebhookUrl = "/api/offer";
