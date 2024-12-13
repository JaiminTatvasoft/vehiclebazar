import React, { useState, useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { Navigate } from "react-router-dom";
import "animate.css";

const Return = () => {
  const [status, setStatus] = useState(null);
  const [customerEmail, setCustomerEmail] = useState("");
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    fetchCheckoutSession();

    const timer = setTimeout(() => {
      setRedirect(true);
    }, 5000);

    // Clean up timeout on component unmount
    return () => clearTimeout(timer);
  }, []);

  const fetchCheckoutSession = async () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const sessionId = urlParams.get("session_id");

    const res = await fetch(
      `http://localhost:3010/stripe/after-checkout?session_id=${sessionId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await res.json();
    console.log(data);

    setStatus(data.status);
    setCustomerEmail(data.customer_email);
  };

  if (redirect) {
    return <Navigate to="/" />;
  }

  if (status === "open") {
    return (
      <>
        <Navigate to="/checkout" />
      </>
    );
  }

  if (status === "complete") {
    return (
      <section
        id="success"
        className="flex items-center justify-center h-screen bg-white  text-black pt-28"
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

  if (status === "Error fetching vehicles") {
    return (
      <>
        <section id="success" className="mt-28 h-screen">
          <p>
            We appreciate your business! A confirmation email will be sent to{" "}
            {customerEmail}. If you have any questions, please email{" "}
            <a href="mailto:orders@example.com">orders@example.com</a>.
          </p>
        </section>
      </>
    );
  }

  return <div className="h-screen"></div>;
};

export default Return;
