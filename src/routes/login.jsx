import Logo from "../components/Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGoogle,
  faApple,
} from "@fortawesome/free-brands-svg-icons";

export default function Login() {
  return (
    <div className="min-h-screen font-body bg-black">
      <header>
        <nav className="pt-12 px-[9%] bg-black">
          <a href="/">
            <Logo className="w-[25%] min-w-[5rem]" />
          </a>
        </nav>
      </header>

      <main>
        <h1>Log in to Spotify</h1>

        <div>
          <button className="border-2 border-white">
            <FontAwesomeIcon icon={faGoogle} />
            Continue with Google
          </button>
          <button className="border-2 border-white">
            <FontAwesomeIcon icon={faFacebook} /> Continue with Facebook
          </button>
          <button className="border-2 border-white">
            <FontAwesomeIcon icon={faApple} /> Continue with FacebookContinue
            with Apple
          </button>
        </div>

        <form>
          <div>
            <label htmlFor="username">Email or username</label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Email or username"
            />
          </div>
          <div>
            <label htmlFor="username">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
            />
          </div>

          <button type="submit">Log in</button>
        </form>

        <div>
          <a href="#">Forgot your password ?</a>

          <div>
            <p>Don&apos;t have an account ?</p>
            <a href="#">Sign up for Spotify</a>
          </div>
        </div>
      </main>
    </div>
  );
}
