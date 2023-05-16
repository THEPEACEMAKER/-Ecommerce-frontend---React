import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../../../api/api";

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

const pending = (state) => {
  state.fetchStatus = "loading";
  state.error = null;
};

const fulfilled = (state, action) => {
  state.fetchStatus = "succeeded";
  state.products = action.payload.products;
  state.cartId = action.payload.id;
  state.cartCount = action.payload.products.reduce(
    (acc, el) => acc + el.quantity,
    0
  );
  state.totalPrice = action.payload.total_price;
};

const rejected = (state, action) => {
  state.fetchStatus = "failed";
  state.error = action.payload;
};

export const fetchHandlers = {
  pending,
  fulfilled,
  rejected,
};
