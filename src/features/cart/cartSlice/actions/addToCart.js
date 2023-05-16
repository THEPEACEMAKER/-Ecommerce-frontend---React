import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../../../api/api";

export const addToCart = createAsyncThunk(
  "cart/addToCart",
  async (props, thunkAPI) => {
    try {
      const response = await api.post(`/cart/`, {
        product: props.product.id,
        quantity: props.quantity,
      });
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

const pending = (state) => {
  state.addStatus = "loading";
  state.error = null;
};

const fulfilled = (state, action) => {
  state.addStatus = "succeeded";
  state.products.push(action.payload.product);
  state.cartCount += action.meta.arg.quantity;
  state.totalPrice = action.payload.product.total_price;
};

const rejected = (state, action) => {
  state.addStatus = "failed";
  state.error = action.payload;
};

export const addToCartHandlers = {
  pending,
  fulfilled,
  rejected,
};
