const SubscribeLetter = () => {
  return (
    <div className="flex items-center justify-center bg-gray-50">
      <div className="relative w-full max-w-7xl px-5 sm:px-20 xl:px-48 mt-5 mx-5 sm:mx-10 md:mx-20 lg:mx-28 rounded-2xl bg-bgDarkGray -m-20">
        <div className="flex flex-col lg:flex-row m-5 gap-6 font-poppins font-bold text-4xl">
          {/* Image Section */}
          <img
            src={require("../assets/subscribe.png")}
            alt="Subscribe"
            className="w-full sm:w-3/5 md:w-2/5 lg:w-1/3 mx-auto"
          />

          {/* Text and Form Section */}
          <div className="m-5 sm:m-10 pl-0 sm:pl-10 text-darkestGreen">
            <p className="text-xl sm:text-2xl">Would you like to receive</p>
            <p className="py-3 text-2xl sm:text-4xl font-extrabold">
              special offers by your email?
            </p>

            {/* Input Form */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-5 p-2 rounded-3xl bg-white">
              <div className="flex items-center justify-start w-full sm:w-auto">
                <img
                  src={require("../assets/sub_mail.png")}
                  alt="Email Icon"
                  className="mt-1 ml-5 w-8 h-6"
                />
                <input
                  type="text"
                  placeholder="Enter your mail"
                  className="w-full sm:w-60 text-sm py-2 pl-2"
                />
              </div>
              <button className="py-2 px-5 text-sm bg-darkestGreen rounded-2xl text-white w-full sm:w-auto">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscribeLetter;
