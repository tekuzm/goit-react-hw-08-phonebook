import { createAsyncThunk } from '@reduxjs/toolkit';

import { signup } from 'components/services/auth';

export const register = createAsyncThunk(
  'auth/register',
  async (data, thunkAPI) => {
    try {
      const response = await signup(data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
