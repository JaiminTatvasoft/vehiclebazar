import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async Thunk for fetching vehicles
export const fetchVehicles = createAsyncThunk(
  "vehicles/fetchVehicles",
  async ({ location, pickUpDate, returnDate, selectedFilters }) => {
    const {
      segment = [],
      brand = [],
      fuelType = [],
      transmissionType = [],
      seatingCapacity = [],
    } = selectedFilters || {};

    try {
      let query = `city=${location}&pickUpDate=${pickUpDate}&returnDate=${returnDate}`;
      if (segment.length) query += `&segment=${segment.join(",")}`;
      if (brand.length) query += `&brandname=${brand.join(",")}`;
      if (fuelType.length) query += `&fuelType=${fuelType.join(",")}`;
      if (transmissionType.length)
        query += `&transmission=${transmissionType.join(",")}`;
      if (seatingCapacity.length)
        query += `&seater=${seatingCapacity.join(",")}`;

      const response = await axios.get(
        `http://localhost:3010/vehicles/available-vehicle?${query}`
      );
      return response.data.vehicles;
    } catch (error) {
      throw new Error(
        error.response?.data?.message || "Failed to fetch vehicles"
      );
    } // Assuming the API returns an object with a "vehicles" array
  }
);

const vehicleSlice = createSlice({
  name: "vehicles",
  initialState: {
    vehicles: [],
    loading: false,
    error: null,
    isVehicleSelected: false,
    vehicle: {},
    selectedPackage: 120,
    freeKms: 0,
  },
  reducers: {
    vehicleSelected: (state, action) => {
      state.isVehicleSelected = true;
      state.vehicle = action.payload.vehicle;
      state.selectedPackage = action.payload.selectedPackage;
      state.freeKms = action.payload.freeKms;
    },
    vehicleRemoved: (state) => {
      state.isVehicleSelected = false;
      state.vehicle = {};
      state.selectedPackage = 120;
      state.freeKms = 0;
      state.vehicles = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchVehicles.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchVehicles.fulfilled, (state, action) => {
        state.loading = false;
        state.vehicles = action.payload;
      })
      .addCase(fetchVehicles.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { vehicleSelected, vehicleRemoved } = vehicleSlice.actions;
export default vehicleSlice.reducer;
