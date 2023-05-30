import { configureStore, createSlice } from "@reduxjs/toolkit";

// Create a slice to define the state and actions
const modalSlice = createSlice({
  name: "modal",
  initialState: false,
  reducers: {
    showModal: (state) => true,
    hideModal: (state) => false,
  },
});

const authSlice = createSlice({
  name: "auth",
  initialState: false, // Set the initial state of the auth value to false
  reducers: {
    signIn: (state) => true,
    signOut: (state) => false,
  },
});

// Create the store
const store = configureStore({
  reducer: {
    modal: modalSlice.reducer,
    auth: authSlice.reducer,
  },
});

// Export the slice actions
export const { showModal, hideModal } = modalSlice.actions;
export const { signIn, signOut } = authSlice.actions;

export default store;
