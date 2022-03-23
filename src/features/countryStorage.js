import { createSlice } from "@reduxjs/toolkit";

const initialStateStart = [];

export const countryStorageSlice = createSlice({
  name: "country",
  initialState: { value: [] },
  reducers: {
    addToStorage: (state, action) => {
      state.value = [...state, action.payload];
    },
  },
});

export const { addToStorage } = countryStorageSlice.actions;

export default countryStorageSlice.reducer;
