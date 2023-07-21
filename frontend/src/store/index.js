import { configureStore, createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: { isLoggedIn: false, name: null }, // Add the 'name' field to the initial state
  reducers: {
    login(state, action) {
      state.isLoggedIn = true;
      state.name = action.payload; // Set the 'name' from the payload
    },
    logout(state) {
      localStorage.removeItem("userId");
      state.isLoggedIn = false;
      state.name = null; // Reset the 'name' when logging out
    },
  },
});

export const userActions = userSlice.actions;

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});
