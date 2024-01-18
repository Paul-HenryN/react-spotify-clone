import SectionContainer from "./SectionContainer";
import RoundedButton from "./Buttons/RoundedButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListDots, faPlus, faGlobe } from "@fortawesome/free-solid-svg-icons";
import CircularButton from "./Buttons/CircularButton";
import VerticalCard from "./Cards/VerticalCard";
import SecondaryButton from "./Buttons/SecondaryButton";
import BorderedButton from "./Buttons/BorderedButton";
import FlatButton from "./Buttons/FlatButton";

export default function SideLibrary() {
  return (
    <SectionContainer className="h-full justify-stretch items-stretch">
      <div className="relative flex justify-between items-center px-5 py-4 shadow-lg shadow-neutral-950">
        <RoundedButton className="flex gap-3 items-center px-2 py-1 text-neutral-400 hover:text-white transition-colors duration-300">
          <FontAwesomeIcon icon={faListDots} />
          Your Library
        </RoundedButton>

        <CircularButton className="w-8 hover:bg-neutral-800 text-neutral-400 hover:text-white transition-colors">
          <FontAwesomeIcon icon={faPlus} />
        </CircularButton>
      </div>

      <div className="flex flex-col gap-6 h-40 pb-10 overflow-auto px-2">
        <VerticalCard className="gap-3 items-start bg-neutral-800 p-4 rounded-lg">
          <p className="font-bold">Create your first playlist</p>
          <p className="text-sm font-bold">It&apos;s easy, we will help you</p>
          <SecondaryButton className="px-5 py-2">
            Create playlist
          </SecondaryButton>
        </VerticalCard>

        <VerticalCard className="gap-3 items-start bg-neutral-800 p-4 rounded-lg">
          <p className="font-bold">Let&apos;s find some podcasts to follow</p>
          <p className="text-sm font-bold">
            We&apos;ll keep you updated on new episodes
          </p>
          <SecondaryButton className="px-5 py-2">
            Browse podcasts
          </SecondaryButton>
        </VerticalCard>
      </div>

      <div className="flex flex-col gap-10 items-start px-6 justify-between py-5">
        <ul className="flex flex-wrap text-[0.7rem] text-neutral-400 gap-3">
          <li>
            <FlatButton href="#">Legal</FlatButton>
          </li>
          <li>
            <FlatButton href="#">Privacy Center</FlatButton>
          </li>
          <li>
            <FlatButton href="#">Privacy Policy</FlatButton>
          </li>
          <li>
            <FlatButton href="#">Cookies</FlatButton>
          </li>
          <li>
            <FlatButton href="#">About Ads</FlatButton>
          </li>
          <li>
            <FlatButton href="#">Accessibilty</FlatButton>
          </li>
          <li>
            <FlatButton href="#">Cookies</FlatButton>
          </li>
        </ul>

        <BorderedButton className="hover:scale-105 px-4 py-1 flex items-center gap-1 text-sm font-bold">
          <FontAwesomeIcon icon={faGlobe} size="sm" />
          English
        </BorderedButton>
      </div>
    </SectionContainer>
  );
}
