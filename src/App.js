import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./features/auth/components/register/register";
import Login from "./features/auth/components/login/Login";
import Navbar from "./features/layout/navbar/navbar";
import Fotter from "./features/layout/fotter/fotter";
import Cart from "./features/cart/cart";
import WishList from "./features/wishlist/wishlist";
import CategoryPage from "./features/Category/CategoryPage/CategoryPage";
import OrderDetails from "./features/order/OrderDetails";
import NotFound from "./features/404/404";
import Profile from "./features/auth/components/profile/Profile";
import ProtectedRoutes from "./ProtectedRoutes";

import "./App.css";
import Product from "./features/Product Details/ProductDetails";
import Home from "./features/home/homePage";
import { fetchCart } from "./features/cart/cartSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/">
          <Route
            element={<ProtectedRoutes requiresLogin={false} redirectTo="/" />}
          >
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
          </Route>
          <Route
            element={
              <ProtectedRoutes requiresLogin={true} redirectTo="/login" />
            }
          >
            <Route path="wishlist" element={<WishList />} />
            <Route path="cart" element={<Cart />} />
            <Route path="profile" element={<Profile />} />
          </Route>
          <Route path="category/:categoryId" element={<CategoryPage />} />
          <Route path="product/:id" element={<Product />} />
          <Route path="order/:orderId" element={<OrderDetails />} />
          <Route path="home" element={<Home />} />
          <Route path="" element={<Home />} />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <Fotter />
    </BrowserRouter>
  );
}

export default App;
