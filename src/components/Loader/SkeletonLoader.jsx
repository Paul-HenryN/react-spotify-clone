import CardSkeleton from "../Skeleton/CardSkeleton";
import SectionSkeleton from "../Skeleton/SectionSkeleton";

export default function SkeletonLoader() {
  return (
    <div className="flex flex-col gap-12">
      <div className="flex flex-col gap-5">
        <div className="bg-neutral-700 w-[40%] h-12 rounded-3xl" />

        <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-3">
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
        </div>
      </div>

      <SectionSkeleton />
      <SectionSkeleton />
      <SectionSkeleton />
    </div>
  );
}
