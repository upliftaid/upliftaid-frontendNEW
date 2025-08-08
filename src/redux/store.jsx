// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import uiReducer from './uiSlice';
import blogReducer from './blogSlice';
// import { cartSlice, productsSlice } from './ProductSlice';
import cartReducer from './ProductSlice'
import donationReducer from "./donationSlice";

export const store = configureStore({
  reducer: {
    ui: uiReducer,
    blog: blogReducer,
     cart: cartReducer,
     donation: donationReducer,
  },
});
