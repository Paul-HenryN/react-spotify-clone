import FlatButton from "./FlatButton";

export default function PrimaryButton({ type, className, label }) {
  return (
    <FlatButton
      type={type}
      className={`justify-center text-black font-bold py-3 hover:scale-105  bg-brand ${className}`}
    >
      {label}
    </FlatButton>
  );
}
