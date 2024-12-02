import { useRef } from "react";

const Testimonials = () => {
  const testimonialsRef = useRef(null);

  const features = [
    {
      title: "Abhay",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
      image: require("../assets/avatar.png"),
    },
    {
      title: "Vaibhav",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
      image: require("../assets/avatar.png"),
    },
    {
      title: "Jayesh",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
      image: require("../assets/avatar.png"),
    },
    {
      title: "Saurabh",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
      image: require("../assets/avatar.png"),
    },
    {
      title: "Vishal",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
      image: require("../assets/avatar.png"),
    },
    {
      title: "Siddharth",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
      image: require("../assets/avatar.png"),
    },
    {
      title: "Siddharth",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
      image: require("../assets/avatar.png"),
    },
    {
      title: "Siddharth",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
      image: require("../assets/avatar.png"),
    },
  ];

  const handlePrev = () => {
    if (testimonialsRef.current) {
      testimonialsRef.current.scrollBy({
        left: -320,
        behavior: "smooth",
      });
    }
  };

  const handleNext = () => {
    if (testimonialsRef.current) {
      testimonialsRef.current.scrollBy({
        left: 320,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="flex items-center justify-center bg-bgGrey pb-20">
      <div className="relative w-full max-w-full px-5 sm:px-4 xl:px-28">
        {/* Carousel Container */}
        <div className="relative mx-auto flex flex-col lg:flex-row w-full gap-6">
          {/* Left Navigation Buttons */}
          <div className="lg:w-1/2 flex items-center justify-center">
            <div className="flex flex-col justify-center items-center">
              <p className="flex items-center justify-center font-poppins font-bold text-4xl text-black mb-8">
                What People Say About Us?
              </p>
              {/* Text */}
              <p className="text-center mb-4 text-lg text-gray-700">
                Our clients send us a bunch of smilies with our services and we
                love them.
              </p>

              {/* Button Row */}
              <div className="flex space-x-4">
                {/* Left navigation button (Prev) */}
                <button
                  onClick={handlePrev}
                  className="bg-white text-black rounded-full p-2 shadow-lg"
                >
                  Prev
                </button>

                {/* Right navigation button (Next) */}
                <button
                  onClick={handleNext}
                  className="bg-white text-black rounded-full p-2 shadow-lg"
                >
                  Next
                </button>
              </div>
            </div>
          </div>

          {/* Carousel Items */}
          <div
            ref={testimonialsRef}
            className="flex gap-6 w-full snap-x snap-mandatory overflow-x-auto lg:w-1/2"
          >
            {features.map((feature, index) => (
              <div
                key={index}
                className="min-w-[320px] snap-center bg-white shadow-md rounded-lg p-8 transition-transform duration-200 ease-in-out transform"
              >
                <div className="flex items-center">
                  <img
                    className="w-20 h-20 rounded-full"
                    src={feature.image}
                    alt={feature.title}
                  />
                  <div className="text-center font-bold text-xl font-poppins text-darkGreen">
                    {feature.title}
                  </div>
                </div>
                <p className="text-gray-700 text-base text-center">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Buttons
        <div className="lg:hidden flex justify-between">
          <button
            onClick={handlePrev}
            className="absolute left-0 sm:left-2 top-1/2 transform -translate-y-1/2 bg-white text-black rounded-full p-2 shadow-lg z-10"
          >
            Prev
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 sm:right-2 top-1/2 transform -translate-y-1/2 bg-white text-black rounded-full p-2 shadow-lg z-10"
          >
            Next
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default Testimonials;
