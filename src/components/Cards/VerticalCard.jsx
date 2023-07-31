import Card from "./Card";

export default function VerticalCard({ className, children }) {
  return <Card className={`flex-col ${className}`}>{children}</Card>;
}
