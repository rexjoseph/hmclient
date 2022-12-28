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
    // GET ALL
    getProductStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getProductSuccess: (state, action) => {
      state.isFetching = false;
      state.products = action.payload;
    },
    getProductFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    // UPDATE PRODUCT
    updateProductStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    updateProductSuccess: (state, action) => {
      state.isFetching = false;
      state.products[
        state.products.findIndex((item) => item._id === action.payload.id)
      ] = action.payload.product;
    },
    updateProductFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    // DELETE PRODUCT
    deleteProductStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    deleteProductSuccess: (state, action) => {
      state.isFetching = false;
      state.products.splice(
        state.products.findIndex((item) => item._id === action.payload),
        1
      );
    },
    deleteProductFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    // UPDATE ORDER
    updateOrderStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    updateOrderSuccess: (state, action) => {
      state.isFetching = false;
    },
    updateOrderFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    // DELETE ORDER
    deleteOrderStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    deleteOrderSuccess: (state, action) => {
      state.isFetching = false;
      // state.products.splice(
      //   state.products.findIndex((item) => item._id === action.payload),
      //   1
      // );
    },
    deleteOrderFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    }
  },
});

export const { 
  createReviewStart, 
  createReviewSuccess, 
  createReviewFailure,
  addProductStart,
  addProductSuccess,
  addProductFailure,
  getProductStart,
  getProductSuccess,
  getProductFailure,
  updateProductStart,
  updateProductSuccess,
  updateProductFailure,
  deleteProductStart,
  deleteProductSuccess,
  deleteProductFailure,
  updateOrderStart,
  updateOrderSuccess,
  updateOrderFailure,
  deleteOrderStart,
  deleteOrderSuccess,
  deleteOrderFailure
} = productSlice.actions;
export default productSlice.reducer;
