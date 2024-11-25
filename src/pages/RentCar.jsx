import React from "react";
import SearchBox from "../component/SearchBox";
import RentalFilter from "../component/RentalFilter";
import VehicleList from "../component/VehicleList";

const RentCar = () => {
  return (
    <div className="mt-24 lg:mt-0 min-h-screen">
      <div className="mt-20">
        <SearchBox />
      </div>
      <div className="flex max-w-6xl mx-auto">
        <RentalFilter />
        <VehicleList />
      </div>
    </div>
  );
};

export default RentCar;
