import React, { useState } from "react";
import AccountInfo from "../component/AccountInfo";
import UserTypeSelection from "../component/UserTypeSelection";
import PersonalInfo from "../component/PersonalInfo";
import AddressInfo from "../component/AddressInfo";
import TermsCondition from "../component/TermsCondition";

const Signup = () => {
  const [step, setStep] = useState(1);
  const [userType, setUserType] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    dob: "",
    contactNo: "",
    address: "",
    termsAccepted: false,
  });
  console.log(userType);

  const handleNext = () => setStep(step + 1);
  const handlePrevious = () => setStep(step - 1);

  const handleUserTypeSelect = (type) => {
    setUserType(type);
    setStep(2); // Move to the next step after selecting user type
  };

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
      <div className="min-h-screen bg-white flex justify-center items-center py-10">
        <div className="min-h-full bg-lightGreen p-6 w-full max-w-4xl rounded-lg shadow-lg flex flex-col">
          {step === 1 && <UserTypeSelection onSelect={handleUserTypeSelect} />}
          {step > 1 && (
            <div className="flex flex-col md:flex-row w-full">
              {/* Left Section with Tabs */}
              <div className="w-full md:w-1/4 bg-darkGreen text-white p-4 rounded-t-lg md:rounded-l-lg space-y-6">
                <button
                  className={`w-full py-2 rounded-md ${
                    step === 2 ? "bg-darkestGreen" : "bg-mediumGreen"
                  }`}
                  onClick={() => setStep(2)}
                >
                  Account Info
                </button>
                <button
                  className={`w-full py-2 rounded-md ${
                    step === 3 ? "bg-darkestGreen" : "bg-mediumGreen"
                  }`}
                  onClick={() => setStep(3)}
                >
                  Personal Info
                </button>
                <button
                  className={`w-full py-2 rounded-md ${
                    step === 4 ? "bg-darkestGreen" : "bg-mediumGreen"
                  }`}
                  onClick={() => setStep(4)}
                >
                  Address Info
                </button>
                <button
                  className={`w-full py-2 rounded-md ${
                    step === 5 ? "bg-darkestGreen" : "bg-mediumGreen"
                  }`}
                  onClick={() => setStep(5)}
                >
                  Terms & Conditions
                </button>
              </div>

              {/* Right Section (Form Content) */}
              <div className="w-full md:w-3/4 p-6 space-y-6 md:space-y-4 flex flex-col justify-between">
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
                      className="bg-darkGreen text-white px-4 py-2 rounded-md disabled:opacity-50"
                      onClick={handlePrevious}
                      disabled={step === 2}
                    >
                      Previous
                    </button>
                  )}
                  {step < 5 ? (
                    <button
                      className="bg-darkGreen text-white px-4 py-2 rounded-md"
                      onClick={handleNext}
                    >
                      Next
                    </button>
                  ) : (
                    <button
                      className="bg-darkGreen text-white px-4 py-2 rounded-md"
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
