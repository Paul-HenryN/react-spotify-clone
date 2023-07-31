export default function ResizingGrid({ className, children }) {
  return (
    <div
      className={`grid grid-cols-[repeat(auto-fit,minmax(175px,1fr))] grid-rows-1 auto-rows-[0px] overflow-y-hidden ${className}`}
    >
      {children}
    </div>
  );
}
