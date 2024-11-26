import React, { useState, useEffect } from "react";
import HomePageForm from "./HomePageForm";

const CarouselHeader = () => {
  const slides = [
    {
      src: require("../images/i20.png"),
      alt: "Slide 1",
      caption:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio voluptatem ullam alias nisi. Tempora quos illo quisquam perferendis dignissimos natus ratione maxime cupiditate, facere omnis ex placeat, reiciendis in provident!",
    },
    {
      src: require("../images/toyata.png"),
      alt: "Slide 2",
      caption:
        "482548754275642486 Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio voluptatem ullam alias nisi. Tempora quos illo quisquam perferendis dignissimos natus ratione maxime cupiditate, facere omnis ex placeat, reiciendis in provident!",
    },
    {
      src: require("../images/vintage.png"),
      alt: "Slide 3",
      caption:
        "87687426785786466 Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio voluptatem ullam alias nisi. Tempora quos illo quisquam perferendis dignissimos natus ratione maxime cupiditate, facere omnis ex placeat, reiciendis in provident!",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000); // 3000ms = 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [slides.length]);

  return (
    <div className="relative bg-slate-100 pb-10 pt-24">
      {/* Carousel Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between space-y-12 lg:space-y-0">
        {/* Content Section */}
        <div className="lg:w-1/2 w-full text-center lg:text-left px-6 lg:px-12">
          <HomePageForm />
        </div>

        {/* Image Carousel Section */}
        <div className="lg:w-1/2 w-full lg:text-left px-6 lg:px-12">
          <div className="relative h-[400px] md:h-[500px] overflow-hidden rounded-lg">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                  index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
                } flex items-center`} // Flexbox for centering content
              >
                <img
                  className="w-3/5 h-3/5 object-fill rounded-lg"
                  src={slide.src}
                  alt={slide.alt}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Indicators */}
      {/* <div className="flex absolute bottom-5 left-1/2 transform -translate-x-1/2 space-x-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setCurrentSlide(index)}
            className={`w-4 h-4 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-blue-500"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
          ></button>
        ))}
      </div> */}
    </div>
  );
};

export default CarouselHeader;
