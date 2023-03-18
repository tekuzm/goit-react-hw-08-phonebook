import { createAsyncThunk } from '@reduxjs/toolkit';

import { getCurrent, login, signup, logout } from 'components/services/auth';

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

export const logIn = createAsyncThunk('auth/login', async (data, thunkAPI) => {
  try {
    const response = await login(data);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const current = createAsyncThunk(
  'auth/current',
  async (_, thunkAPI) => {
    try {
      const { auth } = thunkAPI.getState();
      const response = await getCurrent(auth.token);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
  {
    condition: (_, thunkAPI) => {
      const { auth } = thunkAPI.getState();
      if (!auth.token) {
        return false;
      }
    },
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    const response = await logout();
    return response;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
