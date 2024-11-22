const BodySeaterInfo = () => {
  return (
    <>
      <div class="  realtive relative w-full max-w-full">
        <div
          class="absolute w-full h-full top-0 left-0 bg-cover bg-center bg-no-repeat  bg-fixed"
          style={{
            backgroundImage:
              "url(https://d1pnnwteuly8z3.cloudfront.net/images/dafc1e05-b0e8-4c6d-b375-4a62333bbd5a/71fe09e2-9320-4f61-8eca-067243e2ef68.jpeg)",
          }}
        ></div>
        <p className="relative py-10 flex items-center justify-center font-poppins font-bold text-white text-4xl">
          RENTAL CAR OPTIONS
        </p>
        <div className="flex items-center justify-between w-3/5 mx-auto mt-10 pb-10 ">
          <div class="flex-1 max-w-sm rounded overflow-hidden shadow-lg animate-customBounce bg-white">
            <img
              class="flex items-center mx-auto w-80 pt-5 "
              src={require("../assets/bkg-img-1.jpg")}
              alt="Sunset in the mountains"
            />
            <div class="px-6 py-4">
              <div class="font-bold  text-xl mb-2 z-10 font-poppins">
                4 Seater Vehicle Options
              </div>
              <p class=" text-base z-10">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
            <div class="px-6 pt-4 pb-2">
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #photography
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #travel
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #winter
              </span>
            </div>
          </div>

          <div class="flex-1 max-w-sm rounded overflow-hidden shadow-lg animate-customBounce bg-white">
            <img
              class="flex items-center mx-auto w-80 pt-5"
              src={require("../assets/bkg-img-1.jpg")}
              alt="Sunset in the mountains"
            />
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2 font-poppins">
                7 Seater Vehicle Options
              </div>
              <p class="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
            <div class="px-6 pt-4 pb-2">
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #photography
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #travel
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #winter
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default BodySeaterInfo;
