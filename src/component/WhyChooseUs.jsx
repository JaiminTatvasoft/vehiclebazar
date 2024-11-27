const WhyChooseUs = () => {
  const features = [
    {
      title: "Flexible timings",
      description:
        "You decide whether you'd like to rent a car for an hour, a week, a month, or on a daily basis.",
      image: require("../assets/flexible-time.png"),
    },
    {
      title: "Several options",
      description:
        "Pick from our wide range of classy hatchbacks, comfortable sedans, and spacious SUVs.",
      image: require("../assets/options.png"),
    },
    {
      title: "Affordable Pricing",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      image: require("../assets/price.png"),
    },
    {
      title: "Experienced Drivers",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      image: require("../assets/driver.png"),
    },
    {
      title: "24/7 Support",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      image: require("../assets/support.png"),
    },
    {
      title: "All-India Permits",
      description:
        "Our cars come with an All-India Tourist Permit so that you can drive from Kashmir to",
      image: require("../assets/permit.png"),
    },
    {
      title: "Best Price Gaurantee",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
      image: require("../assets/price-gaurantee.png"),
    },
    {
      title: "Multi-payment options",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
      image: require("../assets/payment-options.png"),
    },
  ];
  return (
    <div className="flex item-center justify-center bg-gray-50">
      <div class="relative my-20 max-w-7xl">
        <p className="pb-4 flex items-center justify-center font-poppins font-bold text-4xl">
          Why choose us?
        </p>
        <p className="flex items-center justify-center text-center font-poppins text-sm text-textLightColor">
          Our users of self-drive cars in multiple cities are sending us tons of
          happy faces and we love them
        </p>
        <div className="pt-10 pb-10 mx-auto flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide ">
          {features.map((feature, index) => (
            <div
              key={index}
              class="min-w-[320px] snap-center bg-white shadow-md flex-1 rounded-lg cursor-pointer bg-gradient-to-b from-white to-bgGreen"
            >
              <img
                class="flex items-center mx-auto w-48 pt-5 h-40 "
                src={feature.image}
                alt="Sunset in the mountains"
              />
              <div class="px-6 py-4">
                <div class="flex items-center justify-center font-bold text-xl mb-2 font-poppins text-darkGreen">
                  {feature.title}
                </div>
                <p class="text-black font-poppins font-light text-center">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
