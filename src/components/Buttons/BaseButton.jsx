export default function BaseButton({ type, className, href = "", children }) {
  const btnClass = `flex items-center rounded-3xl outline-none focus:outline-[3px] focus:outline-white ${className}`;

  return href === "" ? (
    <button type={type} className={btnClass}>
      {children}
    </button>
  ) : (
    <a href={href} className={btnClass}>
      {children}
    </a>
  );
}
