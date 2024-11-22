import React, { useState, useEffect } from "react";
import i20 from "../images/i20.png";
import toyata from "../images/toyata.png";
import vintage from "../images/luxury.png";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [toyata, i20, vintage];

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(nextImage, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container mt-24 mx-auto py-12 px-6 lg:px-12">
      <div className="flex flex-col lg:flex-row items-center justify-between space-y-12 lg:space-y-0">
        {/* Left Section (Carousel) */}
        <div className="lg:w-1/2 w-full">
          <div className="relative w-full h-80 md:h-[400px] lg:h-[500px] overflow-hidden rounded-lg">
            <div
              className="absolute inset-0 transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              <div className="flex">
                {images.map((image, index) => (
                  <div key={index} className="w-full h-full flex-shrink-0">
                    <img
                      src={image}
                      alt={`Car ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Section (Catchy Line and Explore Button) */}
        <div className="lg:w-1/2 w-full text-center lg:text-left">
          <h2 className="text-4xl font-poppins font-semibold text-darkGreen mb-6">
            Find Your Dream Car Today
          </h2>
          <p className="text-lg font-arial text-mediumGreen mb-6">
            Explore our wide range of vehicles that fit your needs. Start your
            journey now!
          </p>
          <button className="px-8 py-3 bg-darkGreen text-white rounded-full text-lg font-arial font-semibold hover:bg-darkestGreen transition-all duration-300">
            Explore Cars
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
