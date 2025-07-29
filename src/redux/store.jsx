// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import uiReducer from './uiSlice';
import blogReducer from './blogSlice';


export const store = configureStore({
  reducer: {
    ui: uiReducer,
    blog: blogReducer,
  },
});
