import { Link } from "react-router-dom";
import MediaCard from "../Cards/MediaCard";
import ResizingGrid from "./ResizingGrid";

export default function MediaGrid({ media }) {
  return (
    <ResizingGrid className="gap-x-7">
      {media
        ? media.map((medium, i) => (
            <Link key={i}>
              <MediaCard
                imgUrl={medium.images[0].url}
                name={medium.name}
                description={medium.description}
              />
            </Link>
          ))
        : "loading..."}
    </ResizingGrid>
  );
}
