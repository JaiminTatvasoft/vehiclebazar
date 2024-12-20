import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateSearch } from "../redux/SearchSlice";

const SearchBox = () => {
  const dispatch = useDispatch();
  const { city, pickUpDate, returnDate } = useSelector((state) => state.search);
  const { locations, loading, error } = useSelector((state) => state.cities);

  const [location, setLocation] = useState(city || "");
  const [pickupDateTime, setPickupDateTime] = useState(pickUpDate || "");
  const [returnDateTime, setReturnDateTime] = useState(returnDate || "");

  const currentDateTime = new Date();

  const formatDateTime = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    return `${year}-${month}-${day}T${hours}:${minutes}`;
  };

  const handleSearch = () => {
    dispatch(
      updateSearch({
        location,
        pickUpDate: pickupDateTime,
        returnDate: returnDateTime,
      })
    );
  };

  if (loading) {
    return <div>Loading cities...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="w-full mx-2 sm:mx-8 px-16 rounded-lg mt-4 py-3 shadow-lg bg-gray-300 lg:rounded-none lg:mx-0 lg:px-24 2xl:px-48 lg:fixed lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:top-0 lg:mt-[104px]">
      <div className="w-full mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {/* Location Dropdown */}
        <div className="flex flex-col min-w-[150px]">
          <label
            htmlFor="location"
            className="block text-darkGreen font-semibold text-sm mb-2"
          >
            Location
          </label>
          <select
            id="location"
            name="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full px-3 py-2 border border-mediumGreen rounded-lg focus:outline-none focus:ring-2 focus:ring-darkGreen text-textcolor"
          >
            <option value="">{"Select a city"}</option>
            {locations.map((city, index) => (
              <option key={index} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>

        {/* Pickup Date & Time */}
        <div className="flex flex-col min-w-[150px]">
          <label
            htmlFor="pickupDate"
            className="block text-darkGreen font-semibold text-sm mb-2"
          >
            Pickup Date & Time
          </label>
          <input
            type="datetime-local"
            id="pickupDate"
            name="pickupDate"
            min={formatDateTime(currentDateTime)}
            value={pickupDateTime}
            onChange={(e) => setPickupDateTime(e.target.value)}
            className="w-full px-3 py-2 border border-mediumGreen rounded-lg focus:outline-none focus:ring-2 focus:ring-darkGreen text-textcolor"
          />
        </div>

        {/* Return Date & Time */}
        <div className="flex flex-col min-w-[150px]">
          <label
            htmlFor="returnDate"
            className="block text-darkGreen font-semibold text-sm mb-2"
          >
            Return Date & Time
          </label>
          <input
            type="datetime-local"
            id="returnDate"
            name="returnDate"
            min={pickupDateTime || formatDateTime(currentDateTime)} // Ensure return date is after pickup date
            value={returnDateTime}
            onChange={(e) => setReturnDateTime(e.target.value)}
            className="w-full px-3 py-2 border border-mediumGreen rounded-lg focus:outline-none focus:ring-2 focus:ring-darkGreen text-textcolor"
          />
        </div>

        {/* Search Button */}
        <div className="font-arial flex flex-col justify-end items-end">
          <button
            className="bg-darkGreen text-white px-6 py-3 mt-6 sm:mt-0 rounded-lg shadow-md hover:bg-darkestGreen focus:outline-none focus:ring-2 focus:ring-darkGreen disabled:bg-gray-300 disabled:cursor-not-allowed transition duration-300 self-end"
            onClick={handleSearch}
          >
            Modify Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
