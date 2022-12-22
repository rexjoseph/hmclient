import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [],
    total: 0,
    isFetching: false,
    error: false,
    success: true,
    count: 0,
    discountCode: null
  },
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.cart.find((item) => item.id === action.payload.id);
      if (itemInCart) {
        itemInCart.quantity++;
        // state.total += action.payload.price;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
        state.total += action.payload.price;
      }
    },
    incrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      item.quantity++;
      state.total += item.price;
    },
    decrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      if (item.quantity === 1) {
        item.quantity = 1
      } else {
        item.quantity--;
        state.total -= item.price;
      }
    },
    removeItem: (state, action) => {
      const removeItem = state.cart.filter((item) => item.id !== action.payload);
      state.cart = removeItem;
      state.total = 0;
      state.discountCode = null;
      state.count = 0;
    },
    resetCart: (state) => {
      state.cart = []
      state.total = 0
      state.discountCode = null
      state.count = 0;
    },
    discountStart: (state) => {
      state.isFetching = true;
    },
    discountSuccess: (state, action) => {
      const count = state.count;
      if (count < 1) {
        const discount = action.payload;
        const code = discount.code;
        let percentage = (discount.amount / 100) * Math.round(state.total);
        state.count = 1;
        let newTotalCost = state.total - percentage;
        state.total = newTotalCost;
        state.discountCode = code.toUpperCase()
        state.success = true;
        state.isFetching = false;
      } else {
        state.error = true;
        state.isFetching = false;
      }
    },
    discountFailure: (state) => {
      state.isFetching = false;
      state.error = true
    }
  },
});

export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeItem,
  resetCart,
  discountStart,
  discountSuccess,
  discountFailure
} = cartSlice.actions;
export const cartReducer = cartSlice.reducer;