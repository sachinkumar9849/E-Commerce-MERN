import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/product/productListSlice";
import authReducer from "../features/auth/authSlice";
import cartReducer from "../features/cart/cartSlice"
import orderReducer from "../features/order/orderSlice"

export const store = configureStore({
  reducer: {
    auth: authReducer,
    product: productReducer,
    cart: cartReducer,
    order:orderReducer,
  },
});
