import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { userLogin } from "../redux/userSlice";

const Login = () => {
  const dispatch = useDispatch();
  const { isVehicleSelected } = useSelector((state) => state.vehicles);
  const navigate = useNavigate();
  const [passwordStrength, setPasswordStrength] = useState({
    length: false,
    lowercase: false,
    number: false,
    symbol: false,
    uppercase: false,
  });
  const [showPasswordHint, setShowPasswordHint] = useState(false);

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .matches(/[a-z]/, "Password must contain at least one lowercase letter")
      .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
      .matches(/[0-9]/, "Password must contain at least one number")
      .matches(
        /[!@#$%^&*(),.?":{}|<>]/,
        "Password must contain at least one special character"
      )
      .required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        const resultAction = await dispatch(userLogin({ formData: values }));

        if (userLogin.rejected.match(resultAction)) {
          console.log("Login failed:", resultAction.error.message);
        } else {
          formik.resetForm();

          if (!isVehicleSelected) {
            navigate("/");
          } else {
            navigate("/bookcar");
          }
        }
      } catch (error) {
        console.error("An unexpected error occurred: ", error.message);
      }
    },
  });

  const handlePasswordChange = (e) => {
    const password = e.target.value;

    setPasswordStrength({
      length: password.length >= 8,
      lowercase: /[a-z]/.test(password),
      number: /[0-9]/.test(password),
      symbol: /[!@#$%^&*(),.?":{}|<>]/.test(password),
      uppercase: /[A-Z]/.test(password),
    });

    formik.handleChange(e);
  };

  const allConditionsMet =
    passwordStrength.length &&
    passwordStrength.lowercase &&
    passwordStrength.number &&
    passwordStrength.symbol &&
    passwordStrength.uppercase;

  return (
    <>
      <div
        className="flex items-center justify-center min-h-screen bg-white py-10 md:items-start md:justify-end object-fill"
        style={{
          backgroundImage: `url(${require("../assets/new-login-bkg.jpg")})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="bg-gradient-to-r mt-24 bg-white p-8 rounded-lg shadow-lg w-full max-w-md md:me-[10%]">
          <h2 className="text-2xl font-poppins font-semibold text-darkGreen text-center mb-10">
            Login
          </h2>

          <form onSubmit={formik.handleSubmit} className="space-y-6">
            {/* Email */}
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-poppins font-medium text-darkGreen"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="mt-2 p-3 w-full border border-mediumGreen rounded-md focus:outline-none focus:ring-2 focus:ring-darkGreen"
                placeholder="Enter your email"
              />
              {formik.touched.email && formik.errors.email && (
                <div className="text-red-600 text-xs mt-2">
                  {formik.errors.email}
                </div>
              )}
            </div>

            {/* Password */}
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-poppins font-medium text-darkGreen"
              >
                Password
                <span
                  className={`ms-2 font-bold text-lg ${
                    allConditionsMet ? "text-green-500" : "text-red-600"
                  }`}
                  onMouseEnter={() => setShowPasswordHint(true)}
                  onMouseLeave={() => setShowPasswordHint(false)}
                >
                  ?
                </span>
              </label>

              {/* Password Hint Dialog */}
              {showPasswordHint && (
                <div className="absolute z-10 mt-2 p-4 bg-white shadow-lg rounded-lg border border-gray-300 text-sm text-gray-600 w-64">
                  <ul>
                    <li
                      className={`${
                        passwordStrength.length
                          ? "text-green-500"
                          : "text-red-600"
                      }`}
                    >
                      - At least 8 characters
                    </li>
                    <li
                      className={`${
                        passwordStrength.lowercase
                          ? "text-green-500"
                          : "text-red-600"
                      }`}
                    >
                      - At least one lowercase letter
                    </li>
                    <li
                      className={`${
                        passwordStrength.number
                          ? "text-green-500"
                          : "text-red-600"
                      }`}
                    >
                      - At least one number
                    </li>
                    <li
                      className={`${
                        passwordStrength.symbol
                          ? "text-green-500"
                          : "text-red-600"
                      }`}
                    >
                      - At least one special character
                    </li>
                    <li
                      className={`${
                        passwordStrength.uppercase
                          ? "text-green-500"
                          : "text-red-600"
                      }`}
                    >
                      - At least one uppercase letter
                    </li>
                  </ul>
                </div>
              )}

              <input
                id="password"
                name="password"
                type="password"
                value={formik.values.password}
                onChange={handlePasswordChange}
                onBlur={formik.handleBlur}
                className={`mt-2 p-3 w-full border rounded-md focus:outline-none focus:ring-2 border-mediumGreen ${
                  allConditionsMet
                    ? "focus:ring-darkGreen"
                    : "focus:ring-red-600"
                }`}
                placeholder="Enter your password"
              />

              {formik.touched.password && formik.errors.password && (
                <div className="text-red-600 text-xs mt-2">
                  {formik.errors.password}
                </div>
              )}
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full py-3 mt-5 bg-green-700 text-white rounded-md font-arial font-semibold text-lg hover:bg-darkestGreen"
              >
                Login
              </button>
            </div>

            {/* Forget Password */}
            <div className="text-center mt-10">
              <p className="text-sm font-poppins text-mediumGreen">
                Forget Password?{" "}
                <Link
                  to="/resetpassword"
                  className="text-darkGreen font-semibold"
                >
                  Reset Password
                </Link>
              </p>
            </div>

            {/* Sign Up Link */}
            <div className="text-center">
              <p className="text-sm font-poppins text-mediumGreen">
                New User?{" "}
                <Link to="/signup" className="text-darkGreen font-semibold">
                  Sign up
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
