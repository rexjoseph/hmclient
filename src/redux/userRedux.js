import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isFetching: false,
    error: false,
    success: false,
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
      state.success = true;
      state.error = false;
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    logoutStart: (state) => {
      state.currentUser = null;
    },
    //  REGISTER
    registerStart: (state) => {
      state.isFetching = true;
    },
    registerSuccess: (state, action) => {
      state.isFetching = false;
    },
    registerFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    // RESET
    resetPasswordStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    resetPasswordSuccess: (state, action) => {
      state.isFetching = false;
    },
    resetPasswordFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    // NEW PASSWORD
    newPasswordStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    newPasswordSuccess: (state, action) => {
      state.isFetching = false;
    },
    newPasswordFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    // POST EMAIL SUBSCRIPTION
    postSubscribeStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    postSubscribeSuccess: (state, action) => {
      state.isFetching = false;
    },
    postSubscribeFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //  UPDATE
    editUserStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    editUserSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser.address = action.payload;
      // console.log(action.payload)
    },
    editUserFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  loginStart,
  loginSuccess,
  loginFailure,
  logoutStart,
  registerStart,
  registerSuccess,
  registerFailure,
  editUserStart,
  editUserSuccess,
  editUserFailure,
  resetPasswordStart,
  resetPasswordSuccess,
  resetPasswordFailure,
  newPasswordStart,
  newPasswordSuccess,
  newPasswordFailure,
  postSubscribeStart,
  postSubscribeSuccess,
  postSubscribeFailure
} = userSlice.actions;
export default userSlice.reducer;
