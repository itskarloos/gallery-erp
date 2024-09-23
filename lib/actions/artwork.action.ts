import { connectToDatabase } from "@/lib/database";
import Artwork from "@/lib/database/models/artwork.model";
import { QueryClient, QueryCache } from '@tanstack/react-query';

const queryClient = new QueryClient({
  queryCache: new QueryCache(),
});

export async function getAllArtwork() {
  const cacheKey = ['allArtwork'];

  const queryFn = async () => {
    await connectToDatabase();
    const artworks = await Artwork.find();
    return JSON.parse(JSON.stringify(artworks));
  };

  const data = await queryClient.fetchQuery({
    queryKey: cacheKey,
    queryFn: queryFn,
    staleTime: 600000, // 10 minutes
  });

  return data;
}