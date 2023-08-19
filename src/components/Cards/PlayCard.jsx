import VerticalCard from "./VerticalCard";
import PlayButton from "../Buttons/PlayButton";

export default function PlayCard({ head, body, children }) {
  return (
    <VerticalCard
      head={head}
      className="relative bg-neutral-800 hover:bg-neutral-700 p-4 rounded-md transition-all [&:hover>.mediacard-playbtn]:opacity-100 [&:hover>.mediacard-playbtn]:translate-y-[-8px]"
    >
      <PlayButton className="mediacard-playbtn opacity-0 absolute right-[15%] top-[40%] transition-[translate_opacity] duration-300" />

      {children}
    </VerticalCard>
  );
}
