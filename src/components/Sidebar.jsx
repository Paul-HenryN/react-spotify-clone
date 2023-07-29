import SideMenu from "./SideMenu";
import SectionContainer from "./SectionContainer";
import RoundedButton from "./Buttons/RoundedButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen, faPlus, faGlobe } from "@fortawesome/free-solid-svg-icons";
import CircularButton from "./Buttons/CircularButton";
import SecondaryButton from "./Buttons/SecondaryButton";
import BorderedButton from "./Buttons/BorderedButton";
import Card from "./Cards/Card";
import { useEffect, useState, useRef } from "react";

const defaultWidth = 350;
const minWidth = 275;
const maxWidth = 425;

export default function Sidebar() {
  const [width, setWidth] = useState(
    parseInt(localStorage.getItem("sidebarWidth")) || defaultWidth
  );

  let isDragged = useRef(false);

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      if (!isDragged.current) {
        return;
      }

      document.body.style.userSelect = "none";

      const currentWidth =
        parseInt(localStorage.getItem("sidebarWidth")) || defaultWidth;

      const newWidth = currentWidth + e.movementX;

      if (newWidth >= minWidth && newWidth <= maxWidth) {
        setWidth(newWidth);
      }
    });

    window.addEventListener("mouseup", () => {
      document.body.style.userSelect = "auto";
      isDragged.current = false;
    });
  }, []);

  useEffect(() => {
    localStorage.setItem("sidebarWidth", width);
  }, [width]);

  return (
    <div className="flex relative overflow-y-auto">
      <aside
        className="relative flex flex-col gap-2"
        style={{ width: `${width / 16}rem` }}
      >
        <SideMenu />

        <SectionContainer className="gap-5 h-full">
          <div className="flex justify-between items-center px-3">
            <RoundedButton className="gap-3">
              <FontAwesomeIcon icon={faBookOpen} />
              Your Library
            </RoundedButton>

            <CircularButton className="p-2">
              <FontAwesomeIcon icon={faPlus} />
            </CircularButton>
          </div>

          <div className="flex flex-col gap-6 h-36 pb-10 overflow-auto px-2">
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

          <div className="flex flex-col gap-10 items-start mt-5 px-6">
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

      {/* Handle */}
      <div
        className="w-2 bg-transparent cursor-col-resize"
        onMouseDown={() => {
          isDragged.current = true;
        }}
      />
    </div>
  );
}
