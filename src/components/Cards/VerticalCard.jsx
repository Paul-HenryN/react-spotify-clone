import Card from "./Card";

export default function VerticalCard({ className, head, children }) {
  return (
    <Card className={`flex-col ${className}`} head={head}>
      {children}
    </Card>
  );
}
