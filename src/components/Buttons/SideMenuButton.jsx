import FlatButton from "./FlatButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SideMenuButton({ icon, label, href, active = false }) {
  return (
    <FlatButton
      href={href}
      className={`gap-4 text-md font-bold ${
        active ? "text-white" : "text-neutral-400"
      }`}
    >
      <FontAwesomeIcon size="lg" icon={icon} />
      {label}
    </FlatButton>
  );
}
