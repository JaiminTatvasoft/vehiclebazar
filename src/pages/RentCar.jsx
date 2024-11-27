import React from "react";
import SearchBox from "../component/SearchBox";
import RentalFilter from "../component/RentalFilter";
import VehicleList from "../component/VehicleList";

const RentCar = () => {
  return (
    <div className="mt-24 font-poppins lg:mt-0 min-h-screen">
      <div className="flex flex-wrap mt-20">
        <SearchBox />
      </div>
      <div className="flex flex-wrap mt-10 px-48">
        {/* Rental Filter Component */}
        <div className="w-full lg:w-1/5">
          <RentalFilter />
        </div>

        {/* Vehicle List Component */}
        <div className="w-full lg:w-4/5">
          <VehicleList />
        </div>
      </div>
    </div>
  );
};

export default RentCar;
