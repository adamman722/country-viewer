import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: [] };

export const countrySlice = createSlice({
  name: "countries",
  initialState: initialState,
  reducers: {
    addCountry: (state, action) => {
      state.value = [...state.value, action.payload];
    },
  },
});

export const { addCountry } = countrySlice.actions;
export default countrySlice.reducer;
