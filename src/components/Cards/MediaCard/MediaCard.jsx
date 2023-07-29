import Card from "../Card";

export default function MediaCard({ name, description, imgUrl }) {
  return (
    <Card className="bg-neutral-950 p-3">
      <img src={imgUrl} />
      <div>
        <p>{name}</p>
        <p className="h-[3rem] overflow-hidden">{description}</p>
      </div>
    </Card>
  );
}
