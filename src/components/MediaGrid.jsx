import { Link } from "react-router-dom";
import MediaCard from "./Cards/MediaCard/MediaCard";

export default function MediaGrid({ media }) {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(175px,1fr))] grid-rows-1 auto-rows-[0px] overflow-y-hidden gap-x-7">
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
    </div>
  );
}
