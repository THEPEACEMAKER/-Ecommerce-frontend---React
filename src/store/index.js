import { configureStore } from "@reduxjs/toolkit";
import apiStatusSlice from "../features/utils/apiStatusSlice";
import authSlice from "../features/auth/authSlice";
import categorySlice from "../features/Category/CategoryPage/categorySlice";
import popularCategoriesSlice from "../features/Category/PopularCategories/popularCategoriesSlice";
import productSlice from "../features/Product Details/productSlice";

const store = configureStore({
  reducer: {
    apiStatus: apiStatusSlice,
    auth: authSlice,
    category: categorySlice,
    popularCategories: popularCategoriesSlice,
    product: productSlice,
  },
});

export default store;
