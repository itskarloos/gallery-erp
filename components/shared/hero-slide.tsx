"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

interface SlideProps {
  imageUrl: string;
  style?: React.CSSProperties;
}

const Slide: React.FC<SlideProps> = ({ imageUrl, style }) => (
  <div
    className="absolute top-0 left-0 w-full h-full transition-opacity duration-500 ease-in-out"
    style={style || {}}
  >
    <Image
      src={imageUrl}
      alt={`Slide ${style?.opacity}`}
      layout="fill"
      objectFit="cover"
    />
  </div>
);

const HeroSlideshow: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      imageUrl: "/assets/slideshow/slideshow(1).jpg",
      title: "Trinity",
      subtitle: "Sep 20-22, 2024",
    },
    {
      imageUrl: "/assets/slideshow/slideshow(2).jpg",
      title: "Experience",
      subtitle: "Unforgettable Moments",
    },
    {
      imageUrl: "/assets/slideshow/slideshow(3).jpg",
      title: "Join Us",
      subtitle: "For an Amazing Event",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="sticky top-0 left-0 w-full h-screen overflow-hidden z-10">
      {slides.map((slide, index) => (
        <Slide
          key={index}
          imageUrl={slide.imageUrl}
          style={{ opacity: index === currentSlide ? 1 : 0 }}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-transparent opacity-50 bg-black/80"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-5xl sm:text-7xl font-light mb-4">
            {slides[currentSlide].title}
          </h1>
          <p className="text-lg sm:text-lg font-light">
            {slides[currentSlide].subtitle}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSlideshow;
