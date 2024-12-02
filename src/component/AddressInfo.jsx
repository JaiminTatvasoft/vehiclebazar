import React from "react";

const AddressInfo = ({ formData, handleInputChange }) => {
  return (
    <div>
      <h3 className="text-xl font-poppins font-semibold text-darkGreen mb-4">
        Address Info
      </h3>

      {/* 1st Row: Address */}
      <div>
        <label
          htmlFor="address"
          className="block text-sm text-darkGreen font-medium"
        >
          Address
        </label>
        <input
          type="text"
          name="address"
          id="address"
          value={formData.address}
          onChange={handleInputChange}
          className="mt-2 p-3 w-full border border-mediumGreen rounded-md focus:outline-none focus:ring-2 focus:ring-darkGreen"
          placeholder="Enter your address"
        />
      </div>

      {/* 2nd Row: State */}
      <div className="mt-4">
        <label
          htmlFor="state"
          className="block text-sm text-darkGreen font-medium"
        >
          State
        </label>
        <input
          type="text"
          name="state"
          id="state"
          value={formData.state}
          onChange={handleInputChange}
          className="mt-2 p-3 w-full border border-mediumGreen rounded-md focus:outline-none focus:ring-2 focus:ring-darkGreen"
          placeholder="Enter your state"
        />
      </div>

      {/* 3rd Row: Country & City */}
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="country"
            className="block text-sm text-darkGreen font-medium"
          >
            Country
          </label>
          <input
            type="text"
            name="country"
            id="country"
            value={formData.country}
            onChange={handleInputChange}
            className="mt-2 p-3 w-full border border-mediumGreen rounded-md focus:outline-none focus:ring-2 focus:ring-darkGreen"
            placeholder="Enter your country"
          />
        </div>
        <div>
          <label
            htmlFor="city"
            className="block text-sm text-darkGreen font-medium"
          >
            City
          </label>
          <input
            type="text"
            name="city"
            id="city"
            value={formData.city}
            onChange={handleInputChange}
            className="mt-2 p-3 w-full border border-mediumGreen rounded-md focus:outline-none focus:ring-2 focus:ring-darkGreen"
            placeholder="Enter your city"
          />
        </div>
      </div>

      {/* 4th Row: Contact & Zip Code */}
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="contactNo"
            className="block text-sm text-darkGreen font-medium"
          >
            Contact Number
          </label>
          <input
            type="number"
            name="contactNo"
            id="contactNo"
            value={formData.contactNo}
            onChange={handleInputChange}
            className="mt-2 p-3 w-full border border-mediumGreen rounded-md focus:outline-none focus:ring-2 focus:ring-darkGreen"
            placeholder="Enter your contact number"
          />
        </div>
        <div>
          <label
            htmlFor="zipCode"
            className="block text-sm text-darkGreen font-medium"
          >
            Zip Code
          </label>
          <input
            type="number"
            name="zipCode"
            id="zipCode"
            value={formData.zipCode}
            onChange={handleInputChange}
            className="mt-2 p-3 w-full border border-mediumGreen rounded-md focus:outline-none focus:ring-2 focus:ring-darkGreen"
            placeholder="Enter your zip code"
          />
        </div>
      </div>
    </div>
  );
};

export default AddressInfo;
