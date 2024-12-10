import React, { useEffect, useState } from "react";
import { fetchVehicles } from "../redux/vehicleSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateSearch } from "../redux/SearchSlice";

const Carousel = () => {
  const slides = [
    {
      src: require("../assets/carousel-12.jpg"),
      alt: "Slide 1",
    },
    {
      src: require("../assets/carousel-21.jpg"),
      alt: "Slide 2",
    },
    {
      src: require("../assets/carousel-3.jpg"),
      alt: "Slide 3",
    },
    {
      src: require("../assets/carousel-45.jpg"),
      alt: "Slide 4",
    },
  ];
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [currentSlide, setCurrentSlide] = useState(0);
  const [location, setLocation] = useState("");
  const [pickUpDate, setPickUpDate] = useState("");
  const [returnDate, setReturnDate] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000); // 3000ms = 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [slides.length]);

  // Function to handle Pickup Date validation (greater than or equal to current date)
  const isPickUpDateValid = () => {
    const currentDate = new Date();
    const selectedPickUpDate = new Date(pickUpDate);
    return selectedPickUpDate >= currentDate;
  };

  // Function to handle Return Date validation (greater than Pickup Date)
  const isReturnDateValid = () => {
    return new Date(returnDate) > new Date(pickUpDate);
  };

  const handleSearch = () => {
    dispatch(fetchVehicles({ location, pickUpDate, returnDate }));
    dispatch(updateSearch({ location, pickUpDate, returnDate }));
    navigate("/rentcar");
  };
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
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 mt-36 lg:items-start lg:ms-[15%] lg:justify-start lg:mt-[7%]">
                <p className="text-center text-black font-semibold text-lg lg:text-2xl 2xl:text-3xl mb-6">
                  Select your city to rent your favourite car
                </p>
                <div className="w-full max-w-3xl bg-white bg-opacity-75 p-6 rounded-lg shadow-lg">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div>
                      <label
                        className="block text-base 2xl:text-xl font-poppins font-extrabold text-darkGreen mb-1"
                        htmlFor="location"
                      >
                        Location
                      </label>
                      <select
                        id="location"
                        className="w-full px-3 py-2 border rounded-lg text-gray-700 text-sm"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                      >
                        <option value="">Add City</option>
                        <option value="Ahmedabad">Ahmedabad</option>
                        <option value="Rajkot">Rajkot</option>
                      </select>
                    </div>
                    <div>
                      <label
                        className="block text-base 2xl:text-xl font-poppins font-extrabold text-darkGreen mb-1"
                        htmlFor="pickup-date"
                      >
                        Pick-Up Date
                      </label>
                      <input
                        id="pickup-date"
                        type="datetime-local"
                        value={pickUpDate}
                        onChange={(e) => setPickUpDate(e.target.value)}
                        className="w-full px-3 py-2 border rounded-lg text-gray-700 text-sm"
                        disabled={!location} // Disable pickup date until city is selected
                        min={new Date().toISOString().slice(0, 16)} // Set minimum date to current date
                      />
                    </div>
                    <div>
                      <label
                        className="block text-base 2xl:text-xl font-poppins font-extrabold text-darkGreen mb-1"
                        htmlFor="return-date"
                      >
                        Return Date
                      </label>
                      <input
                        id="return-date"
                        type="datetime-local"
                        value={returnDate}
                        onChange={(e) => setReturnDate(e.target.value)}
                        className="w-full px-3 py-2 border rounded-lg text-gray-700 text-sm"
                        disabled={!pickUpDate} // Disable return date until pickup date is selected
                        min={pickUpDate} // Set minimum return date to the pick-up date
                      />
                    </div>
                    <div className="flex items-end justify-center md:justify-start">
                      <button
                        className={`w-full bg-darkGreen text-white font-medium py-3 rounded-lg hover:bg-lightGreen cursor-pointer `}
                        disabled={!isPickUpDateValid() || !isReturnDateValid()} // Disable the button if pick-up or return date is invalid
                        onClick={handleSearch}
                      >
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
