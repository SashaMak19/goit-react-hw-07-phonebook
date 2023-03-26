import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { contactsSlice } from './slices/contactsSlice';
import { filterSlice } from './slices/filterSlice';

const rootReducer = combineReducers({
  contacts: contactsSlice.reducer,
  filter: filterSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
