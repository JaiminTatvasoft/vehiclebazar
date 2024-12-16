import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { showSnackbar } from "./snackbarSlice";

// Async Thunk for checking if the order exists
export const checkOrderExistence = createAsyncThunk(
  "booking/checkOrderExistence",
  async ({ userId, vehicleId, startDate, endDate }, { dispatch }) => {
    try {
      const response = await axios.get(
        `http://localhost:3010/orders/check-order-existence`,
        {
          params: {
            u_id: userId,
            p_id: vehicleId,
            startDate,
            endDate,
          },
        }
      );

      return response.data; // Returns the result of the API call
    } catch (error) {
      dispatch(
        showSnackbar({
          message:
            error.response?.data?.message || "Failed to check order existence",
          severity: "error",
        })
      );
      throw new Error(
        error.response?.data?.message || "Failed to check order existence"
      );
    }
  }
);

const bookingSlice = createSlice({
  name: "booking",
  initialState: {
    orderExists: false,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(checkOrderExistence.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(checkOrderExistence.fulfilled, (state, action) => {
        state.loading = false;
        state.orderExists = action.payload; // Store the result (true/false)
      })
      .addCase(checkOrderExistence.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default bookingSlice.reducer;
