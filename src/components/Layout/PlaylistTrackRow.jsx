import { millisecondsToMinSec } from "../../utils/timeConvert";

export default function PlaylistTrackRow({ number, trackInfo }) {
  const [trackDurationMinutes, trackDurationSeconds] = millisecondsToMinSec(
    trackInfo.track.duration_ms
  );
  return (
    <tr>
      <td>{number}</td>
      <td>
        <img src="" />
        <div>
          <p>{trackInfo.track.name}</p>
          <p>
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
    </tr>
  );
}
