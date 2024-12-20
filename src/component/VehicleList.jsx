import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchVehicles, vehicleSelected } from "../redux/vehicleSlice";
import VehicleCard from "./VehicleCard";

const VehicleList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { city, pickUpDate, returnDate } = useSelector((state) => state.search);
  const { vehicles } = useSelector((state) => state.vehicles);

  const location = city;

  useEffect(() => {
    dispatch(fetchVehicles({ location, pickUpDate, returnDate }));
  }, [city, pickUpDate, returnDate, location, dispatch]);

  const handleClick = (vehicle, selectedPackage, freeKms) => {
    dispatch(
      vehicleSelected({
        vehicle: vehicle,
        selectedPackage: selectedPackage,
        freeKms: freeKms,
      })
    );

    // Navigate to the booking page with both vehicle data and selected package
    navigate("/bookcar");
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-3 xl:gap-6 ms-4 mx-2 sm:mx-8 mb-4">
      {vehicles.map((vehicle) => (
        <VehicleCard key={vehicle._id} vehicle={vehicle} onBook={handleClick} />
      ))}
    </div>
  );
};

export default VehicleList;
