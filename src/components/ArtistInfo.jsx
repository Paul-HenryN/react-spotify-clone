import { Link } from "react-router-dom";

export default function ArtistInfo({ artist }) {
  return (
    <div className="flex gap-3 items-center">
      <div className="bg-neutral-700 w-[5rem] aspect-square rounded-full" />

      <div className="font-bold">
        <p className="capitalize">{artist.type}</p>
        <p>{artist.name}</p>
      </div>
    </div>
  );
}
