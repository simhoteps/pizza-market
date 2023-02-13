import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { PizzaSelectItem } from "model/model";
import { RootState } from "store2/store";

/* 
export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer; */

export interface CartSliceState {
  totalPrice: number;
  totalAmount: number;
  items: PizzaSelectItem[];
}

const initialState: CartSliceState = {
  totalPrice: 0,
  totalAmount: 0,
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart(state, action: PayloadAction<PizzaSelectItem>) {
      const findItem = state.items.find(
        (obj) =>
          obj.id === action.payload.id &&
          obj.size === action.payload.size &&
          obj.type === action.payload.type
      );

      if (findItem) {
        findItem.count++;
      } else if (state.items.length === 0) {
        const tempo = action.payload;
        state.items.push({
          ...tempo,
          count: 1,
        });
      } else {
        const tempo = action.payload;
        if (tempo.size !== 0) {
          tempo.price = tempo.price + 10;
        }
        tempo.id = Date.now().toFixed(5).toString();
        state.items.push({
          ...tempo,
          count: 1,
        });
      }

      state.totalPrice = state.items.reduce((sum, obj) => {
        return obj.price * obj.count + sum;
      }, 0);
      state.totalAmount = state.items.reduce((sum, obj) => {
        return obj.count + sum;
      }, 0);
    },
    removeItem(state, action: PayloadAction<string>) {
      state.items = state.items.filter((obj) => obj.id !== action.payload);
      state.totalPrice = state.items.reduce((sum, obj) => {
        return obj.price * obj.count + sum;
      }, 0);
      state.totalAmount = state.items.reduce((sum, obj) => {
        return obj.count + sum;
      }, 0);
    },
    clearItems(state) {
      state.items = [];
      state.totalAmount = 0;
      state.totalPrice = 0;
    },
    increaseAmount(state, action) {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);
      if (findItem) {
        findItem.count++;
      }
    },
    minusItem(state, action: PayloadAction<string>) {
      const findItem = state.items.find((obj) => obj.id === action.payload);
      if (findItem) {
        findItem.count--;
        if (findItem.count === 0) {
          state.items = state.items.filter((obj) => obj.id !== findItem.id);
        }
        state.totalPrice = state.items.reduce((sum, obj) => {
          return obj.price * obj.count + sum;
        }, 0);
        state.totalAmount = state.items.reduce((sum, obj) => {
          return obj.count + sum;
        }, 0);
      }
    },
  },
});

// selectors
export const selectCart = (state: RootState) => state.cart;

export const {
  addItemToCart,
  removeItem,
  clearItems,
  minusItem,
  increaseAmount,
} = cartSlice.actions;
export default cartSlice.reducer;
