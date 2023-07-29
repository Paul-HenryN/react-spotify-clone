export default function Section({ heading, children }) {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-10">{heading}</h2>
      {children}
    </section>
  );
}
