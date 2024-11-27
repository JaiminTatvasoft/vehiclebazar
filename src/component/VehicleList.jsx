import React from "react";
import i20 from "../images/i20.png";
import toyata from "../images/toyata.png";
import luxury from "../images/luxury.png";
import vintage from "../images/vintage.png";

const VehicleList = () => {
  const vehicles = [
    {
      id: 1,
      name: "Tesla Model S",
      brand: "Tesla",
      price: "₹ 100",
      description:
        "Experience the future with this electric car that combines speed, luxury, and cutting-edge technology.",
      imageUrl: i20,
      features: ["Automatic", "Electric", "2 Baggage", "5 Seater"],
    },
    {
      id: 2,
      name: "BMW X5",
      brand: "BMW",
      price: "₹ 120",
      description:
        "A premium SUV with exceptional performance, luxury, and a sophisticated design.",
      imageUrl: toyata,
      features: ["Automatic", "Diesel", "2 Baggage", "5 Seater"],
    },
    {
      id: 3,
      name: "Ford Mustang",
      brand: "Ford",
      price: "₹ 80",
      description:
        "A classic American muscle car with bold styling and incredible power.",
      imageUrl: luxury,
      features: ["Manual", "Petrol", "2 Baggage", "4 Seater"],
    },
    {
      id: 4,
      name: "Audi A6",
      brand: "Audi",
      price: "₹ 110",
      description:
        "A luxury sedan with a stylish design, advanced technology, and premium comfort.",
      imageUrl: vintage,
      features: ["Automatic", "Petrol", "2 Baggage", "5 Seater"],
    },
  ];

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-28 ms-10">
      {vehicles.map((vehicle) => (
        <div key={vehicle.id} className="bg-white border rounded-lg">
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
                {vehicle.name}
              </h1>
              {/* Brand Name */}
              <h4 className="text-sm text-gray-500 mb-4">{vehicle.brand}</h4>

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
          <div className="p-8">
            {/* Vehicle Features with SVG Icons */}
            <div className="flex justify-center items-center space-x-4">
              {vehicle.features.map((feature, index) => (
                <div
                  className="flex items-center text-sm text-gray-700"
                  key={index}
                >
                  {/* Dot representing the feature */}
                  <span className="w-2.5 h-2.5 rounded-full bg-gray-700"></span>
                  <p className="text-xs ml-2 mr-5">{feature}</p>
                </div>
              ))}
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
              <button className="font-arial bg-darkGreen text-white py-2 px-6 rounded-md hover:bg-darkestGreen transition-colors">
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
