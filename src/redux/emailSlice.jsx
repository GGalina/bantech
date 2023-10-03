import { createSlice } from '@reduxjs/toolkit';
import { sendEmail } from './emailOperations';

const emailSlice = createSlice({
  name: 'email',
  initialState: {
    isLoading: false,
    error: null,
    message: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(sendEmail.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(sendEmail.fulfilled, (state, action) => {
        state.isLoading = false;
        state.message = action.payload;
      })
      .addCase(sendEmail.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default emailSlice.reducer;
