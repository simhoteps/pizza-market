/* import {
  legacy_createStore as createStore,
  applyMiddleware,
  combineReducers,
} from "redux";
import thunkMiddleware from "redux-thunk";
import DataReducer from "./reducer/pizza_slice";

const rootReducer = combineReducers({
  data: DataReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
 */

import { AnyAction, configureStore } from "@reduxjs/toolkit";
import cartSlice from "./reducer/basket_slice";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
