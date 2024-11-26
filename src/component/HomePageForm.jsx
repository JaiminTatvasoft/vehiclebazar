import React, { useState, useEffect, useRef } from "react";

// Helper function to generate time intervals
const generateTimeIntervals = (startTime, endTime) => {
  const intervals = [];
  let time = new Date(startTime);
  while (time <= endTime) {
    intervals.push(new Date(time));
    time = new Date(time.getTime() + 30 * 60000); // Increment by 30 minutes
  }
  return intervals;
};

const HomePageForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    city: "",
    pickupDate: "",
    pickupTime: "",
    dropDate: "",
    dropTime: "",
  });
  const [availableTimes, setAvailableTimes] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const dropdownRef = useRef(null);
  const stepRef = useRef(null);

  // List of cities (for the dropdown)
  const cities = [
    "New York",
    "Los Angeles",
    "Chicago",
    "Houston",
    "Phoenix",
    "Philadelphia",
    "San Antonio",
    "San Diego",
    "Dallas",
    "Austin",
  ];

  // Handle City Change
  const handleCityChange = (city) => {
    setFormData({ ...formData, city });
    setStep(step + 1); // Move to the next step after selecting a city
    setIsDropdownOpen(false); // Close dropdown after selecting a city
  };

  // Step 2: Handle Pickup Date and Time
  const handlePickupDateChange = (e) => {
    const newDate = new Date(e.target.value);
    setFormData({ ...formData, pickupDate: e.target.value });
    setAvailableTimes(
      generateTimeIntervals(
        newDate,
        new Date(newDate.setHours(23, 59, 59, 999))
      )
    );
  };

  const handlePickupTimeChange = (e) => {
    setFormData({ ...formData, pickupTime: e.target.value });
  };

  // Step 3: Handle Drop Date and Time
  const handleDropDateChange = (e) => {
    setFormData({ ...formData, dropDate: e.target.value });
  };

  const handleDropTimeChange = (e) => {
    setFormData({ ...formData, dropTime: e.target.value });
  };

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleBack = () => {
    if (step - 1 === 1) {
      setIsDropdownOpen(true);
    }
    setStep(step - 1);
  };

  useEffect(() => {
    // When step 2 is reached, generate time intervals based on the current date
    if (step === 2) {
      const now = new Date();
      setAvailableTimes(
        generateTimeIntervals(now, new Date(now.setHours(23, 59, 59, 999)))
      );
    }
  }, [step]);

  useEffect(() => {
    // Close dropdown when clicking outside of it
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="max-w-screen-sm mx-auto py-8 px-4">
      <div className="bg-slate-300 py-6 px-8 rounded-lg shadow-lg transition-all duration-500 ease-in-out transform">
        {/* Step Navigation */}
        <div className="relative">
          {/* Apply transition effect for step changes */}
          <div
            ref={stepRef}
            className={`transition-all duration-500 ease-in-out transform ${
              step === 1 ? "opacity-100" : "opacity-0 translate-x-4"
            }`}
          >
            {step === 1 && (
              <>
                <h2 className="text-3xl font-semibold text-gray-800 transition-all">
                  Select Your City
                </h2>
                <div className="relative mt-2" ref={dropdownRef}>
                  {/* City Dropdown */}
                  <button
                    onClick={toggleDropdown}
                    className="w-full p-4 bg-gray-100 border border-gray-300 rounded-full text-left focus:outline-none focus:ring-2 transition duration-300 ease-in-out hover:bg-gray-200"
                  >
                    {formData.city ? formData.city : "Select City"}
                  </button>
                  {isDropdownOpen && (
                    <ul className="absolute left-0 mt-2 p-2 bg-white shadow-lg border border-gray-300 rounded-xl w-full max-h-48 overflow-y-auto transition-all duration-300 opacity-100 transform ease-in-out">
                      {cities.map((city, index) => (
                        <li
                          key={index}
                          className="p-2 hover:bg-gray-200 cursor-pointer transition-all duration-200"
                        >
                          <button
                            onClick={() => handleCityChange(city)}
                            className="w-full text-left"
                          >
                            {city}
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </>
            )}
          </div>

          <div
            ref={stepRef}
            className={`transition-all duration-500 ease-in-out transform ${
              step === 2 ? "opacity-100" : "opacity-0 translate-x-4"
            }`}
          >
            {/* Step 2: Pickup Date and Time */}
            {step === 2 && (
              <div className="space-y-6 transition-all duration-300">
                <h2 className="text-3xl font-semibold text-gray-800">
                  Pickup Date and Time from{" "}
                  <span className="text-black font-extrabold">
                    {formData.city}
                  </span>
                </h2>
                <div className="flex space-x-6">
                  <div className="flex-1">
                    <label className="block text-lg font-medium">
                      Pickup Date
                    </label>
                    <input
                      type="date"
                      min={new Date().toISOString().split("T")[0]}
                      value={formData.pickupDate}
                      onChange={handlePickupDateChange}
                      className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 transition duration-300 ease-in-out"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="block text-lg font-medium">
                      Pickup Time
                    </label>
                    <select
                      value={formData.pickupTime}
                      onChange={handlePickupTimeChange}
                      className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 transition duration-300 ease-in-out"
                    >
                      <option value="">Select Time</option>
                      {availableTimes.map((time, index) => (
                        <option
                          key={index}
                          value={time
                            .toISOString()
                            .split("T")[1]
                            .substring(0, 5)}
                        >
                          {time.toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="flex justify-between mt-6">
                  <button
                    onClick={handleBack}
                    className="py-2 px-6 rounded-lg text-white bg-gray-500 hover:bg-gray-600 transition-all duration-200"
                  >
                    Back
                  </button>
                  <button
                    onClick={handleNext}
                    disabled={!formData.pickupDate || !formData.pickupTime}
                    className="py-2 px-6 rounded-lg text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-50 transition-all duration-200"
                  >
                    Next
                  </button>
                </div>
              </div>
            )}
          </div>

          <div
            ref={stepRef}
            className={`transition-all duration-500 ease-in-out transform ${
              step === 3 ? "opacity-100" : "opacity-0 translate-x-4"
            }`}
          >
            {/* Step 3: Drop Date and Time */}
            {step === 3 && (
              <div className="space-y-6 transition-all duration-300">
                <div className="space-y-4">
                  <p className="text-lg font-semibold">
                    Pickup Date and Time: {formData.pickupDate} at{" "}
                    {formData.pickupTime}
                  </p>
                </div>
                <h2 className="text-3xl font-semibold text-gray-800">
                  Drop Date and Time from{" "}
                  <span className="text-black font-extrabold">
                    {formData.city}
                  </span>
                </h2>
                <div className="flex space-x-6">
                  <div className="flex-1">
                    <label className="block text-lg font-medium">
                      Drop Date
                    </label>
                    <input
                      type="date"
                      min={formData.pickupDate}
                      value={formData.dropDate}
                      onChange={handleDropDateChange}
                      className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 transition duration-300 ease-in-out"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="block text-lg font-medium">
                      Drop Time
                    </label>
                    <select
                      value={formData.dropTime}
                      onChange={handleDropTimeChange}
                      className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 transition duration-300 ease-in-out"
                    >
                      <option value="">Select Time</option>
                      {availableTimes.map((time, index) => (
                        <option
                          key={index}
                          value={time
                            .toISOString()
                            .split("T")[1]
                            .substring(0, 5)}
                        >
                          {time.toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="flex justify-between mt-6">
                  <button
                    onClick={handleBack}
                    className="py-2 px-6 rounded-lg text-white bg-gray-500 hover:bg-gray-600 transition-all duration-200"
                  >
                    Back
                  </button>
                  <button
                    onClick={() => alert("Form submitted")}
                    disabled={!formData.dropDate || !formData.dropTime}
                    className="py-2 px-6 rounded-lg text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-50 transition-all duration-200"
                  >
                    Explore Vehicles
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageForm;
