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
    <div className="flex items-center justify-center bg-gray-50 py-10">
      <div className="relative w-full max-w-full">
        <p className="text-center text-4xl font-bold font-poppins mb-10">
          WHY CHOOSE US?
        </p>
        <div className="flex gap-6 justify-center overflow-x-auto snap-x snap-mandatory mx-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative group min-w-[320px] snap-center bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <img
                className="w-full h-52 object-cover"
                src={feature.image}
                alt="Feature image"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black to-transparent opacity-100 group-hover:opacity-0 transition-opacity duration-700">
                <div className="text-center px-6 py-4">
                  {/* Title always visible */}
                  <h5 className="text-white font-bold text-xl mb-2 transition-opacity">
                    {feature.title}
                  </h5>
                </div>
              </div>
              {/* The overlay div is for the description fade-in effect */}
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-700">
                <div className="text-center px-6 py-4">
                  <h5 className="text-white font-bold text-xl mb-2 transition-opacity">
                    {feature.title}
                  </h5>
                  <h6 className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    {feature.description}
                  </h6>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
