import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      const { card } = action.payload;
      const existingItem = state.items.find(
        (item) => item.card.info.id === card.info.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
        existingItem.totalPrice +=
          (existingItem.card.info.price ||
            existingItem.card.info.defaultPrice) / 100;
      } else {
        state.items.push({
          card: card,
          quantity: action.payload.quantity,
          totalPrice: action.payload.totalPrice,
        });
      }
    },

    removeItem: (state, action) => {
      const { card } = action.payload;
      const existingItem = state.items.find(
        (item) => item.card.info.id === card.info.id
      );

      if (existingItem) {
        existingItem.quantity -= 1;
        existingItem.totalPrice -=
          (existingItem.card.info.price ||
            existingItem.card.info.defaultPrice) / 100;
      }
      if (existingItem && existingItem.quantity === 0) {
        const indexToRemove = state.items.indexOf(existingItem);
        if (indexToRemove !== -1) {
          state.items.splice(indexToRemove, 1);
        }
      }
    },

    clearCart: (state) => {
      state.items.length = 0;
    },
  },
});
export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
