import { Link, useParams } from "react-router-dom";
import usePlaylist from "../hooks/usePlaylist";
import PlayButton from "../components/Buttons/PlayButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FlatButton from "../components/Buttons/FlatButton";
import PlaylistTable from "../components/Layout/PlaylistTable";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { MinToHourMin, millisecondsToMinSec } from "../utils/timeConvert";

function sumDurations(tracks) {
  return tracks.reduce((total, current) => {
    return total + current.track.duration_ms;
  }, 0);
}

export default function Playlist() {
  const { playlistId } = useParams();
  const playlist = usePlaylist(playlistId);

  const playlistDurationMs = playlist ? sumDurations(playlist.tracks.items) : 0;
  const playlistDurationMinSec = millisecondsToMinSec(playlistDurationMs);
  const playlistDurationHourMin = MinToHourMin(playlistDurationMinSec[0]);

  return (
    <>
      {!playlist ? (
        "loading..."
      ) : (
        <div>
          <header className="flex gap-5 items-end">
            <img src={playlist.images[0].url} className="w-[25%]" />
            <div>
              <p>Playlist</p>
              <h1 className="text-7xl font-extrabold">{playlist.name}</h1>
              <p>
                <Link className="font-bold hover:underline hover:underline-offset-1">
                  {playlist.owner.display_name}
                </Link>
                &#8226;
                {playlist.tracks.total} songs,
                {playlistDurationHourMin[0] > 0 ? (
                  <>
                    about {playlistDurationHourMin[0]} hr
                    {playlistDurationHourMin[1]} min
                  </>
                ) : (
                  <>
                    {playlistDurationMinSec[0]} min {playlistDurationMinSec[1]}{" "}
                    sec
                  </>
                )}
              </p>
            </div>
          </header>

          <section>
            <div className="flex items-center gap-6">
              <PlayButton />
              <FlatButton>
                <FontAwesomeIcon icon={faEllipsis} size="lg" />
              </FlatButton>
            </div>

            <PlaylistTable tracks={playlist.tracks.items} />
          </section>

          <section>
            <div>
              <h2>Recommended</h2>
              <p>Based on what&apos;s in this playlist</p>
            </div>
          </section>
        </div>
      )}
    </>
  );
}
