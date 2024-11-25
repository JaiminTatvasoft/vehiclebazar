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
      price: "100/day",
      description:
        "Experience the future with this electric car that combines speed, luxury, and cutting-edge technology.",
      imageUrl: i20,
    },
    {
      id: 2,
      name: "BMW X5",
      brand: "BMW",
      price: "120/day",
      description:
        "A premium SUV with exceptional performance, luxury, and a sophisticated design.",
      imageUrl: toyata,
    },
    {
      id: 3,
      name: "Ford Mustang",
      brand: "Ford",
      price: "80/day",
      description:
        "A classic American muscle car with bold styling and incredible power.",
      imageUrl: luxury,
    },
    {
      id: 4,
      name: "Audi A6",
      brand: "Audi",
      price: "110/day",
      description:
        "A luxury sedan with a stylish design, advanced technology, and premium comfort.",
      imageUrl: vintage,
    },
  ];

  return (
    <div className="flex-1 ml-4 pt-36">
      {/* Title Section */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">
          Available Rental Cars
        </h1>
        <p className="text-lg text-gray-600 mt-2">
          Choose from a variety of luxury cars, SUVs, and sports cars to fit
          your needs.
        </p>
      </div>

      {/* Vehicle Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {vehicles.map((vehicle) => (
          <div
            key={vehicle.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transform transition duration-300 ease-in-out"
          >
            {/* Vehicle Image */}
            <img
              src={vehicle.imageUrl}
              alt={vehicle.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              {/* Vehicle Name & Brand */}
              <h3 className="text-xl font-semibold text-gray-800">
                {vehicle.name}
              </h3>
              <p className="text-sm text-gray-500">{vehicle.brand}</p>

              {/* Price */}
              <p className="text-lg font-bold text-green-600 mt-2">
                ${vehicle.price}
              </p>

              {/* Description */}
              <p className="text-sm text-gray-600 mt-2">
                {vehicle.description}
              </p>

              {/* Button */}
              <button className="mt-4 bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition duration-300 ease-in-out">
                Rent Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VehicleList;
