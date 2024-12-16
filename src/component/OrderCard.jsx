import React from "react";
import { useHistory } from "react-router-dom"; // React Router v5.x
import { useNavigate } from "react-router-dom"; // React Router v6.x (recommended for new projects)

const OrderCard = ({ order }) => {
  const navigate = useNavigate(); // Use the hook from react-router-dom v6

  const handleViewDetails = () => {
    navigate("/orderdetail", { state: { order } }); // Pass the complete order data to the OrderDetailPage
  };

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

        {/* View Details Button */}
        <button
          className="details-button bg-blue-600 text-white p-2 rounded-lg w-full mt-4 hover:bg-blue-700 transition-colors"
          onClick={handleViewDetails}
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default OrderCard;
