import { useEffect, useState } from "react";
import fetchData from "../utils/fetchData";

export default function useFeaturedPlaylists(limit = 5) {
  const [playlists, setPlaylists] = useState(null);

  useEffect(() => {
    fetchData(
      `https://api.spotify.com/v1/browse/featured-playlists?limit=${limit}`
    ).then((data) => {
      setPlaylists(data.playlists);
    });
  }, [limit]);

  return playlists;
}
