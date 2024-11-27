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
    <div className="flex items-center justify-center bg-gray-50">
      <div className="relative w-full max-w-7xl my-24 mx-28 ">
        <p className="flex items-center justify-center font-poppins font-bold text-4xl ">
          Features & Benefits of Renting a Self-Drive Car
        </p>
        <div className="flex gap-6 my-5 pt-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="min-w-[320px] snap-center shadow-md z-0 rounded-lg bg-gradient-to-b from-white to-bgGreen transition-transform duration-200 ease-in-out transform hover:scale-105 cursor-pointer"
            >
              <div className="flex gap-4 items-center justify-center py-12 px-2">
                <img
                  className="h-12 object-cover rounded-t-lg  cursor-pointer "
                  src={feature.image}
                  alt="Sunset in the mountains"
                />
                <div class="font-bold text-lg font-poppins text-darkGreen ">
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
