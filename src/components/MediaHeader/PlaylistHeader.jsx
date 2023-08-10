import MediaHeader from "./MediaHeader";
import { Link } from "react-router-dom";

export default function PlaylistHeader({
  coverImage,
  title,
  description,
  owner,
  likesNumber,
  tracksNumber,
  duration,
}) {
  return (
    <MediaHeader
      mediaType="Playlist"
      coverImage={coverImage}
      mediaTitle={title}
    >
      <p className="opacity-75">{description}</p>

      <p>
        <Link className="font-bold hover:underline hover:underline-offset-1">
          {owner}
        </Link>
        &#8226;
        {tracksNumber} songs,
        {duration}
      </p>
    </MediaHeader>
  );
}
