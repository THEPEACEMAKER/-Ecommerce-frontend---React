import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../../../api/api";

export const incrementCartProduct = createAsyncThunk(
  "cart/incrementProduct",
  async (productId, thunkAPI) => {
    const cartProduct = thunkAPI
      .getState()
      .cart.products.find((p) => p.id === productId);
    if (cartProduct.quantity + 1 <= cartProduct.total_quantity) {
      // console.log("incrementing");
      try {
        const response = await api.put("/cart/", {
          action: "INCREASE",
          product: productId,
        });
        return response.data;
      } catch (err) {
        return thunkAPI.rejectWithValue(err.message);
      }
    } else {
      // console.log("no stock of this product");
      return thunkAPI.rejectWithValue("We don't have enough stock of this.");
    }
  }
);

const pending = (state) => {
  state.incrementStatus = "loading";
  state.error = null;
};

const fulfilled = (state, action) => {
  state.incrementStatus = "succeeded";
  const productIndex = state.products.findIndex(
    (p) => p.id === action.meta.arg
  );
  if (productIndex !== -1) {
    state.products[productIndex].quantity++;
  }
  state.cartCount += 1;
  state.totalPrice = action.payload.product.total_price;
};

const rejected = (state, action) => {
  state.incrementStatus = "failed";
  state.error = action.payload;
};

export const incrementProductHandlers = {
  pending,
  fulfilled,
  rejected,
};
