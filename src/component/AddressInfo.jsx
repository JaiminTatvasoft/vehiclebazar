import React from "react";

const AddressInfo = ({ formData, handleInputChange }) => {
  return (
    <div>
      <h3 className="text-xl font-poppins font-semibold text-darkGreen mb-4">
        Address Info
      </h3>
      <div>
        <label
          htmlFor="contactNo"
          className="block text-sm text-darkGreen font-medium"
        >
          Contact Number
        </label>
        <input
          type="text"
          name="contactNo"
          id="contactNo"
          value={formData.contactNo}
          onChange={handleInputChange}
          className="mt-2 p-3 w-full border border-mediumGreen rounded-md focus:outline-none focus:ring-2 focus:ring-darkGreen"
          placeholder="Enter your contact number"
        />
      </div>
      <div className="mt-4">
        <label
          htmlFor="address"
          className="block text-sm text-darkGreen font-medium"
        >
          Address
        </label>
        <textarea
          name="address"
          id="address"
          value={formData.address}
          onChange={handleInputChange}
          className="mt-2 p-3 w-full border border-mediumGreen rounded-md focus:outline-none focus:ring-2 focus:ring-darkGreen"
          placeholder="Enter your address"
        />
      </div>
    </div>
  );
};

export default AddressInfo;
