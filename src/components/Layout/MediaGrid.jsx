import { Link } from "react-router-dom";
import MediaCard from "../Cards/MediaCard";
import ResizingGrid from "./ResizingGrid";

export default function MediaGrid({ media, mediaPageRoute }) {
  return (
    <ResizingGrid className="gap-x-7">
      {media.map((medium, i) => (
        <Link key={i} to={`${mediaPageRoute}/${medium.id}`}>
          <MediaCard
            imgUrl={medium.images[0].url}
            name={medium.name}
            description={medium.description}
          />
        </Link>
      ))}
    </ResizingGrid>
  );
}
