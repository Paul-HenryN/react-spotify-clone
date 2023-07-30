export default function Section({ heading, children }) {
  return (
    <section className="mb-10">
      <h2 className="text-2xl font-bold mb-7">{heading}</h2>
      {children}
    </section>
  );
}
