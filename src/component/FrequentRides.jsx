const FrequentRides = () => {
  const features = [
    {
      title: "Baleno",
      description: "Maruti Suzuki",
      image: require("../assets/baleno.png"),
    },
    {
      title: "Innova",
      description: "Toyota",
      image: require("../assets/innova.png"),
    },
    {
      title: "Innova",
      description: "Toyota",
      image: require("../assets/innova-1.png"),
    },
    {
      title: "Swift",
      description: "Maruti Suzuki",
      image: require("../assets/swift.png"),
    },
    {
      title: "Car Name",
      description: "Brand Name",
      image: require("../assets/swift.png"),
    },
    {
      title: "Car Name",
      description: "Brand Name",
      image: require("../assets/swift.png"),
    },
    {
      title: "Car Name",
      description: "Brand Name",
      image: require("../assets/swift.png"),
    },
    {
      title: "Car Name",
      description: "Brand Name",
      image: require("../assets/swift.png"),
    },
  ];

  return (
    <div className="mx-4 flex items-center justify-center bg-gray-50">
      <div className="my-24 mx-28 relative w-full max-w-7xl">
        <p className="flex items-center justify-center font-poppins font-bold text-4xl">
          Most Rented Models
        </p>
        <div className="my-10 flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide w-full">
          {features.map((feature, index) => (
            <div
              key={index}
              className="min-w-[320px] snap-center bg-white shadow-md z-0 rounded-lg border-2 hover:bg-gray-300 border-solid"
            >
              <div className="flex items-center justify-center">
                <img
                  className="w-full h-52 object-cover rounded-t-lg p-5 transition-transform duration-200 ease-in-out transform hover:scale-105 cursor-pointer"
                  src={feature.image}
                  alt={feature.title} // Updated to reflect the car model name
                />
              </div>
              <div className="px-6 py-4 bg-gray-100 rounded-b-lg">
                <div className="flex items-center font-bold justify-between">
                  <p className="font-poppins text-darkGreen">
                    {feature.description}
                  </p>
                  <div className="font-bold text-xl font-poppins text-darkGreen">
                    {feature.title}
                  </div>
                </div>
                <button className="pt-2 text-base text-darkGreen">
                  More Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FrequentRides;
