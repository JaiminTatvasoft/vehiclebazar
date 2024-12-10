import React from "react";
import { Field, ErrorMessage } from "formik";

const PersonalInfo = ({ formData, handleInputChange }) => {
  const calculateAge = (dob) => {
    const birthDate = new Date(dob);
    const age = new Date().getFullYear() - birthDate.getFullYear();
    formData.age = age;
    return age;
  };

  return (
    <div className="mb-10">
      <h3 className="text-xl font-poppins font-semibold text-darkGreen mb-10">
        Personal Info
      </h3>

      <div>
        <label
          htmlFor="name"
          className="block text-sm text-darkGreen font-medium"
        >
          Name
        </label>
        <Field
          type="text"
          name="name"
          className="mt-2 p-3 w-full border border-mediumGreen rounded-md focus:outline-none focus:ring-2 focus:ring-darkGreen"
          placeholder="Enter your name"
        />
        <ErrorMessage
          name="name"
          component="div"
          className="text-sm text-red-600 mt-2"
        />
      </div>

      <div className="mt-8">
        <label
          htmlFor="dob"
          className="block text-sm text-darkGreen font-medium"
        >
          Date of Birth
        </label>
        <Field
          type="date"
          name="dob"
          className="mt-2 p-3 w-full border border-mediumGreen rounded-md focus:outline-none focus:ring-2 focus:ring-darkGreen"
        />
        <ErrorMessage
          name="dob"
          component="div"
          className="text-sm text-red-600 mt-2"
        />
      </div>

      {formData.dob && (
        <p className="mt-4 text-sm text-darkGreen">
          Age: {calculateAge(formData.dob)} years
        </p>
      )}

      <div className="mt-8">
        <label
          htmlFor="gender"
          className="block text-sm text-darkGreen font-medium"
        >
          Gender
        </label>
        <Field
          as="select"
          name="gender"
          className="mt-2 p-3 w-full border border-mediumGreen rounded-md focus:outline-none focus:ring-2 focus:ring-darkGreen"
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </Field>
        <ErrorMessage
          name="gender"
          component="div"
          className="text-sm text-red-600 mt-2"
        />
      </div>
    </div>
  );
};

export default PersonalInfo;
