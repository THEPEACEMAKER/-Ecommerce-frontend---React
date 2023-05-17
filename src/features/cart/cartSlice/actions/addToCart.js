import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../../../api/api";

export const addToCart = createAsyncThunk(
  "cart/addToCart",
  async (props, thunkAPI) => {
    const cartProduct = thunkAPI
      .getState()
      .cart.products.find((p) => p.id === props.product.id);
    if (
      !cartProduct ||
      cartProduct.quantity + props.quantity <= cartProduct.total_quantity
    ) {
      // console.log("adding product");
      try {
        const response = await api.post(`/cart/`, {
          product: props.product.id,
          quantity: props.quantity,
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
    let newProduct = {
      ...action.meta.arg.product,
      total_quantity: action.meta.arg.product.quantity,
      quantity: 1,
    };
    state.products.push(newProduct);
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
