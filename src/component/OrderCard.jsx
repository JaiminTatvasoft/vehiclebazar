import React from "react";

const OrderCard = ({ order }) => {
  return (
    <div className="order-card bg-white rounded-lg shadow-lg p-6 hover:scale-105 transition-transform transform hover:shadow-2xl">
      <div className="vehicle-info mb-4">
        <img
          src={order.vehicles.imageUrl}
          alt={order.vehicles.carname}
          className="w-full h-48 object-cover rounded-t-lg shadow-md"
        />
      </div>

      <div className="order-details mt-4">
        <h2 className="text-2xl font-semibold text-blue-600 mb-2">
          {order.prodName}
        </h2>
        <p className="text-gray-600 text-sm">Ordered by: {order.users.name}</p>
        <p className="text-gray-800 font-semibold text-lg mt-2">
          Total Amount: ₹{order.totalAmount}
        </p>
        <p className="text-gray-600 text-sm mt-2">
          Duration: {order.noOfDays}
        </p>
        <p className="text-gray-600 text-sm mt-1">
          Start Date: {new Date(order.startDate).toLocaleString()}
        </p>
        <p className="text-gray-600 text-sm mt-1">
          End Date: {new Date(order.endDate).toLocaleString()}
        </p>

        <div className="vehicle-info mt-4">
          <p className="text-gray-800 font-semibold">
            Car: {order.vehicles.carname}
          </p>
          <p className="text-gray-600">Brand: {order.vehicles.brandname}</p>
          <p className="text-gray-600">
            Location: {order.vehicles.availableLocation}
          </p>
        </div>
      </div>

      {/* View Details Button (Optional) */}
      {/* <button className="details-button bg-blue-600 text-white p-2 rounded-lg w-full mt-4 hover:bg-blue-700 transition-colors">
              View Details
            </button> */}
    </div>
  );
};

export default OrderCard;
