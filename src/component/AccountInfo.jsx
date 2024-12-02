import React, { useState } from "react";

const AccountInfo = ({ formData, handleInputChange, handleValidation }) => {
  const [passwordError, setPasswordError] = useState("");

  // Validate password and confirm password match
  const validatePassword = (e) => {
    const { name, value } = e.target;
    handleInputChange(e); // Call parent function to handle input change

    if (name === "confirmPassword") {
      if (value !== formData.password) {
        setPasswordError("Passwords do not match");
      } else {
        setPasswordError(""); // Clear error if passwords match
      }
    }
  };

  return (
    <div className="mb-10">
      <h3 className="text-xl font-poppins font-semibold text-darkGreen mb-10">
        Account Info
      </h3>

      <div className="">
        <label
          htmlFor="email"
          className="block text-sm text-darkGreen font-medium"
        >
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleInputChange}
          className="mt-2 p-3 w-full border border-mediumGreen rounded-md focus:outline-none focus:ring-2 focus:ring-darkGreen"
          placeholder="Enter your email"
        />
      </div>

      <div className="mt-8">
        <label
          htmlFor="password"
          className="block text-sm text-darkGreen font-medium"
        >
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          value={formData.password}
          onChange={handleInputChange}
          className="mt-2 p-3 w-full border border-mediumGreen rounded-md focus:outline-none focus:ring-2 focus:ring-darkGreen"
          placeholder="Enter your password"
        />
      </div>

      <div className="mt-8">
        <label
          htmlFor="confirmPassword"
          className="block text-sm text-darkGreen font-medium"
        >
          Confirm Password
        </label>
        <input
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          value={formData.confirmPassword}
          onChange={validatePassword} // Use the validation function here
          className="mt-2 p-3 w-full border border-mediumGreen rounded-md focus:outline-none focus:ring-2 focus:ring-darkGreen"
          placeholder="Confirm your password"
        />
        {passwordError && (
          <p className="text-sm text-red-600 mt-2">{passwordError}</p> // Show error message
        )}
      </div>
    </div>
  );
};

export default AccountInfo;
