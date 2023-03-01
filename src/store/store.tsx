import { AnyAction, configureStore } from "@reduxjs/toolkit";

import pizzaSlice from "./reducer/pizza_slice";

export const store = configureStore({
  reducer: {
    pizzaSlice: pizzaSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
