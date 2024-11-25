const Testimonials = () => {
  const features = [
    {
      title: "Abhay",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
      image: require("../assets/avatar.png"),
    },
    {
      title: "Vaibhav",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
      image: require("../assets/avatar.png"),
    },
    {
      title: "Jayesh",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
      image: require("../assets/avatar.png"),
    },
    {
      title: "Saurabh",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
      image: require("../assets/avatar.png"),
    },
    {
      title: "Vishal",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
      image: require("../assets/avatar.png"),
    },
    {
      title: "Siddharth",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
      image: require("../assets/avatar.png"),
    },
    {
      title: "Siddharth",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
      image: require("../assets/avatar.png"),
    },
    {
      title: "Siddharth",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
      image: require("../assets/avatar.png"),
    },
  ];
  return (
    <div className="flex item-center justify-center bg-black py-10">
      <div class="relative w-full max-w-7xl">
        <p className="flex items-center justify-center font-poppins font-bold text-4xl text-white mb-5">
          WHAT PEOPLE SAY ABOUT US?
        </p>
        <img
          className="mx-auto w-32 h-20 mb-5"
          src={require("../assets/review.png")}
        />
        <div className="mx-auto flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide ">
          {features.map((feature, index) => (
            <div
              key={index}
              class="min-w-[320px] snap-center bg-white shadow-md rounded-lg p-2 cursor-pointer"
            >
              <div class="flex items-center">
                <img
                  class="w-20 h-20 rounded-full"
                  src={feature.image}
                  alt="Sunset in the mountains"
                />

                <div class="text-center font-bold text-xl font-poppins text-darkGreen">
                  {feature.title}
                </div>
              </div>

              <p class="text-gray-700 text-base text-center">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
