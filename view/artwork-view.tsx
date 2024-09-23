import ArtworkCollection from "@/components/shared/artwork-collection";
import React from "react";

const ArtworkView = () => {
  return (
    <div className="w-full">
      <div className="sticky top-0 w-full h-[400px] overflow-clip relative">
        <img
          src="/assets/slideshow/slideshow(1).jpg"
          alt="Hero Image"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent"></div>
      </div>
      <div className="relative z-10">
        <ArtworkCollection />
      </div>
    </div>
  );
};

export default ArtworkView;
