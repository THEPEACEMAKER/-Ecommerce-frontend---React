import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/api";

export const fetchWishlist = createAsyncThunk(
  "wishlist/fetchWishlist",
  async ({ pageSize, page }, thunkAPI) => {
    try {
      const response = await api.get(`/user/wishlist`, {
        params: {
          page,
          size: pageSize,
        },
      });
      return new Promise((resolve) => {
        setTimeout(() => {
          if (response.data.length === 0) return resolve(false);
          resolve(response.data[0]);
        }, 500);
      });
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const deleteWishlistProduct = createAsyncThunk(
  "wishlist/deleteProduct",
  async (id) => {
    const response = await api.delete(`/wishlist/product/${id}/`);
    return response.data.message;
  }
);

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    products: null,
    fetchStatus: "idle",
    deleteStatus: "idle",
    error: null,
    totalProductsCount: 0,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWishlist.pending, (state) => {
        state.fetchStatus = "loading";
        state.error = null;
      })
      .addCase(fetchWishlist.fulfilled, (state, action) => {
        state.fetchStatus = "succeeded";
        state.products = action.payload.product_details.results;
        state.totalProductsCount = action.payload.product_details.count;
      })
      .addCase(fetchWishlist.rejected, (state, action) => {
        state.fetchStatus = "failed";
        state.error = action.payload;
      })
      .addCase(deleteWishlistProduct.pending, (state) => {
        state.deleteStatus = "loading";
        state.error = null;
      })
      .addCase(deleteWishlistProduct.fulfilled, (state, action) => {
        state.deleteStatus = "succeeded";
        state.products = state.products.filter((p) => p.id !== action.meta.arg);
      })
      .addCase(deleteWishlistProduct.rejected, (state, action) => {
        state.deleteStatus = "failed";
        state.error = action.payload;
      });
  },
});

export default wishlistSlice.reducer;
