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
      title: "innova",
      description: "toyota",
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
    <div class="flex items-center justify-center ">
      <div class="my-24 mx-28 relative w-full max-w-7xl">
        <p className="flex items-center justify-center font-poppins font-bold text-4xl">
          Most Rented Models
        </p>
        <div class="my-10 flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide">
          {features.map((feature, index) => (
            <div
              key={index}
              class="min-w-[320px] snap-center bg-white shadow-md z-0 rounded-lg border-4 border-solid"
            >
              <div className="flex items-center justify-center p-5">
                <img
                  className="w-full h-48 object-cover rounded-t-lg transition-transform duration-200 ease-in-out hover:brightness-50 cursor-pointer"
                  src={feature.image}
                  alt="Sunset in the mountains"
                />
              </div>
              <div class="px-6 py-4 bg-gray-100 rounded-b-lg">
                <div className="flex items-center font-bold justify-between">
                  <p class=" font-poppins text-darkGreen">
                    {feature.description}
                  </p>
                  <div class="font-bold text-xl font-poppins text-darkGreen">
                    {feature.title}
                  </div>
                </div>
                <button class="pt-2 text-base flex flex-end text-darkGreen">
                  More-Details
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
