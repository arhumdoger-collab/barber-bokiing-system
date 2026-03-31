export async function POST(request) {
  const body = await request.json();
  const apiUrl = process.env.BACKEND_URL || "https://arhumdoger-barbersystemm.hf.space";
  const response = await fetch(`${apiUrl}/chat`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  const data = await response.json();
  return Response.json(data);
}
