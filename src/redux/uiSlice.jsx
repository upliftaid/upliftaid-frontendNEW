import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    showDonateModal: false,
  },
  reducers: {
    toggleDonateModal: (state) => {
      state.showDonateModal = !state.showDonateModal;
    },
  },
});

export const { toggleDonateModal } = uiSlice.actions;
export default uiSlice.reducer;