import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function DotLoader() {
  return (
    <FontAwesomeIcon
      className="animate__animated animate__infinite animate__pulse text-neutral-400"
      size="4x"
      icon={faEllipsis}
    />
  );
}
