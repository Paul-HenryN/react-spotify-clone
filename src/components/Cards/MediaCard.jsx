import VerticalCard from "./VerticalCard";
import PlayButton from "../Buttons/PlayButton";

export default function MediaCard({ name, description, imgUrl }) {
  return (
    <VerticalCard className="relative bg-neutral-800 hover:bg-neutral-700 p-4 rounded-md transition-all [&:hover>.mediacard-playbtn]:opacity-100 [&:hover>.mediacard-playbtn]:translate-y-[-8px]">
      <img
        src={imgUrl}
        className="rounded-[0.25rem] shadow-lg shadow-neutral-950 mb-5"
      />

      <PlayButton className="mediacard-playbtn opacity-0 absolute right-[15%] top-[40%] transition-[translate_opacity] duration-300" />

      <div>
        <p className="font-bold mb-2 whitespace-nowrap overflow-hidden text-ellipsis">
          {name}
        </p>
        <p className="h-[3rem] overflow-hidden">{description}</p>
      </div>
    </VerticalCard>
  );
}
