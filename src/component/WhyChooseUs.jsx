const WhyChooseUs = () => {
  const features = [
    {
      title: "Flexible timings",
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
      title: "Affordable Pricing",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
      image: require("../assets/bkg-img-1.jpg"),
    },
    {
      title: "Experienced Drivers",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
      image: require("../assets/bkg-img-1.jpg"),
    },
    {
      title: "24/7 Support",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
      image: require("../assets/bkg-img-1.jpg"),
    },
    {
      title: "24/7 Support",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
      image: require("../assets/bkg-img-1.jpg"),
    },
    {
      title: "24/7 Support",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
      image: require("../assets/bkg-img-1.jpg"),
    },
    {
      title: "24/7 Support",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
      image: require("../assets/bkg-img-1.jpg"),
    },
  ];
  return (
    <div className="flex item-center justify-center bg-slate-100">
      <div class="my-10 relative w-full max-w-full">
        <p className="flex items-center justify-center font-poppins font-bold text-4xl">
          WHY CHOOSE US?
        </p>
        <div className="mx-28 my-10 flex gap-6 justify-center overflow-x-auto snap-x snap-mandatory scrollbar-hide">
          {features.map((feature, index) => (
            <div
              key={index}
              class="min-w-[320px] snap-center bg-white shadow-md flex-1"
            >
              <img
                class="flex items-center mx-auto w-52 pt-5 h-32 rounded-lg"
                src={feature.image}
                alt="Sunset in the mountains"
              />
              <div class="px-6 py-4">
                <div class="flex items-center justify-center font-bold text-xl mb-2">
                  {feature.title}
                </div>
                <p class="text-gray-700 text-base">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
