export default function SectionContainer({ className, children }) {
  return (
    <div className={`flex flex-col bg-neutral-900 rounded-lg ${className}`}>
      {children}
    </div>
  );
}
