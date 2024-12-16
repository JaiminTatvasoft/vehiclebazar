import React, { useState } from "react";

const AccountInfo = ({
  formData,
  handleInputChange,
  handleBlur,
  errors,
  touched,
}) => {
  const [passwordStrength, setPasswordStrength] = useState({
    length: false,
    lowercase: false,
    number: false,
    symbol: false,
    uppercase: false,
  });
  const [showPasswordHint, setShowPasswordHint] = useState(false);

  const handlePasswordChange = (e) => {
    const password = e.target.value;

    // Check password conditions
    setPasswordStrength({
      length: password.length >= 8,
      lowercase: /[a-z]/.test(password),
      number: /[0-9]/.test(password),
      symbol: /[!@#$%^&*(),.?":{}|<>]/.test(password),
      uppercase: /[A-Z]/.test(password),
    });

    handleInputChange(e);
  };

  const allConditionsMet =
    passwordStrength.length &&
    passwordStrength.lowercase &&
    passwordStrength.number &&
    passwordStrength.symbol &&
    passwordStrength.uppercase;

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
                  passwordStrength.length ? "text-green-500" : "text-red-600"
                }`}
              >
                - At least 8 characters
              </li>
              <li
                className={`${
                  passwordStrength.lowercase ? "text-green-500" : "text-red-600"
                }`}
              >
                - At least one lowercase letter
              </li>
              <li
                className={`${
                  passwordStrength.number ? "text-green-500" : "text-red-600"
                }`}
              >
                - At least one number
              </li>
              <li
                className={`${
                  passwordStrength.symbol ? "text-green-500" : "text-red-600"
                }`}
              >
                - At least one special character
              </li>
              <li
                className={`${
                  passwordStrength.uppercase ? "text-green-500" : "text-red-600"
                }`}
              >
                - At least one uppercase letter
              </li>
            </ul>
          </div>
        )}

        <input
          type="password"
          name="password"
          id="password"
          value={formData.password}
          onChange={handlePasswordChange}
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
