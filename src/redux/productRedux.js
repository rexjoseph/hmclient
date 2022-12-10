import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    isFetching: false,
    error: false,
    success: false,
  },
  reducers: {
    // PRODUCT REVIEWS
    createReviewStart: (state) => {
      state.isFetching = true;
    },
    createReviewSuccess: (state, action) => {
      state.isFetching = false;
      state.success = true;
    },
    createReviewFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },

    //  ADD
    addProductStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    addProductSuccess: (state, action) => {
      state.isFetching = false;
      state.products.push(action.payload);
    },
    addProductFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const { 
  createReviewStart, 
  createReviewSuccess, 
  createReviewFailure,
  addProductStart,
  addProductSuccess,
  addProductFailure
} = productSlice.actions;
export default productSlice.reducer;
