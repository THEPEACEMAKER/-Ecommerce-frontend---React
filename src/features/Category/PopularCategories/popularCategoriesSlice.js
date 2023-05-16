import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../../api/api";

export const fetchCategories = createAsyncThunk(
  "category/fetchCategories",
  async () => {
    // TODO: with sizeLimit = 4
    const response = await api.get(`/category`);
    return response.data;
  }
);

const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    categories: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.categories = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default categoriesSlice.reducer;
