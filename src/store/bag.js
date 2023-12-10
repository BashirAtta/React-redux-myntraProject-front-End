import { createSlice } from "@reduxjs/toolkit";

const bagSlice = createSlice({
  name: "bagItemsIDs",
  initialState: [],
  reducers: {
    addToBag: (state, action) => {
      state.push(action.payload);
    },
    removeFromBag: (state, action) => {
      state.splice(
        state.findIndex((item) => item === action.payload),
        1
      );
    },
  },
});

export default bagSlice;
export const bagActions = bagSlice.actions;
