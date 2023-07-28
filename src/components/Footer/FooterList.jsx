import FlatButton from "../Buttons/FlatButton";

export default function FooterList({ title, links }) {
  return (
    <ul className="flex flex-col gap-2">
      <li className="font-bold">{title}</li>

      {links.map((link) => (
        <li key={link}>
          <FlatButton
            href="#"
            className="text-neutral-400 hover:text-white hover:underline hover:underline-offset-1"
          >
            {link}
          </FlatButton>
        </li>
      ))}
    </ul>
  );
}
