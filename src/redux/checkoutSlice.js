import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { showSnackbar } from "./snackbarSlice";
import axios from "axios";

export const createCheckoutSession = createAsyncThunk(
  "checkout/createCheckoutSession",
  async ({ resBody, token }, { dispatch }) => {
    try {
      const response = await axios.post(
        "http://localhost:3010/stripe/create-checkout-session",
        resBody,
        {
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data.client_secret; // Returning client_secret for use in the Checkout
    } catch (error) {
      dispatch(
        showSnackbar({
          message:
            error.response?.data?.message || "Checkout session creation failed",
          severity: "error",
        })
      );
      throw new Error(
        error.response?.data?.message || "Failed to create checkout session"
      );
    }
  }
);

// Async Thunk for fetching the checkout session
export const fetchCheckoutSessions = createAsyncThunk(
  "checkout/fetchCheckoutSessions",
  async ({ sessionId, token }, { dispatch }) => {
    try {
      const res = await fetch(
        `http://localhost:3010/stripe/after-checkout?session_id=${sessionId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await res.json();

      if (res.ok) {
        return data; // Success: return the session data
      } else {
        throw new Error(data.message || "Failed to fetch session");
      }
    } catch (error) {
      dispatch(
        showSnackbar({
          message: error.message || "Something went wrong!",
          severity: "error",
        })
      );
      throw new Error(error.message || "Error in fetching checkout session");
    }
  }
);

const checkoutSlice = createSlice({
  name: "checkout",
  initialState: {
    clientSecret: null, // To store the client_secret for Stripe
    status: null, // To track session status
    customerEmail: "", // To store the customer email
    loading: false, // To track loading state
    error: null, // To store error messages
  },
  reducers: {
    resetCheckout: (state) => {
      state.clientSecret = null;
      state.status = null;
      state.customerEmail = "";
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    // Handle the action for creating checkout session
    builder
      .addCase(createCheckoutSession.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createCheckoutSession.fulfilled, (state, action) => {
        state.loading = false;
        state.clientSecret = action.payload; // Set the client_secret
      })
      .addCase(createCheckoutSession.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message; // Set error message
      });

    // Handle the action for fetching checkout session details
    builder
      .addCase(fetchCheckoutSessions.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCheckoutSessions.fulfilled, (state, action) => {
        state.loading = false;
        state.status = action.payload.status; // Set the session status
        state.customerEmail = action.payload.customer_email; // Set customer email
      })
      .addCase(fetchCheckoutSessions.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message; // Set error message
      });
  },
});

export const { resetCheckout } = checkoutSlice.actions;
export default checkoutSlice.reducer;
