import { Outlet } from "react-router-dom";
import { routes } from "../shared/routes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faBookOpen,
  faGlobe,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import SectionContainer from "../components/SectionContainer";
import SideMenu from "../components/SideMenu";
import RoundedButton from "../components/Buttons/RoundedButton";
import CircularButton from "../components/Buttons/CircularButton";
import Card from "../components/Card";
import SecondaryButton from "../components/Buttons/SecondaryButton";
import BorderedButton from "../components/Buttons/BorderedButton";
import Navbar from "../components/Navbar";
import FlatButton from "../components/Buttons/FlatButton";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Footer from "../components/Footer/Footer";

export default function Root() {
  return (
    <div className="h-screen grid overflow-hidden grid-cols-[min-content_auto] gap-2 p-2 bg-black">
      <aside className="flex flex-col gap-2 overflow-auto resize-x min-w-[18rem] w-[20rem] max-w-[26rem]">
        <SideMenu />

        <SectionContainer className="gap-5 h-full">
          <div className="flex justify-between items-center">
            <RoundedButton className="gap-3">
              <FontAwesomeIcon icon={faBookOpen} />
              Your Library
            </RoundedButton>

            <CircularButton className="p-2">
              <FontAwesomeIcon icon={faPlus} />
            </CircularButton>
          </div>

          <div className="flex flex-col gap-6 h-36 pb-10 overflow-auto">
            <Card className="gap-3 items-start bg-neutral-800 p-4">
              <p className="font-bold">Create your first playlist</p>
              <p className="text-sm font-bold">
                It&apos;s easy, we will help you
              </p>
              <SecondaryButton className="px-5">
                Create playlist
              </SecondaryButton>
            </Card>

            <Card className="gap-3 items-start bg-neutral-800 p-4">
              <p className="font-bold">
                Let&apos;s find some podcasts to follow
              </p>
              <p className="text-sm font-bold">
                We&apos;ll keep you updated on new episodes
              </p>
              <SecondaryButton className="px-5">
                Browse podcasts
              </SecondaryButton>
            </Card>
          </div>

          <div className="flex flex-col gap-10 items-start mt-5">
            <ul className="flex flex-wrap text-xs text-neutral-400 gap-3">
              <li>
                <a href="#">Legal</a>
              </li>
              <li>
                <a href="#">Privacy Center</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Cookies</a>
              </li>
              <li>
                <a href="#">About Ads</a>
              </li>
              <li>
                <a href="#">Accessibilty</a>
              </li>
              <li>
                <a href="#">Cookies</a>
              </li>
            </ul>

            <BorderedButton className="hover:scale-105 gap-1 text-sm font-bold">
              <FontAwesomeIcon icon={faGlobe} />
              English
            </BorderedButton>
          </div>
        </SectionContainer>
      </aside>

      <SectionContainer className="overflow-scroll relative bg-local bg-gradient-to-b from-neutral-800 via-neutral-900 to-neutral-900">
        <header className="absolute inset-0 bottom-auto px-7 py-3 bg-neutral-900">
          <Navbar />
        </header>

        <main className="mt-16 min-h-[32rem]">
          <Outlet />
        </main>

        <Footer />
      </SectionContainer>

      <aside className="col-span-2 flex justify-between items-center bg-gradient-to-r from-accent-1 to-accent-2 px-4 py-3">
        <p>
          <span className="block text-sm tracking-wider">
            PREVIEW OF SPOTIFY
          </span>
          Sign up to get unlimited songs and podcasts with occasional ads. No
          credit card needed.
        </p>

        <SecondaryButton href="#" className="px-8 py-3">
          Sign up free
        </SecondaryButton>
      </aside>
    </div>
  );
}
