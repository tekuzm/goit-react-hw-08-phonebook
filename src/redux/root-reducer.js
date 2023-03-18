import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import authReducer from './auth/slice';
import contactsReducer from './contacts/slice';
import filterReducer from './filter/slice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['token'],
};

const persistedAuthReducer = persistReducer(persistConfig, authReducer);

export const rootReducer = combineReducers({
  auth: persistedAuthReducer,
  contacts: contactsReducer,
  filter: filterReducer,
});
