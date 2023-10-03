import { createAsyncThunk } from '@reduxjs/toolkit';
import { sendEmailApi } from '../services/backendApi'; 
// Create an async thunk for sending emails
export const sendEmail = createAsyncThunk('email/sendEmail', async (userEmail) => {
  const message = await sendEmailApi(userEmail);
  return message;
});
