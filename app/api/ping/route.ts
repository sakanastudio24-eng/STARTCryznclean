export async function GET() {
  console.log("[ping] hello from staging");
  return new Response(JSON.stringify({ ok: true, t: Date.now() }), {
    headers: { "content-type": "application/json" },
  });
}
