import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import PlaylistTrackRow from "./PlaylistTrackRow";
import PlaylistGrid from "./PlaylistGrid";

export default function PlaylistTable({ tracks }) {
  return (
    <table className="relative w-full text-neutral-300">
      <PlaylistGrid className="sticky bg-neutral-800 top-[70px] border-b-[1px] border-neutral-700 px-12 pb-2 mb-5">
        <th>#</th>
        <th>Title</th>
        <th>Album</th>
        <th>Date added</th>
        <th>
          <FontAwesomeIcon icon={faClock} />
        </th>
      </PlaylistGrid>

      {tracks.map((trackInfo, i) => (
        <PlaylistTrackRow
          number={i + 1}
          key={trackInfo.track.name}
          trackInfo={trackInfo}
        />
      ))}
    </table>
  );
}
