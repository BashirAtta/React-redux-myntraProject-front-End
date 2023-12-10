import { createSlice } from "@reduxjs/toolkit";

const fetchingSlice = createSlice({
  name: "fetching",
  initialState: {
    fetchDone: false,
    currentlyFetching: false,
  },
  reducers: {
    markFetchDone: (state) => {
      state.fetchDone = true;
    },
    markCurrentlyFechingStart: (state) => {
      state.currentlyFetching = true;
    },
    markCurrentlyFechingFinish: (state) => {
      state.currentlyFetching = false;
    },
  },
});

export const fetchingActions = fetchingSlice.actions;
export default fetchingSlice;
