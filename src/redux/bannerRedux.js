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
    }
  },
});

export const { 
  createBannerStart, 
  createBannerSuccess, 
  createBannerFailure
} = bannerSlice.actions;
export default bannerSlice.reducer;
