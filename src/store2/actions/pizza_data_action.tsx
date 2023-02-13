/* import axios from "axios";
import { PizzaItem } from "model/model";
import { Dispatch } from "redux";

export const fetchDataStart = () => ({
  type: "FETCH_DATA_START",
});

export const fetchDataSuccess = (data: PizzaItem[]) => ({
  type: "FETCH_DATA_SUCCESS",
  payload: data,
});

export const fetchDataError = (error: any) => ({
  type: "FETCH_DATA_ERROR",
  payload: error,
});

export const fetchData = () => {
  return async (dispatch: Dispatch) => {
    dispatch(fetchDataStart());
    try {
      const response = await axios.get<PizzaItem[]>(
        "https://api.example.com/data"
      );
      dispatch(fetchDataSuccess(response.data));
    } catch (error) {
      dispatch(fetchDataError(error));
    }
  };
};
 */

import { Dispatch } from "redux";
import axios from "axios";

export const FETCH_PIZZAS_REQUEST = "FETCH_PIZZAS_REQUEST";
export const FETCH_PIZZAS_SUCCESS = "FETCH_PIZZAS_SUCCESS";
export const FETCH_PIZZAS_FAILURE = "FETCH_PIZZAS_FAILURE";

export const fetchPizzasRequest = () => ({
  type: FETCH_PIZZAS_REQUEST,
});

export const fetchPizzasSuccess = (pizzas: any) => ({
  type: FETCH_PIZZAS_SUCCESS,
  payload: pizzas,
});

export const fetchPizzasFailure = (error: string) => ({
  type: FETCH_PIZZAS_FAILURE,
  payload: error,
});

export const fetchPizzas = () => {
  return (dispatch: Dispatch) => {
    dispatch(fetchPizzasRequest());
    axios
      .get("https://62b38848a36f3a973d239308.mockapi.io/pizzas")
      .then((response) => {
        const pizzas = response.data;
        dispatch(fetchPizzasSuccess(pizzas));
      })
      .catch((error) => {
        dispatch(fetchPizzasFailure(error.message));
      });
  };
};
