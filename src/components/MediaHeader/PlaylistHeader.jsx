import MediaHeader from "./MediaHeader";
import { MinToHourMin, millisecondsToMinSec } from "../../utils/timeConvert";
import { Link } from "react-router-dom";

function sumDurations(tracks) {
  return tracks.reduce((total, current) => {
    return total + current.track.duration_ms;
  }, 0);
}

export default function PlaylistHeader({ className, playlist }) {
  const [minutes, seconds] = millisecondsToMinSec(
    sumDurations(playlist.tracks.items)
  );
  const [hours, mins] = MinToHourMin(minutes);

  return (
    <MediaHeader
      className={className}
      mediaType="Playlist"
      coverImage={playlist.images[0].url}
      mediaTitle={playlist.name}
    >
      <p className="opacity-75">{playlist.description}</p>

      <div className="flex flex-wrap gap-1 items-center">
        <div className="flex gap-1">
          <div className="bg-neutral-400 w-[20px] aspect-square rounded-full" />
          <Link className="font-bold text-sm hover:underline hover:underline-offset-1">
            {playlist.owner.display_name}
          </Link>
        </div>
        &#8226;
        <p>
          {playlist.tracks.total} songs,
          {hours > 0 ? (
            <> about {hours} hr</>
          ) : (
            <>
              {minutes}:{seconds}
            </>
          )}
        </p>
      </div>
    </MediaHeader>
  );
}
