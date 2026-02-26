type NetlifyHandler = (event: {
  httpMethod: string;
  body: string | null;
  headers: Record<string, string | undefined>;
}) => Promise<{ statusCode: number; headers?: Record<string, string>; body: string }>;

const RAILWAY_URL =
  "https://primary-production-265b.up.railway.app/webhook-test/252fd3f8-e22f-4776-aa83-7927f924cdb0";

export const handler: NetlifyHandler = async (event) => {
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 204,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Max-Age": "86400",
      },
      body: "",
    };
  }

  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  try {
    const res = await fetch(RAILWAY_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: event.body ?? "{}",
    });
    const text = await res.text();
    return {
      statusCode: res.status,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": res.headers.get("Content-Type") ?? "application/json",
      },
      body: text || (res.ok ? "{}" : JSON.stringify({ error: "Webhook error" })),
    };
  } catch (err) {
    console.error("Contact proxy error:", err);
    return {
      statusCode: 502,
      headers: { "Access-Control-Allow-Origin": "*" },
      body: JSON.stringify({ error: "Proxy error" }),
    };
  }
};
