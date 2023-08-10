import { Link, useParams } from "react-router-dom";
import usePlaylist from "../hooks/usePlaylist";
import PlayButton from "../components/Buttons/PlayButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FlatButton from "../components/Buttons/FlatButton";
import PlaylistTable from "../components/Layout/PlaylistTable";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { MinToHourMin, millisecondsToMinSec } from "../utils/timeConvert";
import PlaylistHeader from "../components/MediaHeader/PlaylistHeader";

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
    <div className="mt-12">
      {!playlist ? (
        "loading..."
      ) : (
        <>
          <PlaylistHeader
            coverImage={playlist.images[0].url}
            title={playlist.name}
            description={playlist.description}
            owner={playlist.owner.display_name}
            tracksNumber={playlist.tracks.total}
            duration={
              playlistDurationHourMin[0] > 0 ? (
                <>
                  about {playlistDurationHourMin[0]} hr
                  {playlistDurationHourMin[1]} min
                </>
              ) : (
                <>
                  {playlistDurationMinSec[0]} min {playlistDurationMinSec[1]}{" "}
                  sec
                </>
              )
            }
          />

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
