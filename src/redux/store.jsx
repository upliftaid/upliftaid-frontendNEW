import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "./uiSlice";
import blogReducer from "./blogSlice";
import donationReducer from "./donationSlice";

export const store = configureStore({
  reducer: {
    ui: uiReducer,
    blog: blogReducer,
    donation: donationReducer,
  },
});
