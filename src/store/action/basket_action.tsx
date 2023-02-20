import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { count } from "console";
import { PizzaSelectItem } from "model/model";

interface BasketState {
  id: string;
  selectPizza: PizzaSelectItem[];
}

const initialState: BasketState = {
  id: "",
  selectPizza: [],
};

export const basketSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      const product = state.selectPizza.filter(
        (product) => product.id === state.id
      );
      if (product) {
        product[0].count += 1;
      }
    },
    decrement: (state) => {
      const product = state.selectPizza.filter(
        (product) => product.id === state.id
      );

      if (product) {
        product[0].count += 1;
      }
    },
  },
});
export default basketSlice.reducer;
