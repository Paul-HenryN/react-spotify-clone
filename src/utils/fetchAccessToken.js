export default async function fetchAccessToken(clientId, clientSecret) {
  const params = new URLSearchParams();
  params.append("client_id", clientId);
  params.append("grant_type", "client_credentials");
  params.append("client_secret", clientSecret);
  params.append("redirect_uri", "http://localhost:5173/callback");

  const result = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: params,
  });

  const { access_token } = await result.json();
  return access_token;
}
