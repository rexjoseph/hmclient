import { createSlice } from "@reduxjs/toolkit";

const announcementSlice = createSlice({
  name: "announcement",
  initialState: {
    announcements: [],
    isFetching: false,
    error: false,
    success: false,
  },
  reducers: {
    // ADD ANNOUNCEMENT
    createAnnStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    createAnnSuccess: (state, action) => {
      state.isFetching = false;
      state.announcements.push(action.payload);
    },
    createAnnFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    }
  }
})

export const {
  createAnnStart,
  createAnnSuccess,
  createAnnFailure
} = announcementSlice.actions;
export default announcementSlice.reducer;