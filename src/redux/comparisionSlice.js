import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async Thunk for fetching vehicles
export const fetchComparisions = createAsyncThunk(
  "comparisions/fetchComparisions",
  async () => {
    try {
      const response = await axios.get(
        `http://localhost:3010/comparisiontable`
      );
      return response.data.comparisions;
    } catch (error) {
      throw new Error(
        error.response?.data?.message || "Failed to fetch comparisions"
      );
    } // Assuming the API returns an object with a "comparisions" array
  }
);

const comparisionSlice = createSlice({
  name: "comparisions",
  initialState: {
    comparisions: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchComparisions.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchComparisions.fulfilled, (state, action) => {
        state.loading = false;
        state.comparisions = action.payload;
      })
      .addCase(fetchComparisions.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default comparisionSlice.reducer;
