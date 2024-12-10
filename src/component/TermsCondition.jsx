import React from "react";
import { Field, ErrorMessage } from "formik";

const TermsCondition = ({ formData, handleInputChange }) => {
  return (
    <div className="mb-10">
      <h3 className="text-xl font-poppins font-semibold text-darkGreen mb-10">
        Terms & Conditions
      </h3>
      <div className="flex items-center space-x-3">
        <Field
          type="checkbox"
          name="termsAccepted"
          className="h-5 w-5 border-2 border-darkGreen rounded-sm bg-white focus:ring-2 focus:ring-darkGreen"
        />
        <label
          htmlFor="termsAccepted"
          className="text-sm text-darkGreen font-medium"
        >
          I accept the terms and conditions
        </label>
        <ErrorMessage
          name="termsAccepted"
          component="div"
          className="text-sm text-red-600 mt-2"
        />
      </div>
    </div>
  );
};

export default TermsCondition;
