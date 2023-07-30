import Card from "../Card";
import CircularButton from "../../Buttons/CircularButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

export default function MediaCard({ name, description, imgUrl }) {
  return (
    <Card className="relative bg-neutral-800 hover:bg-neutral-700 p-4 transition-all [&:hover>.mediacard-playbtn]:opacity-100 [&:hover>.mediacard-playbtn]:translate-y-[-10px]">
      <img
        src={imgUrl}
        className="rounded-[0.25rem] shadow-lg shadow-neutral-950 mb-5"
      />

      <CircularButton className="opacity-0 mediacard-playbtn absolute right-[15%] top-[50%] hover:scale-105 bg-brand p-5 transition-all duration-300">
        <FontAwesomeIcon icon={faPlay} color="black" size="lg" />
      </CircularButton>

      <div>
        <p className="font-bold mb-2 whitespace-nowrap overflow-hidden text-ellipsis">
          {name}
        </p>
        <p className="h-[3rem] overflow-hidden">{description}</p>
      </div>
    </Card>
  );
}
