export default function Card({ className, children }) {
  return <div className={`flex ${className}`}>{children}</div>;
}
