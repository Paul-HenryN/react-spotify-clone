import BaseButton from "./BaseButton";

export default function PrimaryButton({ type, className, label }) {
  return (
    <BaseButton
      type={type}
      className={`justify-center text-black font-bold py-3 hover:scale-105  bg-brand ${className}`}
    >
      {label}
    </BaseButton>
  );
}
