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
   logout: (state) => {
    state.currentUser = null;
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

export const {loginStart, loginSuccess, loginFailure, editUserStart, editUserSuccess, editUserFailure} = userSlice.actions;
export default userSlice.reducer;