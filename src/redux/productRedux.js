import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
 name: "product",
 initialState: {
   products: [],
   isFetching: false,
   error: false
 },
 reducers: {
    // PRODUCT REVIEWS
   createReviewStart: (state) => {
    state.isFetching = true
   },
   createReviewSuccess: (state, action) => {
    state.isFetching = false;
    
   }, 
   createReviewFailure: (state) => {
    state.isFetching = false;
    state.error = true;
   },
 }
})

export const {createReviewStart, createReviewSuccess, createReviewFailure} = productSlice.actions;
export default productSlice.reducer;