import { createReducer } from '@reduxjs/toolkit';
import { add, remove, setFilter } from './PhonebookActions';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialStateContacts = {
  items: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
};
const initialStateFilter = {
  keyword: '',
};

const contacts = createReducer(initialStateContacts, {
  [add]: (state, action) => {
    console.log(state.items);
    state.items = [action.payload, ...state.items];
  },

  [remove]: (state, action) => {
    const filtredContacts = state.items.filter(
      contact => contact.id !== action.payload
    );
    state.items = filtredContacts;
  },
});

const filter = createReducer(initialStateFilter, {
  [setFilter]: (state, action) => {
    state.keyword = action.payload;
  },
});

const rootPersistConfig = {
  key: 'phonebook',
  storage: storage,
  blacklist: ['filter'],
};

const rootReducer = combineReducers({
  contacts,
  filter,
});

export const persistedReducer = persistReducer(rootPersistConfig, rootReducer);
