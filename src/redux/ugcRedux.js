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
      state.contents.push = action.payload;
    },
    createUGCFailure: (state) => {
      state.isFetching = false;
      state.error = false;
    },
    // GET ALL
    getUGCStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getUGCSuccess: (state, action) => {
      state.isFetching = false;
      state.contents = action.payload;
      state.success = true;
    },
    getUGCFailure: (state) => {
      state.isFetching = false;
      state.error = true;
      state.success = false;
    },
    // UPDATE
    updateUGCStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    updateUGCSuccess: (state, action) => {
      state.isFetching = false;
      state.contents[
        state.contents.findIndex((item) => item._id === action.payload.id)
      ] = action.payload.content;
    },
    updateUGCFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    // DELETE
    deleteUGCStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    deleteUGCSuccess: (state, action) => {
      state.isFetching = false;
      state.contents.splice(
        state.contents.findIndex((item) => item._id === action.payload), 1
      );
    },
    deleteUGCFailure: (state, action) => {
      state.isFetching = false;
      state.error = true;
    }
  }
})

export const {
  createUGCStart,
  createUGCSuccess,
  createUGCFailure,
  getUGCStart,
  getUGCSuccess,
  getUGCFailure,
  updateUGCStart,
  updateUGCSuccess,
  updateUGCFailure,
  deleteUGCStart,
  deleteUGCSuccess,
  deleteUGCFailure
} = userGeneratedContentSlice.actions;
export default userGeneratedContentSlice.reducer;