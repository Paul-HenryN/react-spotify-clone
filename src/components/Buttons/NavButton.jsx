import CircularButton from "./CircularButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

export default function NavButton({ back, disabled }) {
  return (
    <CircularButton
      className={`w-8 bg-neutral-950 ${
        disabled ? "cursor-not-allowed" : "cursor-pointer"
      }`}
    >
      <FontAwesomeIcon
        color={disabled ? "gray" : "white"}
        size="lg"
        icon={back ? faAngleLeft : faAngleRight}
      />
    </CircularButton>
  );
}
