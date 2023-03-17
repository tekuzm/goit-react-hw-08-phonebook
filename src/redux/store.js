import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './root-reducer';
import authReducer from './auth/slice';

export const store = configureStore({
  reducer: rootReducer,
});
