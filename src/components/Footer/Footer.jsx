import CircularButton from "../Buttons/CircularButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import FooterList from "./FooterList";

const companyLinks = ["About", "Jobs", "For the record"];

const communityLinks = [
  "For Artists",
  "Developers",
  "Advertising",
  "Investors",
  "Vendors",
];

const usefulLinks = ["Support", "Free Mobile App"];

const socialIcons = [faInstagram, faTwitter, faFacebook];

export default function Footer() {
  return (
    <footer className="flex flex-col gap-9">
      <div className="flex justify-between gap-10">
        <div className="flex flex-wrap gap-x-28 gap-y-10">
          <FooterList title="Company" links={companyLinks} />

          <FooterList title="Communities" links={communityLinks} />

          <FooterList title="Useful links" links={usefulLinks} />
        </div>

        <ul className="flex gap-3">
          {socialIcons.map((icon, i) => (
            <li key={`social${i}`}>
              <CircularButton className="p-3 bg-neutral-700 hover:bg-neutral-500">
                <FontAwesomeIcon size="lg" icon={icon}></FontAwesomeIcon>
              </CircularButton>
            </li>
          ))}
        </ul>
      </div>

      <hr className="border-t-neutral-600" />

      <p className="text-sm text-neutral-400">&copy; 2023 Spotify AB</p>
    </footer>
  );
}
