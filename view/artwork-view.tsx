"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface Artwork {
  id: number;
  title: string;
  artist: string;
  imageUrl: string;
}

const ArtworkView = () => {
  const [artworks, setArtworks] = useState<Artwork[]>([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    // Simulated API call to fetch artworks
    const fetchArtworks = async () => {
      // Replace this with your actual API call
      const newArtworks = Array.from({ length: 12 }, (_, i) => ({
        id: i + 1 + (page - 1) * 12,
        title: `Artwork ${i + 1 + (page - 1) * 12}`,
        artist: `Artist ${i + 1 + (page - 1) * 12}`,
        imageUrl: `https://picsum.photos/250/200?random=${
          i + 1 + (page - 1) * 12
        }`,
      }));
      setArtworks((prevArtworks) => [...prevArtworks, ...newArtworks]);
    };

    fetchArtworks();
  }, [page]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight - 100
      ) {
        setPage((prevPage) => prevPage + 1);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {artworks.map((artwork, index) => (
        <motion.div
          key={artwork.id}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: (index % 12) * 0.1 }}
          whileHover={{ scale: 1.05 }}
          className="bg-white rounded-lg shadow-md overflow-hidden"
        >
          <img
            src={artwork.imageUrl}
            alt={artwork.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">{artwork.title}</h3>
            <p className="text-gray-600">{artwork.artist}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ArtworkView;
