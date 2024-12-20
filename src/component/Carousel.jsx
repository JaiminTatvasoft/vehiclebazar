import React, { useEffect, useState } from "react";
import { fetchVehicles } from "../redux/vehicleSlice";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { updateSearch } from "../redux/SearchSlice";
import { fetchCities } from "../redux/citiesSlice";
import CarouselSlide from "./CarouselSlide";

const Carousel = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const locationnn = useLocation();

  const { city, pickUpDate, returnDate } = useSelector((state) => state.search);
  const { locations } = useSelector((state) => state.cities);
  const loggedOut = locationnn.state?.loggedOut;

  const [location, setLocation] = useState(city || "");
  const [pickUpDateTime, setPickUpDateTime] = useState(pickUpDate || "");
  const [returnDateTime, setReturnDateTime] = useState(returnDate || "");

  useEffect(() => {
    if (loggedOut) {
      setLocation("");
      setPickUpDateTime("");
      setReturnDateTime("");
    }
  }, [loggedOut]); // Only run when loggedOut changes

  useEffect(() => {
    dispatch(fetchCities());
  }, [dispatch]);

  const isPickUpDateValid = () => {
    const currentDate = new Date();
    const selectedPickUpDate = new Date(pickUpDateTime);
    return selectedPickUpDate >= currentDate;
  };

  const isReturnDateValid = () => {
    return new Date(returnDateTime) > new Date(pickUpDateTime);
  };

  const handleSearch = () => {
    dispatch(
      fetchVehicles({
        location,
        pickUpDate: pickUpDateTime,
        returnDate: returnDateTime,
      })
    );
    dispatch(
      updateSearch({
        location,
        pickUpDate: pickUpDateTime,
        returnDate: returnDateTime,
      })
    );
    navigate("/rentcar");
  };

  return (
    <div className="relative h-screen flex items-center justify-center">
      <div className="absolute inset-0 overflow-hidden bg-cover bg-center">
        <div className="relative h-screen">
          <CarouselSlide />
        </div>
      </div>

      {/* Form Section */}
      <div className="absolute z-[1] inset-0 flex flex-col items-center justify-center p-6 mt-4 lg:items-start lg:ms-[15%] lg:justify-start lg:mt-[10%]">
        <p className="text-center text-black font-semibold text-lg lg:text-2xl 2xl:text-3xl mb-6">
          Select your city to rent your favourite car
        </p>
        <div className="w-full max-w-3xl bg-white p-6 rounded-lg shadow-lg">
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
                <option value="">{"Select a city"}</option>
                {locations.map((city, index) => (
                  <option key={index} value={city}>
                    {city}
                  </option>
                ))}
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
                value={pickUpDateTime}
                onChange={(e) => setPickUpDateTime(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg text-gray-700 text-sm"
                disabled={!location}
                min={new Date().toISOString().slice(0, 16)}
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
                value={returnDateTime}
                onChange={(e) => setReturnDateTime(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg text-gray-700 text-sm"
                disabled={!pickUpDateTime}
                min={pickUpDateTime}
              />
            </div>
            <div className="flex items-end justify-center md:justify-start">
              <button
                className={`w-full bg-darkGreen text-white font-medium py-3 rounded-lg hover:bg-lightGreen cursor-pointer `}
                disabled={!isPickUpDateValid() || !isReturnDateValid()}
                onClick={handleSearch}
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
