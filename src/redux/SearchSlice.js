import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    city: "",
    pickUpDate: "",
    returnDate: "",
  },
  reducers: {
    updateSearch: (state, action) => {
      const { location, pickUpDate, returnDate } = action.payload;
      state.city = location;
      state.pickUpDate = pickUpDate;
      state.returnDate = returnDate;
    },
  },
});

export const { updateSearch } = searchSlice.actions;
export default searchSlice.reducer;
