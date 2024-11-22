import React, { useEffect, useState } from "react";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = ["../images/i20", "../images/i20", "../images/i20"];

  // Function to cycle images for carousel
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(nextImage, 3000); // Change image every 3 seconds
    return () => clearInterval(interval); // Clear interval on component unmount
  }, [nextImage]);
  return (
    <div className="container mt-24 mx-auto py-12 px-6 lg:px-12">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between space-y-12 lg:space-y-0">
        {/* Left Section (Carousel) */}
        <div className="lg:w-1/2 w-full">
          <div className="relative w-full h-80 md:h-[400px] lg:h-[500px] overflow-hidden rounded-lg shadow-lg">
            <img
              src="../images/i20"
              alt={`carousel image ${currentIndex + 1}`}
              className="w-full h-full object-cover transition-all duration-500"
            />
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
