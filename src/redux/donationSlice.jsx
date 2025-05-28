import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { DonationsData, CausesData ,GalleryImages ,tag } from "../constants/DonationsData";

export const fetchDonations = createAsyncThunk(
  'donation/fetchDonations',
  async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(DonationsData);
      }, 1000);
    });
  }
);

const donationSlice = createSlice({
  name: 'donation',
  initialState: {
    donations: [],
    categories: [],
    images: GalleryImages, // ← load it directly
    causes: CausesData, // ← load it directly
    tags: tag, // Example tags
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchDonations.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchDonations.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.donations = action.payload;
        const allCategories = action.payload.map(item => item.category);
        state.categories = [...new Set(allCategories)];
      })
      .addCase(fetchDonations.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default donationSlice.reducer;
