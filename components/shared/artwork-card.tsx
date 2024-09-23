"use client";
import Image from "next/image";
import { Artwork } from "@/types";
import { motion } from "framer-motion";
import { Separator } from "../ui/separator";

const ArtworkCard = ({ artworks }: { artworks: Artwork[] }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {artworks.map((artwork: Artwork) => (
          <motion.div
            key={artwork.id}
            className="flex flex-col bg-white overflow-hidden"
            initial={{ opacity: 0, y: 50 }} // Initial state
            whileInView={{ opacity: 1, y: 0 }} // Animation when in view
            transition={{ duration: 0.9 }} // Animation duration
            viewport={{ once: true }} // Only animate once
          >
            <div className="relative w-full h-64">
              <Image
                src={artwork.imageUrl}
                alt={artwork.artName}
                layout="fill"
                objectFit="cover"
                className="transition duration-500 ease-in-out transform hover:scale-105"
              />
            </div>
            <Separator className="my-4 bg-gray-300 h-[2px]" />
            <div className="mt-0">
              <h2 className="text-base font-semibold mb-2 text-gray-900">
                {artwork.artName}
                <span className="text-gray-500 text-sm font-normal"> by </span>
                {""}
                <span className="text-gray-600 text-base font-normal">
                  {artwork.artist}
                </span>
              </h2>
              <p className="text-sm text-gray-800 mb-2">{artwork.material}</p>
              <p className="text-sm text-gray-700">{artwork.dimensions}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ArtworkCard;
