import { millisecondsToMinSec } from "../../utils/timeConvert";
import PlaylistGrid from "./PlaylistGrid";

export default function PlaylistTrackRow({ number, trackInfo }) {
  const [trackDurationMinutes, trackDurationSeconds] = millisecondsToMinSec(
    trackInfo.track.duration_ms
  );
  return (
    <PlaylistGrid className="px-5 py-1 rounded-md hover:bg-neutral-700 items-center">
      <td>{number}</td>
      <td>
        <img src="" />
        <div>
          <p className="text-white overflow-hidden w-72 whitespace-nowrap text-ellipsis">
            {trackInfo.track.name}
          </p>
          <p className="text-sm">
            {trackInfo.track.artists.map((artist, i) => (
              <>
                {artist.name}
                {i != trackInfo.track.artists.length - 1 ? ", " : ""}
              </>
            ))}
          </p>
        </div>
      </td>

      <td>{trackInfo.track.album.name}</td>

      <td>
        {new Date(trackInfo.added_at).toLocaleDateString("en-US", {
          day: "2-digit",
          year: "numeric",
          month: "long",
          weekday: "short",
        })}
      </td>

      <td>
        {trackDurationMinutes}:{trackDurationSeconds < 10 ? "0" : ""}
        {trackDurationSeconds}
      </td>
    </PlaylistGrid>
  );
}
