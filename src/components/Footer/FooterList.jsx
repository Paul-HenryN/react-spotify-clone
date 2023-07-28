import FlatButton from "../Buttons/FlatButton";

export default function FooterList({ title, links }) {
  return (
    <ul className="flex flex-col gap-2">
      <li className="font-bold">{title}</li>

      {links.map((link) => (
        <li key={link}>
          <FlatButton href="#">{link}</FlatButton>
        </li>
      ))}
    </ul>
  );
}
