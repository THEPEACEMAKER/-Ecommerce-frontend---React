import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../../../api/api";

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

const pending = (state) => {
  state.deleteStatus = "loading";
  state.error = null;
};

const fulfilled = (state, action) => {
  const id = action.meta.arg;
  const deletedProduct = state.products.find((p) => p.id === id);
  if (deletedProduct) {
    state.deleteStatus = "succeeded";
    state.products = state.products.filter((p) => p.id !== id);
    state.cartCount -= deletedProduct.quantity;
    state.totalPrice -= deletedProduct.quantity * deletedProduct.price;
  }
};

const rejected = (state, action) => {
  state.deleteStatus = "failed";
  state.error = action.payload;
};

export const deleteProductHandlers = {
  pending,
  fulfilled,
  rejected,
};
