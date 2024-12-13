import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../redux/userSlice";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import AccountInfo from "../component/AccountInfo";
import PersonalInfo from "../component/PersonalInfo";
import AddressInfo from "../component/AddressInfo";
import TermsCondition from "../component/TermsCondition";

const Signup = () => {
  const dispatch = useDispatch();
  const [step, setStep] = useState(2);

  const initialValues = {
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
    dob: "",
    age: 0,
    contactNo: "",
    address: "",
    state: "",
    country: "",
    city: "",
    zipCode: "",
    gender: "",
    termsAccepted: false,
  };

  const handleNext = () => setStep(step + 1);
  const handlePrevious = () => setStep(step - 1);

  // Validation schemas
  const validationSchemas = {
    2: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Confirm password is required"),
    }),
    3: Yup.object({
      name: Yup.string().required("Name is required"),
      dob: Yup.date().required("Date of birth is required"),
      gender: Yup.string().required("Gender is required"),
    }),
    4: Yup.object({
      address: Yup.string().required("Address is required"),
      state: Yup.string().required("State is required"),
      country: Yup.string().required("Country is required"),
      city: Yup.string().required("City is required"),
      contactNo: Yup.string().required("Contact number is required"),
      zipCode: Yup.string().required("Zip code is required"),
    }),
    5: Yup.object({
      termsAccepted: Yup.boolean().oneOf(
        [true],
        "You must accept the terms and conditions"
      ),
    }),
  };

  const handleSubmit = (values) => {
    dispatch(createUser({ formData: values }));
    setStep(2); // Reset to first step after submission
  };

  return (
    <div
      className="min-h-screen bg-white flex justify-center items-center py-10 md:items-start md:justify-end"
      style={{
        backgroundImage: `url(${require("../assets/new-login-bkg.jpg")})`, // Add your image path here
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="min-h-full bg-gradient-to-r mt-24 bg-white p-6 w-full max-w-md rounded-lg shadow-lg flex flex-col md:me-[15%]">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchemas[step]} // Apply the validation schema for the current step
          onSubmit={handleSubmit}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            isValid,
            dirty,
          }) => (
            <Form className="flex flex-col w-full">
              {step === 2 && (
                <AccountInfo
                  formData={values}
                  handleInputChange={handleChange}
                  handleBlur={handleBlur}
                  errors={errors}
                  touched={touched}
                />
              )}
              {step === 3 && (
                <PersonalInfo
                  formData={values}
                  handleInputChange={handleChange}
                  handleBlur={handleBlur}
                  errors={errors}
                  touched={touched}
                />
              )}
              {step === 4 && (
                <AddressInfo
                  formData={values}
                  handleInputChange={handleChange}
                  handleBlur={handleBlur}
                  errors={errors}
                  touched={touched}
                />
              )}
              {step === 5 && (
                <TermsCondition
                  formData={values}
                  handleInputChange={handleChange}
                  handleBlur={handleBlur}
                  errors={errors}
                  touched={touched}
                />
              )}

              {/* Buttons Section */}
              <div className="flex justify-between mt-4">
                {step > 2 && (
                  <button
                    type="button"
                    className="bg-green-700 text-white px-4 py-2 rounded-md disabled:opacity-50"
                    onClick={handlePrevious}
                  >
                    Previous
                  </button>
                )}

                {step < 5 ? (
                  <button
                    type="button"
                    className="bg-green-700 text-white px-4 py-2 rounded-md"
                    onClick={handleNext}
                    disabled={!isValid || !dirty}
                  >
                    Next
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="bg-green-700 text-white px-4 py-2 rounded-md"
                    disabled={!isValid || !dirty}
                  >
                    Submit
                  </button>
                )}
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Signup;
