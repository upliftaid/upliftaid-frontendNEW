// features/blog/blogSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchBlogData as fetchMockData } from '../constants/Blog/fecthBlogData'; // adjust path

export const fetchBlogData = createAsyncThunk('blog/fetchBlogData', async () => {
  const data = await fetchMockData(); // using our local mock API
  return data;
});

const blogSlice = createSlice({
  name: 'blog',
  initialState: {
    blogPosts: [],
    popularPosts: [],
    categories: [],
    archives: [],
    tags: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchBlogData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        Object.assign(state, action.payload);
      })
      .addCase(fetchBlogData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default blogSlice.reducer;
