import FlatButton from "./FlatButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SideMenuButton({ icon, label, href, active = false }) {
  return (
    <FlatButton
      href={href}
      className={`flex gap-5 text-md font-bold ${
        active ? "text-white" : "text-neutral-400"
      }`}
    >
      <FontAwesomeIcon size="xl" icon={icon} />
      {label}
    </FlatButton>
  );
}
