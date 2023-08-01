export default function PlaylistGrid({ className, children }) {
  return (
    <div
      className={`grid col-span-5 grid-cols-[1fr_12fr_10fr_10fr_1fr] ${className}`}
    >
      {children}
    </div>
  );
}
