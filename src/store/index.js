import { configureStore } from "@reduxjs/toolkit";
import apiStatusSlice from "../features/utils/apiStatusSlice";

const store = configureStore({
  reducer: {
    apiStatus: apiStatusSlice,
  },
});

export default store;
