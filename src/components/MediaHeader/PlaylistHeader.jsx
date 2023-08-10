import MediaHeader from "./MediaHeader";
import { Link } from "react-router-dom";

function sumDurations(tracks) {
  return tracks.reduce((total, current) => {
    return total + current.track.duration_ms;
  }, 0);
}

export default function PlaylistHeader({ playlist }) {
  return (
    <MediaHeader
      mediaType="Playlist"
      coverImage={playlist.images[0].url}
      mediaTitle={playlist.name}
    >
      <p className="opacity-75">{playlist.description}</p>

      <p>
        <Link className="font-bold hover:underline hover:underline-offset-1">
          {playlist.owner.display_name}
        </Link>
        &#8226;
        {playlist.tracks.total} songs,
        {sumDurations(playlist.tracks.items)}
      </p>
    </MediaHeader>
  );
}
