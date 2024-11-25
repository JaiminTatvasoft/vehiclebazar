import React, { useState, useEffect } from "react";

const SearchBox = () => {
  const [locations, setLocations] = useState([
    "New York",
    "Los Angeles",
    "Chicago",
    "Houston",
    "Miami",
  ]);
  const [pickupDateTime, setPickupDateTime] = useState("");
  const [returnDateTime, setReturnDateTime] = useState("");
  const [location, setLocation] = useState("");

  const currentDateTime = new Date();

  const formatDateTime = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    return `${year}-${month}-${day}T${hours}:${minutes}`;
  };

  const handlePickupDateChange = (e) => {
    setPickupDateTime(e.target.value);
  };

  const handleReturnDateChange = (e) => {
    setReturnDateTime(e.target.value);
  };

  useEffect(() => {
    setLocations(locations);
  }, []);

  return (
    <div className="fixed z-50 left-1/2 transform -translate-x-1/2 w-full px-4 py-3 shadow-lg bg-gradient-to-r from-white via-mediumGreen to-lightgreen">
      <div className="max-w-6xl mx-auto flex items-center gap-6 w-full">
        {/* Location Dropdown */}
        <div className="flex-1 min-w-[220px]">
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
            className="w-full px-4 py-3 border border-mediumGreen rounded-lg focus:outline-none focus:ring-2 focus:ring-darkGreen text-textcolor"
          >
            <option value="">Select a city</option>
            {locations.map((city, index) => (
              <option key={index} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>

        {/* Pickup Date & Time */}
        <div className="flex-1 min-w-[220px]">
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
            onChange={handlePickupDateChange}
            className="w-full px-4 py-3 border border-mediumGreen rounded-lg focus:outline-none focus:ring-2 focus:ring-darkGreen text-textcolor"
          />
        </div>

        {/* Return Date & Time */}
        <div className="flex-1 min-w-[220px]">
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
            onChange={handleReturnDateChange}
            className="w-full px-4 py-3 border border-mediumGreen rounded-lg focus:outline-none focus:ring-2 focus:ring-darkGreen text-textcolor"
          />
        </div>

        {/* Search Button */}
        <button className="bg-darkGreen text-white px-6 py-3 rounded-lg shadow-md hover:bg-darkestGreen focus:outline-none focus:ring-2 focus:ring-darkGreen disabled:bg-gray-300 disabled:cursor-not-allowed transition duration-300">
          Search Vehicles
        </button>
      </div>
    </div>
  );
};

export default SearchBox;
