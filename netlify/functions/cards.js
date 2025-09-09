// netlify/functions/cards.js
exports.handler = async (event) => {
  // Simple ping to confirm it's wired up
  if (event.httpMethod === "GET") {
    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ok: true, message: "Function is live 🎉" }),
    };
  }

  // allow preflight for CORS (matches your netlify.toml headers)
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 204,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      },
      body: "",
    };
  }

  // For now, just echo whatever JSON you POST
  if (event.httpMethod === "POST") {
    const payload = event.body ? JSON.parse(event.body) : {};
    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ received: payload }),
    };
  }

  return { statusCode: 405, body: "Method Not Allowed" };
};
