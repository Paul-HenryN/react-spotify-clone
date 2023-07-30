import Card from "../Card";

export default function MediaCard({ name, description, imgUrl }) {
  return (
    <Card className="bg-neutral-800 hover:bg-neutral-700 p-4 transition-all">
      <img
        src={imgUrl}
        className="rounded-[0.25rem] shadow-lg shadow-neutral-950 mb-5"
      />
      <div>
        <p className="font-bold mb-2 whitespace-nowrap overflow-hidden text-ellipsis">
          {name}
        </p>
        <p className="h-[3rem] overflow-hidden">{description}</p>
      </div>
    </Card>
  );
}
