import SideMenu from "./SideMenu";
import SectionContainer from "./SectionContainer";
import RoundedButton from "./Buttons/RoundedButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen, faPlus, faGlobe } from "@fortawesome/free-solid-svg-icons";
import CircularButton from "./Buttons/CircularButton";
import SecondaryButton from "./Buttons/SecondaryButton";
import BorderedButton from "./Buttons/BorderedButton";
import VerticalCard from "./Cards/VerticalCard";
import { useEffect, useState, useRef } from "react";
import SideLibrary from "./SideLibrary";

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
    <div className="flex relative overflow-y-hidden">
      <aside
        className="relative flex flex-col gap-2"
        style={{ width: `${width / 16}rem` }}
      >
        <SideMenu />

        <SideLibrary />
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
