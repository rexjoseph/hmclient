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
    // GET ALL
    getCategoriesStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getCategoriesSuccess: (state, action) => {
      state.isFetching = false;
      state.categories = action.payload;
    },
    getCategoriesFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    // ADD
    addCategoryStart: (state) => {
      state.isFetching = true;
    },
    addCategorySuccess: (state, action) => {
      state.isFetching = false;
      state.categories.push(action.payload);
      state.success = true;
    },
    addCategoryFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    // EDIT
    editCategoryStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    editCategorySuccess: (state, action) => {
      state.isFetching = false;
      state.products[
        state.categories.findIndex((item) => item._id === action.payload.id)
      ] = action.payload.category;
    },
    editCategoryFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    // DELETE
    deleteCategoryStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    deleteCategorySuccess: (state, action) => {
      state.isFetching = false;
      state.categories.splice(
        state.categories.findIndex((item) => item._id === action.payload),
        1
      );
    },
    deleteCategoryFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  }
})

export const {
  addCategoryStart,
  addCategorySuccess,
  addCategoryFailure,
  editCategoryStart,
  editCategorySuccess,
  editCategoryFailure,
  getCategoriesStart,
  getCategoriesSuccess,
  getCategoriesFailure,
  deleteCategoryStart,
  deleteCategorySuccess,
  deleteCategoryFailure
} = categorySlice.actions;
export default categorySlice.reducer;