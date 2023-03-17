import { combineReducers } from 'redux';
import contactsReducer from './contacts/slice';
import filterReducer from './filter/slice';
import authReducer from './auth/slice';

export const rootReducer = combineReducers({
  auth: authReducer,
  contacts: contactsReducer,
  filter: filterReducer,
});
