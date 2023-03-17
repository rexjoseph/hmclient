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
    // GET ALL
    getAnnouncementsStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getAnnouncementsSuccess: (state, action) => {
      state.isFetching = false;
      state.announcements = action.payload;
    },
    getAnnouncementsFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
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
    },
    // EDIT
    editAnnouncementStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    editAnnouncementSuccess: (state, action) => {
      state.isFetching = false;
      state.products[
        state.announcements.findIndex((item) => item._id === action.payload.id)
      ] = action.payload.category;
    },
    editAnnouncementFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    // DELETE
    deleteAnnouncementStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    deleteAnnouncementSuccess: (state, action) => {
      state.isFetching = false;
      state.announcements.splice(
        state.announcements.findIndex((item) => item._id === action.payload),
        1
      );
    },
    deleteAnnouncementFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  }
})

export const {
  createAnnStart,
  createAnnSuccess,
  createAnnFailure,
  getAnnouncementsStart,
  getAnnouncementsSuccess,
  getAnnouncementsFailure,
  editAnnouncementStart,
  editAnnouncementSuccess,
  editAnnouncementFailure,
  deleteAnnouncementStart,
  deleteAnnouncementSuccess,
  deleteAnnouncementFailure
} = announcementSlice.actions;
export default announcementSlice.reducer;