import NavButton from "./Buttons/NavButton";
import FlatButton from "./Buttons/FlatButton";
import SecondaryButton from "./Buttons/SecondaryButton";
import { routes } from "../shared/routes";

export default function Navbar() {
  return (
    <nav className="flex justify-between">
      <div className="flex gap-3 justify-center items-center">
        <NavButton back />
        <NavButton disabled />
      </div>

      <ul role="menu" className="flex items-center gap-10">
        <li>
          <FlatButton
            href="#"
            className="text-neutral-400 hover:text-white font-bold hover:scale-105"
          >
            Sign up
          </FlatButton>
        </li>
        <li>
          <SecondaryButton href={routes.LOGIN} className="px-8 py-3">
            Log in
          </SecondaryButton>
        </li>
      </ul>
    </nav>
  );
}
