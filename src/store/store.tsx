import { AnyAction, configureStore } from "@reduxjs/toolkit";
import basketSlice from "./action/basket_action";
import pizzaSlice from "./reducer/pizza_slice";

export const store = configureStore({
  reducer: {
    pizzaSlice: pizzaSlice,
    basketSlice: basketSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
