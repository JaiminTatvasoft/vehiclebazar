import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { createUser, userLogin } from "../redux/userSlice";

const Login = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(userLogin({ formData }));
    setFormData({ email: "", password: "" });
  };
  return (
    <>
      <div
        className="flex items-center justify-center min-h-screen bg-white py-10 md:items-start md:justify-end object-fill"
        style={{
          backgroundImage: `url(${require("../assets/new-login-bkg.jpg")})`, // Add your image path here
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="bg-gradient-to-r mt-24 bg-white p-8 rounded-lg shadow-lg w-full max-w-md md:me-[10%]">
          <h2 className="text-2xl font-poppins font-semibold text-darkGreen text-center mb-10">
            Login
          </h2>

          <form className="space-y-6">
            {/* Email */}
            <div className="mb-10">
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
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="mt-2 p-3 w-full border border-mediumGreen rounded-md focus:outline-none focus:ring-2 focus:ring-darkGreen"
                placeholder="Enter your email"
              />
            </div>

            {/* Password */}
            <div className="mb-10">
              <label
                htmlFor="password"
                className="block text-sm font-poppins font-medium text-darkGreen"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                className="mt-2 p-3 w-full border border-mediumGreen rounded-md focus:outline-none focus:ring-2 focus:ring-darkGreen"
                placeholder="Enter your password"
              />
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full py-3 mt-5 bg-green-700 text-white rounded-md font-arial font-semibold text-lg hover:bg-darkestGreen"
                onClick={handleLogin}
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
