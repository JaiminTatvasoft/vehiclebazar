const CustomerChoice = () => {
  return (
    <div class="flex items-center justify-center bg-gray-50">
      <div class="flex gap-6 my-24 mx-28 relative w-full max-w-7xl">
        <div>
          <div className="m-10 rounded-2xl h-60 max-w-xl bg-bgPink">
            <img
              src={require("../assets/business_rating.png")}
              alt=""
              className="py-10 mx-auto flex items-center"
            />
            <p className="text-2xl font-bold text-darkestGreen text-center">
              200k+
            </p>
            <p className="text-2xl font-bold text-darkestGreen text-center">
              Customer Served
            </p>
          </div>
          <div className="m-10 rounded-2xl h-60 bg-bgBlue">
            <img
              src={require("../assets/service4.png")}
              alt=""
              className="py-10 px-28 mx-auto flex items-center"
            />
            <p className="text-2xl font-bold text-darkestGreen text-center">
              4.3 Rating
            </p>
            <p className="text-2xl font-bold text-darkestGreen text-center">
              on App
            </p>
          </div>
        </div>
        <div className="mt-40 rounded-2xl h-60 bg-bgGrien">
          <img
            src={require("../assets/rental_rating.png")}
            alt=""
            className="py-10 px-28 mx-auto flex items-center"
          />
          <p className="text-2xl font-bold text-darkestGreen text-center">
            100 Million+
          </p>
          <p className="text-2xl font-bold text-darkestGreen text-center">
            kms
          </p>
        </div>
        <div className="ml-14 mt-40 rounded-2xl h-60">
          <div className="flex">
            <img
              src={require("../assets/full_star.png")}
              alt=""
              className="mr-2"
            />
            <img
              src={require("../assets/full_star.png")}
              alt=""
              className="mr-2"
            />
            <img
              src={require("../assets/full_star.png")}
              alt=""
              className="mr-2"
            />
            <img
              src={require("../assets/half_star.png")}
              alt=""
              className="mr-2"
            />
            <img
              src={require("../assets/half_star.png")}
              alt=""
              className="mr-2"
            />
          </div>
          <div className="pt-5 font-poppins ">
            <p className="text-4xl font-semibold text-darkGreen">
              8 Out of 10 customer
            </p>
            <p className="pt-3 text-4xl font-semibold text-darkGreen">
              loves <span className="text-darkestGreen"> VehicleBazar</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerChoice;
