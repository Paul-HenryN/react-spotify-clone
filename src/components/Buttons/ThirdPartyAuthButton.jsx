import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BorderedButton from "./BorderedButton";

export default function ThirdPartyAuthButton({ icon, provider }) {
  return (
    <BorderedButton className="flex gap-6 px-8 py-3 font-bold">
      <FontAwesomeIcon size="lg" icon={icon} />
      <span className="mx-auto">Continue with {provider}</span>
    </BorderedButton>
  );
}
