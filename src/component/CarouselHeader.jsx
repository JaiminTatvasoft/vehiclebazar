import React, { useState, useEffect } from "react";

const CarouselHeader = () => {
  const slides = [
    {
      src: require("../images/i20.png"),
      alt: "Slide 1",
      caption:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio voluptatem ullam alias nisi. Tempora quos illo quisquam perferendis dignissimos natus ratione maxime cupiditate, facere omnis ex placeat, reiciendis in provident!",
    },
    {
      src: require("../images/toyata.png"),
      alt: "Slide 2",
      caption:
        "482548754275642486 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio voluptatem ullam alias nisi. Tempora quos illo quisquam perferendis dignissimos natus ratione maxime cupiditate, facere omnis ex placeat, reiciendis in provident!",
    },
    {
      src: require("../images/vintage.png"),
      alt: "Slide 3",
      caption:
        "87687426785786466 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio voluptatem ullam alias nisi. Tempora quos illo quisquam perferendis dignissimos natus ratione maxime cupiditate, facere omnis ex placeat, reiciendis in provident!",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

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
    <div className="max-w-screen bg-slate-100 pb-5 pt-24">
      <div
        className="relative overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: `url(${require("../assets/carousel-bkg.png")})`,
        }}
      >
        {/* Slides */}
        <div className="relative h-80 m-10">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute flex gap-6 inset-0 transition-opacity duration-700 pb-5 m-5 ${
                index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            >
              <img
                className="flex-1 object-contain w-full h-full rounded-lg"
                src={slide.src}
                alt={slide.alt}
              />
              <div className="flex-1">
                <p className="flex items-center justify-center font-poppins font-bold text-darkGreen text-3xl">
                  Book Your Favourite Car And Drive It
                </p>
                <p className="flex-1 font-poppins mt-10">
                  Whether you’re planning a road trip outside the city or
                  looking for a convenient way to cruise around when you’re out
                  of town,{" "}
                  <span className="text-darkGreen font-bold">
                    {" "}
                    Vehicle-Bazar
                  </span>{" "}
                  is here to ease your travel and rent your favourite car.
                </p>
              </div>
            </div>
          ))}
          <button
            className="relative m-10 top-2/3 left-3/4 transform -translate-x-1/2 bg-darkGreen text-white font-semibold py-4 px-8 rounded-3xl shadow-lg z-20  hover:bg-darkestGreen  cursor-pointer"
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
// <div className="max-w-screen bg-slate-100 pb-5 pt-24">
//   <div
//     className="relative overflow-hidden bg-cover bg-center"
//     style={{
//       backgroundImage: `url(${require("../assets/carousel-bkg.png")})`,
//     }}
//   >
//     {/* Slides */}
//     <div className="relative h-80 md:h-96 lg:h-[500px] m-5">
//       {slides.map((slide, index) => (
//         <div
//           key={index}
//           className={`absolute flex flex-col md:flex-row gap-6 inset-0 transition-opacity duration-700 p-5 ${
//             index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
//           }`}
//         >
//           {/* Image Section */}
//           <img
//             className="flex-1 object-cover w-full h-48 md:h-full rounded-lg"
//             src={slide.src}
//             alt={slide.alt}
//           />
//           {/* Text Section */}
//           <div className="flex-1 text-center md:text-left">
//             <p className="font-poppins font-bold text-darkGreen text-xl md:text-2xl lg:text-3xl">
//               Book Your Favourite Car And Drive It
//             </p>
//             <p className="mt-4 text-sm md:text-base lg:text-lg">
//               Whether you’re planning a road trip outside the city or
//               looking for a convenient way to cruise around when you’re out
//               of town,{" "}
//               <span className="text-darkGreen font-bold">
//                 Vehicle-Bazar
//               </span>{" "}
//               is here to ease your travel and rent your favourite car.
//             </p>
//           </div>
//         </div>
//       ))}
//       {/* Button */}
//       <button
//         className="relative top-2/3 left-1/2 transform -translate-x-1/2 md:left-3/4 bg-darkGreen text-white font-semibold py-3 px-6 md:py-4 md:px-8 rounded-3xl shadow-lg z-20 hover:bg-darkestGreen cursor-pointer"
//         onClick={handleRentNowClick}
//       >
//         Rent Now
//       </button>
//     </div>

//     {/* Indicators */}
//     <div className="flex absolute bottom-5 left-1/2 transform -translate-x-1/2 space-x-2">
//       {slides.map((_, index) => (
//         <button
//           key={index}
//           type="button"
//           onClick={() => setCurrentSlide(index)}
//           className={`w-3 h-3 rounded-full transition ${
//             index === currentSlide
//               ? "bg-blue-500"
//               : "bg-gray-300 hover:bg-gray-400"
//           }`}
//         ></button>
//       ))}
//     </div>
//   </div>
// </div>

export default CarouselHeader;
