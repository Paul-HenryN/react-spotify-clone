import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import RoundedButton from "./RoundedButton";

export default function ThirdPartyAuthButton({ icon, provider }) {
  return (
    <RoundedButton className="justify-center gap-6 border-[1px] border-zinc-500 hover:border-white px-8 py-3 font-bold">
      <FontAwesomeIcon size="lg" icon={icon} />
      <span className="mx-auto">Continue with {provider}</span>
    </RoundedButton>
  );
}
