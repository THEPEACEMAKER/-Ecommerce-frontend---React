import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  error: null,
  success: null,
};

const apiStatusSlice = createSlice({
  name: "api-status",
  initialState,
  reducers: {
    setError(state, action) {
      state.error = action.payload;
    },
    clearError(state) {
      state.error = null;
    },
    setSuccess(state, action) {
      state.success = action.payload;
    },
    clearSuccess(state) {
      state.success = null;
    },
  },
});

export const { setError, clearError, setSuccess, clearSuccess } =
  apiStatusSlice.actions;

export default apiStatusSlice.reducer;
