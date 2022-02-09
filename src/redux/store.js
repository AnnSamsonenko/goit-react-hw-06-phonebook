import { configureStore } from '@reduxjs/toolkit';
import { phonebook } from './PhonebookSlice';

export const store = configureStore({
  reducer: {
    phonebook: phonebook,
  },
});
