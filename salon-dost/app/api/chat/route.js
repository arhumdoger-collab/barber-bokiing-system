export async function POST(request) {
  const body = await request.json();
  const apiUrl = "https://arhm4341-barbersystemm.hf.space";
  const response = await fetch(`${apiUrl}/chat`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  const data = await response.json();
  return Response.json(data);
}
