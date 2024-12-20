import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchVehicles } from "../redux/vehicleSlice";

const RentalFilter = () => {
  const dispatch = useDispatch();
  const { city, pickUpDate, returnDate } = useSelector((state) => state.search);
  const [selectedFilters, setSelectedFilters] = useState({
    segment: [],
    brand: [],
    fuelType: [],
    transmissionType: [],
    seatingCapacity: [],
  });

  const filters = {
    segment: ["hatchback", "sedan", "suv", "muv", "xuv"],
    brand: ["Maruti", "Mahindra", "Hyundai", "Honda"],
    fuelType: ["diesel", "petrol"],
    transmissionType: ["automatic", "manual"],
    seatingCapacity: [5, 7],
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

  const handleFilter = () => {
    dispatch(
      fetchVehicles({ location: city, pickUpDate, returnDate, selectedFilters })
    );
  };

  const handleClearFilter = () => {
    setSelectedFilters({
      segment: [],
      brand: [],
      fuelType: [],
      transmissionType: [],
      seatingCapacity: [],
    });
  };

  return (
    <div className="gap-6 border rounded-md mx-2 sm:mx-8 mb-12 lg:mb-0 xl:flex">
      {/* Filter Sidebar */}
      <div className="plp-rental-filter-wrapper bg-white p-4 rounded-lg shadow-lg w-full">
        {/* Filter Header */}
        <div className="flex justify-between items-center mb-4">
          <div className="filter-text text-lg font-semibold">Filter</div>
          <button
            className="clear-all-text text-sm text-darkGreen cursor-pointer"
            onClick={handleClearFilter}
          >
            Clear All
          </button>
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

          <div className="plp-filter-wrapper mt-4">
            <div className="plp-filter-header text-sm text-center rounded-lg font-semibold text-white bg-darkGreen p-4">
              <button onClick={handleFilter}>Apply Filter</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RentalFilter;
