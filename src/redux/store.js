import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { persistedReducer } from './PhonebookReducer';
import { persistStore } from 'redux-persist';

export const store = configureStore({
  reducer: {
    phonebook: persistedReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: ['persist/PERSIST'],
    },
  }),
});

export const persistor = persistStore(store);
