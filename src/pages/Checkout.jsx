import React, { useCallback } from "react";
import { useLocation } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout,
} from "@stripe/react-stripe-js";
import { useSelector } from "react-redux";
const stripePromise = loadStripe(
  "pk_test_51QCaJxGHm1Xk7UGKaHw7k2vxjoE3xWgucrBoD3h24ifpIit3SVlMu0W60Q2zaVgVq9OEdEvhpQ4RVQ0THVwHzZIA00HZFGxNrw"
);

const Checkout = () => {
  const location = useLocation();
  const { resBody } = location.state || {};
  const { data, token } = useSelector((state) => state.users);

  const fetchClientSecret = useCallback(() => {
    // Create a Checkout Session
    return fetch("http://localhost:3010/stripe/create-checkout-session", {
      method: "POST",
      body: JSON.stringify(resBody),
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => data.client_secret);
  }, []);

  const options = { fetchClientSecret };

  return (
    <div
      id="checkout"
      className="flex items-center justify-center pt-28 pb-16 min-h-screen bg-lightGreen"
    >
      <div className="sm:min-w-[450px] w-auto">
        <EmbeddedCheckoutProvider stripe={stripePromise} options={options}>
          <EmbeddedCheckout />
        </EmbeddedCheckoutProvider>
      </div>
    </div>
  );
};
export default Checkout;
