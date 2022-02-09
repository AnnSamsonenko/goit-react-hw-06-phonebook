import { configureStore } from '@reduxjs/toolkit';
import { phonebook } from './PhonebookReducer';

export const store = configureStore({
  reducer: {
    phonebook: phonebook,
  },
});
