import { Link } from "react-router-dom";

export default function FlatButton({ type, className, href = "", children }) {
  const btnClass = `focus:outline-[3px] focus:outline-white whitespace-nowrap ${className}`;

  return href === "" ? (
    <button type={type} className={btnClass}>
      {children}
    </button>
  ) : (
    <Link to={href} className={btnClass}>
      {children}
    </Link>
  );
}
