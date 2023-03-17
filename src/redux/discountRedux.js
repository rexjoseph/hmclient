import { createSlice } from "@reduxjs/toolkit";

const discountSlice = createSlice({
  name: "discount",
  initialState: {
    discounts: [],
    isFetching: false,
    error: false,
    success: false
  },
  reducers: {
    // CREATE DISCOUNT
    createDiscountStart: (state) => {
      state.isFetching = true;
    },
    createDiscountSuccess: (state, action) => {
      state.isFetching = false;
      state.discounts.push(action.payload)
      state.success = true;
    },
    createDiscountFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    // GET ALL
    getDiscountsStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getDiscountsSuccess: (state, action) => {
      state.isFetching = false;
      state.discounts = action.payload;
    },
    getDiscountsFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    // UPDATE DISCOUNT
    updateDiscountStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    updateDiscountSuccess: (state, action) => {
      state.isFetching = false;
      state.discounts[
        state.discounts.findIndex((item) => item._id === action.payload.id)
      ] = action.payload.discount;
    },
    updateDiscountFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    // DELETE DISCOUNT
    deleteDiscountStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    deleteDiscountSuccess: (state, action) => {
      state.isFetching = false;
      state.discounts.splice(
        state.discounts.findIndex((item) => item._id === action.payload), 1
      );
    },
    deleteDiscountFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    }
  }
})

export const {
  createDiscountStart,
  createDiscountSuccess,
  createDiscountFailure,
  getDiscountsStart,
  getDiscountsSuccess,
  getDiscountsFailure,
  updateDiscountStart,
  updateDiscountSuccess,
  updateDiscountFailure,
  deleteDiscountStart,
  deleteDiscountSuccess,
  deleteDiscountFailure
} = discountSlice.actions;
export default discountSlice.reducer;