import { Outlet } from "react-router-dom";
import { routes } from "../shared/routes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faBookOpen,
  faGlobe,
  faHome,
  faPlus,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

export default function Root() {
  return (
    <div className="min-h-screen bg-black">
      <aside>
        <div className="bg-neutral-900">
          <a href={routes.HOME}>
            <FontAwesomeIcon icon={faHome} />
            Home
          </a>

          <a href={routes.HOME}>
            <FontAwesomeIcon icon={faSearch} />
            Search
          </a>
        </div>

        <div className="bg-neutral-900">
          <div>
            <button title="Collapse your library">
              <FontAwesomeIcon icon={faBookOpen} />
              Your library
            </button>

            <button title="Create playlist or folder">
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </div>

          <div>
            <div className="bg-neutral-700">
              <p>Create your first playlist</p>
              <p>It&apos;s easy, we will help you</p>
              <button>Create playlist</button>
            </div>

            <div className="bg-neutral-700">
              <p>Let&apos;s find some podcasts to follow</p>
              <p>We&apos;ll keep you updated on new episodes</p>
              <button>Create playlist</button>
            </div>
          </div>

          <div>
            <ul>
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

            <button>
              <FontAwesomeIcon icon={faGlobe} />
              English
            </button>
          </div>
        </div>
      </aside>

      <header className="bg-neutral-900">
        <nav>
          <div>
            <button title="Go back">
              <FontAwesomeIcon icon={faAngleLeft} />
            </button>
            <button title="Go forward">
              {" "}
              <FontAwesomeIcon icon={faAngleRight} />
            </button>
          </div>

          <ul role="menu">
            <li>
              <a href="#">Sign up</a>
              <a href={routes.LOGIN}>Log in</a>
            </li>
          </ul>
        </nav>
      </header>

      <aside>
        <p>PREVIEW OF SPOTIFY</p>
        <p>
          Sign up to get unlimited songs and podcasts with occasional ads. No
          credit card needed.
        </p>
      </aside>

      <main>
        <Outlet />
      </main>
    </div>
  );
}
