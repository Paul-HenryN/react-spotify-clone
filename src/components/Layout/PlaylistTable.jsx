import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import PlaylistTrackRow from "./PlaylistTrackRow";

export default function PlaylistTable({ tracks }) {
  return (
    <table>
      <thead>
        <th>#</th>
        <th>Title</th>
        <th>Album</th>
        <th>Date added</th>
        <th>
          <FontAwesomeIcon icon={faClock} />
        </th>
      </thead>

      <tbody>
        {tracks.map((trackInfo, i) => (
          <PlaylistTrackRow
            number={i + 1}
            key={trackInfo.track.name}
            trackInfo={trackInfo}
          />
        ))}
      </tbody>
    </table>
  );
}
