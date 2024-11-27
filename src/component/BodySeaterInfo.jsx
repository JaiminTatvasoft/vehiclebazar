const BodySeaterInfo = () => {
  return (
    <>
      <div class="  realtive relative w-full max-w-full">
        <div class="absolute w-full h-full top-0 left-0 bg-gradient-to-b from-lightGreen via-white via-lightBlue to-yellow-50"></div>
        <p className="relative py-16 flex items-center justify-center font-poppins font-extrabold text-black text-4xl">
          RENTAL CAR OPTIONS
        </p>
        <div className="flex items-center justify-between w-3/5 mx-auto mt-10 pb-16 ">
          <div class="flex-1 max-w-md rounded-lg overflow-hidden shadow-lg animate-customBounce bg-gradient-to-b from-white to-bgGreen">
            <img
              class="flex items-center mx-auto w-80 pt-5 rounded-lg"
              src={require("../assets/swift.png")}
              alt="Sunset in the mountains"
            />
            <div class="px-6 py-4">
              <div class="font-bold  text-xl mb-2 font-poppins text-black text-center">
                4/5 Seater Vehicle Options
              </div>
              <p class="text-black text-base  text-center">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
            <div class="px-6 pt-4 pb-2 text-center">
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

          <div class="flex-1 max-w-md rounded-lg overflow-hidden shadow-lg animate-customBounce bg-gradient-to-b from-white to-bgGreen">
            <img
              class="flex items-center mx-auto w-80 pt-5 rounded-lg"
              src={require("../assets/innova-1.png")}
              alt="Sunset in the mountains"
            />
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2 font-poppins text-black text-center">
                6 Seater Vehicle Options
              </div>
              <p class="text-black text-base text-center">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
            <div class="px-6 pt-4 pb-2 text-center">
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
