import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../features/product/productListSlice'

export const store = configureStore({
  reducer: {
    // counter: counterReducer,
   product : productReducer,
  },
});