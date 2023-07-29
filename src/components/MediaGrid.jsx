import MediaCard from "./Cards/MediaCard/MediaCard";

export default function MediaGrid() {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(125px,1fr))] grid-rows-1 auto-rows-[0px] overflow-y-hidden gap-x-7">
      <MediaCard />
      <MediaCard />
      <MediaCard />
      <MediaCard />
      <MediaCard />
    </div>
  );
}
