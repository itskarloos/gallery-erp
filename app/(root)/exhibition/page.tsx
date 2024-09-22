"use client";

import React from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import Image from "next/image";

interface Exhibition {
  title: string;
  date: string;
  location: string;
  description: string;
  image: string; // Add this line
}

interface ExhibitionCardProps extends Exhibition {
  index: number;
}

const ExhibitionCard: React.FC<ExhibitionCardProps> = ({
  title,
  date,
  location,
  description,
  image, // Add this line
  index,
}) => {
  const { scrollYProgress } = useViewportScroll();
  const yRange = [0.1 * index, 0.1 * index + 0.3];
  const scale = useTransform(scrollYProgress, yRange, [0.8, 1]);
  const opacity = useTransform(scrollYProgress, yRange, [0, 1]);

  return (
    <motion.div
      style={{ scale, opacity }}
      className="bg-white rounded-lg shadow-md w-full max-w-md mx-auto"
    >
      <Image
        src={image}
        alt={title}
        width={400}
        height={300}
        className="w-full h-48 object-cover mb-4 rounded"
      />
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className="text-gray-600 mb-2">Date: {date}</p>
        <p className="text-gray-600 mb-4">Location: {location}</p>
        <p className="text-gray-700">{description}</p>
      </div>
    </motion.div>
  );
};

const ExhibitionPage: React.FC = () => {
  const exhibitions: Exhibition[] = [
    {
      title: "Modern Masterpieces",
      date: "June 1-30, 2024",
      location: "City Art Gallery",
      description:
        "Featuring works by renowned modern artists from around the world.",
      image: "/assets/images/slideshow/slideshow(1).jpg", // Add this line
    },
    {
      title: "Impressionist Dreams",
      date: "July 15 - August 15, 2024",
      location: "River View Museum",
      description:
        "A stunning collection of impressionist paintings from the 19th century.",
      image: "/assets/slideshow/slideshow(2).jpg", // Add this line
    },
    {
      title: "Digital Art Revolution",
      date: "September 1-30, 2024",
      location: "Tech Arts Center",
      description:
        "Explore the cutting-edge world of digital and interactive artworks.",
      image: "/assets/slideshow/slideshow(3).jpg", // Add this line
    },
    {
      title: "Sculpture Garden",
      date: "October 10 - November 10, 2024",
      location: "Parkside Gallery",
      description:
        "An outdoor exhibition featuring monumental sculptures by international artists.",
      image: "/assets/slideshow/slideshow(2).jpg", // Add this line
    },
  ];

  return (
    <div className="min-h-screen p-4 mt-20 bg-white">
      <h1 className="text-4xl font-bold text-center mb-8">
        Upcoming Exhibitions
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {exhibitions.map((exhibition, index) => (
          <ExhibitionCard key={index} {...exhibition} index={index} />
        ))}
      </div>
    </div>
  );
};

export default ExhibitionPage;
