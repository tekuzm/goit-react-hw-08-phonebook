import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getAllContacts,
  removeContact,
  addNewContact,
} from 'components/services/contacts';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const data = await getAllContacts();
      return data;
    } catch ({ response }) {
      return thunkAPI.rejectWithValue(response.data);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (data, thunkAPI) => {
    try {
      const result = await addNewContact(data);
      if (data.onSuccess) {
        data.onSuccess();
      }
      return result;
    } catch ({ response }) {
      return thunkAPI.rejectWithValue(response.data);
    }
  },
  {
    // Find duplicates
    condition: (data, { getState }) => {
      const { name } = data;
      const { contacts } = getState();
      const normalizedName = name.toLowerCase();
      const result = contacts.items.find(({ name }) => {
        return name.toLowerCase() === normalizedName;
      });

      if (result) {
        alert(`${name} is already in contacts.`);
        return false;
      }
    },
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      await removeContact(id);
      return id;
    } catch ({ response }) {
      return thunkAPI.rejectWithValue(response.data.message);
    }
  }
);
