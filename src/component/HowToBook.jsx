const HowToBook = () => {
  return (
    <div className="bg-white py-20">
      <div className="container mx-auto px-6 md:px-12 relative">
        {/* Heading Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-poppins font-bold text-darkGreen">
            How To Book a Self-Drive Car
          </h2>
          <p className="pt-5 text-sm text-textLightColor">
            Ditch the crowded public transport and discover the financial
            capital at your own rhythm with a MyChoize self-drive car rental.
          </p>
          <p className="text-sm text-textLightColor">
            To book a self-drive car in cities, browse our fleet online, choose
            your perfect ride, select pick-up and drop-off details, and complete
            your booking with ease.
          </p>
          <p className="text-sm text-textLightColor">
            We offer transparent pricing and peace-of-mind features, so you can
            hit the road and experience magic on your own terms.
          </p>
        </div>

        {/* Image Section with Overlapping Text */}
        <div className="relative flex justify-center">
          {/* Make sure this container has relative positioning */}
          <div className="relative w-full h-[640px]">
            <img
              className="absolute inset-0 w-full h-full object-cover opacity-100 rounded-lg"
              src={require("../assets/flow.jpg")}
              alt="Booking Flow"
            />
            <div className="relative z-10 text-center flex flex-col justify-center items-center h-full">
              {/* <p className="text-2xl font-bold text-darkGreen">
                Ready to hit the road?
              </p>
              <p className="text-2xl font-bold text-darkGreen">
                Book a self-drive car with MyChoize and explore the city on your
                terms!
              </p> */}
              {/* Process Steps */}
              <div className="">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {/* Step 1 */}
                  <div className="flex flex-col items-center bg-transparent p-6">
                    <h2 className="text-3xl font-bold text-darkGreen">01</h2>
                    <h3 className="mt-2 text-xl font-bold font-poppins text-darkGreen">
                      Select City & Travel Dates
                    </h3>
                  </div>
                  {/* Step 2 */}
                  <div className="flex flex-col items-center bg-transparent p-6">
                    <h2 className="text-3xl font-bold text-darkGreen">02</h2>
                    <h3 className="mt-2 text-xl font-bold font-poppins text-darkGreen">
                      Choose Car & Delivery Mode
                    </h3>
                  </div>
                  {/* Step 3 */}
                  <div className="flex flex-col items-center bg-transparent p-6">
                    <h2 className="text-3xl font-bold text-darkGreen">03</h2>
                    <h3 className="mt-2 text-xl font-bold font-poppins text-darkGreen">
                      Verify Yourself
                    </h3>
                  </div>
                  {/* Step 4 */}
                  <div className="flex flex-col items-center bg-transparent p-6">
                    <h2 className="text-3xl font-bold text-darkGreen">04</h2>
                    <h3 className="mt-2 text-xl font-bold font-poppins text-darkGreen">
                      Make Payment
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToBook;
