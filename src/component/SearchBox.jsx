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

  // Handle Location Change
  const handleLocationChange = (e) => {
    setLocation(e.target.value);
    setPickupDateTime(""); // Reset pickup date if location changes
    setReturnDateTime(""); // Reset return date if location changes
  };

  // Handle Pickup Date Change
  const handlePickupDateChange = (e) => {
    setPickupDateTime(e.target.value);
  };

  // Handle Return Date Change
  const handleReturnDateChange = (e) => {
    setReturnDateTime(e.target.value);
  };

  useEffect(() => {
    setLocations(locations);
  }, []);

  return (
    <div className="w-full px-4 py-6 shadow-lg rounded-full border bg-white">
      <div className="max-w-6xl ms-8 flex items-center gap-6 w-full">
        {/* Location Dropdown */}
        <div className="flex-1 min-w-[180px]">
          <label
            htmlFor="location"
            className="block text-textcolor font-semibold text-lg mb-2"
          >
            Location
          </label>
          <select
            id="location"
            name="location"
            value={location}
            onChange={handleLocationChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-darkGreen text-textcolor"
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
        <div className="flex-1 min-w-[180px]">
          <label
            htmlFor="pickupDate"
            className="block text-textcolor font-semibold text-lg mb-2"
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
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-darkGreen text-textcolor"
            disabled={!location} // Only disabled if no location is selected
          />
        </div>

        {/* Return Date & Time */}
        <div className="flex-1 min-w-[180px]">
          <label
            htmlFor="returnDate"
            className="block text-textcolor font-semibold text-lg mb-2"
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
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-darkGreen text-textcolor"
            disabled={!pickupDateTime} // Only disabled if pickup date is not selected
          />
        </div>

        {/* Search Button */}
        <div className="flex-1 min-w-[180px]">
          <label
            htmlFor="searchButton"
            className="block text-textcolor font-semibold text-lg mb-2"
          >
            Explore Vehicles
          </label>
          <button
            id="searchButton"
            className="w-auto px-3 py-2 border rounded-lg bg-darkGreen text-white shadow-md hover:bg-darkestGreen focus:outline-none focus:ring-2 focus:ring-darkGreen disabled:bg-gray-300 disabled:cursor-not-allowed transition duration-300"
          >
            Search Vehicles
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
