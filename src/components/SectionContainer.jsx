export default function SectionContainer({ className, children }) {
  return (
    <div
      className={`flex flex-col bg-neutral-900 px-5 py-4 rounded-lg ${className}`}
    >
      {children}
    </div>
  );
}
