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
  const [playlist] = usePlaylist(playlistId);

  const playlistDurationMs = playlist ? sumDurations(playlist.tracks.items) : 0;
  const playlistDurationMinSec = millisecondsToMinSec(playlistDurationMs);
  const playlistDurationHourMin = MinToHourMin(playlistDurationMinSec[0]);

  return (
    <div>
      {!playlist ? (
        "loading..."
      ) : (
        <>
          <header className="flex gap-6 items-end p-5">
            <img
              src={playlist.images[0].url}
              className="w-60 shadow-xl shadow-neutral-900"
            />

            <div className="flex flex-col justify-between">
              <p className="text-sm font-bold">Playlist</p>

              <h1 className="text-[1.6rem] lg:text-[3.5rem] xl:text-[5.5rem] font-extrabold mb-5">
                {playlist.name}
              </h1>
              <div className="flex flex-col gap-1">
                <p className="opacity-75">{playlist.description}</p>
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
                      {playlistDurationMinSec[0]} min{" "}
                      {playlistDurationMinSec[1]} sec
                    </>
                  )}
                </p>
              </div>
            </div>
          </header>

          <section>
            <div className="flex items-center gap-6 py-8 px-6">
              <PlayButton />
              <FlatButton>
                <FontAwesomeIcon icon={faEllipsis} size="lg" />
              </FlatButton>
            </div>

            <PlaylistTable tracks={playlist.tracks.items} />
          </section>
        </>
      )}
    </div>
  );
}
