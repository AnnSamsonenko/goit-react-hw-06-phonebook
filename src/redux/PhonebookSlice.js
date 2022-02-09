import { createReducer } from '@reduxjs/toolkit';
import { add, remove, setFilter } from './PhonebookActions';

const STORAGE_KEY = 'contacts';

const checkInitialContacts = () => {
  const parsedStorageContacts = JSON.parse(localStorage.getItem(STORAGE_KEY));
  return parsedStorageContacts
    ? parsedStorageContacts
    : [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ];
};

const initialState = {
  contacts: {
    items: checkInitialContacts(),
    filter: '',
  },
};

export const phonebook = createReducer(initialState, {
  [add]: (state, action) => {
    state.contacts.items = [action.payload, ...state.contacts.items];
  },

  [remove]: (state, action) => {
    const filtredContacts = state.contacts.items.filter(
      contact => contact.id !== action.payload
    );
    state.contacts.items = filtredContacts;
  },

  [setFilter]: (state, action) => {
    state.contacts.filter = action.payload;
  },
});
