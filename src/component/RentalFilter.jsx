import React, { useState } from "react";

const RentalFilter = () => {
  const [selectedFilters, setSelectedFilters] = useState({
    segment: [],
    brand: [],
    fuelType: [],
    transmissionType: [],
    seatingCapacity: [],
  });

  const filters = {
    segment: ["Hatchback", "Sedan", "SUV", "MUV"],
    brand: ["Maruti", "Mahindra", "Hyundai", "Honda"],
    fuelType: ["Diesel", "Petrol"],
    transmissionType: ["Automatic", "Manual"],
    seatingCapacity: ["5 seats", "7 seats"],
  };

  const handleFilterChange = (category, value) => {
    setSelectedFilters((prevState) => {
      const updatedCategory = prevState[category].includes(value)
        ? prevState[category].filter((item) => item !== value)
        : [...prevState[category], value];
      return { ...prevState, [category]: updatedCategory };
    });
  };

  const renderFilterOptions = (category) => {
    return filters[category].map((value) => (
      <div
        key={value}
        className="flex items-center space-x-2 pl-4 py-2 cursor-pointer hover:bg-gray-100"
        onClick={() => handleFilterChange(category, value)}
      >
        <input
          type="checkbox"
          checked={selectedFilters[category].includes(value)}
          onChange={() => handleFilterChange(category, value)}
          className="h-4 w-4 border-gray-300 rounded"
        />
        <span>{value}</span>
      </div>
    ));
  };

  return (
    <div className="gap-6 border rounded-md hidden lg:flex">
      {/* Filter Sidebar */}
      <div className="plp-rental-filter-wrapper bg-white p-4 rounded-lg shadow-lg w-full">
        {/* Filter Header */}
        <div className="d-flex justify-between items-center mb-4">
          <div className="filter-text text-lg font-semibold">Filter</div>
          <div className="clear-all-text text-sm text-blue-500 cursor-pointer">
            Clear All
          </div>
        </div>

        {/* Filter Options */}
        <div className="plp-cars-filter">
          {/* Segment Filter */}
          <div className="plp-filter-wrapper">
            <div className="plp-filter-header text-sm font-semibold text-gray-700">
              Segment
            </div>
            {renderFilterOptions("segment")}
          </div>

          {/* Brand Filter */}
          <div className="plp-filter-wrapper mt-4">
            <div className="plp-filter-header text-sm font-semibold text-gray-700">
              Brand
            </div>
            {renderFilterOptions("brand")}
          </div>

          {/* Fuel Type Filter */}
          <div className="plp-filter-wrapper mt-4">
            <div className="plp-filter-header text-sm font-semibold text-gray-700">
              Fuel Type
            </div>
            {renderFilterOptions("fuelType")}
          </div>

          {/* Transmission Type Filter */}
          <div className="plp-filter-wrapper mt-4">
            <div className="plp-filter-header text-sm font-semibold text-gray-700">
              Transmission Type
            </div>
            {renderFilterOptions("transmissionType")}
          </div>

          {/* Seating Capacity Filter */}
          <div className="plp-filter-wrapper mt-4">
            <div className="plp-filter-header text-sm font-semibold text-gray-700">
              Seating Capacity
            </div>
            {renderFilterOptions("seatingCapacity")}
          </div>
        </div>
      </div>

    </div>
  );
};

export default RentalFilter;
