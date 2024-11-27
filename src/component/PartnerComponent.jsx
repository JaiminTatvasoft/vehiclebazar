import React from "react";

const PartnerComponent = () => {
  return (
    <div className=" py-20 w-full h-full flex bg-white ">
      <div className="  bg-green-700 relative m-32 p-20 rounded-2xl overflow-hidden">
        <div className=" text-white max-w-full px-16 right-0">
          <p className="text-4xl font-bold mb-2">
            Refer Your Friends and Be A{" "}
          </p>
          <p className="ml-6 text-4xl font-bold mb-6 text-yellow-300">
            Partner Of Vehicle Bazar
          </p>
          <p className="text-lg mb-6 pt-10">
            Download the app for exclusive deals and ease of booking.
          </p>
          <div className="flex gap-6 pl-16">
            <a href="#" className="">
              <img
                className="h-12"
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Google Play"
              />
            </a>
            <a href="#" className="">
              <img
                className="h-12"
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="App Store"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="-ml-60 p-16 h-[40%] w-[40%] z-10">
        <img
          src={require("../assets/store-2.jpg")} // Replace with your actual image path
          alt="Car with MyChoize Logo"
          className="rounded-2xl shadow-lg object-cover w-full h-full"
        />
      </div>
    </div>
  );
};

export default PartnerComponent;

// <div className="w-full h-full">
//   <div className="bg-green-700 m-24 p-20 rounded-lg">
//     {/* Text Section */}
//     <div className="flex">
//       <div className="relative m-4 text-center text-white w-full lg:w-1/2 px-5">
//         <h2 className="text-4xl font-bold mb-4">
//           Refer Your Friends and Be a{" "}
//           <span className="text-yellow-300">Partner Of Vehicle Bazar</span>
//         </h2>
//         <p className="text-lg mb-6">
//           Download the app for exclusive deals and ease of booking.
//         </p>
//         <div className="flex justify-center gap-4">
//           <a href="#" className=" text-black ">
//             <img
//               className="h-14"
//               src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
//               alt="Google Play"
//             />
//           </a>
//           <a href="#" className="text-black">
//             <img
//               className="h-14"
//               src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
//               alt="App Store"
//             />
//           </a>
//         </div>
//       </div>

//       {/* Image Section */}
//       <div className="relative w-full lg:w-1/2 pl-1/2">
//         <img
//           src={require("../assets/bkg-img.jpg")} // Replace with your actual image path
//           alt="Car with MyChoize Logo"
//           className="rounded-lg shadow-lg object-cover w-full h-auto"
//         />
//       </div>
//     </div>
//   </div>
// </div>
