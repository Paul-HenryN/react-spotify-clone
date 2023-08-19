import PlayCard from "./PlayCard";

export default function ArtistCard({ name, images }) {
  const head = <img src={images[0].url} alt={name} />;

  return <PlayCard head={head}></PlayCard>;
}
