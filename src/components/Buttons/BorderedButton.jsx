import RoundedButton from "./RoundedButton";

export default function BorderedButton({ type, href, className, children }) {
  return (
    <RoundedButton
      type={type}
      href={href}
      className={`border-[1px] px-3 border-zinc-500 hover:border-white ${className}`}
    >
      {children}
    </RoundedButton>
  );
}
