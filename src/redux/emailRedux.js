import { createSlice } from "@reduxjs/toolkit";

const emailSlice = createSlice({
  name: "email",
  initialState: {
    email: null,
    isFetching: false,
    success: false,
    error: false
  },
  reducers: {
    // POST EMAIL SUBSCRIPTION
    postSubscribeStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    postSubscribeSuccess: (state, action) => {
      state.isFetching = false;
      state.email = action.payload.email;
      state.success = true
    },
    postSubscribeFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  }
})

export const {
  postSubscribeStart, postSubscribeSuccess, postSubscribeFailure
} = emailSlice.actions;
export default emailSlice.reducer;