const HowToBook = () => {
  return (
    <div className="flex items-center justify-center bg-white ">
      <div class="my-16  relative w-full max-w-full">
        <p className="flex items-center justify-center font-poppins font-bold text-4xl">
          How To Book a Self-Drive Car
        </p>
        <p className="pt-5 flex items-center justify-center text-center font-poppins text-sm text-textLightColor">
          Ditch the crowded public transport and discover the financial capital
          at your own rhythm with a MyChoize self-drive car rental.
        </p>
        <p className="flex items-center justify-center text-center font-poppins text-sm text-textLightColor">
          To book a self-drive car in cities, browse our fleet online, choose
          your perfect ride, select pick-up and drop-off details, and complete
          your booking with ease.
        </p>
        <p className="flex items-center justify-center text-center font-poppins text-sm text-textLightColor">
          We offer transparent pricing and peace-of-mind features, so you can
          hit the road and experience magic on your own terms.
        </p>
        <img
          className="pt-5 max-w-full"
          src={require("../assets/flow.jpg")}
          alt=""
        />
      </div>
    </div>
  );
};

export default HowToBook;
