import { useParams } from "react-router-dom";
import usePlaylist from "../hooks/usePlaylist";
import PlaylistTable from "../components/Layout/PlaylistTable";
import PlaylistHeader from "../components/MediaHeader/PlaylistHeader";
import DotLoader from "../components/Loader/DotLoader";

export default function Playlist() {
  const { playlistId } = useParams();
  const [playlist] = usePlaylist(playlistId);

  return (
    <div className="mt-20">
      {!playlist ? (
        <div className="flex items-center justify-center h-[15rem]">
          <DotLoader />
        </div>
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
