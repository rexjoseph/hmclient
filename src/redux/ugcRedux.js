import { createSlice } from "@reduxjs/toolkit";

const userGeneratedContentSlice = createSlice({
  name: "ugc",
  initialState: {
    contents: [],
    isFetching: false,
    error: false,
    success: false
  },
  reducers: {
    // CREATE
    createUGCStart: (state) => {
      state.isFetching = true;
    },
    createUGCSuccess: (state, action) => {
      state.isFetching = false;
      state.success = true;
      state.contents = action.payload;
    },
    createUGCFailure: (state) => {
      state.isFetching = false;
      state.error = false;
    }
  }
})

export const {
  createUGCStart,
  createUGCSuccess,
  createUGCFailure
} = userGeneratedContentSlice.actions;
export default userGeneratedContentSlice.reducer;