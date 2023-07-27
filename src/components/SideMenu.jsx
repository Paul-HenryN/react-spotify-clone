import SectionContainer from "./SectionContainer";
import { faHome, faSearch } from "@fortawesome/free-solid-svg-icons";
import { routes } from "../shared/routes";
import SideMenuButton from "./Buttons/SideMenuButton";

const buttons = [
  {
    icon: faHome,
    label: "Home",
    href: routes.HOME,
  },
  {
    icon: faSearch,
    label: "Search",
    href: routes.HOME,
  },
];

export default function SideMenu() {
  return (
    <SectionContainer className="gap-5">
      {buttons.map((button) => (
        <SideMenuButton
          key={button.label}
          href={button.href}
          icon={button.icon}
          label={button.label}
          active
        />
      ))}
    </SectionContainer>
  );
}
