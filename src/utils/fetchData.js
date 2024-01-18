import fetchAccessToken from "./fetchAccessToken";

export default async function fetchData(url) {
  const clientId = import.meta.env.VITE_API_CLIENT_ID;
  const clientSecret = import.meta.env.VITE_API_CLIENT_SECRET;
  const accessToken = await fetchAccessToken(clientId, clientSecret);

  const res = await fetch(url, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return res.json();
}
