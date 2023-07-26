import Logo from "../components/Logo";
import {
  faFacebook,
  faGoogle,
  faApple,
} from "@fortawesome/free-brands-svg-icons";
import ThirdPartyAuthButton from "../components/Buttons/ThirdPartyAuthButton";
import FormInput from "../components/FormInput";
import PrimaryButton from "../components/Buttons/PrimaryButton";
import Link from "../components/Link";

const authProviders = [
  {
    icon: faGoogle,
    name: "Google",
  },
  {
    icon: faFacebook,
    name: "Facebook",
  },
  {
    icon: faApple,
    name: "Apple",
  },
];

export default function Login() {
  return (
    <div className="min-h-screen font-body bg-black">
      <header>
        <nav className="py-11 px-[9%] bg-black">
          <a href="/" className="outline-none">
            <Logo className="w-[25%] min-w-[5rem]" />
          </a>
        </nav>
      </header>

      <main className="flex flex-col items-stretch gap-8 px-[9%] pb-20">
        <h1 className="text-2xl font-extrabold">Log in to Spotify</h1>

        <div className="flex flex-col gap-2">
          {authProviders.map((provider) => (
            <ThirdPartyAuthButton
              key={provider}
              icon={provider.icon}
              provider={provider.name}
            />
          ))}
        </div>

        <hr className="border-t-[1px] border-zinc-800" />

        <form className="flex flex-col gap-5">
          <FormInput
            type="text"
            id="username"
            name="username"
            hintText="Email or username"
          />

          <FormInput
            type="password"
            id="password"
            name="password"
            hintText="Password"
          />

          <PrimaryButton type="submit" className="mt-5" label="Log In" />
        </form>

        <div className="flex flex-col gap-5 items-center text-center">
          <Link to="#" text="Forgot your password ?" />

          <div className="flex flex-col gap-1">
            <p className="text-zinc-400">Don&apos;t have an account ?</p>
            <Link to="#" text="Sign up for Spotify" />
          </div>
        </div>
      </main>
    </div>
  );
}
