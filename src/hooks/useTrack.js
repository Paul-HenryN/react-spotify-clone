import fetchData from "../utils/fetchData";
import { useState, useEffect } from "react";

export default function useTrack(trackId) {
  const [track, setTrack] = useState(null);

  useEffect(() => {
    fetchData(`https://api.spotify.com/v1/tracks/${trackId}`).then((data) => {
      setTrack(data);
    });
  }, [trackId]);

  return track;
}
