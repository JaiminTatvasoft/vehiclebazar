import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchComparisions } from "../redux/comparisionSlice";

const ComparisionInModeOfBuying = () => {
  const dispatch = useDispatch();

  const { comparisions, loading, error } = useSelector(
    (state) => state.comparisions
  );

  useEffect(() => {
    dispatch(fetchComparisions());
  }, []);

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
              {comparisions.map((comparision, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                >
                  <td className="border border-gray-300 text-darkestGreen font-bold py-3 px-4 font-poppins">
                    {comparision.title}
                  </td>
                  <td className="border border-gray-300 py-3 px-4 text-center">
                    {comparision.rentalCarSubscription ? (
                      <span className="text-green-500 text-xl">✔</span>
                    ) : (
                      <span className="text-red-500 text-xl">✘</span>
                    )}
                  </td>
                  <td className="border border-gray-300 py-3 px-4 text-center">
                    {comparision.buyingUsedCar ? (
                      <span className="text-green-500 text-xl">✔</span>
                    ) : (
                      <span className="text-red-500 text-xl">✘</span>
                    )}
                  </td>
                  <td className="border border-gray-300 py-3 px-4 text-center">
                    {comparision.buyingNewCar ? (
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
