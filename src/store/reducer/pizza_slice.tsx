import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
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

type FetchPizzasArgs = {
  page: number;
  sort: string;
  category: number;
  searchValue: string;
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

/* export const fetchPizza = createAsyncThunk(
  "pizza/fetchPizzasStatus",
  async (params: FetchPizzasArgs) => {
    const { page, sort, category, searchValue } = params;
    if (searchValue) {
      const { data } = await axios.get<PizzaItem[]>(
        `https://62b38848a36f3a973d239308.mockapi.io/pizzas?sortBy=${sort}&title=${searchValue}`
      );
      return data;
    } else {
      const { data } = await axios.get<PizzaItem[]>(
        `https://62b38848a36f3a973d239308.mockapi.io/pizzas?page=${page}&limit=4&sortBy=${sort}&order=desc&category=${category}`
      );
      return data;
    }
  }
); */

const pizzaSlice = createSlice({
  name: "pizza",
  reducers: {},
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchPizza.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      fetchPizza.fulfilled,
      (state, action: PayloadAction<PizzaItem[]>) => {
        state.loading = false;
        state.pizzas = action.payload;
        state.error = "";
      }
    );
    builder.addCase(fetchPizza.rejected, (state, action) => {
      state.loading = false;
      state.pizzas = [];
      state.error = action.error.message;
    });
  },
});

export default pizzaSlice.reducer;
