import { useEffect } from "react";
import { useState } from "react";
import fetchData from "../utils/fetchData";

export default function usePlaylistTracks(playlistId) {
  const [playlistTracks, setPlayListTracks] = useState(null);

  useEffect(() => {
    fetchData(
      `https://api.spotify.com/v1/playlists/${playlistId}/tracks?limit=50`
    ).then((data) => {
      setPlayListTracks(data);
    });
  }, [playlistId]);

  return playlistTracks;
}
