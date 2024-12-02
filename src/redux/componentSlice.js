import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async Thunk for fetching vehicles
export const fetchComponents = createAsyncThunk(
  "components/fetchComponents",
  async () => {
    try {
      const response = await axios.get(`http://localhost:3010/components`);
      return response.data.components;
    } catch (error) {
      throw new Error(
        error.response?.data?.message || "Failed to fetch vehicles"
      );
    } // Assuming the API returns an object with a "vehicles" array
  }
);

const componentSlice = createSlice({
  name: "components",
  initialState: {
    components: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchComponents.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchComponents.fulfilled, (state, action) => {
        const clientComponents = action.payload.filter(
          (component) => component.clientType === "client"
        );
        state.loading = false;
        state.components = clientComponents;
      })
      .addCase(fetchComponents.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default componentSlice.reducer;
