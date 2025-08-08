import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedPlan: null, // This will hold the plan object
};

const donationSlice = createSlice({
  name: "donation",
  initialState,
  reducers: {
    setSelectedPlan: (state, action) => {
      state.selectedPlan = action.payload;
    },
    clearSelectedPlan: (state) => {
      state.selectedPlan = null;
    },
  },
});

export const { setSelectedPlan, clearSelectedPlan } = donationSlice.actions;
export default donationSlice.reducer;