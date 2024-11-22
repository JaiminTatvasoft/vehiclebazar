import React from "react";

const AccountInfo = ({ formData, handleInputChange }) => {
  return (
    <div>
      <h3 className="text-xl font-poppins font-semibold text-darkGreen mb-4">
        Account Info
      </h3>
      <div>
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
      <div className="mt-4">
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
    </div>
  );
};

export default AccountInfo;
