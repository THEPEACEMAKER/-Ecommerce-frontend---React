import { configureStore } from "@reduxjs/toolkit";
import apiStatusSlice from "../features/utils/apiStatusSlice";
import authSlice from "../features/auth/authSlice";

const store = configureStore({
  reducer: {
    apiStatus: apiStatusSlice,
    auth: authSlice,
  },
});

export default store;
