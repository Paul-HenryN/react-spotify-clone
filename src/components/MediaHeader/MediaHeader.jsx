import PlayButton from "../Buttons/PlayButton";
import FlatButton from "../Buttons/FlatButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis, faHeart } from "@fortawesome/free-solid-svg-icons";

export default function MediaHeader({
  className,
  mediaType,
  coverImage,
  mediaTitle,
  children,
}) {
  return (
    <header className={className}>
      <div className="flex gap-6 items-end">
        <img src={coverImage} className="w-60 shadow-xl shadow-neutral-900" />

        <div className="flex flex-col justify-between">
          <p className="text-sm font-bold">{mediaType}</p>

          <h1 className="text-[1.5rem] lg:text-[2.4rem] xl:text-[4.2rem] font-extrabold mb-5 whitespace-nowrap">
            {mediaTitle}
          </h1>
          <div className="flex flex-col gap-1">{children}</div>
        </div>
      </div>

      <div className="flex items-center gap-6 py-8 text-neutral-300">
        <PlayButton />

        <FlatButton className="hover:text-white">
          <FontAwesomeIcon icon={faHeart} size="2x" />
        </FlatButton>

        <FlatButton className="hover:text-white">
          <FontAwesomeIcon icon={faEllipsis} size="lg" />
        </FlatButton>
      </div>
    </header>
  );
}
