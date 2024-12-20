import React, { useState } from "react";

const VehicleCard = ({ vehicle, onBook }) => {
  // Track selected package for this particular vehicle
  const [selectedPackage, setSelectedPackage] = useState(120);
  const [freeKms, setFreeKms] = useState(405);

  return (
    <div className="bg-white border rounded-lg mb-4 lg:mb-0">
      {/* Vehicle Info Section with Image on the Left and Text on the Right */}
      <div className="flex">
        {/* Vehicle Image */}
        <div className="w-2/5 m-2 rounded-md bg-gray-300 flex justify-center items-center">
          <img
            src={vehicle.imageUrl}
            alt={vehicle.name}
            className="w-full h-40 object-fill rounded-l-lg"
          />
        </div>

        {/* Text Content on the Right */}
        <div className="flex-1 p-4">
          {/* Vehicle Name */}
          <h1 className="text-2xl font-semibold text-gray-800">
            {vehicle.carname}
          </h1>
          {/* Brand Name */}
          <h4 className="text-sm text-gray-500 mb-4">{vehicle.brandname}</h4>

          <hr className="w-auto h-px border-0 bg-gray-500 mb-3" />

          {/* Pricing and KMS Info */}
          <div className="flex justify-between mb-4">
            {/* 120 kms/day Button */}
            <div
              className={`text-center cursor-pointer ${
                selectedPackage === 120 ? "bg-lightGreen p-2 rounded-lg" : "p-2"
              }`}
              onClick={() => {
                setSelectedPackage(120);
                setFreeKms(405);
              }}
            >
              <p className="text-sm text-gray-600">120 kms/day</p>
              <h5 className="text-xl font-bold text-darkGreen">
                {vehicle.rentalChargesPerDay}
              </h5>
              <p className="text-xs text-gray-500">405 Free kms</p>
            </div>

            {/* 240 kms/day Button */}
            <div
              className={`text-center cursor-pointer ${
                selectedPackage === 240 ? "bg-lightGreen p-2 rounded-lg" : "p-2"
              }`}
              onClick={() => {
                setSelectedPackage(240);
                setFreeKms(810);
              }}
            >
              <p className="text-sm text-gray-600">240 kms/day</p>
              <h5 className="text-xl font-bold text-darkGreen">
                {vehicle.rentalChargesPerDay * 1.25}
              </h5>
              <p className="text-xs text-gray-500">810 Free kms</p>
            </div>
          </div>
        </div>
      </div>

      {/* Features and Additional Info */}
      <div className="p-5">
        <div className="flex justify-center items-center space-x-4">
          <div className="flex items-center text-sm text-gray-700">
            <img
              className="w-4 h-4"
              src={require("../assets/transmission.png")}
              alt="transmission"
            />
            <p className="text-xs ml-1 mr-5">{vehicle.transmission}</p>
          </div>
          <div className="flex items-center text-sm text-gray-700">
            <img
              className="w-4 h-4"
              src={require("../assets/fuel.png")}
              alt="fuel"
            />
            <p className="text-xs ml-1 mr-5">{vehicle.fuelType}</p>
          </div>
          <div className="flex items-center text-sm text-gray-700">
            <img
              className="w-4 h-4"
              src={require("../assets/baggage.png")}
              alt="baggage"
            />
            <p className="text-xs ml-1 mr-5">{vehicle.baggage} Baggage</p>
          </div>
          <div className="flex items-center text-sm text-gray-700">
            <img
              className="w-4 h-4"
              src={require("../assets/seater.png")}
              alt="seater"
            />
            <p className="text-xs ml-1 mr-5">{vehicle.seater} seater</p>
          </div>
        </div>

        <div className="mt-4 text-center text-sm text-gray-600">
          <p>Extra kms will be charged at ₹9/km</p>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between mt-4 px-4">
          <button className="text-sm font-bold text-blue-500 hover:underline">
            View Details
          </button>
          <button
            className="font-arial bg-darkGreen text-white py-2 px-6 rounded-md hover:bg-darkestGreen transition-colors"
            onClick={() => onBook(vehicle, selectedPackage, freeKms)} // Pass vehicle and selectedPackage to the next page
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default VehicleCard;
