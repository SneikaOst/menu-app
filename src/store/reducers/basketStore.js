import { createSlice } from "@reduxjs/toolkit";

const basketSlice = createSlice({
  name: "basket",
  initialState: {
    basket: [],
    pricesbasket: 0,
    countProducts: 0,
  },

  reducers: {
    addProductInBasket(state, action) {
      state.basket.push(action.payload);
      state.pricesbasket = state.basket.reduce((sum, current) => {
        return sum + current.price;
      }, 0);

      state.countProducts = state.basket.length;
    },

    removeProductBasket(state, action) {
      state.basket = state.basket.filter((product) => {
        return product.idx !== action.payload;
      });

      state.pricesbasket = state.basket.reduce((sum, current) => {
        return sum + current.price;
      }, 0);

      state.countProducts = state.basket.length;
    },
  },
});

export const { addProductInBasket, removeProductBasket } = basketSlice.actions;

export default basketSlice.reducer;
