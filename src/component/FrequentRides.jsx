const FrequentRides = () => {
  const features = [
    {
      title: "4 Seater Vehicle Options",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
      image: require("../assets/bkg-img-1.jpg"),
    },
    {
      title: "4 Seater Vehicle Options",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
      image: require("../assets/bkg-img-1.jpg"),
    },
    {
      title: "4 Seater Vehicle Options",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
      image: require("../assets/bkg-img-1.jpg"),
    },
    {
      title: "4 Seater Vehicle Options",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
      image: require("../assets/bkg-img-1.jpg"),
    },
  ];
  return (
    <div class="flex items-center justify-center">
      <div class="realtive relative w-full max-w-full">
        <div
          class="absolute w-full h-full top-0 left-0 bg-cover bg-center bg-no-repeat  bg-fixed"
          style={{
            backgroundImage:
              "url(https://d1pnnwteuly8z3.cloudfront.net/images/dafc1e05-b0e8-4c6d-b375-4a62333bbd5a/71fe09e2-9320-4f61-8eca-067243e2ef68.jpeg)",
          }}
        ></div>

        <p className="mt-10 relative flex items-center justify-center font-poppins font-bold text-white text-4xl">
          MOST TRAVELLED VEHICLE
        </p>
        <div class="mx-28 my-10 flex gap-6 z-10">
          {features.map((feature, index) => (
            <div
              key={index}
              class="min-w-[320px] snap-center bg-white shadow-md z-10"
            >
              <img
                class="flex items-center mx-auto w-80 pt-5 px-5"
                src={feature.image}
                alt="Sunset in the mountains"
              />
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">{feature.title}</div>
                <p class="text-gray-700 text-base">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FrequentRides;
