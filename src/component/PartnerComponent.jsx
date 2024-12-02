import React from "react";

const PartnerComponent = () => {
  return (
    <div className="bg-white py-8 md:py-24 px-8 md:px-20 2xl:px-32">
      <div className="mx-auto bg-green-700 rounded-[30px] ">
        <div className="pt-4 lg:py-16 px-2 lg:px-10">
          <div className="row flex flex-wrap">
            {/* Text Section */}
            <div className="col-lg-7 col-md-4 flex flex-col justify-center items-center md:items-start 2xl:items-center text-white w-full md:w-2/3">
              <div className="px-4 md:px-6">
                <h2 className="text-3xl md:text-xl lg:text-3xl xl:text-4xl font-bold mb-2">
                  Refer your friends <span className="text-lowercase">and</span>{" "}
                  Be a
                  <br />
                  <span>partner of <span className="text-yellow-300">Vehicle Bazar</span></span>
                </h2>
                <p className="text-base xl:text-lg mb-6">
                  Download the app for exclusive deals and ease of booking.
                </p>
                <div className="flex gap-4 xl:gap-6">
                  <a
                    href="https://play.google.com/store/apps/details?id=com.mychoize.cars&referrer=utm_source%3Dwebsite%26utm_medium%3Dtop_bar%26utm_term%3Dapp%26utm_campaign%3Ddownload&pli=1"
                    className=""
                  >
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                      alt="Google Play"
                      className="h-12 xl:h-16"
                    />
                  </a>
                  <a
                    href="https://apps.apple.com/us/app/mychoize-self-drive-car-rental/id1287913070"
                    className=""
                  >
                    <img
                      src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                      alt="App Store"
                      className="h-12 xl:h-16"
                    />
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-1 col-md-2"></div>

            {/* Image Section */}
            <div className="col-lg-4 col-md-6 flex justify-center items-center w-full md:w-1/3 mt-20 md:mt-0">
              <div className="mx-auto text-center">
                <img
                  src={require("../assets/store-2.jpg")}
                  alt="Banner"
                  className="rounded-[30px] w-full h-full object-cover scale-110 md:scale-125 lg:scale-150"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerComponent;
