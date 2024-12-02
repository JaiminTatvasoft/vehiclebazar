const CustomerChoice = () => {
  return (
    <div className="flex items-center justify-center bg-gray-50 pb-32">
      <div className="flex flex-col lg:flex-row gap-6 mx-5 sm:mx-10 md:mx-20 lg:mx-28 relative w-full max-w-full px-5 sm:px-20">
        {/* First Card - Customer Served */}
        <div className="flex-1">
          <div className="m-5 lg:m-0 xl:m-5 rounded-2xl h-auto py-10 px-20 bg-bgPink">
            <img
              src={require("../assets/business_rating.png")}
              alt="Customer Served"
              className="py-10 mx-auto flex items-center"
            />
            <p className="text-xl sm:text-2xl font-bold text-darkestGreen text-center">
              200k+
            </p>
            <p className="text-xl sm:text-2xl font-bold text-darkestGreen text-center whitespace-nowrap">
              Customer Served
            </p>
          </div>
          <div className="m-5 lg:mt-5 lg:m-0 xl:m-5 rounded-2xl h-auto py-10 px-20 bg-bgBlue">
            <img
              src={require("../assets/service4.png")}
              alt="App Rating"
              className="py-10 mx-auto flex items-center"
            />
            <p className="text-xl sm:text-2xl font-bold text-darkestGreen text-center whitespace-nowrap">
              4.3 Rating
            </p>
            <p className="text-xl sm:text-2xl font-bold text-darkestGreen text-center">
              on App
            </p>
          </div>
        </div>

        {/* Second Card - Kms */}
        <div className="flex-1">
          <div className="m-5 lg:m-0 xl:m-5 lg:mt-40 xl:mt-40 rounded-2xl h-auto py-10 px-20 bg-bgGrien">
            <img
              src={require("../assets/rental_rating.png")}
              alt="Kms"
              className="py-10 mx-auto flex items-center"
            />
            <p className="text-xl sm:text-2xl font-bold text-darkestGreen text-center whitespace-nowrap">
              100 Million+
            </p>
            <p className="text-xl sm:text-2xl font-bold text-darkestGreen text-center">
              kms
            </p>
          </div>
        </div>

        {/* Third Card - Customer Satisfaction */}
        <div className="flex-1 lg:mt-40">
          <div className="flex justify-center mb-5">
            <img
              src={require("../assets/full_star.png")}
              alt="Full Star"
              className="mr-1 sm:mr-2 lg:h-[44px] lg:w-[44px] xl:h-full xl:w-full"
            />
            <img
              src={require("../assets/full_star.png")}
              alt="Full Star"
              className="mr-1 sm:mr-2 lg:h-[44px] lg:w-[44px] xl:h-full xl:w-full"
            />
            <img
              src={require("../assets/full_star.png")}
              alt="Full Star"
              className="mr-1 sm:mr-2 lg:h-[44px] lg:w-[44px] xl:h-full xl:w-full"
            />
            <img
              src={require("../assets/half_star.png")}
              alt="Half Star"
              className="mr-1 sm:mr-2 lg:h-[44px] lg:w-[44px] xl:h-full xl:w-full"
            />
            <img
              src={require("../assets/half_star.png")}
              alt="Half Star"
              className="mr-1 sm:mr-2 lg:h-[44px] lg:w-[44px] xl:h-full xl:w-full"
            />
          </div>
          <div className="text-center font-poppins">
            <p className="text-2xl sm:text-4xl font-semibold text-darkGreen">
              8 Out of 10 customers
            </p>
            <p className="pt-3 text-2xl sm:text-4xl font-semibold text-darkGreen">
              loves <span className="text-darkestGreen">VehicleBazar</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerChoice;
