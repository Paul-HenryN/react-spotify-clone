import MainButton from "./MainButton";

export default function SecondaryButton({ type, href, className, children }) {
  return (
    <MainButton
      type={type}
      href={href}
      className={`px-5 text-sm bg-white ${className}`}
    >
      {children}
    </MainButton>
  );
}
