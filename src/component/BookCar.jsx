import React from "react";
import { useSelector } from "react-redux";
import { useDateTimeFormat, useDuration } from "../utils/useDateTimeFormat";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useLoadUsers } from "../utils/customHooks/useLoadUsers";

const BookCar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { vehicle, selectedPackage, freeKms } = location.state || {};

  const { data } = useLoadUsers();

  const { city, pickUpDate, returnDate } = useSelector((state) => state.search);

  const pickUp = useDateTimeFormat(pickUpDate);
  const returnInfo = useDateTimeFormat(returnDate);
  const duration = useDuration(pickUpDate, returnDate);

  const refundableDeposit = 3000;
  let finalDuration = (duration.diffInDays + duration.diffInHours / 24).toFixed(
    1
  );
  let rentalCharges = vehicle.rentalChargesPerDay * finalDuration;
  selectedPackage === 120
    ? (rentalCharges = rentalCharges)
    : (rentalCharges = rentalCharges * 1.25);

  const handleProceed = () => {
    if (data) {
      const resBody = {
        orderItems: {
          u_id: data.id,
          p_id: vehicle._id,
          prodName: `${vehicle.carname} ${vehicle.brandname}`,
          noOfDays: `${duration.diffInDays} Days and ${duration.diffInHours} hours`,
          startDate: pickUpDate,
          endDate: returnDate,
          totalPrice: refundableDeposit + rentalCharges,
        },
        shippingDetail: {
          customerName: data.name,
          email: data.email,
          pickUpLocation: city,
          dropLocation: city,
          pickUpDate: pickUp.formattedDate,
          pickUpTime: pickUp.formattedTime,
          returnDate: returnInfo.formattedDate,
          returnTime: returnInfo.formattedTime,
        },
      };
      navigate("/checkout", { state: { resBody } });
    } else {
      navigate("/login");
    }
  };
  return (
    <div className="mt-24 px-48">
      <div>
        <nav
          className="flex text-black py-3 px-5 rounded-lg mb-2"
          aria-label="Breadcrumb"
        >
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <Link
                to="/"
                className="text-sm text-black hover:text-gray-500 inline-flex items-center font-medium"
              >
                <svg
                  className="w-4 h-4 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                </svg>
                Home
              </Link>
            </li>
            <li>
              <div className="flex items-center">
                <svg
                  className="w-6 h-6 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <Link
                  to="/rentcar"
                  className="text-black hover:text-gray-500 ml-1 md:ml-2 text-sm font-medium"
                >
                  Explore Cars
                </Link>
              </div>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <svg
                  className="w-6 h-6 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="text-gray-400 ml-1 md:ml-2 text-sm font-medium dark:text-gray-500">
                  Book Car
                </span>
              </div>
            </li>
          </ol>
        </nav>
      </div>

      {/* Car Details Section */}
      <div className="flex flex-wrap lg:flex-nowrap">
        {/* Left Side - Car Image & Details */}
        <div className="mt-10 mb-20 lg:w-2/3 w-full pr-4">
          {/* Car Header */}
          <div className="">
            <h1 className="text-xl py-2 ps-4 rounded-t-lg font-semibold bg-darkGreen">
              {vehicle.brandname} {""}
              {vehicle.carname}
            </h1>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
            {/* Car Image and Information */}
            <div className="flex flex-wrap lg:flex-nowrap">
              <div className="lg:w-2/5 w-full flex bg-gray-300 rounded-lg mb-4 lg:mb-0">
                <img
                  className="w-full rounded-lg justify-center items-center"
                  src="https://app.mychoize.com/IDDRIVE.LIVEBRANDImage/BrandImage/BALENO_15Jun2023111905.png"
                  alt="Car"
                />
              </div>

              <div className="lg:w-3/5 w-full px-8">
                <div className="text-lg font-medium mb-3">COMPACT</div>
                <div className="bg-gray-100 p-4 mt-3">
                  <h3 className="text-xl text-center font-semibold">
                    Location:{" "}
                    <span className="capitalize font-semibold text-darkestGreen">
                      {city}
                    </span>
                  </h3>

                  <div className="p-2 text-sm flex flex-wrap justify-evenly">
                    <div>
                      <p>{pickUp.formattedDate}</p>
                      <p className="text-center">{pickUp.formattedTime}</p>
                    </div>

                    <div className="flex items-center justify-center font-bold bg-darkGreen rounded-full w-12 h-12">
                      <p className="text-white">To</p>
                    </div>

                    <div>
                      <p>{returnInfo.formattedDate}</p>
                      <p className="text-center">{returnInfo.formattedTime}</p>
                    </div>
                  </div>
                </div>

                <div className="text-center py-2">
                  <span className="text-md font-medium">
                    Duration: {duration.diffInDays} Days and{" "}
                    {duration.diffInHours} hours
                  </span>
                </div>

                <hr className="mx-5" />

                {/* Package Details */}
                <div className="flex justify-between items-center mt-3 text-md">
                  <div>
                    <div>Package Type:</div>
                    <div>Rental Amount:</div>
                    <div>Free kms for rental:</div>
                    <div>Extra Km Charges:</div>
                  </div>
                  <div className="text-left font-semibold">
                    <div>{selectedPackage} kms/day</div>
                    <div>
                      {selectedPackage === 120
                        ? vehicle.rentalChargesPerDay
                        : vehicle.rentalChargesPerDay * 1.25}
                      /day
                    </div>
                    <div>{freeKms} kms</div>
                    <div>₹{vehicle.extraKmCharges}/km</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="">
            <h1 className="text-xl ps-4 py-2 rounded-t-lg font-semibold bg-darkGreen">
              Car Features
            </h1>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
            {/* Car Features */}
            <div className="">
              <div className="flex flex-wrap justify-between p-4">
                <div className="flex items-center mb-4">
                  <img
                    src={require("../assets/transmission.png")}
                    alt="Automatic"
                    className="mr-2 h-[18px] w-[18px]"
                  />
                  <span>{vehicle.transmission}</span>
                </div>
                <div className="flex items-center mb-4">
                  <img
                    src={require("../assets/fuel.png")}
                    alt="Petrol"
                    className="mr-2 h-[18px] w-[18px]"
                  />
                  <span>{vehicle.fuelType}</span>
                </div>
                <div className="flex items-center mb-4">
                  <img
                    src={require("../assets/baggage.png")}
                    alt="Baggage"
                    className="mr-2 h-[18px] w-[18px]"
                  />
                  <span>{vehicle.baggage} Baggage</span>
                </div>
                <div className="flex items-center mb-4">
                  <img
                    src={require("../assets/seater.png")}
                    alt="Seater"
                    className="mr-2 h-[18px] w-[18px]"
                  />
                  <span>{vehicle.seater} Seater</span>
                </div>
              </div>

              <div className="flex justify-between items-center p-4 bg-gray-100 rounded-lg">
                {/* Left side: Features */}
                <div className="space-y-4">
                  <div className="flex items-center">
                    <img
                      src={require("../assets/insurance.png")}
                      alt="Insurance"
                      className="mr-2 h-[15px] w-[15px]"
                    />
                    <span>Insurance</span>
                  </div>
                  <div className="flex items-center">
                    <img
                      src={require("../assets/roadside.png")}
                      alt="Roadside Assistance"
                      className="mr-2 h-[15px] w-[15px]"
                    />
                    <span>Road Side Assistance</span>
                  </div>
                  <div className="flex items-center">
                    <img
                      src={require("../assets/fuel.png")}
                      alt="Fuel"
                      className="mr-2 h-[15px] w-[15px]"
                    />
                    <span>Fuel</span>
                  </div>
                </div>

                {/* Right side: Status */}
                <div className="space-y-4 font-semibold text-right">
                  <div>Included</div>
                  <div>Included</div>
                  <div>Not Included</div>
                </div>
              </div>
            </div>

            {/* Extra Km Notice */}
            <div className="flex justify-between items-center p-3.5 px-6 mt-4 text-md bg-gray-100 rounded-lg">
              {/* Extra kms notice */}
              <p>Extra kms will be charged at ₹9/km</p>

              {/* View Details button */}
              <button className="text-darkGreen font-semibold flex items-center">
                view details
                <img
                  src={require("../assets/downdrop.png")}
                  alt="View Details"
                  className="ml-2"
                  style={{ transform: "none" }}
                />
              </button>
            </div>
          </div>
        </div>

        {/* Right Side - Pickup and Drop Details */}
        <div className="mt-10 mb-20 lg:w-1/3 w-full pl-4">
          <div className="text-xl font-semibold text-center">
            Car Pickup & Drop Location
          </div>
          <div className="bg-white mt-4 px-8 pb-8 rounded-lg shadow-lg mb-6">
            {/* Pickup Location */}
            <div className="mb-6">
              <p className="text-lg">Pickup Location | Time | Charges</p>
              <p className="w-full text-start p-4 mt-2 text-sm bg-lightGreen text-darkestGreen rounded-lg mb-4">
                Hub Location | Time | Free
              </p>

              <textarea
                className="w-full p-2 border rounded"
                rows="3"
                value={`Hub Location: ${city}, Date: ${pickUp.formattedDate}, Time: ${pickUp.formattedTime}`}
              ></textarea>
            </div>

            {/* Drop Location */}
            <div>
              <p className="text-md">Drop Location | Time | Charges</p>
              <p className="w-full text-start p-4 mt-2 text-sm bg-lightGreen text-darkestGreen rounded-lg mb-4">
                Hub Location | Time | Free
              </p>

              <textarea
                className="w-full p-2 border rounded"
                rows="3"
                value={`Drop Location: ${city}, Date: ${returnInfo.formattedDate}, Time: ${returnInfo.formattedTime}`}
              ></textarea>
            </div>
          </div>

          {/* Payment Summary */}
          <div className="">
            <h1 className="text-xl py-2 ps-4 rounded-t-lg font-semibold bg-darkGreen">
              Booking Summary
            </h1>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="text-sm mb-4">
              <div className="flex justify-between mb-2">
                <span className="text-lg font-semibold">Rental Charges</span>
                <span className="text-lg font-semibold">₹{rentalCharges}</span>
              </div>

              <div className="flex justify-between mb-2">
                <span className="text-lg font-semibold">
                  Refundable Deposit
                </span>
                <span className="text-lg font-semibold">
                  ₹{refundableDeposit}
                </span>
              </div>
            </div>
            <hr />
            <div className="mt-4">
              <div className="text-center mt-4">
                <div className="flex justify-between mb-2">
                  <h1 className="text-2xl font-bold">Total Amount</h1>
                  <h2 className="text-xl py-2 font-bold text-darkGreen">
                    ₹{refundableDeposit + rentalCharges}
                  </h2>
                </div>
              </div>

              {/* Center the button */}
              <div className="flex font-arial justify-center mt-4">
                <button
                  className="py-2 px-8 rounded-full text-lg font-bold bg-darkGreen text-white"
                  onClick={handleProceed}
                >
                  Proceed
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCar;
