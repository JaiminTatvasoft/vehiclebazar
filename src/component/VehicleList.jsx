import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchVehicles } from "../redux/vehicleSlice";

const VehicleList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { city, pickUpDate, returnDate } = useSelector((state) => state.search);
  const { vehicles, loading, error } = useSelector((state) => state.vehicles);

  const location = city;
  useEffect(() => {
    dispatch(fetchVehicles({ location, pickUpDate, returnDate }));
  }, [city, pickUpDate, returnDate]);

  const handleClick = (vehicle) => {
    navigate("/bookcar", { state: { vehicle } });
  };

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-28 ms-10">
      {vehicles.map((vehicle) => (
        <div key={vehicle._id} className="bg-white border rounded-lg">
          {/* Vehicle Info Section with Image on the Left and Text on the Right */}
          <div className="flex">
            {/* Vehicle Image */}
            <div className=" w-2/5 m-2 rounded-md bg-gray-300 flex justify-center items-center">
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
              <h4 className="text-sm text-gray-500 mb-4">
                {vehicle.brandname}
              </h4>

              <hr className="w-auto h-px border-0 bg-gray-500 mb-3" />

              {/* Pricing and KMS Info */}
              <div className="flex justify-between mb-4">
                <div className="text-center">
                  <p className="text-sm text-gray-600">120 kms/day</p>
                  <h5 className="text-xl font-bold text-darkGreen">
                    {vehicle.price}
                  </h5>
                  <p className="text-xs text-gray-500">405 Free kms</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-600">240 kms/day</p>
                  <h5 className="text-xl font-bold text-darkGreen">
                    {vehicle.price * 2}
                  </h5>
                  <p className="text-xs text-gray-500">810 Free kms</p>
                </div>
              </div>
            </div>
          </div>

          {/* Features and Additional Info */}
          <div className="p-5">
            {/* Vehicle Features with SVG Icons */}
            <div className="flex justify-center items-center space-x-4">
              {/* {vehicle.features.map((feature, index) => ( */}
              <div className="flex items-center text-sm text-gray-700">
                {/* Dot representing the feature */}
                <img
                  className="w-4 h-4"
                  src={require("../assets/transmission.png")}
                />
                <p className="text-xs ml-1 mr-5">{vehicle.transmission}</p>
              </div>
              <div className="flex items-center text-sm text-gray-700">
                {/* Dot representing the feature */}
                <img className="w-4 h-4" src={require("../assets/fuel.png")} />
                <p className="text-xs ml-1 mr-5">{vehicle.fuelType}</p>
              </div>
              <div className="flex items-center text-sm text-gray-700">
                {/* Dot representing the feature */}
                <img
                  className="w-4 h-4"
                  src={require("../assets/baggage.png")}
                />
                <p className="text-xs ml-1 mr-5">{vehicle.baggage} Baggage</p>
              </div>
              <div className="flex items-center text-sm text-gray-700">
                {/* Dot representing the feature */}
                <img
                  className="w-4 h-4"
                  src={require("../assets/seater.png")}
                />
                <p className="text-xs ml-1 mr-5">{vehicle.seater} seater</p>
              </div>
              {/* ))} */}
            </div>

            {/* Additional Info */}
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
                onClick={() => handleClick(vehicle)}
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VehicleList;
