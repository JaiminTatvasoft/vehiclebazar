import React, { useState, useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { Navigate } from "react-router-dom";
import "animate.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchCheckoutSessions } from "../redux/checkoutSlice"; // Import the thunk action

const Return = () => {
  const [redirect, setRedirect] = useState(false);
  const { status, customerEmail, loading, error } = useSelector(
    (state) => state.checkout
  );
  const { token } = useSelector((state) => state.users); // Get the token from Redux
  const dispatch = useDispatch();

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const sessionId = urlParams.get("session_id");

    if (sessionId) {
      dispatch(fetchCheckoutSessions({ sessionId, token })); // Dispatch the thunk
    }

    const timer = setTimeout(() => {
      setRedirect(true);
    }, 5000);

    // Clean up timeout on component unmount
    return () => clearTimeout(timer);
  }, [dispatch, token]);

  if (redirect) {
    return <Navigate to="/" />;
  }

  if (loading) {
    return <div>Loading...</div>; // Show loading state
  }

  if (status === "open") {
    return <Navigate to="/checkout" />;
  }

  if (status === "complete") {
    return (
      <section
        id="success"
        className="flex items-center justify-center h-screen bg-white text-black pt-28"
      >
        <div className="max-w-lg w-full text-center p-8 rounded-lg shadow-xl bg-mediumGreen bg-opacity-20 backdrop-blur-md">
          {/* Success Icon */}
          <div className="mb-6">
            <FaCheckCircle className="text-6xl mx-auto text-green-500 animate-pulse" />
          </div>

          {/* Success Message */}
          <h2 className="text-4xl font-bold mb-4 animate__animated animate__fadeIn">
            Payment Successful!
          </h2>
          <p className="text-lg mb-6 animate__animated animate__fadeIn">
            We appreciate your business! A confirmation email has been sent to{" "}
            <span className="font-semibold">{customerEmail}</span>. If you have
            any questions, please email{" "}
            <a
              href="mailto:orders@example.com"
              className="text-indigo-300 hover:text-indigo-400"
            >
              info@tatvasoft.com
            </a>
            .
          </p>

          {/* Button to go back to home */}
          <a
            href="/"
            className="inline-block px-6 py-3 text-lg font-semibold text-blue-800 bg-white rounded-md shadow-lg hover:bg-blue-50 transform transition-all hover:scale-105 animate__animated animate__fadeIn"
          >
            Return to Home
          </a>
        </div>
      </section>
    );
  }

  if (error) {
    return <div>Error: {error}</div>; // Show error if any
  }

  return <div className="h-screen"></div>;
};

export default Return;
