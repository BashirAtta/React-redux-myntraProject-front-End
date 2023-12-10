import { configureStore } from "@reduxjs/toolkit";
import itemsSlice from "./items";
import fetchingSlice from "./fechining";
import bagSlice from "./bag";

const myntraStore = configureStore({
  reducer: {
    items: itemsSlice.reducer,
    fetching: fetchingSlice.reducer,
    bagItemsIDs: bagSlice.reducer,
  },
});

export default myntraStore;
