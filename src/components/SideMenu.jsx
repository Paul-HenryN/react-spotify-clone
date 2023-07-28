import SectionContainer from "./SectionContainer";
import { faHome, faSearch } from "@fortawesome/free-solid-svg-icons";
import { routes } from "../shared/routes";
import SideMenuButton from "./Buttons/SideMenuButton";
import { useLocation } from "react-router-dom";

const buttons = [
  {
    icon: faHome,
    label: "Home",
    href: routes.HOME,
  },
  {
    icon: faSearch,
    label: "Search",
    href: routes.SEARCH,
  },
];

export default function SideMenu() {
  const location = useLocation();

  return (
    <SectionContainer className="gap-6 px-6 py-5">
      {buttons.map((button) => (
        <SideMenuButton
          key={button.label}
          href={button.href}
          icon={button.icon}
          label={button.label}
          active={location.pathname === button.href}
        />
      ))}
    </SectionContainer>
  );
}
