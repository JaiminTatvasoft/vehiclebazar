import React, { useEffect, useState } from "react";

const Carousel = () => {
  const slides = [
    {
      src: require("../assets/carousel-12.jpg"),
      alt: "Slide 1",
      caption:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio voluptatem ullam alias nisi. Tempora quos illo quisquam perferendis dignissimos natus ratione maxime cupiditate, facere omnis ex placeat, reiciendis in provident!",
    },
    {
      src: require("../assets/carousel-21.jpg"),
      alt: "Slide 2",
      caption:
        "482548754275642486 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio voluptatem ullam alias nisi. Tempora quos illo quisquam perferendis dignissimos natus ratione maxime cupiditate, facere omnis ex placeat, reiciendis in provident!",
    },
    {
      src: require("../assets/carousel-3.jpg"),
      alt: "Slide 3",
      caption:
        "87687426785786466 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio voluptatem ullam alias nisi. Tempora quos illo quisquam perferendis dignissimos natus ratione maxime cupiditate, facere omnis ex placeat, reiciendis in provident!",
    },
    {
      src: require("../assets/carousel-45.jpg"),
      alt: "Slide 4",
      caption:
        "87687426785786466 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio voluptatem ullam alias nisi. Tempora quos illo quisquam perferendis dignissimos natus ratione maxime cupiditate, facere omnis ex placeat, reiciendis in provident!",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [location, setLocation] = useState("indore");
  const [pickUpDate, setPickUpDate] = useState("");
  const [returnDate, setReturnDate] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000); // 3000ms = 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [slides.length]);

  return (
    <div className="relative h-screen flex items-center justify-center">
      <div className="absolute inset-0 overflow-hidden bg-cover bg-center">
        <div className="relative h-screen">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-700 ${
                index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            >
              <img
                className="object-cover w-full h-full rounded-lg"
                src={slide.src}
                alt={slide.alt}
              />
              <div className="absolute inset-0 max-w-3xl h-40 m-40   shadow-lg rounded-lg overflow-hidden">
                <div className="">
                  <p className="w-1/2 flex-1 py-3 text-center font-semibold text-white bg-darkGreen rounded-tr-lg">
                    Select your city to rent your favourite car
                  </p>
                </div>
                <div className="p-6 bg-white">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div>
                      <label
                        className="block text-lg font-poppins font-extrabold text-darkGreen mb-1"
                        htmlFor="location"
                      >
                        Location
                      </label>
                      <select
                        id="location"
                        className="w-full px-3 py-2 border rounded-lg text-gray-700"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                      >
                        <option>Add City</option>
                        <option>Ahmedabad</option>
                        <option>Rajkot</option>
                      </select>
                    </div>
                    <div>
                      <label
                        className="block text-lg font-poppins font-extrabold text-darkGreen mb-1"
                        htmlFor="pickup-date"
                      >
                        Pick-Up Date
                      </label>
                      <input
                        id="pickup-date"
                        type="datetime-local"
                        value={pickUpDate}
                        onChange={(e) => setPickUpDate(e.target.value)}
                        className="w-full px-3 py-2 border rounded-lg text-gray-700"
                      />
                    </div>
                    <div>
                      <label
                        className="block text-lg font-poppins font-extrabold text-darkGreen mb-1"
                        htmlFor="return-date"
                      >
                        Return Date
                      </label>
                      <input
                        id="return-date"
                        type="datetime-local"
                        value={returnDate}
                        onChange={(e) => setReturnDate(e.target.value)}
                        className="w-full px-3 py-2 border rounded-lg text-gray-700"
                      />
                    </div>
                    <div className="flex items-end">
                      <button className="w-full bg-darkGreen text-white font-medium py-3 rounded-lg hover:bg-lightGreen">
                        Search
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
