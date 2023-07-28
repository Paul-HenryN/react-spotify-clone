import FlatButton from "./FlatButton";

export default function RoundedButton({ type, className, href, children }) {
  return (
    <FlatButton
      type={type}
      href={href}
      className={`p-2 rounded-3xl ${className}`}
    >
      {children}
    </FlatButton>
  );
}
