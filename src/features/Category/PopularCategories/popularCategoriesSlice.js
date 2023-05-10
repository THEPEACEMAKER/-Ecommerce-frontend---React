import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../../api/api";

export const fetchPopularCategories = createAsyncThunk(
  "category/fetchPopularCategories",
  async () => {
    // const response = await api.get(`/category/popular`);
    const response = await api.get(`http://localhost:3001/categories`);
    return response.data;
  }
);

const popularCategoriesSlice = createSlice({
  name: "popularCategories",
  initialState: {
    popularCategories: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPopularCategories.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPopularCategories.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.popularCategories = action.payload;
      })
      .addCase(fetchPopularCategories.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default popularCategoriesSlice.reducer;
