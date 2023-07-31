import Card from "../Cards/Card";

export default function CardSkeleton() {
  return (
    <Card className="h-20 rounded-md overflow-hidden">
      <div className="bg-neutral-600 w-[40%]" />
      <div className="flex justify-center items-center w-full bg-neutral-700">
        <div className="bg-neutral-600 w-[85%] h-6 rounded-3xl" />
      </div>
    </Card>
  );
}
