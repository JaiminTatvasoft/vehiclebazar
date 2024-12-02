const BenefitsOfRentingCar = () => {
  const features = [
    {
      title: "Unlimited km to drive",
      image: require("../assets/car.png"),
    },
    {
      title: "100+ Locations in 16 cities",
      image: require("../assets/cities.png"),
    },
    {
      title: "Anywhere Delivery",
      image: require("../assets/map-2.png"),
    },
    {
      title: "Privacy & freedom",
      image: require("../assets/privacy.png"),
    },
  ];

  return (
    <div className="flex items-center justify-center bg-gray-50 px-4 sm:px-6 lg:px-28">
      <div className="relative w-full my-24 mx-0 lg:mx-28">
        <p className="text-center font-poppins font-bold text-3xl sm:text-4xl lg:text-5xl">
          Features & Benefits of Renting a Self-Drive Car
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-5 pt-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="w-full h-[250px] flex flex-col justify-center items-center shadow-md z-0 rounded-lg bg-gradient-to-b from-white to-bgGreen transition-transform duration-200 ease-in-out transform hover:scale-105 cursor-pointer"
            >
              <div className="flex flex-col items-center justify-center h-full px-4 py-6">
                <img
                  className="h-16 object-cover rounded-t-lg"
                  src={feature.image}
                  alt="Feature"
                />
                <div className="font-bold text-lg font-poppins text-darkGreen text-center mt-4">
                  {feature.title}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BenefitsOfRentingCar;
