import { getAllArtwork } from "@/lib/actions/artwork.action";

import ArtworkCard from "./artwork-card";

export default async function ArtworkCollection() {
  const artworks = await getAllArtwork();

  return (
    <div className="w-full flex flex-col gap-4 pt-10 bg-white">
      <h1 className="text-5xl font-bold text-zinc-700 font-normal text-center">
        Artwork Collection
      </h1>
      <ArtworkCard artworks={artworks} />
    </div>
  );
}
