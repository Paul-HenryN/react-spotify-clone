import FlatButton from "./FlatButton";

export default function CircularButton({ type, href, className, children }) {
  return (
    <FlatButton
      type={type}
      href={href}
      className={`flex rounded-[50%] aspect-square items-center justify-center ${className}`}
    >
      {children}
    </FlatButton>
  );
}
