import TrackHeader from "../components/MediaHeader/TrackHeader";
import useTrack from "../hooks/useTrack";
import { useParams } from "react-router-dom";

export default function Track() {
  const { trackId } = useParams();
  const track = useTrack(trackId);

  return (
    <div>
      {!track ? (
        <p>loading...</p>
      ) : (
        <>
          <TrackHeader track={track} />
        </>
      )}
    </div>
  );
}
