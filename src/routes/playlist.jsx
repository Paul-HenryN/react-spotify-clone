import { useParams } from "react-router-dom";
import usePlaylist from "../hooks/usePlaylist";
import PlayButton from "../components/Buttons/PlayButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FlatButton from "../components/Buttons/FlatButton";
import PlaylistTable from "../components/Layout/PlaylistTable";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import PlaylistHeader from "../components/MediaHeader/PlaylistHeader";

export default function Playlist() {
  const { playlistId } = useParams();
  const [playlist] = usePlaylist(playlistId);

  return (
    <div className="mt-12">
      {!playlist ? (
        "loading..."
      ) : (
        <>
          <PlaylistHeader playlist={playlist} className="px-7" />

          <section>
            <PlaylistTable tracks={playlist.tracks.items} />
          </section>
        </>
      )}
    </div>
  );
}
