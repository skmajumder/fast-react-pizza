import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  //   cart: [],
  cart: [
    {
      pizzaId: 112,
      name: 'Mediterranean',
      quantity: 2,
      unitPrice: 16,
      totalPrice: 32,
    },
  ],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    clearCart(state) {
      state.cart = [];
    },
    increaseItemQuantity(state, action) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);

      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    decreaseItemQuantity(state, action) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);

      if (item.quantity > 0) {
        item.quantity--;
        item.totalPrice = item.quantity * item.unitPrice;
      }
    },
  },
});

export const {
  addItem,
  deleteItem,
  clearCart,
  increaseItemQuantity,
  decreaseItemQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
