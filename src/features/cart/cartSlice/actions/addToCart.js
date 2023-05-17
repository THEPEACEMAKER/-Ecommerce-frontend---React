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
  // {
  //     "message": "Product added successfully",
  //     "product": {
  //         "product": 2,
  //         "quantity": 4,
  //         "total_price": 24000.0
  //     }
  // }
  const existingProduct = state.products.find(
    (p) => p.id === action.meta.arg.product.id
  );
  if (existingProduct) {
    // If the product already exists, increase its quantity
    existingProduct.quantity = action.payload.product.quantity;
  } else {
    // If the product is not already present, push it into the array
    state.products.push(action.meta.arg.product);
  }
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
