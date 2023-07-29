export default function Card({ className, children }) {
  return (
    <div className={`flex flex-col rounded-lg ${className}`}>{children}</div>
  );
}
