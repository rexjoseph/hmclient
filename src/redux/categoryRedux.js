import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
  name: "category",
  initialState: {
    categories: [],
    isFetching: false,
    error: false,
    success: false
  },
  reducers: {
    addCategoryStart: (state) => {
      state.isFetching = true;
    },
    addCategorySuccess: (state, action) => {
      state.isFetching = false;
      state.success = true;
    },
    addCategoryFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    }
  }
})

export const {
  addCategoryStart,
  addCategorySuccess,
  addCategoryFailure
} = categorySlice.actions;
export default categorySlice.reducer;