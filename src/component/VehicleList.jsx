import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchVehicles } from "../redux/vehicleSlice";
import VehicleCard from "./VehicleCard";

const VehicleList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { city, pickUpDate, returnDate } = useSelector((state) => state.search);
  const { vehicles, loading, error } = useSelector((state) => state.vehicles);

  const location = city;

  useEffect(() => {
    dispatch(fetchVehicles({ location, pickUpDate, returnDate }));
  }, [city, pickUpDate, returnDate]);

  const handleClick = (vehicle, selectedPackage, freeKms) => {
    // Navigate to the booking page with both vehicle data and selected package
    navigate("/bookcar", { state: { vehicle, selectedPackage, freeKms } });
  };

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 ms-10">
      {vehicles.map((vehicle) => (
        <VehicleCard key={vehicle._id} vehicle={vehicle} onBook={handleClick} />
      ))}
    </div>
  );
};

export default VehicleList;
