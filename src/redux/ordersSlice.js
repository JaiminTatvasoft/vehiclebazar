import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { showSnackbar } from "./snackbarSlice";

// Async Thunk for fetching orders
export const fetchOrders = createAsyncThunk(
  "orders/fetchOrders",
  async (_, { getState, dispatch }) => {
    try {
      const { token } = getState().users; // Get the token from the users slice
      const response = await axios.get("http://localhost:3010/orders/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return response.data.orders; // Return the orders data
    } catch (error) {
      dispatch(
        showSnackbar({
          message: error.response?.data?.message || "Error fetching orders",
          severity: "error",
        })
      );
      throw new Error(
        error.response?.data?.message || "Failed to fetch orders"
      );
    }
  }
);

const ordersSlice = createSlice({
  name: "orders",
  initialState: {
    orders: [], // To hold the fetched orders
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrders.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchOrders.fulfilled, (state, action) => {
        state.loading = false;
        state.orders = action.payload; // Set the fetched orders in state
      })
      .addCase(fetchOrders.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message; // Handle any error that occurs
      });
  },
});

export default ordersSlice.reducer;
