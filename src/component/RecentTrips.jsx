const RecentTrips = () => {
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
    <div class="flex items-center justify-center bg-slate-100">
      <div class="my-10 mx-28 relative w-full max-w-full">
        <p className="flex items-center justify-center font-poppins font-bold text-4xl">
          RECENT EXCITING TRIPS
        </p>
        <div class="my-10 flex gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              class="min-w-[320px] snap-center bg-white shadow-md"
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

export default RecentTrips;
