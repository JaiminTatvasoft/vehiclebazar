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
  const [rating, setRating] = useState(0); // Rating state (1 to 5)
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [reviews, setReviews] = useState([]);

  const navigate = useNavigate();

  const handleSubmitReview = async () => {
    if (!reviewText.trim() || rating === 0) {
      return;
    }

    setIsSubmitting(true);

    try {
      await dispatch(
        submitReview({
          order: order,
          reviewText,
          rating, // Send the rating value with the review
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
      setRating(0); // Reset rating after submission
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
          setReviews(data.reviews);
        }
      } catch (err) {
        console.error("Error fetching reviews:", err);
      }
    };

    fetchReviews();
  }, [token, order.p_id, handleSubmitReview]);

  if (!order) {
    return (
      <div className="pt-44 font-bold h-screen text-center text-2xl">
        <h1>No order data available.</h1>
      </div>
    );
  }

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

        {/* Rating System */}
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
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
            {/* Review Textarea */}
            <textarea
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
              className="w-full p-4 border-2 border-gray-300 rounded-md resize-none"
              rows="4"
              placeholder="Write your review..."
            />

            {/* Right Side: Star Rating and Submit Button */}
            <div className="flex flex-col items-center space-y-4">
              {/* Star Rating */}
              <div className="flex space-x-2 mb-4 mt-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    onClick={() => setRating(star)}
                    className={`w-8 h-8 cursor-pointer ${
                      star <= rating ? "text-yellow-400" : "text-gray-300"
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <path d="M10 15l-5.878 3.09 1.118-6.532L1 6.97l6.557-.535L10 0l2.443 5.434L19 6.97l-4.24 4.588 1.118 6.532L10 15z" />
                  </svg>
                ))}
              </div>

              {/* Submit Button */}
              <button
                onClick={handleSubmitReview}
                disabled={isSubmitting || loading}
                className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition duration-200"
              >
                {isSubmitting || loading ? "Submitting..." : "Submit Review"}
              </button>
            </div>
          </div>
        )}

        {/* Display Reviews */}
        <div className="mt-6 text-center">
          {reviews.length > 0 ? (
            <p className="text-2xl font-bold">Your Reviews</p>
          ) : (
            <p className="text-2xl font-bold">You have not given any Reviews</p>
          )}
          {reviews.map((chat, index) => (
            <div
              key={index}
              className="text-center font-bold mt-4 shadow-md text-xl font-poppins text-darkGreen"
            >
              <p className="text-gray-700 text-base text-center">
                {chat.review.length > 60
                  ? `${chat.review.slice(0, 50)}...`
                  : chat.review}
              </p>
              <div className="flex justify-center space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className={`w-6 h-6 ${
                      star <= chat.rating ? "text-yellow-400" : "text-gray-300"
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.118-6.532L1 6.97l6.557-.535L10 0l2.443 5.434L19 6.97l-4.24 4.588 1.118 6.532L10 15z" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrderDetail;
