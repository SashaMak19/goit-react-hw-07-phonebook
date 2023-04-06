import { createSlice } from '@reduxjs/toolkit';

import {
  fetchContacts,
  addContact,
  deleteContact,
} from 'redux/operations/operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },

  // extraReducers: {
  //   [fetchContacts.pending](state) {
  //     state.isLoading = true;
  //   },

  //   [fetchContacts.fulfilled](state, { payload }) {
  //     state.isLoading = false;
  //     state.error = null;
  //     state.items = payload;
  //   },

  //   [fetchContacts.rejected](state, { payload }) {
  //     state.error = payload;
  //   },

  //   [addContact.pending](state) {
  //     state.isLoading = true;
  //   },
  //   [addContact.fulfilled](state, { payload }) {
  //     state.isLoading = true;
  //     state.error = null;
  //     state.items.push(payload);
  //   },
  //   [addContact.rejected](state, { payload }) {
  //     state.isLoading = true;
  //     state.error = payload;
  //   },

  //   [deleteContact.pending](state) {
  //     state.isLoading = true;
  //   },

  //   [deleteContact.fulfilled](state, { payload }) {
  //     state.isLoading = false;
  //     state.error = null;
  //     const index = state.items.findIndex(contact => contact.id === payload.id);
  //     state.items.splice(index, 1);
  //   },

  //   [deleteContact.rejected](state, { payload }) {
  //     state.isLoading = true;
  //     state.error = payload;
  //   },
  // },

  // ////////////
  // extraReducers: (builder) => {
  //   // When our request is pending:
  //   // - store the 'pending' state as the status for the corresponding pokemon name
  //   builder.addCase(fetchPokemonByName.pending, (state, action) => {
  //     state.statusByName[action.meta.arg] = 'pending'
  //   })

  extraReducers: builder =>
    builder
      .addCase(fetchContacts.pending, state => (state.isLoading = true))
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(addContact.pending, state => (state.isLoading = true))
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.isLoading = true;
        state.error = null;
        state.items.push(payload);
      })
      .addCase(addContact.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        const index = state.items.findIndex(
          contact => contact.id === payload.id
        );
        state.items.splice(index, 1);
      })
      .addCase(deleteContact.rejected, handleRejected),
});
