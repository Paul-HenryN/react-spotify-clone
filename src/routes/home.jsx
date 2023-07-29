import MediaGrid from "../components/MediaGrid";
import Section from "../components/Section";

export default function Home() {
  return (
    <>
      <h1 className="sr-only">Home</h1>

      <Section heading="Focus">
        <MediaGrid />
      </Section>
    </>
  );
}
