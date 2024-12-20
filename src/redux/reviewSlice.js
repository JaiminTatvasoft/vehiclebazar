// reviewSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Thunk to handle the async review submission
export const submitReview = createAsyncThunk(
  "reviews/submitReview",
  async ({ reviewText, order, token, rating }, { rejectWithValue }) => {
    try {
      const response = await fetch("http://localhost:3010/reviews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          p_id: order.p_id,
          username: order.users.name,
          useremail: order.users.email,
          review: reviewText,
          rating: rating,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit the review");
      }

      return await response.json(); // Return response data on success
    } catch (error) {
      return rejectWithValue(error.message); // Return error message
    }
  }
);

const reviewSlice = createSlice({
  name: "reviews",
  initialState: {
    loading: false,
    success: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(submitReview.pending, (state) => {
        state.loading = true;
        state.success = false;
        state.error = null;
      })
      .addCase(submitReview.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(submitReview.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload;
      });
  },
});

export default reviewSlice.reducer;
