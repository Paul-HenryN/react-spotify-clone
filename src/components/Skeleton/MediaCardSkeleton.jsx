import VerticalCard from "../Cards/VerticalCard";

export default function MediaCardSkeleton() {
  return (
    <VerticalCard className="bg-neutral-800 p-5 gap-4 rounded-md">
      <div className="bg-neutral-700 w-full aspect-square rounded-sm" />
      <div className="flex flex-col gap-4">
        <div className="bg-neutral-700 w-[90%] h-5 rounded-3xl" />
        <div className="bg-neutral-700 w-[60%] h-4 rounded-3xl" />
      </div>
    </VerticalCard>
  );
}
