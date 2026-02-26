type NetlifyHandler = (event: {
  httpMethod: string;
  body: string | null;
  isBase64Encoded?: boolean;
  headers: Record<string, string | undefined>;
}) => Promise<{ statusCode: number; headers?: Record<string, string>; body: string }>;

const RAILWAY_URL =
  "https://primary-production-265b.up.railway.app/webhook-test/0c187fd8-1c80-4893-9e80-bf819f14cae4";

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
    const contentType = event.headers["content-type"] ?? event.headers["Content-Type"] ?? "application/octet-stream";
    const body = event.isBase64Encoded && event.body
      ? Buffer.from(event.body, "base64")
      : (event.body ?? "");

    const res = await fetch(RAILWAY_URL, {
      method: "POST",
      headers: { "Content-Type": contentType },
      body,
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
    console.error("Offer proxy error:", err);
    return {
      statusCode: 502,
      headers: { "Access-Control-Allow-Origin": "*" },
      body: JSON.stringify({ error: "Proxy error" }),
    };
  }
};
