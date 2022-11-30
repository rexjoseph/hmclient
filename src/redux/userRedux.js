import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
 name: "user",
 initialState: {
   currentUser: null,
   isFetching: false,
   error: false
 },
 reducers: {
   loginStart: (state) => {
    state.isFetching = true
   },
   loginSuccess: (state, action) => {
    state.isFetching = false;
    state.currentUser = action.payload
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
  }
 }
})

export const {loginStart, loginSuccess, loginFailure, logoutStart, registerStart, registerSuccess, registerFailure, editUserStart, editUserSuccess, editUserFailure} = userSlice.actions;
export default userSlice.reducer;