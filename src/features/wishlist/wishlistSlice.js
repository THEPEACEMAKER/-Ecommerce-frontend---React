import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/api";

export const fetchWishlist = createAsyncThunk(
  "wishlist/fetchWishlist",
  async (thunkAPI) => {
    try {
      const response = await api.get(`/user/wishlist`);
      return response.data[0].product_details.results;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    products: null,
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWishlist.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchWishlist.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload;
      })
      .addCase(fetchWishlist.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default wishlistSlice.reducer;
