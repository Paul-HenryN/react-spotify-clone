import MediaGrid from "../components/Layout/MediaGrid";
import Section from "../components/Section";
import SkeletonLoader from "../components/Skeleton/SkeletonLoader";
import useFeaturedPlaylists from "../hooks/useFeaturedPlaylists";
import { routes } from "../shared/routes";

export default function Home() {
  const featuredPlaylists = useFeaturedPlaylists(10);

  console.log(featuredPlaylists);

  return (
    <div className="px-7 mt-20">
      <h1 className="sr-only">Home</h1>

      {!featuredPlaylists ? (
        <SkeletonLoader />
      ) : (
        <>
          <Section heading="Focus">
            <MediaGrid
              mediaPageRoute={routes.PLAYLIST}
              media={
                featuredPlaylists ? featuredPlaylists.items.slice(0, 5) : null
              }
            />
          </Section>

          <Section heading="Spotify Playlists">
            <MediaGrid
              mediaPageRoute={routes.PLAYLIST}
              media={
                featuredPlaylists ? featuredPlaylists.items.slice(5, 10) : null
              }
            />
          </Section>
        </>
      )}
    </div>
  );
}
