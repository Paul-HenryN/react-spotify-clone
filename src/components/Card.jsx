export default function Card({ className, children }) {
  return <div className={`rounded-lg ${className}`}>{children}</div>;
}
