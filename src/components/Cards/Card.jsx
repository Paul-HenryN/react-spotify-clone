export default function Card({ className, head, children }) {
  return (
    <div className={`flex ${className}`}>
      {head}
      {children}
    </div>
  );
}
