import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { submitReview } from "../redux/reviewSlice";
import { showSnackbar } from "../redux/snackbarSlice";

const OrderDetail = () => {
  const { state } = useLocation();
  const { order } = state || {};
  const { token } = useSelector((state) => state.users);
  const { loading, error } = useSelector((state) => state.reviews); // Access review state
  const dispatch = useDispatch();

  const [isReviewing, setIsReviewing] = useState(false);
  const [reviewText, setReviewText] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [reviews, setReviews] = useState([]);

  const navigate = useNavigate();
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch(
          `http://localhost:3010/reviews/ordered-product-review/${order.p_id}`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );

        const data = await response.json();

        if (data.success) {
          console.log(data.reviews);
          setReviews(data.reviews);
        } else {
        }
      } catch (err) {}
    };

    fetchReviews();
  }, [token]);

  if (!order) {
    return (
      <div className="pt-44 font-bold h-screen text-center text-2xl">
        <h1>No order data available.</h1>
      </div>
    );
  }

  const handleSubmitReview = async () => {
    if (!reviewText.trim()) {
      return;
    }

    setIsSubmitting(true);

    try {
      await dispatch(
        submitReview({
          order: order,
          reviewText,
          token,
        })
      ).unwrap();

      dispatch(
        showSnackbar({
          message: "Review submitted successfully!",
          severity: "success",
        })
      );
      setIsReviewing(false);
      setReviewText("");
    } catch (error) {
      dispatch(
        showSnackbar({
          message: "Error submitting the review. Please try again later.",
          severity: "error",
        })
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mt-28 p-8 bg-gradient-to-r from-green-50 to-green-100 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-xl p-6 space-y-6">
        <h2 className="text-3xl font-bold text-blue-700 mb-4">Order Details</h2>

        {/* Vehicle Image */}
        <div className="vehicle-info mb-4 relative">
          <img
            src={order.vehicles.imageUrl}
            alt={order.vehicles.carname}
            className="w-full h-60 object-cover rounded-lg shadow-lg"
          />
          <div className="absolute top-2 left-4 bg-gray-900 text-white text-xs px-2 py-1 rounded-md">
            {order.vehicles.brandname}
          </div>
        </div>

        {/* Order Info */}
        <div className="order-info space-y-4">
          <div className="text-gray-800 text-lg font-semibold">
            <p>
              Product Name:{" "}
              <span className="font-bold text-blue-600">{order.prodName}</span>
            </p>
            <p className="text-gray-600 text-sm">
              Ordered by:{" "}
              <span className="font-medium">{order.users.name}</span>
            </p>
          </div>

          <div className="flex items-center text-lg text-gray-900 font-semibold mt-2">
            <p>Total Amount:</p>
            <p className="text-green-700 ms-4">₹{order.totalAmount}</p>
          </div>

          <div className="flex space-x-6 text-gray-600">
            <p>Duration: {order.noOfDays} days</p>
          </div>

          <div className="text-gray-600 mt-4">
            <p>Start Date: {new Date(order.startDate).toLocaleString()}</p>
            <p>Pickup Location: {order.pickUpLocation}</p>
            <p>End Date: {new Date(order.endDate).toLocaleString()}</p>
            <p>Drop Location: {order.dropLocation}</p>
          </div>

          {/* Vehicle Details */}
          <div className="vehicle-details bg-gray-50 p-4 rounded-lg mt-6 shadow-inner">
            <p className="text-gray-800 font-semibold text-xl">
              Vehicle Information
            </p>
            <p className="text-gray-700">
              Car: <span className="font-bold">{order.vehicles.carname}</span>
            </p>
            <p className="text-gray-700">Brand: {order.vehicles.brandname}</p>
            <p className="text-gray-700">
              Location: {order.vehicles.availableLocation}
            </p>
          </div>
        </div>

        {/* Add Review Button */}
        {!isReviewing ? (
          <div className="mt-6 flex justify-center">
            <button
              onClick={() => setIsReviewing(true)}
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-200"
            >
              Add Review
            </button>
          </div>
        ) : (
          <div className="mt-6 flex justify-center space-x-4">
            <textarea
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
              className="w-full max-w-lg p-4 border-2 border-gray-300 rounded-md resize-none"
              rows="4"
              placeholder="Write your review..."
            />
            <button
              onClick={handleSubmitReview}
              disabled={isSubmitting || loading}
              className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition duration-200"
            >
              {isSubmitting || loading ? "Submitting..." : "Submit Review"}
            </button>
          </div>
        )}

        <div className="mt-6 text-center">
          <p className="text-2xl font-bold">Your Reviews</p>
          {reviews.map((chat) => (
            <div className="text-center font-bold mt-4 shadow-md text-xl font-poppins text-darkGreen">
              <p className="text-gray-700 text-base text-center">
                {chat.review.length > 60
                  ? `${chat.review.slice(0, 50)}...`
                  : chat.review}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrderDetail;
