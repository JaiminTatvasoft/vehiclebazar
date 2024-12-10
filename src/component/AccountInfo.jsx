import React from "react";

const AccountInfo = ({
  formData,
  handleInputChange,
  handleBlur,
  errors,
  touched,
}) => {
  return (
    <div className="mb-10">
      <h3 className="text-xl font-poppins font-semibold text-darkGreen mb-10">
        Account Info
      </h3>

      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="block text-sm text-darkGreen font-medium"
        >
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleInputChange}
          onBlur={handleBlur}
          className={`mt-2 p-3 w-full border ${
            errors.email && touched.email
              ? "border-red-600"
              : "border-mediumGreen"
          } rounded-md`}
          placeholder="Enter your email"
        />
        {errors.email && touched.email && (
          <p className="text-sm text-red-600 mt-2">{errors.email}</p>
        )}
      </div>

      {/* Password */}
      <div className="mt-8">
        <label
          htmlFor="password"
          className="block text-sm text-darkGreen font-medium"
        >
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          value={formData.password}
          onChange={handleInputChange}
          onBlur={handleBlur}
          className={`mt-2 p-3 w-full border ${
            errors.password && touched.password
              ? "border-red-600"
              : "border-mediumGreen"
          } rounded-md`}
          placeholder="Enter your password"
        />
        {errors.password && touched.password && (
          <p className="text-sm text-red-600 mt-2">{errors.password}</p>
        )}
      </div>

      {/* Confirm Password */}
      <div className="mt-8">
        <label
          htmlFor="confirmPassword"
          className="block text-sm text-darkGreen font-medium"
        >
          Confirm Password
        </label>
        <input
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleInputChange}
          onBlur={handleBlur}
          className={`mt-2 p-3 w-full border ${
            errors.confirmPassword && touched.confirmPassword
              ? "border-red-600"
              : "border-mediumGreen"
          } rounded-md`}
          placeholder="Confirm your password"
        />
        {errors.confirmPassword && touched.confirmPassword && (
          <p className="text-sm text-red-600 mt-2">{errors.confirmPassword}</p>
        )}
      </div>
    </div>
  );
};

export default AccountInfo;
