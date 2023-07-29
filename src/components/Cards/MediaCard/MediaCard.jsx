import Card from "../Card";
import img from "../../../assets/img.jpg";

export default function MediaCard() {
  return (
    <Card className="bg-neutral-950 p-3">
      <img src={img} />
      <div>
        <p>Peaceful Piano</p>
        <p className="max-h-[3rem] overflow-hidden">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id ducimus
          suscipit quam animi sequi facere repellendus inventore
        </p>
      </div>
    </Card>
  );
}
