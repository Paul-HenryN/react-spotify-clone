import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import RoundedButton from "./RoundedButton";

export default function ThirdPartyAuthButton({ icon, provider }) {
  return (
    <RoundedButton className="justify-center gap-6 px-8 py-3 font-bold">
      <FontAwesomeIcon size="lg" icon={icon} />
      <span className="mx-auto">Continue with {provider}</span>
    </RoundedButton>
  );
}
