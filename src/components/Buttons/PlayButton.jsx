import CircularButton from "./CircularButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

export default function PlayButton({ className }) {
  return (
    <CircularButton className={`hover:scale-105 bg-brand w-14 ${className}`}>
      <FontAwesomeIcon icon={faPlay} color="black" size="lg" />
    </CircularButton>
  );
}
