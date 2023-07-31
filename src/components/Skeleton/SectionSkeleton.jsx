import ResizingGrid from "../Layout/ResizingGrid";
import MediaCardSkeleton from "./MediaCardSkeleton";

export default function SectionSkeleton() {
  return (
    <div className="flex flex-col gap-5">
      <div className="bg-neutral-800 w-[20%] h-5 rounded-3xl" />

      <ResizingGrid className="gap-x-7">
        <MediaCardSkeleton />
        <MediaCardSkeleton />
        <MediaCardSkeleton />
        <MediaCardSkeleton />
        <MediaCardSkeleton />
      </ResizingGrid>
    </div>
  );
}
