import React from "react";

const BookCar = () => {
  return (
    <div className="mt-28 px-48">
      {/* Car Details Section */}
      <div className="flex flex-wrap lg:flex-nowrap">
        {/* Left Side - Car Image & Details */}
        <div className="lg:w-2/3 w-full pr-4">
          {/* Car Header */}
          <div className="">
            <h1 className="text-2xl py-2 ps-4 rounded-t-lg font-semibold bg-darkGreen">
              MARUTI BALENO
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
                    <span className="capitalize font-extrabold text-darkestGreen">
                      Delhi
                    </span>
                  </h3>

                  <div className="p-2 text-sm flex flex-wrap justify-evenly">
                    <div>
                      <p>Wed, 27 Nov 2024</p>
                      <p className="text-center">09:30 AM</p>
                    </div>

                    <div className="flex items-center justify-center font-bold bg-darkGreen rounded-full w-12 h-12">
                      <p className="text-white">To</p>
                    </div>

                    <div>
                      <p>Sat, 30 Nov 2024</p>
                      <p className="text-center">06:30 PM</p>
                    </div>
                  </div>
                </div>

                <div className="text-center py-2">
                  <span className="text-md font-medium">
                    Duration: 3 Days and 9 hours
                  </span>
                </div>

                <hr className="mx-5" />

                {/* Package Details */}
                <div className="flex justify-between items-center mt-3 text-md">
                  <div>
                    <div>Package Type:</div>
                    <div>Free kms for rental:</div>
                    <div>Extra Km Charges:</div>
                  </div>
                  <div className="text-left font-semibold">
                    <div>300 kms/day</div>
                    <div>1013kms</div>
                    <div>₹9/km</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="">
            <h1 className="text-2xl ps-4 py-2 rounded-t-lg font-semibold bg-darkGreen">
              Car Features
            </h1>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
            {/* Car Features */}
            <div className="mt-6">
              <div className="flex flex-wrap justify-between p-4">
                <div className="flex items-center mb-4">
                  <img
                    src="/_next/static/media/automatic.3de00118.svg"
                    alt="Automatic"
                    className="mr-2"
                  />
                  <span>Manual</span>
                </div>
                <div className="flex items-center mb-4">
                  <img
                    src="/_next/static/media/petrol.95a6232f.svg"
                    alt="Petrol"
                    className="mr-2"
                  />
                  <span>Petrol</span>
                </div>
                <div className="flex items-center mb-4">
                  <img
                    src="/_next/static/media/seat.fa55a3aa.svg"
                    alt="Baggage"
                    className="mr-2"
                  />
                  <span>2 Baggage</span>
                </div>
                <div className="flex items-center mb-4">
                  <img
                    src="/_next/static/media/pickup_vehical.c834bf16.svg"
                    alt="Seater"
                    className="mr-2"
                  />
                  <span>5 Seater</span>
                </div>
              </div>

              <div className="flex justify-between items-center p-4 bg-gray-100 rounded-lg">
                {/* Left side: Features */}
                <div className="space-y-4">
                  <div className="flex items-center">
                    <img
                      src="/_next/static/media/insurance.1a8d38e5.svg"
                      alt="Insurance"
                      className="mr-2"
                    />
                    <span>Insurance</span>
                  </div>
                  <div className="flex items-center">
                    <img
                      src="/_next/static/media/rs_assistant.a8f2bfe2.svg"
                      alt="Roadside Assistance"
                      className="mr-2"
                    />
                    <span>Road Side Assistance</span>
                  </div>
                  <div className="flex items-center">
                    <img
                      src="/_next/static/media/fuel_2.eeeff8a4.svg"
                      alt="Fuel"
                      className="mr-2"
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
              <button className="text-blue-500 font-bold flex items-center">
                View Details
                <img
                  src="/_next/static/media/view_arrow.bc231e85.svg"
                  alt="View Details"
                  className="ml-2"
                  style={{ transform: "none" }}
                />
              </button>
            </div>
          </div>
        </div>

        {/* Right Side - Pickup and Drop Details */}
        <div className="lg:w-1/3 w-full pl-4 mt-6 lg:mt-0">
          <div className="text-2xl font-bold">Car pickup & Drop location</div>
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
                disabled
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
                disabled
              ></textarea>
            </div>
          </div>

          {/* Payment Summary */}
          <div className="">
            <h1 className="text-2xl py-2 ps-4 rounded-t-lg font-semibold bg-darkGreen">
              Booking Summary
            </h1>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="text-sm mb-4">
              <div className="flex justify-between mb-2">
                <span className="text-lg font-semibold">Rental Charges</span>
                <span className="text-lg font-semibold">₹9,122</span>
              </div>

              <div className="flex justify-between mb-2">
                <span className="text-lg font-semibold">Refundable Deposit</span>
                <span className="text-lg font-semibold">₹3,000</span>
              </div>
            </div>
            <hr />
            <div className="mt-4">
              <div className="text-center mt-4">
                <div className="flex justify-between mb-2">
                  <h1 className="text-2xl font-bold">Total Amount</h1>
                  <h2 className="text-xl py-2 font-bold text-darkGreen">
                    ₹12,122
                  </h2>
                </div>
              </div>

              {/* Center the button */}
              <div className="flex font-arial justify-center mt-4">
                <button className="py-2 px-8 rounded-full text-lg font-bold bg-darkGreen text-white">
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
