import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BaseButton from "./BaseButton";

export default function ThirdPartyAuthButton({ icon, provider }) {
  return (
    <BaseButton className="gap-6 border-[1px] border-zinc-500 hover:border-white px-10 py-3 font-bold">
      <FontAwesomeIcon icon={icon} />
      Continue with {provider}
    </BaseButton>
  );
}
