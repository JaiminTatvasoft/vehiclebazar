import React, { useEffect, useState } from "react";

const CarouselSlide = () => {
  const slides = [
    { src: require("../assets/carousel-12.jpg"), alt: "Slide 1" },
    { src: require("../assets/carousel-21.jpg"), alt: "Slide 2" },
    { src: require("../assets/carousel-3.jpg"), alt: "Slide 3" },
    { src: require("../assets/carousel-45.jpg"), alt: "Slide 4" },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, [slides.length]);

  return (
    <div className="relative h-screen flex items-center justify-center">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            className="object-cover w-full h-full rounded-lg"
            src={slide.src}
            alt={slide.alt}
          />
        </div>
      ))}
    </div>
  );
};

export default CarouselSlide;
