import React from "react";

const TermsCondition = ({ formData, handleInputChange }) => {
  const handleCheckboxChange = (e) => {
    // Update the formData with the checkbox's current state (true/false)
    handleInputChange({
      target: { name: "termsAccepted", value: e.target.checked },
    });
  };

  return (
    <div className="mb-10">
      <h3 className="text-xl font-poppins font-semibold text-darkGreen mb-10">
        Terms & Conditions
      </h3>
      <div className="flex items-center space-x-3">
        <input
          type="checkbox"
          name="termsAccepted"
          id="termsAccepted"
          checked={formData.termsAccepted}
          onChange={handleCheckboxChange} // Use the custom checkbox handler
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
