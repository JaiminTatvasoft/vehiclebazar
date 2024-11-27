const RecentTrips = () => {
  const features = [
    {
      title: "4 Seater Vehicle Options",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      image: require("../assets/bkg-img-1.jpg"),
    },
    {
      title: "mumbai",
      description:
        "20 Tourist Places Near Indore To Experience The Magic Of Mumbai In 2023",
      image: require("../assets/mumbai.jpg"),
    },
    {
      title: "Jaipur",
      description: "7 Best Places to Visit Near Jaipur Within 400 km",
      image: require("../assets/kumbhalgarh.jpg"),
    },
    {
      title: "chennai",
      description: "Best Places to Visit in Chennai on your Next Trip",
      image: require("../assets/rameswaram.webp"),
    },
  ];
  // https://d1pnnwteuly8z3.cloudfront.net/images/dafc1e05-b0e8-4c6d-b375-4a62333bbd5a/71fe09e2-9320-4f61-8eca-067243e2ef68.jpeg
  return (
    <div class="flex items-center justify-center ">
      <div class="realtive relative w-full pt-5 pb-10">
        <div
          class="absolute w-full h-full top-0 left-0 bg-cover bg-center bg-no-repeat bg-fixed"
          style={{
            backgroundImage: `url(${require("../assets/grand-prix.jpg")})`,
          }}
        ></div>
        <p className="mt-10 relative flex items-center justify-center font-poppins font-bold text-white text-4xl">
          Recent Exciting Trips
        </p>
        <div class="mx-28 my-10 flex gap-6 z-0">
          {features.map((feature, index) => (
            <div
              key={index}
              class="min-w-[320px] snap-center bg-white shadow-md z-0"
            >
              <div className="flex items-center justify-center overflow-hidden">
                <img
                  className="w-full h-60 object-fill transition-transform duration-300 ease-in-out hover:scale-110 cursor-pointer"
                  src={feature.image}
                  alt="Sunset in the mountains"
                />
              </div>
              <div class="px-6 py-4 ">
                <p class="text-black font-semibold">{feature.description}</p>
                <button class="pt-2 text-black text-base flex flex-end font-semibold">
                  Read more...
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentTrips;
