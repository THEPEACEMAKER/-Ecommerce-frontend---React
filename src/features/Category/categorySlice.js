import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/api";

export const fetchCategoryProducts = createAsyncThunk(
  "category/fetchProducts",
  async (categoryId) => {
    // const response = await api.get(`/category/${categoryId}/products`);
    const response = await api.get(`http://localhost:3001/category`);
    return response.data;
  }
);

const categorySlice = createSlice({
  name: "category",
  initialState: {
    products: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategoryProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCategoryProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload;
      })
      .addCase(fetchCategoryProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default categorySlice.reducer;
