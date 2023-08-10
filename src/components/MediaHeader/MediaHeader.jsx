export default function MediaHeader({
  mediaType,
  coverImage,
  mediaTitle,
  children,
}) {
  return (
    <header className="flex gap-6 items-end p-5">
      <img src={coverImage} className="w-60 shadow-xl shadow-neutral-900" />

      <div className="flex flex-col justify-between">
        <p className="text-sm font-bold">{mediaType}</p>

        <h1 className="text-[1.6rem] lg:text-[3.5rem] xl:text-[5.5rem] font-extrabold mb-5">
          {mediaTitle}
        </h1>
        <div className="flex flex-col gap-1">{children}</div>
      </div>
    </header>
  );
}
