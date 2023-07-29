import fetchAccessToken from "./fetchAccessToken";
import { API_CLIENT_ID, API_CLIENT_SECRET } from "../../env";

export default async function fetchData(url) {
  const accessToken = await fetchAccessToken(API_CLIENT_ID, API_CLIENT_SECRET);

  const res = await fetch(url, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return res.json();
}
