import FlatButton from "./FlatButton";

export default function RoundedButton({ type, className, href, children }) {
  return (
    <FlatButton type={type} href={href} className={`rounded-3xl ${className}`}>
      {children}
    </FlatButton>
  );
}
