import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: localStorage.getItem("isLoggedIn") === "true",
  accessToken: localStorage.getItem("accessToken"),
  refreshToken: localStorage.getItem("refreshToken"),
  user: {},
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.accessToken = action.payload.access;
      state.refreshToken = action.payload.refresh;
      // state.user = action.payload;
      localStorage.setItem("isLoggedIn", true);
      localStorage.setItem("accessToken", action.payload.access);
      localStorage.setItem("refreshToken", action.payload.refresh);
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.accessToken = null;
      state.refreshToken = null;
      state.user = {};
      localStorage.setItem("isLoggedIn", false);
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
