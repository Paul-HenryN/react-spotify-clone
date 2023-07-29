import MediaGrid from "../components/MediaGrid";
import Section from "../components/Section";
import useFeaturedPlaylists from "../hooks/useFeaturedPlaylists";

export default function Home() {
  const featuredPlaylists = useFeaturedPlaylists(5);

  console.log(featuredPlaylists);

  return (
    <>
      <h1 className="sr-only">Home</h1>

      <Section heading="Focus">
        <MediaGrid media={featuredPlaylists ? featuredPlaylists.items : null} />
      </Section>
    </>
  );
}
