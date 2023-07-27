import { Link } from "react-router-dom";

export default function FlatButton({ type, className, href = "", children }) {
  const btnClass = `flex items-center focus:outline-[3px] focus:outline-white ${className}`;

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
