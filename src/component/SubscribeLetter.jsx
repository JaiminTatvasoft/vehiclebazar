const SubscribeLetter = () => {
  return (
    <div className="flex items-center justify-center bg-gray-50">
      <div className="relative w-full max-w-7xl mt-5 mx-28 rounded-2xl bg-bgDarkGray -m-20">
        <div className="flex m-5 gap-6 font-poppins font-bold text-4xl ">
          <img src={require("../assets/subscribe.png")} alt="" />
          <div className="m-24 pl-10 text-darkestGreen">
            <p className="text-2xl">Would you like to receive</p>
            <p className="py-3 text-4xl font-extrabold">
              special offers by your email?
            </p>
            <div className="flex justify-between mt-5 p-2 rounded-3xl bg-white">
              <img
                src={require("../assets/sub_mail.png")}
                alt=""
                className="mt-1 ml-5 w-8 h-6"
              />
              <input
                type="text"
                placeholder="Enter your mail"
                className=" text-sm max-w-full"
              />
              <button className="py-2 px-5 text-sm bg-darkestGreen rounded-2xl text-white">
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
