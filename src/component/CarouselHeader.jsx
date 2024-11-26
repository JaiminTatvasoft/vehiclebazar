import React, { useState, useEffect } from "react";
import SearchBox from "./SearchBox";

const CarouselHeader = () => {
  const backgroundImages = [
    require("../assets/carousel1.jpg"),
    require("../assets/carousel2.jpg"),
    require("../assets/carousel3.jpg"),
    require("../assets/carousel4.jpg"),
    require("../assets/carousel5.jpg"),
  ];

  const titles = [
    "Self Drive Car Rental from Rs 60/hr",
    "Multiple Delivery Options on Self Drive Car Rental",
    "Flexible Kms options",
    "Brand New Fleets",
    "24*7 Call Center assistance",
  ];

  const descriptions = [
    "Wide range of Hatchbacks, Sedans and SUV’s with multiple fuel and transmission options",
    "Get your car delivered at Doorstep, Airport, Hub or nearest SPOC location as per your convenience.",
    "Freedom to choose between 120 kms, 300 kms and Unlimited kms as per your travel needs.",
    "Drive our latest car models. Average age of our fleet is 20 months.",
    "Dedicated 24*7 Call Center for your trip assistance",
  ];

  const [currentBackground, setCurrentBackground] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBackground(
        (prevBackground) => (prevBackground + 1) % backgroundImages.length
      );
    }, 3000); // Change background every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [backgroundImages.length]);

  return (
    <div className="max-w-screen h-screen bg-slate-100 pb-5 relative">
      {/* Background Carousel with Smooth Fade Transition */}
      <div className="absolute inset-0">
        <div
          className="transition-opacity duration-1000 ease-in-out"
          style={{
            backgroundImage: `url(${backgroundImages[currentBackground]})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100%",
            opacity: 1,
          }}
        ></div>
      </div>

      {/* Content Over Background */}
      <div className="relative z-10 flex flex-col justify-start items-start h-full text-white">
        <div className="flex flex-col md:flex-row gap-6 items-start ms-36 mt-48">
          <SearchBox /> {/* Add the search box component */}
        </div>

        {/* Title and Description Below SearchBox */}
        <div className="mt-36 ms-44 max-w-3xl text-black">
          <h1 className="text-5xl font-bold mb-2">
            {titles[currentBackground]}
          </h1>
          <p className="text-lg mt-6">{descriptions[currentBackground]}</p>
        </div>
      </div>

      {/* Dot Indicators for Background */}
      <div className="absolute bottom-10 left-0 transform translate-x-10 flex space-x-2 z-20">
        {backgroundImages.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentBackground(index)} // Option to manually change background
            className={`transition-all duration-500 ${
              index === currentBackground
                ? "w-8 mt-0.5 h-2 rounded-full bg-blue-500" // Active indicator (small line with smooth transition)
                : "w-3 h-3 rounded-full bg-gray-300 hover:bg-gray-400" // Inactive dots
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default CarouselHeader;
