import React from "react";
import { Field, ErrorMessage } from "formik";

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
        <Field
          type="text"
          name="address"
          className="mt-2 p-3 w-full border border-mediumGreen rounded-md focus:outline-none focus:ring-2 focus:ring-darkGreen"
          placeholder="Enter your address"
        />
        <ErrorMessage
          name="address"
          component="div"
          className="text-sm text-red-600 mt-2"
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
        <Field
          type="text"
          name="state"
          className="mt-2 p-3 w-full border border-mediumGreen rounded-md focus:outline-none focus:ring-2 focus:ring-darkGreen"
          placeholder="Enter your state"
        />
        <ErrorMessage
          name="state"
          component="div"
          className="text-sm text-red-600 mt-2"
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
          <Field
            type="text"
            name="country"
            className="mt-2 p-3 w-full border border-mediumGreen rounded-md focus:outline-none focus:ring-2 focus:ring-darkGreen"
            placeholder="Enter your country"
          />
          <ErrorMessage
            name="country"
            component="div"
            className="text-sm text-red-600 mt-2"
          />
        </div>
        <div>
          <label
            htmlFor="city"
            className="block text-sm text-darkGreen font-medium"
          >
            City
          </label>
          <Field
            type="text"
            name="city"
            className="mt-2 p-3 w-full border border-mediumGreen rounded-md focus:outline-none focus:ring-2 focus:ring-darkGreen"
            placeholder="Enter your city"
          />
          <ErrorMessage
            name="city"
            component="div"
            className="text-sm text-red-600 mt-2"
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
          <Field
            type="number"
            name="contactNo"
            className="mt-2 p-3 w-full border border-mediumGreen rounded-md focus:outline-none focus:ring-2 focus:ring-darkGreen"
            placeholder="Enter your contact number"
          />
          <ErrorMessage
            name="contactNo"
            component="div"
            className="text-sm text-red-600 mt-2"
          />
        </div>
        <div>
          <label
            htmlFor="zipCode"
            className="block text-sm text-darkGreen font-medium"
          >
            Zip Code
          </label>
          <Field
            type="number"
            name="zipCode"
            className="mt-2 p-3 w-full border border-mediumGreen rounded-md focus:outline-none focus:ring-2 focus:ring-darkGreen"
            placeholder="Enter your zip code"
          />
          <ErrorMessage
            name="zipCode"
            component="div"
            className="text-sm text-red-600 mt-2"
          />
        </div>
      </div>
    </div>
  );
};

export default AddressInfo;
