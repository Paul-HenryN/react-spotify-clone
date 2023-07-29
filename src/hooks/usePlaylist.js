import { useEffect } from "react";
import { useState } from "react";
import fetchData from "../utils/fetchData";

export default function usePlaylist(playlistId) {
  const [playlist, setPlayList] = useState(null);

  useEffect(() => {
    fetchData(`https://api.spotify.com/v1/playlists/${playlistId}`).then(
      (data) => {
        setPlayList(data);
      }
    );
  }, [playlistId]);

  return playlist;
}
