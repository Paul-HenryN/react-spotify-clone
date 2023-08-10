import MediaHeader from "./MediaHeader";
import { Link } from "react-router-dom";
import { millisecondsToMinSec } from "../../utils/timeConvert";

export default function TrackHeader({ track }) {
  const [minutes, seconds] = track
    ? millisecondsToMinSec(track.duration_ms)
    : [0, 0];

  return (
    <MediaHeader
      mediaType="Song"
      coverImage={track.album.images[0].url}
      mediaTitle={track.name}
    >
      <p>
        {track.artists.map((artist) => (
          <Link
            key={artist.id}
            className="font-bold hover:underline hover:underline-offset-1"
          >
            {artist.name}
          </Link>
        ))}
        &#8226;
        {track.album.name}
        &#8226;
        {track.album.release_date}
        &#8226;
        {minutes}:{seconds}
      </p>
    </MediaHeader>
  );
}
