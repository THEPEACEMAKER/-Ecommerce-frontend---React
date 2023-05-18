import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../../api/api";

export const fetchCategoryProducts = createAsyncThunk(
  "category/fetchProducts",
  async ({ categoryId, pageSize, page }, thunkAPI) => {
    try {
      const response = await api.get(`/category/${categoryId}/products`, {
        params: {
          page,
          size: pageSize,
        },
      });
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(response.data);
        }, 500);
      });
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const categorySlice = createSlice({
  name: "category",
  initialState: {
    products: [],
    status: "idle",
    error: null,
    totalProductsCount: 0,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategoryProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCategoryProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload.results;
        state.totalProductsCount = action.payload.count;
      })
      .addCase(fetchCategoryProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default categorySlice.reducer;
