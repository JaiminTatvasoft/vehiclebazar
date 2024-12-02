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
        "Our cars come with an All-India Tourist Permit so that you can drive from Kashmir to Kanyakumari.",
      image: require("../assets/permit.png"),
    },
    {
      title: "Best Price Guarantee",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      image: require("../assets/price-gaurantee.png"),
    },
    {
      title: "Multi-payment options",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      image: require("../assets/payment-options.png"),
    },
  ];

  return (
    <div className="flex items-center justify-center bg-gray-50">
      <div className="relative my-20 max-w-full px-5 sm:px-20 xl:px-48">
        <p className="pb-4 flex items-center justify-center font-poppins font-bold text-4xl text-center">
          Why choose us?
        </p>
        <p className="flex items-center justify-center text-center font-poppins text-sm text-textLightColor">
          Our users of self-drive cars in multiple cities are sending us tons of
          happy faces and we love them
        </p>

        {/* Scrollable container */}
        <div className="pt-10 pb-10 mx-auto overflow-x-auto snap-x snap-mandatory scrollbar-hide">
          <div className="flex gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="min-w-[320px] snap-center bg-white shadow-md rounded-lg bg-gradient-to-b from-white to-bgGreen transition-transform duration-200 ease-in-out transform hover:scale-105 cursor-pointer"
              >
                <img
                  className="mx-auto w-48 h-40 pt-5"
                  src={feature.image}
                  alt={feature.title}
                />
                <div className="px-6 py-4">
                  <div className="flex items-center justify-center font-bold text-xl mb-2 font-poppins text-darkGreen">
                    {feature.title}
                  </div>
                  <p className="text-black font-poppins font-light text-center">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
