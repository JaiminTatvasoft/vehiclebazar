import React, { useState, useEffect } from "react";

const CarouselHeader = () => {
  const slides = [
    {
      src: require("../assets/bkg-new.png"),
      alt: "Slide 1",
      caption:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio voluptatem ullam alias nisi. Tempora quos illo quisquam perferendis dignissimos natus ratione maxime cupiditate, facere omnis ex placeat, reiciendis in provident!",
    },
    {
      src: require("../assets/bkg-new-1.png"),
      alt: "Slide 2",
      caption:
        "482548754275642486 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio voluptatem ullam alias nisi. Tempora quos illo quisquam perferendis dignissimos natus ratione maxime cupiditate, facere omnis ex placeat, reiciendis in provident!",
    },
    {
      src: require("../assets/bkg-new-2.png"),
      alt: "Slide 3",
      caption:
        "87687426785786466 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio voluptatem ullam alias nisi. Tempora quos illo quisquam perferendis dignissimos natus ratione maxime cupiditate, facere omnis ex placeat, reiciendis in provident!",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Automatically change slides every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000); // 3000ms = 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [slides.length]);

  const handleRentNowClick = () => {
    console.log("came ");
  };

  return (
    <div className="max-w-screen bg-slate-100 pb-5">
      <div className="relative  overflow-hidden">
        {/* Slides */}
        <div className="relative h-80 m-10">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute flex gap-6 inset-0 transition-opacity duration-700 pb-5 ${
                index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            >
              <img
                className="flex-1 object-fill w-full h-full rounded-lg"
                src={slide.src}
                alt={slide.alt}
              />
              <p className="flex-1 font-poppins mt-10">{slide.caption}</p>
            </div>
          ))}
          <button
            className="relative m-10 top-1/3 left-3/4 transform -translate-x-1/2 bg-darkestGreen text-white font-bold py-4 px-8 rounded-3xl shadow-lg z-20  hover:bg-darkGreen  cursor-pointer"
            onClick={handleRentNowClick}
          >
            Rent Now
          </button>
        </div>

        {/* Indicators */}
        <div className="flex absolute bottom-5 left-1/2 transform -translate-x-1/2 space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition ${
                index === currentSlide
                  ? "bg-blue-500"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarouselHeader;
