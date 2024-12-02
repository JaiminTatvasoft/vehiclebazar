const ComparisionInModeOfBuying = () => {
  const features = [
    {
      title: "Easy Online Booking",
      subscription: true,
      usedCar: false,
      newCar: false,
    },
    {
      title: "Zero down payment & roadtax",
      subscription: true,
      usedCar: true,
      newCar: false,
    },
    {
      title: "Zero liability",
      subscription: true,
      usedCar: false,
      newCar: false,
    },
    {
      title: "Annual insurance included",
      subscription: true,
      usedCar: false,
      newCar: false,
    },
    {
      title: "Return or extend anytime",
      subscription: true,
      usedCar: false,
      newCar: false,
    },
    {
      title: "Free service & maintenance",
      subscription: true,
      usedCar: false,
      newCar: false,
    },
    {
      title: "No long term commitment",
      subscription: true,
      usedCar: false,
      newCar: false,
    },
    {
      title: "No waiting period",
      subscription: true,
      usedCar: false,
      newCar: false,
    },
    {
      title: "Option to switch cars",
      subscription: true,
      usedCar: false,
      newCar: true,
    },
  ];

  return (
    <div className="bg-white">
      <div className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-center text-3xl font-bold mb-8 font-poppins pb-2">
          Rental Car Subscription V/S Buying a used car V/S Buying a new car
        </h2>
        <div className="overflow-x-auto">
          <table className="table-auto w-full border-collapse border-4 border-gray-200">
            <thead>
              <tr className="bg-gray-50">
                <th className="border border-gray-300 py-3 px-4 text-left text-darkestGreen">
                  {/* Features */}
                </th>
                <th className="border border-gray-300 py-3 px-4 text-darkestGreen font-poppins">
                  Rental Car Subscription
                </th>
                <th className="border border-gray-300 py-3 px-4 text-darkestGreen font-poppins">
                  Buying a used car
                </th>
                <th className="border border-gray-300 py-3 px-4 text-darkestGreen font-poppins">
                  Buying a new car
                </th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                >
                  <td className="border border-gray-300 text-darkestGreen font-bold py-3 px-4 font-poppins">
                    {feature.title}
                  </td>
                  <td className="border border-gray-300 py-3 px-4 text-center">
                    {feature.subscription ? (
                      <span className="text-green-500 text-xl">✔</span>
                    ) : (
                      <span className="text-red-500 text-xl">✘</span>
                    )}
                  </td>
                  <td className="border border-gray-300 py-3 px-4 text-center">
                    {feature.usedCar ? (
                      <span className="text-green-500 text-xl">✔</span>
                    ) : (
                      <span className="text-red-500 text-xl">✘</span>
                    )}
                  </td>
                  <td className="border border-gray-300 py-3 px-4 text-center">
                    {feature.newCar ? (
                      <span className="text-green-500 text-xl">✔</span>
                    ) : (
                      <span className="text-red-500 text-xl">✘</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ComparisionInModeOfBuying;
