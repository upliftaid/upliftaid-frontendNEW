// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import donationReducer from './donationSlice';

export const store = configureStore({
  reducer: {
    donation: donationReducer,
  },
});
