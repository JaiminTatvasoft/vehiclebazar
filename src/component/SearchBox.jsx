import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateSearch } from "../redux/SearchSlice";

const SearchBox = () => {
  const dispatch = useDispatch();
  const { city, pickUpDate, returnDate } = useSelector((state) => state.search);

  const [location, setLocation] = useState(city || "");
  const [pickupDateTime, setPickupDateTime] = useState(pickUpDate || "");
  const [returnDateTime, setReturnDateTime] = useState(returnDate || "");

  const locations = ["New York", "Los Angeles", "Chicago", "Houston", "Miami"];

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

  return (
    <div className="fixed left-1/2 transform -translate-x-1/2 w-full px-48 py-3 shadow-lg bg-gray-300">
      <div className="w-full mx-auto flex items-center gap-6 flex-wrap sm:flex-nowrap">
        {/* Location Dropdown */}
        <div className="flex-1 min-w-[150px]">
          <label
            htmlFor="location"
            className="block text-textcolor font-semibold text-sm mb-2"
          >
            Location
          </label>
          <select
            id="location"
            name="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-[210px] px-3 py-2 border border-mediumGreen rounded-lg focus:outline-none focus:ring-2 focus:ring-darkGreen text-textcolor"
          >
            <option value="">{location ? location : "Select a city"}</option>
            {locations.map((city, index) => (
              <option key={index} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>

        {/* Pickup Date & Time */}
        <div className="flex-1 min-w-[150px]">
          <label
            htmlFor="pickupDate"
            className="block text-textcolor font-semibold text-sm mb-2"
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
            className="w-[210px] px-3 py-2 border border-mediumGreen rounded-lg focus:outline-none focus:ring-2 focus:ring-darkGreen text-textcolor"
          />
        </div>

        {/* Return Date & Time */}
        <div className="flex-1 min-w-[150px]">
          <label
            htmlFor="returnDate"
            className="block text-textcolor font-semibold text-sm mb-2"
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
            className="w-[210px] px-3 py-2 border border-mediumGreen rounded-lg focus:outline-none focus:ring-2 focus:ring-darkGreen text-textcolor"
          />
        </div>

        {/* Search Button */}
        <div className="font-arial flex-1 min-w-[150px] flex flex-col justify-end items-end">
          <button
            className="bg-darkGreen text-white px-6 py-3 mt-6 rounded-lg shadow-md hover:bg-darkestGreen focus:outline-none focus:ring-2 focus:ring-darkGreen disabled:bg-gray-300 disabled:cursor-not-allowed transition duration-300 self-end"
            onClick={handleSearch}
          >
            Search Vehicles
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
