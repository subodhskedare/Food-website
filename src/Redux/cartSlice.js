import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItems: (state, action) => {
      console.log(JSON.stringify(state.items));
      state.items.push(action.payload);
    },
    removeItems: (state, action) => {
      console.log(current(state));

      console.log(action);

      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    clearCart: (state, action) => {
      state.items.length = 0;
    },
  },
});
export const { addItems, removeItems, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
