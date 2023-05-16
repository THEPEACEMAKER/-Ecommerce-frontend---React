import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/api";

export const fetchCart = createAsyncThunk(
  "cart/fetchCart",
  async (_, thunkAPI) => {
    try {
      const response = await api.get("/cart/");
      return response.data.cart;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const deleteCartProduct = createAsyncThunk(
  "cart/deleteCartProduct",
  async (id, thunkAPI) => {
    try {
      const response = await api.delete(`/cart/${id}`);
      return response.data.message;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const incrementCartProduct = createAsyncThunk(
  "cart/incrementProduct",
  async (productId, thunkAPI) => {
    try {
      const response = await api.put("/cart/", {
        action: "INCREASE",
        product: productId,
      });
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const decrementCartProduct = createAsyncThunk(
  "cart/decrementProduct",
  async (productId, thunkAPI) => {
    try {
      const response = await api.put("/cart/", {
        action: "DECREASE",
        product: productId,
      });
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    cartId: null,
    cartCount: null,
    totalPrice: null,
    fetchStatus: "idle",
    deleteStatus: "idle",
    incrementStatus: "idle",
    decrementStatus: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCart.pending, (state) => {
        state.fetchStatus = "loading";
        state.error = null;
      })
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.fetchStatus = "succeeded";
        state.products = action.payload.products;
        state.cartId = action.payload.id;
        state.cartCount = action.payload.products.reduce(
          (acc, el) => acc + el.quantity,
          0
        );
        state.totalPrice = action.payload.total_price;
      })
      .addCase(fetchCart.rejected, (state, action) => {
        state.fetchStatus = "failed";
        state.error = action.payload;
      })
      .addCase(deleteCartProduct.pending, (state) => {
        state.deleteStatus = "loading";
        state.error = null;
      })
      .addCase(deleteCartProduct.fulfilled, (state, action) => {
        state.deleteStatus = "succeeded";
        state.products = state.products.filter((p) => p.id !== action.meta.arg);
      })
      .addCase(deleteCartProduct.rejected, (state, action) => {
        state.deleteStatus = "failed";
        state.error = action.payload;
      })
      .addCase(incrementCartProduct.pending, (state) => {
        state.incrementStatus = "loading";
        state.error = null;
      })
      .addCase(incrementCartProduct.fulfilled, (state, action) => {
        state.incrementStatus = "succeeded";
        // increment the quantity of the product in the cart
        // Find the product in the state
        const productIndex = state.products.findIndex(
          (p) => p.id === action.meta.arg
        );
        // Decrement the quantity of the product
        if (productIndex !== -1) {
          state.products[productIndex].quantity++;
        }

        // Update cartCount and totalPrice based on the response data
        state.cartCount += 1;
        state.totalPrice = action.payload.product.total_price;
      })
      .addCase(incrementCartProduct.rejected, (state, action) => {
        state.incrementStatus = "failed";
        state.error = action.payload;
      })
      .addCase(decrementCartProduct.pending, (state) => {
        state.decrementStatus = "loading";
        state.error = null;
      })
      .addCase(decrementCartProduct.fulfilled, (state, action) => {
        state.decrementStatus = "succeeded";
        // decrement the quantity of the product in the cart
        // Find the product in the state
        const productIndex = state.products.findIndex(
          (p) => p.id === action.meta.arg
        );
        // Decrement the quantity of the product
        if (productIndex !== -1) {
          state.products[productIndex].quantity--;
        }

        // Update cartCount and totalPrice based on the response data
        state.cartCount -= 1;
        state.totalPrice = action.payload.product.total_price;
      })
      .addCase(decrementCartProduct.rejected, (state, action) => {
        state.decrementStatus = "failed";
        state.error = action.payload;
      });
  },
});

export default cartSlice.reducer;
