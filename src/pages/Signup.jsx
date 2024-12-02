import React, { useState } from "react";
import AccountInfo from "../component/AccountInfo";
import PersonalInfo from "../component/PersonalInfo";
import AddressInfo from "../component/AddressInfo";
import TermsCondition from "../component/TermsCondition";

const Signup = () => {
  const [step, setStep] = useState(2);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    dob: "",
    contactNo: "",
    address: "",
    termsAccepted: false,
  });

  const handleNext = () => setStep(step + 1);
  const handlePrevious = () => setStep(step - 1);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    // Here you can call the API to send the data
  };

  return (
    <>
      <div
        className="min-h-screen bg-white flex justify-center items-center py-10  md:items-start md:justify-end"
        style={{
          backgroundImage: `url(${require("../assets/bglogin.jpg")})`, // Add your image path here
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="min-h-full bg-gradient-to-r mt-24 bg-white p-6 w-full max-w-md rounded-lg shadow-lg flex flex-col md:me-[15%]">
          {step > 1 && (
            <div className="flex flex-col md:flex-row w-full">
              {/* Right Section (Form Content) */}
              <div className="w-full p-6 space-y-6 md:space-y-8 flex flex-col justify-between">
                {step === 2 && (
                  <AccountInfo
                    formData={formData}
                    handleInputChange={handleInputChange}
                  />
                )}
                {step === 3 && (
                  <PersonalInfo
                    formData={formData}
                    handleInputChange={handleInputChange}
                  />
                )}
                {step === 4 && (
                  <AddressInfo
                    formData={formData}
                    handleInputChange={handleInputChange}
                  />
                )}
                {step === 5 && (
                  <TermsCondition
                    formData={formData}
                    handleInputChange={handleInputChange}
                  />
                )}

                {/* Buttons Section */}
                <div className="flex justify-between mt-4">
                  {step < 6 && (
                    <button
                      className="bg-green-700 text-white px-4 py-2 rounded-md disabled:opacity-50"
                      onClick={handlePrevious}
                      disabled={step === 2}
                    >
                      Previous
                    </button>
                  )}
                  {step < 5 ? (
                    <button
                      className="bg-green-700 text-white px-4 py-2 rounded-md"
                      onClick={handleNext}
                    >
                      Next
                    </button>
                  ) : (
                    <button
                      className="bg-green-700 text-white px-4 py-2 rounded-md"
                      onClick={handleSubmit}
                    >
                      Submit
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Signup;
