import fetchData from "../utils/fetchData";
import { useState, useEffect } from "react";

export default function useArtistAlbums(artistId) {
  const [albums, setAlbums] = useState(null);

  useEffect(() => {
    fetchData(`https://api.spotify.com/v1/artists/${artistId}/albums`).then(
      (data) => {
        setAlbums(data);
      }
    );
  }, [artistId]);

  return albums;
}
