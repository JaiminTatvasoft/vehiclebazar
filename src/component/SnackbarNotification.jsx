import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { hideSnackbar } from "../redux/snackbarSlice";

const SnackbarNotification = () => {
  const dispatch = useDispatch();
  const { open, message, severity } = useSelector((state) => state.snack);

  // Close the snackbar when the close button is clicked
  const handleClose = () => {
    dispatch(hideSnackbar());
  };

  useEffect(() => {
    if (open) {
      // Automatically close the snackbar after 6 seconds
      const timer = setTimeout(() => {
        dispatch(hideSnackbar());
      }, 6000);

      // Clear the timeout if snackbar is closed before the 6 seconds
      return () => clearTimeout(timer);
    }
  }, [open, dispatch]);

  if (!open) return null; // Return null if the snackbar is not open

  let alertStyles = "bg-green-500 text-white"; // Default style for success
  if (severity === "error") {
    alertStyles = "bg-red-500 text-white"; // Error style
  } else if (severity === "warning") {
    alertStyles = "bg-yellow-500 text-black"; // Warning style
  } else if (severity === "info") {
    alertStyles = "bg-blue-500 text-white"; // Info style
  }

  return (
    <div
      className={`fixed top-20 right-5 max-w-xs w-full z-50 shadow-lg rounded-lg p-4 ${alertStyles} transition-all duration-300`}
      role="alert"
    >
      <div className="flex justify-between items-center">
        <span className="text-sm">{message}</span>
        <button
          onClick={handleClose}
          className="ml-4 text-lg font-semibold text-white hover:text-gray-300 focus:outline-none"
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default SnackbarNotification;
