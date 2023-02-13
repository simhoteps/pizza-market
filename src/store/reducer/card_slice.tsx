import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { PizzaItem } from "model/model";

export interface PizzaSliceState {
  loading: boolean;
  pizzas: PizzaItem[];
  error: string | undefined;
}

const initialState: PizzaSliceState = {
  loading: false,
  pizzas: [],
  error: "",
};

export const fetchPizza = createAsyncThunk("pizza/fetchPizza", async () => {
  try {
    const response = await axios.get(
      "https://62b38848a36f3a973d239308.mockapi.io/pizzas"
    );
    return response.data;
  } catch (error) {
    throw error;
  }
});

const pizzaSlice = createSlice({
  name: "pizza",
  reducers: {},
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchPizza.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchPizza.fulfilled, (state, action) => {
      state.loading = false;
      state.pizzas = action.payload;
      state.error = "";
    });
    builder.addCase(fetchPizza.rejected, (state, action) => {
      state.loading = false;
      state.pizzas = [];
      state.error = action.error.message;
    });
  },
});

export default pizzaSlice.reducer;
