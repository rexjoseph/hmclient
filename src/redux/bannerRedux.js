import { createSlice } from "@reduxjs/toolkit";

const bannerSlice = createSlice({
  name: "banner",
  initialState: {
    banners: [],
    isFetching: false,
    error: false,
    success: false,
  },
  reducers: {
    // GET ALL
    getAllBannerStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getAllBannerSuccess: (state, action) => {
      state.isFetching = false;
      state.banners = action.payload;
    },
    getAllBannerFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //  ADD BANNER
    createBannerStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    createBannerSuccess: (state, action) => {
      state.isFetching = false;
      state.banners.push(action.payload);
    },
    createBannerFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    // UPDATE BANNER
    updateBannerStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    updateBannerSuccess: (state, action) => {
      state.isFetching = false;
      state.banners[
        state.banners.findIndex((item) => item._id === action.payload.id) 
      ] = action.payload.banner;
    },
    updateBannerFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    // DELETE BANNER
    deleteBannerStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    deleteBannerSuccess: (state, action) => {
      state.isFetching = false;
      state.banners.splice(
        state.banners.findIndex((item) => item._id === action.payload),
        1
      );
    },
    deleteBannerFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const { 
  createBannerStart, 
  createBannerSuccess, 
  createBannerFailure,
  updateBannerStart,
  updateBannerSuccess,
  updateBannerFailure,
  getAllBannerStart,
  getAllBannerSuccess,
  getAllBannerFailure,
  deleteBannerStart,
  deleteBannerSuccess,
  deleteBannerFailure
} = bannerSlice.actions;
export default bannerSlice.reducer;
