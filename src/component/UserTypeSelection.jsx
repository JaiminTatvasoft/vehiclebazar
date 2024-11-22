import React from "react";

const UserTypeSelection = ({ onSelect }) => {
  return (
    <div className="flex flex-col justify-center items-center space-y-6">
      <h2 className="text-2xl font-poppins font-semibold text-darkGreen">
        Select Your Account Type
      </h2>
      <div className="flex gap-6">
        <button
          className="px-6 py-3 bg-darkGreen text-white rounded-md hover:bg-darkestGreen"
          onClick={() => onSelect("user")}
        >
          User
        </button>
        <button
          className="px-6 py-3 bg-darkGreen text-white rounded-md hover:bg-darkestGreen"
          onClick={() => onSelect("vendor")}
        >
          Vendor
        </button>
      </div>
    </div>
  );
};

export default UserTypeSelection;
