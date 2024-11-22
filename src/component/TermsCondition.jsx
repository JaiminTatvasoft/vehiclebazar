import React from "react";

const TermsCondition = ({ formData, handleInputChange }) => {
  return (
    <div>
      <h3 className="text-xl font-poppins font-semibold text-darkGreen mb-4">
        Terms & Conditions
      </h3>
      <div className="flex items-center space-x-3">
        <input
          type="checkbox"
          name="termsAccepted"
          id="termsAccepted"
          checked={formData.termsAccepted}
          onChange={handleInputChange}
          className="h-5 w-5 border-2 border-darkGreen rounded-sm bg-white focus:ring-2 focus:ring-darkGreen"
        />
        <label
          htmlFor="termsAccepted"
          className="text-sm text-darkGreen font-medium"
        >
          I accept the terms and conditions
        </label>
      </div>
    </div>
  );
};

export default TermsCondition;
